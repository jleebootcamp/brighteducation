const router = require("express").Router();
const parentRoutes = require("./parentRoutes");

router.use("/parents", parentRoutes);

module.exports = router;
