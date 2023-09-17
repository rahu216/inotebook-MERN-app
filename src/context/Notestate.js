// eslint-disable-next-li

import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const host = "https://inotebook-crud-appp.onrender.com"

  const noteinitial = []
  const [notes, setnotes] = useState(noteinitial)

  //delte  a note
  const deletenote = async(id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token') 
      }
    });
    const json = response.json(); 
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote)
  }
  //fetch a note
  const getnote = async () => {
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token') 
      }});
    const json = await response.json();
    console.log(json);
    setnotes(json);

  }

  //add a note 
  const addnote = async (title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token') 
      },
      body: JSON.stringify({ title, description, tag })
    });


    const note = await response.json();
    setnotes(notes.concat(note))
  }

  //edit a note
  const editnote = async (id, title, description, tag) => {


    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
"auth-token":localStorage.getItem('token')     },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      // api call


      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
      setnotes(newNotes);
    }
  }
  return (


    <Notecontext.Provider value={{ notes, deletenote, getnote ,addnote, editnote }}>
      {props.children};
    </Notecontext.Provider>
  )


}

export default Notestate;