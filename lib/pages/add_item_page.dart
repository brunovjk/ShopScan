import 'package:flutter/material.dart';
import '../data/item.dart';
import '../data/items_database.dart';

class AddItemPage extends StatefulWidget {
  const AddItemPage({super.key, this.initialName, this.initialPrice});

  final String? initialName;
  final double? initialPrice;

  @override
  State<AddItemPage> createState() => _AddItemPageState();
}

class _AddItemPageState extends State<AddItemPage> {
  final _formKey = GlobalKey<FormState>();
  late final TextEditingController _nameController;
  late final TextEditingController _quantityController;
  late final TextEditingController _priceController;

  @override
  void initState() {
    super.initState();
    _nameController = TextEditingController(text: widget.initialName ?? '');
    _quantityController = TextEditingController(text: '1');
    _priceController = TextEditingController(
        text: widget.initialPrice != null && widget.initialPrice! > 0
            ? widget.initialPrice!.toString()
            : '');
  }

  @override
  void dispose() {
    _nameController.dispose();
    _quantityController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  Future<void> _saveItem() async {
    if (_formKey.currentState!.validate()) {
      final item = Item(
        name: _nameController.text,
        quantity: int.tryParse(_quantityController.text) ?? 1,
        price: double.tryParse(_priceController.text) ?? 0,
      );
      await ItemsDatabase.instance.create(item);
      if (context.mounted) {
        Navigator.pop(context);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Adicionar Item')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _nameController,
                decoration: const InputDecoration(labelText: 'Nome'),
                validator: (value) =>
                    value == null || value.isEmpty ? 'Informe o nome' : null,
              ),
              TextFormField(
                controller: _quantityController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Quantidade'),
              ),
              TextFormField(
                controller: _priceController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Preço'),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _saveItem,
                child: const Text('Salvar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
