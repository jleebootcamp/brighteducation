const router = require('express').Router();
const { Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try{
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try{
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/my-student', async (req, res) => {
  try{
    res.render('my-student');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try{
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/view-classes', async (req, res) => {
  try{
    res.render('view-classes');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;