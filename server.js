const express = require('express'); //libreria para crear servidores. se debe instalar con 'npm i express' - y esta es la sintaxis para acceder a los modulos agregados de npm
const app = express(); //inicializa express en la variable, la aplicacion
const server = require('http').Server(app);
const bodyParser = require('body-parser');// modulo de express para trabajar con el body de la peticition, se intala con 'npm i body-paser'
//const router = express.Router(); //define un router de express a traves del que se puede separar las peticiones, ya se por metodos, cabeceras, url
const config = require('./config.js');
const socket = require('./socket.js');
const db = require("./db.js");
const cors = require('cors');
const router = require('./network/routes.js');


db(config.dbUrl);
app.use(cors());

//app.use(router); //de esta forma se añade el router a la variable donde se inicializa express
app.use(bodyParser.json());

socket.connect(server);

router(app); //app es el parametro llamado server en la funcion que se encuentra en routes.js - en lugar de agregar un router a la app de express, se agrega al app de express al router programado
 

// .use lleva el parametro de la direccion donde estara escuchando y lo que va a devolver cuando el usuario acceda a esa direccion
//en este caso el segundo parametro sera una funcion 
//la funcion tambien tendra dos parametros que son los que necesitan las funciones HTTP

// app.use('/', function(req, res){
// 	res.send('hola');
// });


app.use('/' + config.publicRoute, express.static('public')); //express static permite servir los archivos frontend, como el html

server.listen(config.port, function(){
    console.log('La applicacion esta escuchando en ' + config.host + ':' + config.port);
}); //define el puerto donde estara activo el servidor a la espera de peticiones

