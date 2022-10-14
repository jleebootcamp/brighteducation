const router = require("express").Router();
const { Parents } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const ParentsData = await Parents.findOne({
      where: { email: req.body.email },
    });

    if (!ParentsData) {
      res
        .status(400)
        .json({ message: "Invalid email or password, please try again." });
      return;
    }

    const validPassword = await ParentsData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Invalid email or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.Parents_id = ParentsData.parent_id;
      req.session.logged_in = true;

      res.json({ Parents: ParentsData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
