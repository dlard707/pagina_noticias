// dependencias
/*
git init
npm install express
npm install nodemon

*/
//importando express
const express = require('express');

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
    res.render('home/index.ejs');
});

//criando a segunda rota
app.get('/noticias', (req, res) => {
    res.send('<h1>Noticias</h1>');
})


//iniciando o servidor na porta 3000
app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');
    console.log('pressione Ctrl + C para encerrar');
});

