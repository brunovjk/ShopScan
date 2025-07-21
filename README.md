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

## Plano de Ação para implementar o ShopScan

1. Configuração inicial do projeto  
- Criar um novo projeto em Flutter.  
- Adicionar as dependências principais:  
  - `camera` (captura de fotos)  
  - `google_ml_kit` (OCR)  
  - `sqflite` e `path_provider` (armazenamento local)  
- Configurar permissões de câmera e acesso a arquivos.  

2. Tela de captura de fotos  
- Implementar interface para abrir a câmera e tirar foto do produto.  
- Salvar a imagem localmente para referência futura.  

3. Processamento OCR  
- Usar o `google_ml_kit` para extrair texto da imagem e identificar o nome e o preço.  
- Criar função que detecta automaticamente o valor do preço entre os textos reconhecidos.  

4. Confirmação manual  
- Exibir o resultado do OCR em uma tela de revisão.  
- Campos editáveis para nome, quantidade e preço.  
- Botão para confirmar e salvar ou cancelar.  

5. Gerenciamento da lista de compras  
- Criar uma tabela SQLite para armazenar itens com os campos: id, nome, quantidade, preço e caminho da foto.  
- Desenvolver uma tela de lista com checkbox de “comprado” e opções de edição ou remoção.  

6. Cálculo do total acumulado  
- Calcular `quantidade × preço` de cada item e exibir o somatório.  
- Atualizar automaticamente ao adicionar, editar ou remover itens.  

7. Armazenamento local e operação offline  
- Garantir que todas as fotos e dados fiquem salvos no SQLite, permitindo uso sem conexão.  
- Implementar controle de erros para lidar com leitura e gravação local.  

8. Fluxo adicional  
- Possibilitar cadastro manual de itens (em vez de usar a câmera), com os mesmos campos.  
- Organizar o código com repositório de dados e camadas de UI para facilitar manutenção.  

