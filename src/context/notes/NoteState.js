import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
  const host="http://localhost:5000"
  const notesInitial=[
    {
      "_id": "672754ac4d35342e39e08ac82",
      "user": "672668ec1144cec2a5ddd5b5",
      "title": "New Note by This is Chandana's title",
      "description": "Chandana is the name of my mother and I am Preetham",
      "tag": "nothing new",
      "date": "2024-11-03T10:47:08.562Z",
      "__v": 0
    },
    {
      "_id": "67277344e1578aa9681048fe2",
      "user": "672668ec1144cec2a5ddd5b5",
      "title": "New Note by This is Chandana's title",
      "description": "Chandana is the name of my mother and I am Preetham",
      "tag": "nothing new",
      "date": "2024-11-03T12:57:40.371Z",
      "__v": 0
    },
    {
      "_id": "672773a37016b1410f974f35a",
      "user": "672668ec1144cec2a5ddd5b5",
      "title": "New Note by someone else--=-=-=-=- ",
      "description": "Chandana is the name of my mother and I am Preetham",
      "tag": "nothing new",
      "date": "2024-11-03T12:59:15.241Z",
      "__v": 0
    },
    {
      "_id": "6728c6388fc0729edb7965f3f",
      "user": "672668ec1144cec2a5ddd5b5",
      "title": "New Note by someone else--=-=-=-=- ",
      "description": "Chandana is the name of my mother and I am Preetham",
      "tag": "nothing new",
      "date": "2024-11-04T13:03:52.542Z",
      "__v": 0
    },
    {
        "_id": "6728c6388fc0729edb7967f3f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796wf3f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796f36f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796f37f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb7946f3f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796f3f6",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796f323f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
      {
        "_id": "6728c6388fc0729edb796f356f",
        "user": "672668ec1144cec2a5ddd5b5",
        "title": "New Note by someone else--=-=-=-=- ",
        "description": "Chandana is the name of my mother and I am Preetham",
        "tag": "nothing new",
        "date": "2024-11-04T13:03:52.542Z",
        "__v": 0
      },
  ];
    
  const [notes,setNotes]=useState(notesInitial);

//get all notes
const getNotes=async ()=> {
  //to DO- API CALL
  //API CALL
    const response=await fetch(`${host}/api/notes/fetchallnotes`, {
      method:"GET",
      headers: {
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token'),
      },
      
    });
const json=await response.json()

setNotes(json)

}




//add note
const addNote=async (title,description,tag)=> {
  //to DO- API CALL
  //API CALL
    const response=await fetch(`${host}/api/notes/addnote`, {
      method:"POST",
      headers: {
        'Content-Type':'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag})
    });

const note=await response.json();
setNotes(notes.concat(note));

}



//edit note
const editNote= async (id,title,description,tag)=> {
  //API CALL
const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      localStorage.getItem('token'),
  },
  body: JSON.stringify({ title, description, tag }),
});
const json= await response.json();



  const newNote=JSON.parse(JSON.stringify(notes));
  //logic to edit in client
   for(let index= 0 ; index<newNote.length ; index++) {
    const element=newNote[index];
    if(element._id===id) {
      newNote[index].title=title;
      newNote[index].description=description;
      newNote[index].tag=tag;
      break;
    }
   }
   setNotes(newNote);
}

//delete note
const deleteNote=async (id)=> {

  //TO DO API CALL
  const response=await fetch(`${host}/api/notes/deletenote/${id}`, {
    method:"DELETE",
    headers: {
      'Content-Type':'application/json',
      "auth-token": localStorage.getItem('token')
    },
   
  });
  const json= await response.json();





const newNotes=notes.filter((notes)=> {
  return (notes._id!==id);
 })
 setNotes(newNotes);
}

    return (
        <NoteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;