const router = require("express").Router();
const parentRoutes = require("./parentRoutes");
const enrollmentRoutes = require('./enrollmentRoutes');
const studentRoutes = require('./studentRoutes');
const subjectRoutes = require('./subjectRoutes');
const tutorRoutes = require('./tutorRoutes');
const userRoutes = require('./userRoutes');

router.use("/parents", parentRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/students", studentRoutes);
router.use("/subjects", subjectRoutes);
router.use("/tutors", tutorRoutes);
router.use("/users", userRoutes);

module.exports = router;
