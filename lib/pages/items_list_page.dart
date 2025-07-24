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
    if (items.isEmpty) {
      for (var i = 1; i <= 5; i++) {
        await ItemsDatabase.instance.create(Item(name: 'Produto $i'));
      }
    }
    final updated = await ItemsDatabase.instance.readAll();
    setState(() {
      _items = updated;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _items.length,
      itemBuilder: (context, index) {
        final item = _items[index];
        return ListTile(
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
