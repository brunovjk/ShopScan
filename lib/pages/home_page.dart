import 'package:flutter/material.dart';
import 'items_list_page.dart';
import 'scan_page.dart';
import 'add_item_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _currentIndex = 0;

  final GlobalKey<ItemsListPageState> _itemsKey = GlobalKey<ItemsListPageState>();

  late final List<Widget> _pages = [
    ItemsListPage(key: _itemsKey),
    const ScanPage(),
  ];

  final _titles = const ['Lista', 'Escanear'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(_titles[_currentIndex])),
      body: _pages[_currentIndex],
      floatingActionButton: _currentIndex == 0
          ? FloatingActionButton(
              onPressed: () async {
                await Navigator.pushNamed(context, '/add');
                await _itemsKey.currentState?.refresh();
              },
              child: const Icon(Icons.add),
            )
          : null,
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Lista'),
          BottomNavigationBarItem(
            icon: Icon(Icons.camera_alt),
            label: 'Escanear',
          ),
        ],
      ),
    );
  }
}
