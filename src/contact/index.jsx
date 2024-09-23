import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h3>Contact Me</h3>
        <p>Email: tadesseakele27@gmail.com</p>

        <br /> 
        <button onClick={() => navigate('/', {replace: true})}>
          Back to Home
        </button>
    </div>
  )
}

export default Contact