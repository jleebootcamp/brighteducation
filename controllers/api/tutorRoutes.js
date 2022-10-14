const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tutors } = require('../../models');

// GET all tutors
router.get('/', async (req, res) => {
    try {
      const tutorData = await Tutors.findAll({
        include: [{ model: Tutors }],
        attributes: {
          include: [],
        },
      });
      res.status(200).json(tutorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// GET a single tutor
  router.get('/:id', async (req, res) => {
    try {
      const driverData = await Tutors.findByPk(req.params.id, {
        include: [{ model: Tutors }],
        attributes: {
          include: [],
        },
      });
  
      if (!tutorData) {
        res.status(404).json({ message: 'No tutor found with that id!' });
        return;
      }
  
      res.status(200).json(tutorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a new tutor
router.post('/', async (req, res) => {
  try {
    const tutorData = await Tutors.create(req.body);
    res.status(200).json(tutorData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a tutor
router.put('/:id', async (req, res) => {
  try {
    const tutorData = await Tutors.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tutorData[0]) {
      res.status(404).json({ message: 'No tutors with this id!' });
      return;
    }
    res.status(200).json(tutorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a tutor
router.delete('/:id', async (req, res) => {
  try {
    const tutorData = await Tutors.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tutorData) {
      res.status(404).json({ message: 'No tutors with this id!' });
      return;
    }
    res.status(200).json(tutorData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;