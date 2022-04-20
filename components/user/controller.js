const store = require('./store.js');

function addUser(name){

    if (!name) {
        return Promise.reject('Invalid Name');
    }
   const user = {
       name,
   };

   return store.add(user);
}

function listUsers(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function deleteUser(id){
    return new Promise((resolve, reject) => {
        if (!id){
            reject('Usuario invalido');
            return false;
        }
        store.delete(id).then(
            () => {
                resolve();
            }).catch(e => {
                reject(e);
            })
    })
}

function updateUser(id, name){
    return new Promise(async (resolve, reject) => {
        if(!id | name){
            reject('Invalid Data');
            return false;
        }
        const result = await store.update(id, name)
        resolve(result);
    })
}

module.exports = {
    addUser,
    listUsers,
    deleteUser,
    updateUser,
}