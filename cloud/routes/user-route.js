const express = require("express");
const router = express.Router();

const UserManager = require("../managers/user-manager");



router.post("/edit", UserManager.editUser);
router.post("/delete", UserManager.deleteUser);
router.get("/allUsers", UserManager.allUsers);
router.post("/addNewUser", UserManager.addNewUser);
router.post("/filterByRole", UserManager.filterByRole);
router.post("/inputSearch", UserManager.inputSearch);



module.exports = router;