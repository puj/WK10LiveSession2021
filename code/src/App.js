import React, { useState } from 'react';

import Form from './components/Form';

export const App = () => {
  // const [newCounter, setNewCounter] = useState(0);

  // const onCounterIncrease = () => {
  //   setNewCounter(newCounter + 1);
  // }

  return (
    <div>
      {/* <div>Current value of newCounter : {newCounter}</div>
      <button onClick={onCounterIncrease}>Click me to increase counter!</button> */}
      <Form />
    </div>
  )
}