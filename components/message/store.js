const res = require("express/lib/response");

const model = require("./model");

function addMessages(message){
    const myMessage = new model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};
    if (filterUser !== null){
        filter = {user: filterUser};
    }
 const messages = await model.find(filter);
 return messages;
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