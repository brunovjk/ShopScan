import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:shopscan/main.dart';

void main() {
  testWidgets('Mensagem de lista vazia exibida', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    expect(find.text('Lista vazia, adicione ou escaneie um produto.'),
        findsOneWidget);
    expect(find.text('Tela de Câmera (em breve)'), findsNothing);

    await tester.tap(find.byIcon(Icons.camera_alt));
    await tester.pumpAndSettle();

    expect(find.text('Tela de Câmera (em breve)'), findsOneWidget);
  });
}
