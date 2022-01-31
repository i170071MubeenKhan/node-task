const User = require("../models/user");
const logger = require(".././util/logger").logger;

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
    .then((result) => {
      res.status(201).json({
        message: "User created successfully!",
        result: result,
      });
      //adding log
      logger.info("user created!");
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error!",
        // message: err.message,
        error: err,
      });
      //adding log
      logger.error(`user not created! - ${err.message}`);
    });
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
        //adding log
        logger.info("users found!");
      } else {
        res.status(404).json({
          message: "No such user found!",
        });
        //adding log
        logger.warn("users not found!");
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving users profiles",
        error: err,
      });
      //adding log
      logger.error(`couldn't retrieve users - ${err.message}`);
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
        //adding log
        logger.info(`user found having id:${id}!`);
      } else {
        res.status(404).json({
          message: "User not found!",
        });
        //adding log
        logger.warn(`user not found having id:${id}!`);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error retrieving user profile with id = ${id}`,
        error: err,
      });
      //adding log
      logger.error(`couldn't retrieve user having id:${id}! - ${err.message}`);
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
        //adding log
        logger.info(`user updated having id:${id}!`);
      } else {
        res.status(404).json({
          message: "User not found!",
        });
        //adding log
        logger.warn(`user not found having id:${id}!`);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error updating user profile with id = ${id}`,
        error: err,
      });
      //adding log
      logger.error(`couldn't update user having id:${id}! - ${err.message}`);
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
        //adding log
        logger.info(`user profile removed having id:${id}!`);
      } else {
        res.status(404).json({
          message:
            "Error removing user profile!\nMay be user profile is not present.",
        });
        //adding log
        logger.warn(`user not found having id:${id}!`);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error!",
        error: err,
      });
      //adding log
      logger.error(
        `couldn't remove user profile having id:${id}! - ${err.message}`
      );
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
        //adding log
        logger.info("all users profiles removed");
      } else {
        res.status(404).json({
          message:
            "Error removing user profiles!\nMay be no user profile is present.",
        });
        //adding log
        logger.warn("users not found to remove");
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error!",
        error: err,
      });
      //adding log
      logger.error(`Server error! ${err.message}`);
    });
};
