// dependencias
/*
git init
npm install express
npm install nodemon

*/
//importando express
const express = require('express');
// importacao express session
const session = require('express-session')

//Configuarção do jasonparse e body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));




//criando um objeto do express na varriável app
const app = express();

//Configuração do EJS
app.set('view engine', 'ejs');
//definindo o caminho das views ejs
app.set('views', './app/views');

//Configuração do Express para receber arquivos estáticos
app.use(express.static('./app/public'));

//Configurtação do Express-session
app.use(session({
    secret: 'EgqK$&4q5g,:`NHQ', //chave de segurança para criptografar o cookie
    resave: false,   //Otimiza para que sessão não seja slava novamente a cada requisição
    saveUninitialized: false //Otimiza o uso de armazenamento no server, evitando armaaenar sessões não inicializadas
}));
