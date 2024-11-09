import React from "react";
import { useContext ,useState} from "react";
import NoteContext from "../context/notes/NoteContext";
const AddNote = () => {
  const context = useContext(NoteContext);
  const {  addNote } = context;
  const  [note,setNote]=useState({title:"", description:"",tag:""});

const handleClick=(e)=> {
  e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title:"",description:"",tag:""});

}
const onChangeHandler=(event)=> {
  setNote({...note,[event.target.name]:event.target.value});
}

  return (
    <div>
      <h1>Add a note</h1>

      {/* //form */}
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
            minLength={5} required
            value={note.title}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
           Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChangeHandler}
            minLength={5} required
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChangeHandler}
            minLength={5} required
            value={note.tag}  
          />
        </div>
       
        <button type="submit" disabled={(note.title.length<5 || note.description.length<5|| note.tag.length<5) && true} className="btn btn-primary" onClick={handleClick}>
         Add note
        </button>
      </form>

     
    </div>
  );
};

export default AddNote;
