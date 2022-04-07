const express = require("express");
const router = express.Router();
const {
  getNotes,
  addNotes,
  deleteNotes,
} = require("../controller/routesController");

router.get("/getNotes", getNotes);
router.post("/add", addNotes);
router.delete("/delete/:id", deleteNotes);
module.exports = router;
