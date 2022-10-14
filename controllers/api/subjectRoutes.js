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
  
  module.exports = router;