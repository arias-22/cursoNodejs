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
        console.log(fullMessage);
        resolve(fullMessage);
    });
 
};

module.exports = { //Se exporta como objeto para poder tener la posibilidad de exportar varias funciones a la vez
    addMessage,
};