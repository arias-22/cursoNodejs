const express = require('express'); //libreria para crear servidores. se debe instalar con 'npm i express' - y esta es la sintaxis para acceder a los modulos agregados de npm
const bodyParser = require('body-parser');// modulo de express para trabajar con el body de la peticition, se intala con 'npm i body-paser'
//const router = express.Router(); //define un router de express a traves del que se puede separar las peticiones, ya se por metodos, cabeceras, url

const db = require("./db.js");

const router = require('./network/routes.js');

db("mongodb://db_user_nodejs_course:Facil123@cluster0-shard-00-00.jgenf.mongodb.net:27017,cluster0-shard-00-01.jgenf.mongodb.net:27017,cluster0-shard-00-02.jgenf.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-wkgcig-shard-0&authSource=admin&retryWrites=true&w=majority");

var app = express(); //inicializa express en la variable, la aplicacion
//app.use(router); //de esta forma se añade el router a la variable donde se inicializa express
app.use(bodyParser.json());

router(app); //app es el parametro llamado server en la funcion que se encuentra en routes.js - en lugar de agregar un router a la app de express, se agrega al app de express al router programado
 

// .use lleva el parametro de la direccion donde estara escuchando y lo que va a devolver cuando el usuario acceda a esa direccion
//en este caso el segundo parametro sera una funcion 
//la funcion tambien tendra dos parametros que son los que necesitan las funciones HTTP

// app.use('/', function(req, res){
// 	res.send('hola');
// });


app.use('/app', express.static('public')); //express static permite servir los archivos frontend, como el html

app.listen(3000); //define el puerto donde estara activo el servidor a la espera de peticiones
console.log('La applicacion esta escuchando en http://localhost:3000');

