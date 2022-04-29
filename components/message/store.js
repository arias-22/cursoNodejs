const res = require("express/lib/response");

const model = require("./model");

function addMessages(message){
    const myMessage = new model(message);
    myMessage.save();
}

async function getMessage(filterChat){
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat !== null){
            filter = {chat: filterChat};
        }
        const messages = model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        })
    })
    
}

async function updateText(id, message){
    const foundMessage = await model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

 function removeMessage(id){
    return model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessages,
    list: getMessage,
    //get
    updateText: updateText,
    remove: removeMessage,
}