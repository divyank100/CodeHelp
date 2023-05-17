import React, { useEffect, useState } from 'react';
import './index.css';
import { Item } from './Item';


export const Todo = () => {

    const[task,setTask]=useState([]);
    const[inputValue,setInputValue]=useState('');

    function deleteItem(index){
        const updatedTask=[...task];
        console.log(updatedTask);
        // updatedTask.splice(index,1);
        // setTask(updatedTask);
    }

    function clickHandler(){
        if(inputValue!==''){
            task.push(inputValue);
            setTask(task);
        }
        console.log(task);
        setInputValue('');
    }

    function inputHandler(event){
        setInputValue(event.target.value);
    }

return (
    <div className='todo'>
        <h1>My Todo List</h1>
        
            <div className='grp'>
                <input type='text' placeholder='Add new....' value={inputValue} onChange={inputHandler} required></input>
                <button onClick={clickHandler}>Add</button>
            </div>
        
        {
            task.map((item,index)=> <Item key={index} title={task[index]} deleteItem={deleteItem(index)}></Item>)
        }
        
    </div>
  )
}
