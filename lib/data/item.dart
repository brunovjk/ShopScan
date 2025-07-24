class Item {
  final int? id;
  final String name;
  final int quantity;
  final double price;
  final String? imagePath;
  final bool purchased;

  Item({
    this.id,
    required this.name,
    this.quantity = 1,
    this.price = 0,
    this.imagePath,
    this.purchased = false,
  });

  Item copyWith({
    int? id,
    String? name,
    int? quantity,
    double? price,
    String? imagePath,
    bool? purchased,
  }) {
    return Item(
      id: id ?? this.id,
      name: name ?? this.name,
      quantity: quantity ?? this.quantity,
      price: price ?? this.price,
      imagePath: imagePath ?? this.imagePath,
      purchased: purchased ?? this.purchased,
    );
  }

  factory Item.fromMap(Map<String, dynamic> map) {
    return Item(
      id: map['id'] as int?,
      name: map['name'] as String,
      quantity: map['quantity'] as int,
      price: (map['price'] as num).toDouble(),
      imagePath: map['imagePath'] as String?,
      purchased: map['purchased'] == 1,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'quantity': quantity,
      'price': price,
      'imagePath': imagePath,
      'purchased': purchased ? 1 : 0,
    };
  }
}
