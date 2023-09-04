import { useContext } from "react"
import React  from 'react'
import notecontext from "../context/Notecontext"
import Note from "./Note"
import Addnote from "./Addnote"

const Home = () => {

  return (
    <>
      <div>
         
          <Note/>
        
      
    </div>
    </>
  )
}

export default Home
