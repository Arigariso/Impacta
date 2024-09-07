const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos (como o CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do EJS (se usar EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conexão com o MySQL usando mysql2
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'projeto_db'
});

// Verificar a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});

// Rota para exibir o formulário de adicionar usuário
app.get('/adicionar', (req, res) => {
    res.render('adicionarUsuario');
});

// Rota para processar o formulário de inserção
app.post('/inserir', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao inserir dados');
        } else {
            res.send('Dados inseridos com sucesso!');
        }
    });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
