const User = require("../models/user");

// creating new user
exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  console.log(name);
  User.create({
    name: name,
    email: email,
    address: address,
  })
    .then((result) =>
      res.status(201).json({
        message: "User created successfully!",
        result: result,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: "Error!",
        // message: err.message,
        error: err,
      })
    );
};

// retrieving all users from the database
exports.findAllUsers = (req, res, next) => {
  User.findAll()
    .then((result) => {
      if (result.length !== 0) {
        res.status(200).json({
          message: "Users found successfully!",
          result: result,
        });
      } else {
        res.status(404).json({
          message: "No user found!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving user profiles",
        error: err,
      });
    });
  // res.status(200).json({
  //   message: "Users found successfully!",
  // });
};

// finding a single user with an id
exports.findUser = (req, res, next) => {
  const id = req.params.id;
  //const id = req.body.id;

  User.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User found successfully!",
          result: result,
        });
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error retrieving user profile with id = ${id}`,
        error: err,
      });
    });
};

// updating a user by the id
exports.updateUser = (req, res, next) => {
  const id = req.params.id;

  User.update(req.body, { where: { id: id } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User updated successfully!",
          result: result,
        });
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error updating user profile with id = ${id}`,
        error: err,
      });
    });
};

// deleting a user with the id
exports.deleteUser = (req, res, next) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User profile removed successfully!",
          result: result,
        });
      } else {
        res.status(404).json({
          message:
            "Error removing user profile!\nMay be user profile is not present.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error!",
        error: err,
      });
    });
};

// delete all users from the database
exports.deleteAllUsers = (req, res, next) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "All user profiles removed successfully!",
          result: result,
        });
      } else {
        res.status(404).json({
          message:
            "Error removing user profiles!\nMay be no user profile is present.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error!",
        error: err,
      });
    });
};
