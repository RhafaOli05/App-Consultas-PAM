const express = require('express');
const router = express.Router();
const db = require('../config/database.js')

//Rota GET
router.get('/', (req, res) => {
    const query = 'SELECT id_users, nome, usuario FROM tbl_users';
    db.query(query, (err, results) =>{
        if (err) {
            console.error('Erro ao buscar usuários', err);
            return res.status(500).json({ error: 'Erro interno do servidor'});
        }
        res.json(results);
    });
});

//Rota GET - busca por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT id_users, nome, usuario FROM tbl_users WHERE id_users = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).json({ error: 'Erro interno do servidor'});
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado'});
        }

        res.json(results[0])
    });
});

module.exports = router;