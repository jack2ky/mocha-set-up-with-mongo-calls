function createAuser(User, userInfo){
    return new User(userInfo).save();
}

function findAUserId(User){
    return User.findOne({}, "_id")
}

module.exports = {
    createAuser,
    findAUserId
}
