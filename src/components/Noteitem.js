import React, { useContext } from 'react'
import Notecontext from '../context/Notecontext';

const Noteitem = (props) => 
{     const context=useContext(Notecontext);
    const {deletenote}=context;
    const {note,updatenote}=props;

  return (
    <div className="col-md-3">
      
     <div className="card">
  <div className="card-body">
  <div className=" d-flex align-item-center ">
  <h5 className="card-title">{note.title}</h5>
  <i className="fa-solid fa-trash mx-2"  onClick={()=>{deletenote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
  </div>
    
    <p className="card-text">{note.description}</p>
    
  </div>
  </div>
</div>
    
  )
}

export default Noteitem
