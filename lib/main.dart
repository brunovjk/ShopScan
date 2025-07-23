import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/item_detail_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ShopScan',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      routes: {
        '/': (_) => const HomePage(),
        '/details': (context) {
          final itemName = ModalRoute.of(context)!.settings.arguments as String;
          return ItemDetailPage(itemName: itemName);
        },
      },
    );
  }
}
