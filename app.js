// dependencias
/*
git init
npm install express
npm install nodemon

*/
//importando express
const express = require('express');

//Importanbdo o mockup
const noticias = require('./mockup.js')

//criando um objeto do express na varriável app
const app = express();

//Configuração do EJS
app.set('view engine', 'ejs');
//definindo o caminho das views ejs
app.set('views', './app/views');

//Configuração do Express para receber arquivos estáticos
app.use(express.static('./app/public'));

//criando a primeira rota
app.get('/', (req, res) => {
    res.render('home/index.ejs', {noticias: noticias.slice(0, 3)});
});

//criando a segunda rota
app.get('/noticias', (req, res) => {
    res.render('noticias/noticias.ejs', {noticia:noticias});
})

//Criando a rota noticia
app.get('/noticia', (req, res) => {
    //recupera id noticias por get
    var id = req.query.id;

    res.render('noticias/noticia.ejs', {noticia:noticias[id]});
})

//Rota responsável pelo recurso Admin
app.get('/admin', (req, res) => {

    res.render('admin/login')
})

//iniciando o servidor na porta 3000
app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');
    console.log('pressione Ctrl + C para encerrar');
});

