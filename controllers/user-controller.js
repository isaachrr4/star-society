const { Users } = require("../models");

const userController = {
  getAllUsers(req, res) {
    Users.find({})
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getUserById({ params }, res) {
    Users.findOne({ _id: params.id })
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    createUser({params}, res) {
      Users.create(body)
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.json(err));
    },
    updateUser({ params, body }, res) {
      Users.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then((dbUsers) => {
          if (!dbUsers) {
            res.status(404).json({ message: "No user found with this id!....try again" });
            return;
          }
          res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },
    deleteUser({params, body}, res) {
      Users.findOneAndDelete({ _id: params.id })
      .then((dbUsers) => {
        if (!dbUsers) {
          res.status(404).json({ message: "No User found here with this id!....try again" });
          return;
        }
        res.json(dbUsers);
      })
      .catch((err) => res.status(400).json(err));
    }
}

module.exports = userController;