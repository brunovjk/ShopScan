import 'package:flutter/material.dart';
import '../data/item.dart';
import '../data/items_database.dart';

class ItemsListPage extends StatefulWidget {
  const ItemsListPage({super.key});

  @override
  State<ItemsListPage> createState() => _ItemsListPageState();
}

class _ItemsListPageState extends State<ItemsListPage> {
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

  Future<void> showAddItemDialog(BuildContext context) async {
    final controller = TextEditingController();
    await showDialog<void>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Adicionar Item'),
          content: TextField(
            controller: controller,
            decoration: const InputDecoration(labelText: 'Nome do produto'),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Cancelar'),
            ),
            TextButton(
              onPressed: () async {
                final name = controller.text.trim();
                if (name.isNotEmpty) {
                  await ItemsDatabase.instance.create(Item(name: name));
                  Navigator.pop(context);
                  _loadItems();
                }
              },
              child: const Text('Adicionar'),
            ),
          ],
        );
      },
    );
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
          title: Text(item.name),
          trailing: const Icon(Icons.chevron_right),
          onTap: () {
            Navigator.pushNamed(context, '/details', arguments: item.name);
          },
        );
      },
    );
  }
}
