const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Students, Enrollments } = require('../../models');

// GET all students
router.get('/', async (req, res) => {
    try {
      const studentData = await Students.findAll(
        {
        include: [{ model: Enrollments }],
        attributes: {
          include: [],
        },
        }
      );
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single student
  router.get('/:id', async (req, res) => {
    try {
      const studentData = await Students.findByPk(req.params.id, 
        {
        include: [{ model: Enrollments }],
        attributes: {
          include: [],
        },
        }
      );
  
      if (!studentData) {
        res.status(404).json({ message: 'No student found with that id!' });
        return;
      }
  
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a new student
router.post('/', async (req, res) => {
  try {
    const studentData = await Students.create(req.body);
    res.status(200).json(studentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a student
router.put('/:id', async (req, res) => {
  try {
    const studentData = await Students.update(req.body, {
      where: {
        student_id: req.params.id,
      },
    });
    if (!studentData[0]) {
      res.status(404).json({ message: 'No student with this id!' });
      return;
    }
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a student
router.delete('/:id', async (req, res) => {
  try {
    const studentData = await Students.destroy({
      where: {
        student_id: req.params.id,
      },
    });
    if (!studentData) {
      res.status(404).json({ message: 'No student with this id!' });
      return;
    }
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;