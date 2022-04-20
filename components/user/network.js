const express = require('express');
const response = require('../../network/response.js'); // se importa el modulo de respuestas que debe ser creado aparte para un mejor estructura del proyecto
const router = express.Router();
const controller = require("./controller.js");

router.post('/', function(req, res){
    controller.addUser(req.body.name).then(data => {
        response.success(req, res, data, 201);
    }).catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    })
})

router.get('/', function(req, res){
    controller.listUsers().then((users) => {
        response.success(req, res, users, 200);
    }).catch(e => {
        response.error(req, res, "Unexpected Error", 500, e);
    })
})

router.delete('/:id', function(req, res){
controller.deleteUser(req.params.id).then(()=>{
    response.success(req, res, 'Usuario ' + req.params.id + ' Eliminado', 200);
}).catch(e => {
    response.error(req, res, 'Error interno', 500, e);
    })
})

router.patch('/:id', function(req, res){
controller.updateUser(req.params.id, req.body.name).then((data) => {
    response.success(req, res, data, 200);
}).catch(e => {
    response.error(req, res, 'Error interno', 500, e);
})
})

module.exports = router;