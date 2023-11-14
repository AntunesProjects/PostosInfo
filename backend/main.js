const { Client } = require('pg')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postos',
    password: 'mtz267291',
    port: 5432,
})

app.use(cors())
client.connect()

app.get('/posto', (req, res) => {
    const query = 'SELECT * from posto';
    client.query(query, (err, result) => {
        if (err) {
            console.error('Erro ao executar a consulta', err);
            res.status(500).json({ error: 'Erro ao buscar informações'})
        } else {
            const postos = result.rows
            res.json(postos);
        }
    })
})

app.listen(port, () => {
    console.log (`Servidor rodando, porta ${port}`)
})