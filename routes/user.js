const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

// router.get("/test", (req, res, next) => {
//   res.status(201).json({
//     message: "Chal raha hai!",
//   });
// });

// for getting all user profiles
router.get("/all", userController.findAllUsers);

// for getting a user profile by id
router.get("/find-user/:id", userController.findUser);

// for adding a user profile
router.post("/create-user", userController.createUser);

// for updating a user profile
router.put("/update-user/:id", userController.updateUser);

// for deleting a user profile by id
router.delete("/remove-user/:id", userController.deleteUser);

// for deleting a user profile by id
router.delete("/remove-all", userController.deleteAllUsers);

module.exports = router;
