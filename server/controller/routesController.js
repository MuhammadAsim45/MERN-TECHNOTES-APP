const notes = require("../model/notes");
const mongoose = require("mongoose");
const getNotes = async (req, res) => {
  try {
    const getnotes = await notes.find({}, { title: true, content: true });
    res.status(200).send(getnotes);
  } catch (error) {
    res.status(501).send(error.message);
  }
};
const addNotes = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = await new notes({ title, content });
    const addedNote = await newNote.save();
    res.status(201).send({ message: "notes added succesfully", addedNote });
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const deleteNotes = async (req, res) => {
  const _id = req.params.id;
  try {
    const note = await notes.findByIdAndDelete({ _id });
    res.status(202).send("deleted succesfully");
  } catch (error) {
    res.status(501).send(error.message);
  }
};

module.exports = { getNotes, addNotes, deleteNotes };
