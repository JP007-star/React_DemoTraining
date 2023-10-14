import React from 'react';
import { MyProvider, useMyContext } from '../MyContext';

const ComponentA = () => {
  const { myState, setMyState } = useMyContext();

  return (
    <div>
      <h1>Component A</h1>
      <p>My State: {myState}</p>
      <button onClick={() => setMyState('Updated Value')}>Update State</button>
    </div>
  );
};

const ComponentB = () => {
  const { myState } = useMyContext();

  return (
    <div>
      <h1>Component B</h1>
      <p>My State in Component B: {myState}</p>
    </div>
  );
};

const ContextApiDemo = () => {
  return (
    <MyProvider>
      <ComponentA />
      <ComponentB />
    </MyProvider>
  );
};

export default ContextApiDemo;
