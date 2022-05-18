const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getSingleNote,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes-controller");

router.get("/notes", getAllNotes);
router.get("/notes/:id", getSingleNote);
router.post("/notes", addNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
