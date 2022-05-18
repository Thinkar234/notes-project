import React from "react";
import "./Notes.css";
import { Note } from "../Note/Note";

export const Notes = () => {
  const notes = [
    {
      title: "Wykąpać psa",
      body: "pamiętaj aby wykąpać specjalnym szamponem",
      id: 234,
    },
    {
      title: "Zrobić zakupy",
      body: "kawa, whisky, piwo, mleko",
      id: 11,
    },
    {
      title: "Zagrać w grę",
      body: "np. w Tomb Raider",
      id: 11,
    },
  ];
  return (
    <div>
      <p>Moje notatki:</p>
      {notes.map((note) => {
        return <Note title={note.title} body={note.body} id={note.id} />;
      })}
    </div>
  );
};
