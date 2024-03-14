const express = require("express");
const router = express.Router();
const allRoutes = require("./allRoute");
const base_url = process.env.BASE_URL;
router.use(base_url, allRoutes);
router.use(base_url, (req, res) => {
  res.send({ error: "route not found" });
});

module.exports = router;
