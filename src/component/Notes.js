import React from 'react'
import {useState,useContext,useRef} from 'react'
import NoteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useEffect } from 'react';
const Notes = () => {
    const context=useContext(NoteContext);
    const {notes,getNotes,editNote}=context;
    useEffect(()=> {
      getNotes()
      // eslint-disable-next-line
    },[])
    const ref=useRef(null);
    const refClose=useRef(null);

    const  [note,setNote]=useState({id:"",etitle:"", edescription:"",etag:""});
    
    const updateNote=(currnotes)=> {
      ref.current.click();
      
      setNote({id:currnotes._id,etitle:currnotes.title, edescription:currnotes.description,etag:currnotes.tag} )
    }
    const handleClick=(e)=> {
      console.log("Updated")
      editNote(note.id,note.etitle,note.edescription,note.etag);
      refClose.current.click()
    }
    const onChangeHandler=(event)=> {
      setNote({...note,[event.target.name]:event.target.value});
    }
    

  return (
    <>
    <AddNote/>
    

<button type="button"  ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {/* modal body */}
      <form>
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Title
          </label>
          <input
            type="etext"
            className="form-control"
            id="etitle"
            name="etitle"
            aria-describedby="emailHelp"
            value={note.etitle}
            onChange={onChangeHandler}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
           Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            value={note.edescription}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
           
            onChange={onChangeHandler}
          />
        </div>
    
      </form>
{/* modal body end */}
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update note</button>
      </div>
    </div>
  </div>
</div>


    <div className="row my-3">
    {notes.map((note)=> {   
       return <NoteItem note={note} key={note._id} updateNote={updateNote}/>
     })}
    </div>
    </>
  )
}

export default Notes