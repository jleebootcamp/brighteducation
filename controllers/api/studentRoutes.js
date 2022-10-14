const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Students } = require('../../models');

// GET all students
router.get('/', async (req, res) => {
    try {
      const studentData = await Students.findAll({
        include: [{ model: Students }],
        attributes: {
          include: [],
        },
      });
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single student
  router.get('/:id', async (req, res) => {
    try {
      const driverData = await Students.findByPk(req.params.id, {
        include: [{ model: Students }],
        attributes: {
          include: [],
        },
      });
  
      if (!studentData) {
        res.status(404).json({ message: 'No student found with that id!' });
        return;
      }
  
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;