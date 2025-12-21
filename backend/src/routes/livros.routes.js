const express = require('express');
const router = express.Router();

const livrosController = require('../controllers/livros.controller');

router.get('/', livrosController.listar);

module.exports = router;
