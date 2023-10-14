import React, { useState } from 'react'

/**
* @author
* @function CustomHook
**/

export const CustomHook = (props) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
      };
      const submitForm = (values) => {
        console.log('Form submitted with values:', values);
      };
      const { values, handleChange, handleSubmit } = useForm(initialValues, submitForm);
    
      
      return (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={values.email} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
 

}

export const useForm=(initialValues, onSubmit)=> {
    const [values,setValues]=useState(initialValues)
    const handleChange = (e) => {
       const { name, value } = e.target;
       setValues({
         ...values,
         [name]: value,
       });
     };

   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log("submitted successfully");
   }

   return {
       values,
       handleChange,
       handleSubmit,
     };
   
 }



