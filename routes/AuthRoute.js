const express = require('express');
const AuthController =  require ('../controllers/Auth');
const router = express.Router();

router.get('/me', AuthController.Me);
router.post('/login', AuthController.Login);
router.delete('/logout', AuthController.logOut);

module.exports = router;