// Importa o framework Express
const express = require('express');
const cors = require('cors');

// Cria uma aplicação Express
const app = express();
const usuarios = require('./mock/usuarios.json');

// Permite que o frontend acesse a API (evita problemas de CORS)
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Rota GET que retorna todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET que retorna um usuário específico com base no ID
app.get('/dados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

// Inicia o servidor na porta 3001
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
