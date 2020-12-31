const fs = require("fs");
const JsonFilePath = "./TP2/users.json";
const rawdata = fs.readFileSync(JsonFilePath);
const Users = JSON.parse(rawdata);

const getUserById = (userId) => Users.filter((user) => user.id === userId)[0];

exports.getAll = async (req, res) => {
    return res.send(Users);
};

exports.getOne = async (req, res) => {
    const requestedUserId = parseInt(req.params.id);
    const requestedUser = getUserById(requestedUserId);

    return res.send(requestedUser);
};

exports.create = async (req, res) => {
    const userToCreate = req.body;
    const userList = Users;

    Users.push(userToCreate);

    fs.writeFile(
        JsonFilePath,
        JSON.stringify(userList),
        "utf-8",
        function (err) {
            if (err) throw err;
            console.log("filelistAsync complete");
        }
    );

    return res.sendStatus(201);
};

exports.edit = async (req, res) => {
    const newData = req.body;
    const userToUpdateId = parseInt(req.params.id);

    const userToEdit = getUserById(userToUpdateId);

    for (const property in newData) {
        userToEdit[property] = newData[property];
    }

    const editedUser = userToEdit;

    const indexOfUserToUpdate = Users.findIndex(
        (user) => user.id === userToUpdateId
    );

    Users[indexOfUserToUpdate] = editedUser;

    const newUserList = Users;

    fs.writeFile(JsonFilePath, JSON.stringify(newUserList), "utf-8", (err) => {
        if (err) throw err;
        console.log("filelistAsync complete");
    });

    return res.sendStatus(202);
};

exports.delete = async (req, res) => {
    const userToDeleteId = parseInt(req.params.id);

    const userToDelete = getUserById(userToDeleteId);

    const userList = Users;

    const index = Users.indexOf(userToDelete);
    if (index > -1) {
        Users.splice(index, 1);
    }

    fs.writeFile(JsonFilePath, JSON.stringify(userList), "utf-8", (err) => {
        if (err) throw err;
        console.log("filelistAsync complete");
    });

    return res.sendStatus(202);
};
