const { Client } = require('pg');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postos',
    password: 'mtz267291',
    port: 5432,
});

app.use(cors());
client.connect();

// Rota para obter os dados dos postos
app.get('/posto', async (req, res) => {
    try {
        const query = 'SELECT * from posto';
        const result = await client.query(query);
        const postos = result.rows;
        res.json({ success: true, data: postos });
    } catch (error) {
        console.error('Erro ao executar a consulta', error);
        res.status(500).json({ success: false, error: 'Erro ao buscar informações' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando, porta ${port}`);
});

