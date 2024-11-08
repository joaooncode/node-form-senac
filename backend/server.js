const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const app = express()

const port = process.env.PORT || 3000


// diretorio frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
})

// contato
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '.../frontend/contact.html'))
})

// sobre
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../fronted/about.html'))
})

// não encontrado
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../frontend/error.html'))
})

app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`);

})