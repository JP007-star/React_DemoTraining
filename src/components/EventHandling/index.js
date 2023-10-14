import React, { useState } from "react";

/**
 * @author
 * @function EventHandling
 **/

export const EventHandling = (props) => {
  const [name, setName] = useState();
  const handleClickEvent = (e) => {
    console.log(e.target.textContent);
  };
  const handleInputChangeEvent =(e)=>{
    console.log(e.keyCode);
  }
  const handleFormEvent=(e)=>{
    console.log(e);
  }

  return (
    <>
      <h1 onClick={handleClickEvent}>EventHandling</h1>
     
      <input
        type="text"
        name="name"
        value={name}
        onKeyDown={handleInputChangeEvent}
      />

      <button onClick={handleClickEvent}>Click me</button>
      <form onSubmit={handleFormEvent}>
        <input  type="text" name="name" value={name} onChange={handleClickEvent}/>
        <button >Click </button>
      </form>
    </>
  );
};
