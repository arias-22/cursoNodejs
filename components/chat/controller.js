const store = require('./store.js');
function addChat(users){
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid chat');
    }
    
    const chat = {
        users: users,
    }

    return store.addChat(chat);
}

function listChats(userId){
   return store.getChats(userId);
}

module.exports = {
    addChat,
    listChats,
}