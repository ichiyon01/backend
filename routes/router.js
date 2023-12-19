const express = require("express");
const router = express.Router();

const AuthRoute = require ('../routes/AuthRoute');
const ProductRoute = require ('../routes/ProductRoute');
const UserRoute = require ('../routes/UserRoute');
const Auth = require("../middleware/AuthUser");

router.post(Auth);

router.use("/auth", AuthRoute);
router.use("/product", ProductRoute);
router.use("/user", UserRoute);

module.exports = router;