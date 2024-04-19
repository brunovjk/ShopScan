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
    |         Nome     Preco          |
    |_________________________________|
 
    ```
 
    </details>

  - <details>
    <summary>Histórico de Compras:</summary>
 
    ```
 
    _________________________________
    |   Histórico de Compras        |
    |-------------------------------|
    |  - Compra 1                   |
    |  - Compra 2                   |
    |  - Compra 3                   |
    |  - Compra 4                   |
    |  - Compra 5                   |
    |_______________________________|
 
    ```
 
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
 
    </details>

  - <details>
    <summary>Tela de Política de Uso e Termos:</summary>
 
    ```
 
    _________________________________
    |  Política de Uso e Termos     |
    |-------------------------------|
    | - Lorem Ipsum is simply dummy |
    | text of the printing and      |
    | typesetting industry. Lorem   |
    | Ipsum has been the industry's |
    | standard dummy text ever      |
    | since the 1500s,              |
    |_______________________________|
 
    ```
 
    </details>
    
- [ ] Usar Componentes do Design System para Construir os Prototipos
