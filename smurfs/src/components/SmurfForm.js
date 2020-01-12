import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createSmurf} from '../actions/actions';

const SmurfForm = () => {
  const dispatch = useDispatch()
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  

  const handleChanges = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    
    dispatch(createSmurf(newSmurf));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Smurf Creator</h1>
      <hr />
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newSmurf.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newSmurf.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={newSmurf.height}
          onChange={handleChanges}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default SmurfForm;
