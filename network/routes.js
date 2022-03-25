const express = require('express');
const message = require('../components/message/network.js'); 

const routes = function(server){//server es el parametro que recibira en server.js en este caso llamado app
    server.use('/message', message);//la variable message son las rutas para la direccion /messge, es decir, el codigo del archivo network, agrega las rutas de network al router para agregar el router al servidor (app)
}

module.exports = routes;