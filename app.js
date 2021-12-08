const app = require('./config/server')
const db = require('./config/dbConnection')

const port = process.env.port || 3000

//Importando o mockup
// const noticias = require('./mockup.js')
//criando a primeira rota
app.get('/', async(req, res) => {

    //consulta SQL
    var result = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3')
    // res.render('home/index', {noticias: noticias.slice(0, 3)});
    res.render('home/index', {noticias: result.rows, title: 'Home'});
});

//criando a segunda rota (noticias)
app.get('/noticias', async(req, res) => {
    var result = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC')

    res.render('noticias/noticias', {noticias: result.rows, title: 'Noticias'});
    // res.render('noticias/noticias', {noticia:noticias, title: 'Noticias'});
})

//Criando a rota noticia
app.get('/noticia', async(req, res) => {
    //recupera id noticias por get
    var id = req.query.id;

    let result = await db.query('SELECT*FROM noticias WHERE id_noticia = $1', [id])

    // res.render('noticias/noticia', {noticia:noticias[id], title: 'Noticia'});
    res.render('noticias/noticia', {noticia:result.rows[0], title: 'Noticia'});
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
app.post('/admin/salvar-noticia', async(req, res) => {

    let {titulo, conteudo} = req.body;

    await db.query('INSERT INTO noticias(titulo, conteudo) VALUES($1, $2)', [titulo, conteudo], (err,result) => {
        res.redirect('/noticias')
    })

    // res.redirect('/noticias');
})


//Rota responsável pela saída do usuário
app.get('/admin/sair', (req, res) => {
    req.session.destroy((err) => {});
    res.redirect('/admin');
})

//iniciando o servidor na porta 3000
app.listen(port, () => {

    console.log('Servidor rodando na porta 3000');
    console.log('pressione Ctrl + C para encerrar');
});

