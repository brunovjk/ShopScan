import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:google_mlkit_text_recognition/google_mlkit_text_recognition.dart';

class ScanPage extends StatefulWidget {
  const ScanPage({super.key});

  @override
  State<ScanPage> createState() => _ScanPageState();
}

class _ScanPageState extends State<ScanPage> {
  String? _name;
  double? _price;
  bool _processing = false;

  Future<void> _scan() async {
    final picker = ImagePicker();
    final XFile? file = await picker.pickImage(source: ImageSource.camera);
    if (file == null) return;

    setState(() {
      _processing = true;
      _name = null;
      _price = null;
    });

    final inputImage = InputImage.fromFilePath(file.path);
    final textRecognizer = TextRecognizer(script: TextRecognitionScript.latin);
    final RecognizedText recognised = await textRecognizer.processImage(inputImage);
    await textRecognizer.close();

    _parseText(recognised.text);

    setState(() {
      _processing = false;
    });

    if (!mounted) return;
    if (_name != null || _price != null) {
      await Navigator.pushNamed(context, '/add', arguments: {
        'name': _name,
        'price': _price,
      });
    }
  }

  void _parseText(String text) {
    String? name;
    double? price;
    final lines = text.split('\n');
    final priceRegex = RegExp(r'(\d+[,.]\d{2})');

    for (final line in lines) {
      if (price == null) {
        final match = priceRegex.firstMatch(line.replaceAll(',', '.'));
        if (match != null) {
          price = double.tryParse(match.group(1)!.replaceAll(',', '.'));
        }
      }
      if (name == null) {
        if (!priceRegex.hasMatch(line) && line.trim().isNotEmpty && line.trim().length > 3) {
          name = line.trim();
        }
      }
      if (name != null && price != null) break;
    }

    _name = name;
    _price = price;
  }

  @override
  Widget build(BuildContext context) {
    Widget content;
    if (_processing) {
      content = const CircularProgressIndicator();
    } else if (_name != null || _price != null) {
      content = Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('Nome: ${_name ?? 'não detectado'}'),
          Text('Preço: ${_price != null ? _price!.toStringAsFixed(2) : 'não detectado'}'),
        ],
      );
    } else {
      content = const Text('Pressione o botão para escanear.');
    }

    return Scaffold(
      body: Center(child: content),
      floatingActionButton: FloatingActionButton(
        onPressed: _processing ? null : _scan,
        child: const Icon(Icons.camera_alt),
      ),
    );
  }
}
