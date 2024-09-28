import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
   let navigat =useNavigate()
       function ChangeEvent(){
        navigat("Login")
       }

       function Changesignup(){
        navigat("Signup")
       }

  return (
    <div className="navbar">
        <img src='data:image/png;base64,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'/>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/Course">Course</Link>
            <Link to="/Practice">Practice</Link>
            
            <Button onClick={()=>ChangeEvent()} variant='contained'>Login</Button>
            <Button onClick={()=>Changesignup()} variant='contained'>sign up</Button>
        </div>
    </div>
  )
}
