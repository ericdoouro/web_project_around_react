# Tripleten — Web Project Around (React)

Este projeto consiste em um perfil de usuário com layout responsivo, agora reestruturado utilizando React, mantendo os conceitos originais de HTML, CSS e JavaScript, porém aplicados em uma arquitetura moderna baseada em componentes.

A interface continua adaptando-se automaticamente a diferentes tamanhos de tela (como celulares e tablets) por meio de Media Queries, garantindo uma experiência consistente em qualquer dispositivo.

Na Sprint 12, o projeto passou a funcionar integrado a APIs, permitindo maior interatividade. Já na Sprint 13, houve a conversão da aplicação para React, substituindo a manipulação direta do DOM por uma abordagem declarativa baseada em estados e componentes reutilizáveis.

A página simula um perfil de usuário com funcionalidades completas, incluindo edição de dados, adição de cards com imagens, curtidas e visualização em tela cheia. A navegação permanece fluida e interativa, agora gerenciada por estados do React, com popups dinâmicos controlados por hooks como useState.

Para melhorar a acessibilidade e experiência do usuário, foram implementadas validações de formulário diretamente no React, com mensagens de erro claras, controle de campos interagidos (touched), limites de caracteres e feedbacks visuais em tempo real.

# Funcionalidades Implementadas

- Edição de Perfil — Alteração de nome e ocupação utilizando estado global.
- Edição de Avatar — Atualização dinâmica da imagem de perfil.
- Criação de Cards — Adição de novos cards com título e imagem.
- Curtidas — Sistema de likes com atualização de estado.
- Exclusão de Cards — Remoção com confirmação via popup.
- Visualização de Imagem — Ampliação em popup.
- Gerenciamento de Popups — Controle centralizado via estado.
- Validação de Formulários — Feedback em tempo real com controle de erros.
- Fechamento de Popups — Botão de fechar implementado via props.

# Tecnologias Utilizadas

- HTML5 → convertido para JSX
- CSS3 (com Media Queries)
- JavaScript (ES6+)
- React (Hooks: useState, useEffect, useContext)
- Context API (gerenciamento de estado global)
- APIs integradas (Sprint anterior)
- Dados simulados (Mock Data) nesta etapa

# Detalhes do Projeto

Estrutura baseada em componentes reutilizáveis (Header, Main, Footer, Card, Popup, etc.)
Gerenciamento de estado centralizado para usuário e interface
Uso de Context API para compartilhar dados do usuário entre componentes
Substituição da manipulação direta do DOM por renderização declarativa
Componentização dos popups com reutilização de layout
Validação de formulários implementada diretamente no React

# Popups funcionais para:

- Edição de perfil;
- Edição de avatar;
- Criação de cards;
- Confirmação de exclusão;
- Visualização de imagens em tela cheia.

# Responsividade

O layout continua adaptando-se automaticamente à largura da tela, especialmente em dispositivos abaixo de 800px.

Nestes casos:

Os elementos reorganizam-se em colunas verticais;
O conteúdo é centralizado;
A navegação e a leitura permanecem confortáveis em smartphones e tablets.

## Como usar

1. Clone o repositório:
   bash
   git clone https://github.com/ericdoouro/web_project_around_react.git