const model = require('./model.js');

function addChat(users){
    const chat = new model(users);
    return chat.save();
}

function getChats(userId){
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId){
            filter = {
                users: userId,
            }
        }

        model.find(filter)
        .populate('users')
        .exec((err, populated) => {
            if (err){
                reject(err);
                return false;
            }
            resolve(populated);
        })
    })
}

module.exports = {
    addChat,
    getChats,
}