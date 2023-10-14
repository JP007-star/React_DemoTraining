import React from "react";

/**
 * @author
 * @function InlineStyle
 **/

export const InlineStyle = (props) => {
  const square = {
    width: "200px",
    height: "200px",
    backgroundColor: "red",
  };
  const circle = {
    width: "200px",
    height: "200px",
    backgroundColor: "blue",
    borderRadius :"100px"
  };
  return (
    <div>
      <h1>Inline Styling</h1>
      <div style={square}></div>
      <div style={circle}></div>
      <p style={{fontWeight:"bold"}}>This is how Inline style will work in React JS</p>
     
    </div>
  );
};
