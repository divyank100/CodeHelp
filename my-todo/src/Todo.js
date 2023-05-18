import React, { useEffect, useState } from 'react';
import './index.css';
import { Item } from './Item';
import { Empty } from './Empty';


export const Todo = () => {

    const[task,setTask]=useState([]);
    const[inputValue,setInputValue]=useState('');
    const[date,setDate]=useState(new Date());

    function deleteItem(index){
        console.log("Delete");
        const updatedTask=[...task];
        updatedTask.splice(index,1);
        setTask(updatedTask);
        console.log(updatedTask);
    }

    function clickHandler(){
        if(inputValue!==''){
            task.push(inputValue);
            setTask(task);
            setDate(new Date().toLocaleTimeString());
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
            task.length==0 ? <Empty></Empty> : (task.map((item,index)=> <Item  key={index} id={index} title={task[index]} deleteItem={deleteItem} date={date}></Item>))
        }
        
    </div>
  )
}
