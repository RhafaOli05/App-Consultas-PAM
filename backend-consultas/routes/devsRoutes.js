const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Rota get - lista todos os devs

router.get('/', (req, res) => {
    const query =  'SELECT id_devs, nome, funcao, foto, frase FROM tbl_devs ORDER BY id_devs';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar os desenvolvedores', err);
            return res.status(500).json({ error: 'Erro interno do servidor'});
        }
        res.json(results);
    });
});

module.exports = router;