let users = require("./UserData");
const User = require("./models/UserModel");

//READ ALL
exports.readAll = (req, res) => {
    return res.status(200).json(users);
};

//Create one
exports.createOne = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

//Read one by Id
exports.readOneById = (req, res) => {
    const user = users.find((user) => user.id == req.params.id);

    if (!user) {
        return res
            .status(404)
            .json({ result: `id ${req.params.id} not found` });
    }

    res.status(200).json(user);
};

//Update on by Id
exports.updateOneById = (req, res) => {
    let user = users.find((user) => user.id == req.params.id);

    if (!user) {
        return res
            .status(404)
            .json({ result: `id ${req.params.id} not found` });
    }

    for (const key in req.body) {
        if (user.hasOwnProperty(key)) {
            if (key != "id") {
                user[key] = req.body[key];
            }
        }
    }
    res.status(200).json(user);
};

//Delete one by Id
exports.deleteOneById = (req, res) => {
    let user = users.find((user) => user.id == req.params.id);

    if (!user) {
        return res
            .status(404)
            .json({ result: `id ${req.params.id} not found` });
    }

    users = users.filter((user) => user.id != req.params.id);

    res.status(200).json(users);
};
