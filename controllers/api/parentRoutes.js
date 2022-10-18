const router = require("express").Router();
const Parents = require("../../models/Parents");

// GET all Parents
router.get("/", async (req, res) => {
  try {
    const parentsData = await Parents.findAll();
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new Parent
router.post("/", async (req, res) => {
  try {
    const parentsData = await Parents.create(req.body);
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one Parent
router.get("/:id", async (req, res) => {
  try {
    const parentsData = await Parents.findByPk(req.params.id);
    if (!parentsData) {
      res.status(404).json({ message: "No Parent with this id!" });
      return;
    }
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Parent
router.put("/:id", async (req, res) => {
  try {
    const parentsData = await Parents.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!parentsData[0]) {
      res.status(404).json({ message: "No Parent with this id!" });
      return;
    }
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Parent
router.delete("/:id", async (req, res) => {
  try {
    const parentsData = await Parents.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!parentsData) {
      res.status(404).json({ message: "No Parent with this id!" });
      return;
    }
    res.status(200).json(parentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
