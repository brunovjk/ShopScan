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

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final items = await ItemsDatabase.instance.readAll();
    setState(() {
      _items = items;
    });
  }

  Future<void> refresh() async {
    await _loadItems();
  }

  @override
  Widget build(BuildContext context) {
    if (_items.isEmpty) {
      return const Center(
        child: Text('Lista vazia, adicione ou escaneie um produto.'),
      );
    }

    return ListView.builder(
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
              });
            }
          },
        );
      },
    );
  }
}
