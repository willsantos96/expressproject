const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://arsene:SBTjpRGoreEmCkV5@cluster0.f05jqrk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connectionString)
    .then(() => {
        console.log('Conectado à base de dados.');
        app.emit('pronto');
    });

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/controllers/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')


//Middlewares criados
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);



app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000...')
        console.log('Acessar http://localhost:3000')
    });
});