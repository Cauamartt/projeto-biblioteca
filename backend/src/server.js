const express = require('express');
const cors = require('cors');
const path = require('path'); 

const livrosRoutes = require('./routes/livros.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/livros', livrosRoutes);

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.listen(3000, () => {
  console.log('Backend rodando na porta 3000');
});
