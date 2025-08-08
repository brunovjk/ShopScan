import 'package:flutter/material.dart';
import '../data/item.dart';
import '../data/items_database.dart';

class ItemsListPage extends StatefulWidget {
  const ItemsListPage({super.key});

  @override
  State<ItemsListPage> createState() => ItemsListPageState();
}

class ItemsListPageState extends State<ItemsListPage> {
  List<Item> _items = [];
  double _total = 0;

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final items = await ItemsDatabase.instance.readAll();
    setState(() {
      _items = items;
      _calculateTotal();
    });
  }

  Future<void> refresh() async {
    await _loadItems();
  }

  void _calculateTotal() {
    _total = _items
        .where((item) => item.purchased)
        .fold(0.0, (sum, item) => sum + item.price * item.quantity);
  }

  @override
  Widget build(BuildContext context) {
    if (_items.isEmpty) {
      return const Center(
        child: Text('Lista vazia, adicione ou escaneie um produto.'),
      );
    }

    return Column(
      children: [
        Expanded(
          child: ListView.builder(
            itemCount: _items.length,
            itemBuilder: (context, index) {
              final item = _items[index];
              return ListTile(
                leading: Checkbox(
                  value: item.purchased,
                  onChanged: (value) async {
                    final updated = item.copyWith(purchased: value ?? false);
                    await ItemsDatabase.instance.update(updated);
                    setState(() {
                      _items[index] = updated;
                      _calculateTotal();
                    });
                  },
                ),
                title: Text('${item.name} (${item.quantity})'),
                trailing: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () async {
                        final id = item.id;
                        if (id != null) {
                          await ItemsDatabase.instance.delete(id);
                          setState(() {
                            _items.removeAt(index);
                            _calculateTotal();
                          });
                        }
                      },
                    ),
                    const Icon(Icons.chevron_right),
                  ],
                ),
                onTap: () async {
                  final result = await Navigator.pushNamed(
                    context,
                    '/details',
                    arguments: item,
                  );
                  if (result is Item) {
                    setState(() {
                      _items[index] = result;
                      _calculateTotal();
                    });
                  }
                },
              );
            },
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16),
          child: Text('Total: ${_total.toStringAsFixed(2)}'),
        ),
      ],
    );
  }
}
