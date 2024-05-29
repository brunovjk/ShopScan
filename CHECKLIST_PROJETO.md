# Checklist de Criação da Marca, Design System e Wireframes - ShopScan

## Marca

- [x] Definir a Mensagem Principal da Marca

      - ShopScan: Precisão nas Compras.
      - Com ShopScan, sua experiência de compras nunca mais será a mesma. Nossa missão é proporcionar precisão e praticidade em cada compra que você realizar. Com nossa tecnologia intuitiva de reconhecimento de fotos, você pode dizer adeus às discrepâncias de preços no caixa. Crie e gerencie sua lista de compras com facilidade, sabendo exatamente quanto irá pagar no final. Com ShopScan, cada compra é uma experiência sem preocupações, garantindo que você pague exatamente o que espera.
- [x] Escolher Nome da Marca: ShopScan
- [x] Escrever Descrição da Marca

      - ShopScan é uma marca dedicada a simplificar e aprimorar a experiência de compras dos consumidores. Com um foco incansável na precisão e praticidade, buscamos eliminar as discrepâncias de preços no caixa e oferecer uma maneira intuitiva de criar e gerenciar listas de compras. Nosso compromisso com a inovação nos permite oferecer soluções eficientes e confiáveis, garantindo que nossos usuários saibam exatamente quanto irão pagar no momento do checkout. Com ShopScan, cada compra se torna uma experiência tranquila e sem complicações, permitindo que os clientes desfrutem ao máximo de suas atividades de compras.
