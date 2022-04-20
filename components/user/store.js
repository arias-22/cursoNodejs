const model = require('./model.js');

function addUser(user){
    const myUser = new model(user);
    return myUser.save();
}

async function getUsers(){
    const users = await model.find();
    return users;
}

function removeUser(id){
    return model.deleteOne({
        _id: id
    });
}

async function updateUser(id, name){
    const foundUser = await model.findOne(
        {_id:id}
    )

    foundUser.name = name;
    const newName = await foundUser.save();
    return newName;
};

module.exports = {
    add: addUser,
    list: getUsers,
    delete: removeUser,
    update: updateUser,
}