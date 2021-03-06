
const store = require("./store.js");
const socket = require('../../socket.js').socket;


function addMessage(chat, user, message, file){
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error("[messsageController] No hay usuario o mensaje");
            reject("Los datos son incorrectos");
            return false;
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            "chat": chat,
            "user": user,
            "message": message,
            "date": new Date(),
            "file": fileUrl,
        }
       store.add(fullMessage);

        socket.io.emit('message', fullMessage); 

        resolve(fullMessage);
    });
 
};

function getMessages(filterChat){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
        if(!id | !message){
            reject("invalid data");
            return false;
        }
       const result = await store.updateText(id, message)
       resolve(result);
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if(!id){
            reject('id invalido');
            return false;
        }
        store.remove(id).then(
            () => {
                resolve()
            }).catch(
                e => {
                    reject(e);
                })
    })
}

module.exports = { //Se exporta como objeto para poder tener la posibilidad de exportar varias funciones a la vez
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};