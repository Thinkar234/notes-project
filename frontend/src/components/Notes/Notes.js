import React, { useState } from "react";
import "./Notes.css";
import { Note } from "../Note/Note";
import { NewNote } from "../NewNote/NewNote";
import axios from "../../axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export const Notes = () => {
  const [task, setTask] = useState([]);

  const deleteNote = async (id) => {
    console.log("Usuwanie notatki", id);
    await axios.delete("/notes/" + id);
    fetchNotes();
  };

  const addNote = async (note) => {
    try {
      const res = await axios.post("/notes", note);
      console.log(res.data);
      fetchNotes();
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  };

  const fetchNotes = async () => {
    const res = await axios.get("/notes");
    const data = res.data;
    setTask(data);
  };

  return (
    <div>
      <NotificationContainer />
      <p>Moje notatki:</p>
      <button onClick={fetchNotes}>Pobierz notatki</button>
      <NewNote onAdd={addNote} />
      {task.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            body={note.body}
            onDelete={(id) => deleteNote(id)}
          />
        );
      })}
    </div>
  );
};
