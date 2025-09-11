import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMGJjNmJjMzUxNmM4NWM2YzllODc5In0sImlhdCI6MTc1NzQ2MTYxMX0.sofFYjaSL1jk2P2Umz1nI3w_rsbq46xsit03Ilqx9B4"
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMGJjNmJjMzUxNmM4NWM2YzllODc5In0sImlhdCI6MTc1NzQ2MTYxMX0.sofFYjaSL1jk2P2Umz1nI3w_rsbq46xsit03Ilqx9B4"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMGJjNmJjMzUxNmM4NWM2YzllODc5In0sImlhdCI6MTc1NzQ2MTYxMX0.sofFYjaSL1jk2P2Umz1nI3w_rsbq46xsit03Ilqx9B4"
      }
    });
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjMGJjNmJjMzUxNmM4NWM2YzllODc5In0sImlhdCI6MTc1NzQ2MTYxMX0.sofFYjaSL1jk2P2Umz1nI3w_rsbq46xsit03Ilqx9B4"
      },
      body: JSON.stringify({ title, description, tag })
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
