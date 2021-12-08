const app = require('./config/server')
const db = require('./config/dbConnection')

//Importando o mockup
// const noticias = require('./mockup.js')
//criando a primeira rota
app.get('/', async(req, res) => {

    //consulta SQL
    var result = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3')
    // res.render('home/index', {noticias: noticias.slice(0, 3)});
    res.render('home/index', {noticias: result.rows, title: 'Home'});
});

//criando a segunda rota
app.get('/noticias', (req, res) => {
    res.render('noticias/noticias', {noticia:noticias, title: 'Noticias'});
})

//Criando a rota noticia
app.get('/noticia', (req, res) => {
    //recupera id noticias por get
    var id = req.query.id;

    res.render('noticias/noticia', {noticia:noticias[id], title: 'Noticia'});
})

//Rota responsável pelo recurso Admin
app.get('/admin', (req, res) => {

    if(req.session.autorizado){
        res.render('admin/form_add_noticia', {title: 'Admin', autorizado:req.session.autorizado});
    }else{
        res.render('admin/login', {title:'Login'})
    }
    
})

//Rota responsável pela autenticção do usuário
app.post('/admin/autenticar', (req, res) => {

    const {usuario, senha} = req.body

    if(usuario == 'root' && senha == 'cellep1234'){

        req.session.autorizado = true;
        
    }
    res.redirect('/admin');
})

//rota responsável por salvar as noticias
app.post('/admin/salvar-noticia', (req, res) => {

    let {titulo, conteudo} = req.body;

    res.redirect('/noticias');
})


//Rota responsável pela saída do usuário
app.get('/admin/sair', (req, res) => {
    req.session.destroy((err) => {});
    res.redirect('/admin');
})

//iniciando o servidor na porta 3000
app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');
    console.log('pressione Ctrl + C para encerrar');
});

