import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context=useContext(NoteContext);
    const {deleteNote}=context;
    const {note,updateNote}= props;
  return (
    <div className="col-md-3 my-3"  >
   <div className="card" style={{width:"18rem"}}>
  
  <div className="card-body">
    <div className="d-flex justify-content-between">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
    </div>
    
    <p className="card-text">{note.description}</p>
    
<i className="fa-solid fa-trash mx-2" onClick={()=> {deleteNote(note._id)}} ></i>

   </div>
</div>
    </div>
  )
}

export default NoteItem;