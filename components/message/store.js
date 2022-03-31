const res = require("express/lib/response");
const db = require("mongoose");
const model = require("./model");

db.Promise = global.Promise;
db.connect("mongodb://db_user_nodejs_course:Facil123@cluster0-shard-00-00.jgenf.mongodb.net:27017,cluster0-shard-00-01.jgenf.mongodb.net:27017,cluster0-shard-00-02.jgenf.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-wkgcig-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
});
console.log("[db] conectada con exito");

function addMessages(message){
    const myMessage = new model(message);
    myMessage.save();
}

async function getMessage(){
 const messages = await model.find();
 return messages;
}

module.exports = {
    add: addMessages,
    list: getMessage,
    //get
    //update
    //delete
}