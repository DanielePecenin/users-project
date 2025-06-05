const express = require('express');
const cors = require('cors');
const app = express();
const usuarios = require('./mock/usuarios.json');

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/dados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
