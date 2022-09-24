import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Map() {
  const { app } = useContext(AppContext);
  return (
    <div className='headline>'>
      <h4> Map Element Here </h4>
      <pre>App: {JSON.stringify(app, null, 2)}</pre>
    </div>
  );
}
