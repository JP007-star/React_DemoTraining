import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value (optional)
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Initial Value');

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => {
  return useContext(MyContext);
};
