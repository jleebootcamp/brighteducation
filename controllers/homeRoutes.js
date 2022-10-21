const router = require("express").Router();
const { Users, Subjects, Tutors, Students } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     // Get all subjects and JOIN with user data
//     const subjectData = await Subjects.findAll({
//       include: [{ model: Tutors}],
//     });

//     // Serialize data so the template can read it
//     const subjects = subjectData.map((subject) => subject.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('view-classes', {
//       subjects,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/my-student", async (req, res) => {
  try {
    let students = await Students.findAll({
      where: {
        student_id: 1,
      },
    });
    students = students.map((student) => student.get({ plain: true }));
    res.render("my-student", { students });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/view-classes", async (req, res) => {
  try {
    res.render("view-classes");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
