# ShopScan

A função princiapl do app é escanear etiquetas de preços de produtos, extrair automaticamente o nome e o preço do item, gerenciar uma lista de compras e mostrar um total acumulado.

## 1. Funcionalidades Principais

1. **Captura de Itens via Câmera**
   - Fornecer uma interface de câmera para fotografar a etiqueta de preço do produto.
   - Detectar uma região clara da foto para a etiqueta e oferecer orientação.
   - Salvar a foto bruta para revisão posterior.

2. **Extração Automática de Texto**
   - Usar OCR para ler o nome do produto e o preço da imagem capturada.
   - Biblioteca OCR: Google ML.
   - Analisar o texto reconhecido para localizar o preço e extrair o nome do produto.

3. **Confirmação Manual**
   - Após o OCR, mostrar um formulário editável para que o usuário possa confirmar ou corrigir o nome do produto, quantidade e preço.
   - Exibir a imagem capturada como referência.

4. **Gerenciamento da Lista de Compras**
   - Armazenar cada item de produto (nome, quantidade, preço unitário, foto) em uma lista.
   - Fornecer uma visualização em lista com checkboxes para marcar como comprado.
   - Suportar entrada ou edição manual de itens quando necessário.

5. **Cálculo do Total**
   - Manter um total acumulado (`quantidade × preço` para cada item).
   - Atualizar o total sempre que itens forem adicionados, editados ou removidos.

6. **Armazenamento Local e Uso Offline**
   - Armazenar todos os dados localmente (SQLite) para que o app funcione offline.
   - Persistir fotos junto com os dados dos itens e carregar a lista armazenada ao iniciar.

## 2. Stack de Tecnologia Sugerido

- **Framework Mobile**: Flutter.
- **OCR**: Google ML Kit Text Recognition.
- **Armazenamento**: SQLite.

## 3. Arquitetura de Alto Nível

1. **Módulo de Câmera** – captura fotos e as envia para o OCR.
2. **Módulo de OCR/Parsing** – extrai texto e analisa o preço e nome do produto.
3. **Camada de Dados** – banco de dados local para registros dos itens (nome, preço, quantidade, caminho da imagem, flag de comprado).
4. **Camada de UI** – tela de lista, tela de adicionar/escanear, e tela de detalhes do item.
5. **Cálculo de Total** – derivado dos itens armazenados e atualizado sempre que os dados mudam.

## 4. Plano de Desenvolvimento Passo a Passo

- [x] Configurar o projeto mobile (Flutter).
- [ ] Criar telas básicas (lista, câmera/escanear, detalhes do item).
- [ ] Implementar armazenamento local com SQLite.
- [ ] Integrar câmera e OCR para extrair preço e nome do item.
- [ ] Adicionar lógica de gerenciamento de itens: adicionar, editar, deletar itens.
- [ ] Calcular e exibir o total.
- [ ] Testar a precisão do OCR e funcionalidade offline.
