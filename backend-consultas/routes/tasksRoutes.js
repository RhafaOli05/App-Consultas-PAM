//Rota das tarefas

const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', (req, res) => {
    const query = 'SELECT id_tasks, nomeTasks, tempo, relevancia, status FROM tbl_tasks ORDER BY id_tasks';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar tarefas:', err);
            return res.status(500).json({ error: 'Erro interno do servidor'});
        }
        res.json(results);
    });
});

module.exports = router;