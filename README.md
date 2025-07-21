# ShopScan

O objetivo do aplicativo é escanear etiquetas de preço de produtos, extrair o nome e o preço do item automaticamente, gerenciar uma lista de compras e exibir um total acumulado.

## Principais Recursos

**1. Captura de Câmera**

- Tire uma foto do produto junto com sua etiqueta de preço dentro do aplicativo.
- Salve cada foto para referência futura.

**2. OCR para Extrair Texto**

- Use uma biblioteca de OCR (Google ML Kit) para ler o nome e o preço do produto na imagem.
- Identifique o preço automaticamente.

**3. Confirmação Manual**

- Exiba o resultado do OCR para que o usuário possa corrigir o nome ou o preço, se necessário.
- Permita edições de quantidade e preço nesta etapa.

**4. Gerenciamento de Lista de Compras**

- Armazene itens (nome, quantidade, preço, foto) localmente.
- Exiba uma lista de verificação para os itens comprados.
- Suporte para entrada manual ou edições para qualquer item.

**5. Total Acumulado**

- Calcule o custo total como quantidade × preço para cada item.
- Atualize o total sempre que itens forem adicionados, editados ou removidos.

**6. Armazenamento Local Offline**

- Mantenha dados e fotos em um banco de dados local (SQLite) para que o aplicativo funcione sem acesso à internet.
