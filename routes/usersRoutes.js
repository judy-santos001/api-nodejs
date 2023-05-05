const controller = require("../controller/usersController");
const express = require("express");

const router = express.Router();
router.get("/:name", controller.findByNameUser);

router.get("/:email", controller.findByUserEmail);

//-------------------------------------------------------------

router.get("/all", controller.findAllUsers);

router.get("/:id", controller.findUserById);

router.post("/add", controller.addNewUser);
router.put("/:id",controller.updateUserPassword)

router.patch("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser);



module.exports = router;