const store = require("./store.js");

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log("[messsageController] No hay usuario o mensaje");
            reject("Los datos son incorrectos");
            return false;
        }
        const fullMessage = {
            "user": user,
            "message": message,
            "date": new Date(),
        }
       store.add(fullMessage);
        resolve(fullMessage);
    });
 
};

function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
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