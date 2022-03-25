const express = require('express');
const response = require('../../network/response.js'); // se importa el modulo de respuestas que debe ser creado aparte para un mejor estructura del proyecto
const router = express.Router();

router.get('/', function(req, res){

	res.header({
		"custom-header": "Valor personalizado",
	}); //incluye en la respuesta del servidor una cabecera personalizada
	
	//res.send("<h1>Lista de mensajes</h1>"); //envia la respuesta del servidor

	response.success(req,res, "Lista de mensajes");
	console.log(req.headers);//para ver las cabeceras de la peticion, como para saber desde donde viene una peticion
});

router.post('/', function(req, res){
	//console.log(req.body); //para acceder a los parametros del body de la consulta
	//console.log(req.query); //para ver las consultas hechas a traves de la url. ejemplo: http://localhost:3000/message?id=234
	//res.send("Mensaje --" + req.body.text + "-- agregado"); //text seria el nombre de parametro que contiene el body
	
	if(req.query.error == "ok"){
		response.error(req, res, "Erorr inesperado", 500, "Es una simulacion de los errores");
	}else{	
		response.success(req,res,"Mensaje enviado",201);
	}

});

router.delete('/', function(req, res){
	res.status(201).send({'error':'ninguno', 'body':'Eliminado correctamente',}); //de esta manera se puede responder a la peticion con un estado y un objeto que puede contener informacion que queramos. puede ser cualquier tipo de respuesta
	//res.send();//tambien se puede enviar una respuesta vacia, denpendera de la accion que queramos realizar
	//res.status(201).send()// tambien se puede enviar una respuesta vacia, pero con un estado
});

module.exports = router;