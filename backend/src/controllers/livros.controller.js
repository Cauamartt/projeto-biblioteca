const db = require('../db');

exports.listar = (req, res) => {
  db.query('SELECT * FROM livros', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

