module.exports = (app) => {
    const user = require("./user-controller.js");

    //get all user
    app.get("/users", user.getAll);

    //get one user
    app.get("/user/:id", user.getOne);

    //create one user
    app.post("/user", user.create);

    //update one user
    app.put("/user/:id", user.edit);

    //delete one user
    app.delete("/user/:id", user.delete);
};
