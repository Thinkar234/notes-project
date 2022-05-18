const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (err) {
    console.log(err);
  }
};

const getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findOne({ _id: id });
    if (!note) {
      return res.status(404).json({ msg: `No task with id ${id}` });
    }

    res.status(200).json(note);
  } catch (err) {
    console.log(err);
  }
};

const addNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    const note = await Note.create({ title, body });
    res.status(201).json({ note });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findOneAndUpdate({ _id: id }, req.body);
    if (!note) {
      return res.status(404).json({ msg: `No task with id ${id}` });
    }

    res.status(201).json({ note });
  } catch (err) {
    console.log(err);
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findOneAndRemove({ _id: id });
    if (!note) {
      return res.status(404).json({ msg: `No task with id ${id}` });
    }
    res.sendStatus(204);
    //res.status(200).json({ note, msg: `Usunięto notakę o numerze id ${id}` });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllNotes,
  getSingleNote,
  addNote,
  updateNote,
  deleteNote,
};
