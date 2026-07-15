# TripleTen — Web Project Around (React)

Este projeto consiste em uma aplicação de perfil de usuário desenvolvida com React, baseada no projeto Around da TripleTen. A aplicação foi evoluindo ao longo das sprints, migrando de HTML, CSS e JavaScript puros para uma arquitetura baseada em componentes reutilizáveis, gerenciamento de estado e integração com API REST.

A interface é totalmente responsiva e adapta-se automaticamente a diferentes tamanhos de tela por meio de Media Queries, proporcionando uma boa experiência tanto em computadores quanto em dispositivos móveis.

Na Sprint 12 foi realizada a integração com a API da TripleTen. Na Sprint 13 ocorreu a migração completa para React. Já na Sprint 14 foram implementados gerenciamento global de estado com Context API, operações completas de CRUD utilizando a API, validações de formulários e organização da aplicação seguindo uma arquitetura baseada em componentes.

---

# Funcionalidades

- Visualização das informações do usuário carregadas pela API
- Edição de perfil
- Atualização do avatar
- Carregamento dos cartões pela API
- Criação de novos cartões
- Curtir e remover curtidas dos cartões
- Exclusão de cartões com confirmação
- Visualização de imagens em tela cheia
- Gerenciamento centralizado de popups
- Validação de formulários em tempo real
- Atualização automática da interface após operações na API

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Hooks
  - useState
  - useEffect
  - useContext
  - useRef
- Context API
- Fetch API
- Vite
- ESLint

---

# Arquitetura

O projeto utiliza uma arquitetura baseada em componentes reutilizáveis.

Principais componentes:

- App
- Header
- Main
- Footer
- Card
- Popup
- ImagePopup
- EditProfile
- EditAvatar
- NewCard
- RemoveCard

Os estados principais da aplicação são centralizados no componente `App`, enquanto o `CurrentUserContext` é responsável por compartilhar os dados do usuário entre os componentes.

As operações assíncronas são realizadas através da API da TripleTen utilizando Promises e async/await.

---

# Popups disponíveis

- Editar perfil
- Editar avatar
- Novo cartão
- Confirmação de exclusão
- Visualização de imagem

---

# Responsividade

O layout adapta-se automaticamente para diferentes resoluções de tela.

Entre as adaptações implementadas estão:

- reorganização dos elementos em telas menores;
- centralização do conteúdo;
- adaptação da navegação para smartphones e tablets;
- manutenção da usabilidade em diferentes dispositivos.

---

# Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/ericdoouro/web_project_around_react.git
```

Entre na pasta do projeto:

```bash
cd web_project_around_react
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Para verificar o código:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

---

# Status do Projeto

✅ Projeto desenvolvido durante o Bootcamp de Desenvolvimento Web da TripleTen.

Ao final da Sprint 14, a aplicação possui integração completa com a API, gerenciamento de estado utilizando React Hooks e Context API, componentes reutilizáveis, validação de formulários e interface totalmente responsiva.