import React, { useContext, useState } from 'react'
import notecontext from "../context/Notecontext"

const Addnote = () => {
    
    const context = useContext(notecontext)
    const{addnote}=context;
    const [note,setNote] = useState({title:"",description:"",tag:""})
    const handelclick=(e)=>{
        e.preventDefault();
       addnote(note.title,note.description,note.tag);
       setNote({title: "", description: "", tag: ""})
    }
    const onchange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})
    }
  
  return (
    <div>

         <h1 className='my-3'>Add  a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onchange} />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} />
          </div>
       
       
          <button type="submit" className="btn btn-primary" onClick={handelclick}>Add Note</button>
        </form>

    </div>
  )
}

export default Addnote
