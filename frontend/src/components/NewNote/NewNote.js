import React, { useState } from "react";

export const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const addItem = () => {
    const note = {
      title: title,
      body: desc,
    };
    props.onAdd(note);
    setTitle("");
    setDesc("");
    setShowForm(false);
  };

  return showForm ? (
    <div className="note">
      <label>Tytuł: </label>
      <input type="text" value={title} onChange={titleHandler} /> <br />
      <label>Opis: </label>
      <input type="text" value={desc} onChange={descHandler} /> <br />
      <button onClick={addItem}>Dodaj</button>
    </div>
  ) : (
    <button onClick={() => setShowForm(!showForm)}>Nowa notatka</button>
  );
};