- [x] Design do Logo
  - [x] Escolher Estilo de Logo (Ex: Simbólico, Texto, Combinação)
  
          - Um símbolo que represente a precisão, como um gráfico de barras estilizado, uma etiqueta de preço ou um carrinho de compras simplificado, pode ser integrado ao design. Além disso, incluir o nome "ShopScan" em uma fonte moderna e legível pode reforçar a identidade da marca e facilitar o reconhecimento. Dessa forma, uma combinação de elementos simbólicos e texto pode transmitir efetivamente a proposta de valor do ShopScan
  - [x] Slogan
  
          - ShopScan: Precisão Garantida em Cada Compra.
  - [x] Criar Versões Variadas do Logo (Ex: Principal, Secundária, Monocromática)
     
       - [x] Figma:  [Figma Logo](https://www.figma.com/file/3m6xt4aIb66zcDF8L2VEqC/ShopScan---Design-System?type=design&node-id=2303-66&mode=design) 
       - [x] Icon: <details><summary>png</summary> ![image](https://github.com/brunovjk/ShopScan/assets/95647348/c630f347-9131-4d0e-a0cb-3014816db5bb) </details>
       - [x] Vertical:
       - [x] Horizontal:
            
- [x] Escolher Paleta de Cores:
  - Verde: 
        - Dark:
        - Base: #1ca658
        - Light: #52D17A
  - Azul: #3F8EFF
  - Laranja: #FFA500
    
- [x] Escolher Fontes:
  - [x] Primária: **Montserrat**
    - Logo
    - Títulos e Cabeçalhos
    - Menu de Navegação
    - Botões de Chamada para Ação
      
  - [x] Secundária: **Roboto**
    - Texto
    - Subtítulos e Legendas
    - Campos e Rótulos de Formulários
    - Notificações e Alertas


## Design System

- [X] Escolher Framework de UI: React Native Paper
- [ ] Personalizar Temas e Estilos conforme a Paleta de Cores Escolhida
- [ ] Integrar Componentes Prontos do React Native Paper

## Wireframes

- [x] Identificar Principais Fluxos de Usuário
   1. Abrir o aplicativo.
   2. Gerenciar Listas:
      - Mostrar listas existentes.
      - Limpar listas antigas.
      - Criar uma nova lista de compras.
      - Duplicar listas para reutilização.
   3. Adicionar e Remover Itens:
      - Adicionar itens à lista.
      - Remover itens da lista.
   4. Capturar Etiquetas:
      - Selecionar um item e tirar foto da etiqueta.
      - Especificar a quantidade desejada.
      - Confirmar manualmente nome e preço se a etiqueta estiver ilegível.
   5. Visualizar Lista:
      - Ver preço, nome e quantidade do item após capturar a foto.
      - Marcar ou desmarcar itens no carrinho.
      - Visualizar a foto tirada para cada item.
      - Visualizar total a pagar.

- [x] Criar Wireframes das Telas Principais do Aplicativo [Figma wireframe](https://www.figma.com/file/3m6xt4aIb66zcDF8L2VEqC/ShopScan---Design-System?type=design&node-id=2319-82&mode=design&t=ndshCwzmvZYke5h9-0)
  - <details>
    <summary>Tela Bem-vinda:</summary>

     ![image](https://github.com/brunovjk/ShopScan/assets/95647348/5d45681d-c3d3-44fb-9684-7782a6501a13)

    </details>
    
  - <details>
    <summary>Tela Inicial:</summary>

    ```
 
    _________________________________
    |      Listas de Compras        |
    |-------------------------------|
    |  - Lista de Compras A         |
    |  - Lista de Compras B         |
    |  - Lista de Compras C         |
    |  - Lista de Compras D         |
    |  - Lista de Compras E         |
    |_______________________________|
    |          [ + Adicionar Lista] |
    |_______________________________|

    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/acdb73da-58eb-4376-a157-c36c08ada4d8)
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/be7f7598-f6f3-4171-a43f-2375906db5ca)

    </details>
  
  - <details>
    <summary>Tela de Lista de Compras:</summary>

    ```
 
    _________________________________
    |        Minha Lista A          |
    |-------------------------------|
    |  - Maçãs  [Foto][Remover] [✓] |
    |  - Pão    [Foto][Remover] [✓] |
    |  - Leite  [Foto][Remover] [✓] |
    |-------------------------------|
    |         [Adicionar Item]      |
    |_______________________________|
    |  [Total a Pagar: R$ 10,00]    |
    |_______________________________|

    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/73bb9f00-ee35-457c-ab6f-d92ed9307ae8)
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/13b90314-b689-4a36-8226-60b83ab7d0a7)

    </details>

  - <details>
    <summary>Tela de Captura de Etiqueta:</summary>

    ```
    ___________________________________
    |                                 |
    |             [Foto]              |
    |                                 |
    |                                 |
    |---------------------------------|
    |           Tirar Foto            |
    |_________________________________|

    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/917c895f-009a-4a58-8a57-442a706988af)

    </details>

  - <details>
    <summary>Tela de Confirmação:</summary>

    ```
     __________________________________
    |          Confirmação            |
    |----- ---------------------------|
    |  Nome: _____________________    |
    |  Quantidade: _______________    |
    |  Preço: _____________________   |
    |_________________________________|
    |    [Adicionar item a Lista]     |
    |_________________________________|
  

    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/12d4248b-87b5-491b-ba86-ccea4c4fe6c8)

 
    </details>

  - <details>
    <summary>Tela de Detalhes do Item:</summary>

    ```
 
    ___________________________________
    |      Detalhes do Item           |
    |---------------------------------|
    |  Nome: Maçãs                    |
    |  Quantidade: 2                  |
    |  Preço Unitário: R$ 2,00        |
    |_________________________________|
    |[Remover][Verificar/Refazer Foto]|
    |_________________________________|

    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/f63b5b49-2740-481e-8c19-8023a694276f)

 
    </details>

  - <details>
    <summary>Tela de Tutorial:</summary>
 
    ```
 
    _________________________________
    |           Tutorial            |
    |-------------------------------|
    | - Lorem Ipsum is simply dummy |
    | text of the printing and      |
    | typesetting industry. Lorem   |
    | Ipsum has been the industry's |
    | standard dummy text ever      |
    | since the 1500s,              |
    |_______________________________|
 
    ```
    ![image](https://github.com/brunovjk/ShopScan/assets/95647348/7e27cb06-0aca-43d3-b635-b47d0f494a48)

 
    </details>
    
- [ ] Usar Componentes do Design System para Construir os Prototipos

## MVP

**1. Configuração do Projeto:**

* [x] Criar um novo projeto React Native.
* [ ] Instalar as dependências necessárias:
    * [x] `react-native-paper`.
    * [ ] `react-native-vector-icons`.
    * [ ] `react-native-onyx`. (Having trouble on android)
    * [ ] `react-native-camera`.
* [ ] Configurar o ambiente de desenvolvimento (emulador Android Studio ou dispositivo físico).

**2. Telas:**
* **Tela de Bem-vinda:**
    * [x] Exibir uma mensagem de boas-vindas ao aplicativo.
    * [x] Apresentar um botão para iniciar o uso do aplicativo.
* **Tela Inicial:**
    * [ ] Exibir uma lista com as listas de compras existentes.
    * [ ] Permitir a criação de novas listas de compras.
    * [ ] Permitir a visualização e edição das listas existentes.
    * [ ] Exibir um botão para adicionar novos itens à lista selecionada.
* **Tela de Lista de Compras:**
    * [ ] Exibir os itens da lista selecionada, incluindo nome, quantidade, preço e foto (se disponível).
    * [ ] Permitir a adição de novos itens à lista.
    * [ ] Permitir a edição dos itens da lista (nome, quantidade, preço).
    * [ ] Permitir a remoção de itens da lista.
    * [ ] Exibir o total a pagar da lista.
* **Tela de Captura de Etiqueta:**
    * [ ] Abrir a câmera do dispositivo para capturar a foto da etiqueta do produto.
    * [ ] Permitir que o usuário ajuste a área de captura da foto.
    * [ ] Tirar a foto da etiqueta e salvar em armazenamento local.
* **Tela de Confirmação:**
    * [ ] Exibir as informações do produto capturado (nome, preço, quantidade).
    * [ ] Permitir que o usuário edite as informações do produto (opcional).
    * [ ] Permitir que o usuário adicione o produto à lista de compras.
* **Tela de Detalhes do Item:**
    * [ ] Exibir as informações detalhadas do item da lista de compras (nome, quantidade, preço, foto).
    * [ ] Permitir que o usuário edite as informações do item (opcional).
    * [ ] Permitir que o usuário marque o item como comprado.
    * [ ] Permitir que o usuário remova o item da lista.
* **Tela de Tutorial:**
    * [ ] Exibir um tutorial opcional para apresentar as funcionalidades básicas do aplicativo.

**3. Implementação da Funcionalidade:**

* [ ] Implementar a navegação entre as telas.
* [ ] Implementar a lógica para gerenciamento de listas de compras (adicionar, editar, remover itens).
* [ ] Implementar a lógica para captura de fotos de etiquetas e extração de informações (opcional).
* [ ] Implementar a lógica para cálculo do total a pagar.
* [ ] Implementar o armazenamento local de dados (listas de compras, itens).
