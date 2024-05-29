import React, { useState } from "react";
import {addTodo ,removeTodo} from '../actions/index';
import {useDispatch} from 'react-redux';


export default function TaskInput() {
  const  [inputData, setinputData] = useState('');
  const dispatch=useDispatch();
  const handleForm=(e)=>{
    e.preventDefault();
    if (inputData.trim() === '') {
      alert('Task cannot be empty!');
      return;
    } else {
      dispatch(addTodo(inputData));
      setinputData('');
    }
  }
  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Add your task
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            value={inputData}
            onChange={(event)=>{setinputData(event.target.value)}}
            aria-describedby=""
          />
        </div>

        {/* <button type="submit" className="btn btn-dark rounded-1 me-2" onClick={()=>dispatch(addTodo(inputData),setinputData(''))}> */}
        <button type="submit" className="btn btn-light rounded-1 me-2" >
          Add Task
        </button>
        <button type="button" className="btn btn-light rounded-1" onClick={handleRemoveAll}>
          Remove All
        </button>
      </form>
    </>
  );
}
