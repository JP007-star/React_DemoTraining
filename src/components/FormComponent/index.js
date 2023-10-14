import React, { useState } from 'react'

/**
* @author
* @function FormComponent
**/

export const FormComponent = (props) => {

  const [formData,setFormData]=useState({
    "name" :"",
    "email" :""
  })

  const [errors,setErrors]=useState({
    'name' : ''
  })

 

  const handleInput=(e)=>{
     const {name,value} =e.target;
     setFormData({
        ...formData,
        [name] :value
     })
     if (name === 'name') {
        if (value.length < 3) {
          setErrors({
            ...errors,
            name: 'Username must be at least 3 characters long.',
          });
        } else {
          setErrors({
            ...errors,
            name: '',
          });
        }
      }
  }
  const handleSubmit=(e) =>{
    e.preventDefault()
    console.log(formData);
  }
  return(
   
    <>
     <h1 onMouseLeave={(e)=>{console.log(e.target.textContent);}}>Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <label for='name'/> Name:
        <input 
        name='name'
        type='text'
        value={formData.name}
        onChange={handleInput}
        />
        <div style={{ color: 'red' }}>{errors.name}</div>
       <br></br>
        <label for='email'/> Email:
        <input 
        name='email'
        type='text'
        value={formData.email}
        onChange={handleInput}
        />
        <br></br>
        <button type='submit' disabled={!!errors.name}>Submit</button>
       
      </form>
    </>
   )

 }