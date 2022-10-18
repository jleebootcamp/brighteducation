const router = require("express").Router();
const { Parents, Users, Students } = require("../../models");

// GET all parents
router.get('/', async (req, res) => {
  try {
    const parentData = await Parents.findAll({
      include: [{ model: Users }, { model: Students }],
      attributes: {
        include: [],
      },
    });
    res.status(200).json(parentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single parent
router.get('/:id', async (req, res) => {
  try {
    const parentData = await Parents.findByPk(req.params.id, {
      include: [{ model: Users }, { model: Students }],
      attributes: {
        include: [],
      },
    });

    if (!parentData) {
      res.status(404).json({ message: 'No parent found with that id!' });
      return;
    }
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new parent
router.post('/', async (req, res) => {
try {
  const parentData = await Parents.create(req.body);
  res.status(200).json(parentData);
} catch (err) {
  res.status(400).json(err);
}
});

// UPDATE a parent
router.put('/:id', async (req, res) => {
try {
  const parentData = await Parents.update(req.body, {
    where: {
    parent_id: req.params.id,
    },
  });
  if (!parentData[0]) {
    res.status(404).json({ message: 'No parent with this id!' });
    return;
  }
  res.status(200).json(parentData);
} catch (err) {
  res.status(500).json(err);
}
});

// DELETE a parent
router.delete('/:id', async (req, res) => {
try {
  const parentData = await Parents.destroy({
    where: {
      parent_id: req.params.id,
    },
  });
  if (!parentData) {
    res.status(404).json({ message: 'No parent with this id!' });
    return;
  }
  res.status(200).json(parentData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
