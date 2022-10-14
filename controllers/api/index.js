const router = require("express").Router();
const parentRoutes = require("./parentRoutes");
const enrollmentRoutes = require('./enrollmentRoutes');
const studentRoutes = require('./studentRoutes');
const subjectRoutes = require('./subjectRoutes');
const tutorRoutes = require('./tutorRoutes');

router.use("/parents", parentRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/students", studentRoutes);
router.use("/subjects", subjectRoutes);
router.use("/tutors", tutorRoutes);

module.exports = router;
