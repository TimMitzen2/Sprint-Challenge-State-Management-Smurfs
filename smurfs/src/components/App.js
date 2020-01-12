import React, { useEffect } from "react";
import SmurfList from './SmurfsList';
import SmurfForm from './SmurfForm';
import { useDispatch } from 'react-redux';
import { getSmurfs } from '../actions/actions';
 
const App =() =>{
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSmurfs())
  }, [dispatch])

  return (
    <div className="App">
      <SmurfForm />
     <SmurfList /> 
    </div>
  );
}

export default App;
