const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Subjects } = require('../../models');

// GET all subjects
router.get('/', async (req, res) => {
    try {
      const subjectData = await Subjects.findAll({
        include: [{ model: Subjects }],
        attributes: {
          include: [],
        },
      });
      res.status(200).json(subjectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// GET a single subject
  router.get('/:id', async (req, res) => {
    try {
      const driverData = await Subjects.findByPk(req.params.id, {
        include: [{ model: Subjects }],
        attributes: {
          include: [],
        },
      });
  
      if (!subjectData) {
        res.status(404).json({ message: 'No subject found with that id!' });
        return;
      }
  
      res.status(200).json(subjectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a new subject
router.post('/', async (req, res) => {
  try {
    const subjectData = await Subjects.create(req.body);
    res.status(200).json(subjectData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a subject
router.put('/:id', async (req, res) => {
  try {
    const subjectData = await Subjects.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!subjectData[0]) {
      res.status(404).json({ message: 'No subjects with this id!' });
      return;
    }
    res.status(200).json(subjectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a subject
router.delete('/:id', async (req, res) => {
  try {
    const subjectData = await Subjects.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!subjectData) {
      res.status(404).json({ message: 'No subjects with this id!' });
      return;
    }
    res.status(200).json(subjectData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;