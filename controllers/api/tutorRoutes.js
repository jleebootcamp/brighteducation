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
  
  module.exports = router;