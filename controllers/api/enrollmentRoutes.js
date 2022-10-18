const router = require('express').Router();
const { Enrollments, Students, Subjects, Tutors } = require('../../models');

// GET all class enrollments
router.get('/', async (req, res) => {
    try {
      const enrollmentData = await Enrollments.findAll({
        include: [{ model: Students }, { model: Subjects }, { model: Tutors }],
    });
      res.status(200).json(enrollmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single enrollment
router.get('/:id', async (req, res) => {
    try {
      const enrollmentData = await Enrollments.findByPk(req.params.id, {
        include: [{ model: Students }, { model: Subjects }, { model: Tutors }],
        attributes: {
          include: [],
        },
      });
  
      if (!enrollmentData) {
        res.status(404).json({ message: 'No enrollment found with that id!' });
        return;
      }
  
      res.status(200).json(enrollmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a new enrollment
router.post('/', async (req, res) => {
  try {
    const enrollmentData = await Enrollments.create(req.body);
    res.status(200).json(enrollmentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE an enrollment
router.put('/:id', async (req, res) => {
  try {
    const enrollmentData = await Enrollments.update(req.body, {
      where: {
        class_id: req.params.id,
      },
    });
    if (!enrollmentData[0]) {
      res.status(404).json({ message: 'No enrollment with this id!' });
      return;
    }
    res.status(200).json(enrollmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an enrollment
router.delete('/:id', async (req, res) => {
  try {
    const enrollmentData = await Enrollments.destroy({
      where: {
        class_id: req.params.id,
      },
    });
    if (!enrollmentData) {
      res.status(404).json({ message: 'No tutors with this id!' });
      return;
    }
    res.status(200).json(enrollmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;
