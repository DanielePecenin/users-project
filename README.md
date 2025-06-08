# Projeto: Sistema de Usuários

Este é um projeto full stack desenvolvido com **React**, **Node.js** e **Material UI**, com containerização via **Docker**. O sistema permite listar usuários, visualizar seus dados em um card ao clicar no nome e esconder esse card ao clicar fora.

## 🧩 Funcionalidades

- Listagem de usuários via API.
- Exibição de detalhes do usuário em um card ao clicar no nome.
- Fechamento automático do card ao clicar fora.
- Navegação entre abas: "Usuários" e "Dados".
- Backend Express para fornecer dados.
- Integração via API local.
- Interface moderna com Material UI.
- Backend e frontend organizados com Docker.

## 🚀 Tecnologias Utilizadas

### Frontend:
- React
- Material UI
- Axios
- React Router DOM

### Backend:
- Node.js
- Express
- CORS

### Outros:
- Docker (para containerização)
- Git & GitHub

## 📁 Estrutura do Projeto

```bash
users-project/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Usuarios.js
│   │   │   ├── Dados.js
│   │   └── components/
│   │       └── UsuarioCard.js
│   └── App.js
│
├── docker-compose.yml
└── README.md
