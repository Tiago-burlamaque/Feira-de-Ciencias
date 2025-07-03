const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Altere para o nome do seu user no MySQL
    password: 'futlast',    // Altere para a senha correta
    database: 'feira_de_ciencias',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors());
app.use(express.json());

app.get('/Usuarios', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cadastro');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

app.get('/Usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM cadastro WHERE id_cadastro = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

app.post('/Usuarios', async (req, res) => {
    const { nome, nota } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO cadastro (nome, nota) VALUES (?, ?)',
            [nome, nota]
        );
        const [novoUsuario] = await pool.query('SELECT * FROM cadastro WHERE id_cadastro = ?', [result.insertId]);
        res.status(201).json(novoUsuario[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar Usuário' });
    }
});

app.put('/Usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, nota } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE cadastro SET nome = ?, nota = ? WHERE id_cadastro = ?',
            [nome, nota, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        const [usuarioAtualizado] = await pool.query('SELECT * FROM cadastro WHERE id_cadastro = ?', [id]);
        res.json(usuarioAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

app.delete('/Usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM cadastro WHERE id_cadastro = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
