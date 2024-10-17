const express = require('express') 
const { registerController, loginController } = require('../controllers/userController');
const { AddDataController,getAllFormData } = require('../controllers/formController');
const router = express.Router()

// register
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

// Add Entry 
router.post("/AddData",AddDataController);

router.get("/listData",getAllFormData)

module.exports = router