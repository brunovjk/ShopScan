import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

import 'item.dart';

class ItemsDatabase {
  static final ItemsDatabase instance = ItemsDatabase._init();

  static Database? _database;

  ItemsDatabase._init();

  Future<Database> get database async {
    if (_database != null) return _database!;

    _database = await _initDB('items.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
CREATE TABLE items(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  imagePath TEXT,
  purchased INTEGER NOT NULL
)''');
  }

  Future<Item> create(Item item) async {
    final db = await instance.database;
    final id = await db.insert('items', item.toMap());
    return item.copyWith(id: id);
  }

  Future<List<Item>> readAll() async {
    final db = await instance.database;
    final result = await db.query('items');
    return result.map((e) => Item.fromMap(e)).toList();
  }

  Future<int> update(Item item) async {
    final db = await instance.database;
    return db.update('items', item.toMap(), where: 'id = ?', whereArgs: [item.id]);
  }

  Future<int> delete(int id) async {
    final db = await instance.database;
    return db.delete('items', where: 'id = ?', whereArgs: [id]);
  }

  Future close() async {
    final db = _database;
    if (db != null) {
      await db.close();
    }
  }
}
