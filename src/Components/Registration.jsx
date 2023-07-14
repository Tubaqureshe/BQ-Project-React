import React from 'react'
import { SiReact } from 'react-icons/si'
import { Link } from 'react-router-dom'


export default function Registration() {
  return (
   <>
   <style>
    {`
    .button-space {
        margin-left: 10px;
      }
     
    `}
   </style>
   <div className='container text-center'>
    <SiReact  size={70} color='red' />
    <h2>Welcome to FaceBook</h2>
    <p>Log in with your OpenAI account to continue</p>
    <div className="button-group">
        <Link to="/signin">
  <button type="button" className="btn btn-success mr-2">
    Sign Up
  </button>
</Link>
      </div>
   </div>

   </>
  )
}
