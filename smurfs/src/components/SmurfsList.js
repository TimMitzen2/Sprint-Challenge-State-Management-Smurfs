import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSmurf } from '../actions/actions';

const SmurfList=() =>{
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  console.log(smurfs)

  const handleDelete = (event) => {
    event.preventDefault()
    dispatch(deleteSmurf(event.target.value))
  }

  return (
    <div>
      {smurfs.map((smurf, index) => (
       
        <div  key={smurf.id} index={index}>
          <h2>Name:{smurf.name}</h2>
          <h3>age: {smurf.age}</h3>
          <h3>size: {smurf.height}</h3>
        <button onClick={handleDelete} value={smurf.id}>
            Delete
        </button>
        </div>
       
      ))}
    </div>
  )
}

export default SmurfList;