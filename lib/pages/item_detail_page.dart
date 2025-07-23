import 'package:flutter/material.dart';

class ItemDetailPage extends StatelessWidget {
  const ItemDetailPage({super.key, required this.itemName});

  final String itemName;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Detalhes do Item')),
      body: Center(child: Text('Você selecionou: $itemName')),
    );
  }
}
