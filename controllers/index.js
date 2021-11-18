const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashRoutes = require("./dashboardRoutes");

router.use("/dashboard", dashRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
