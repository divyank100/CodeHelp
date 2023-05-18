import React from 'react';
import './index.css';
import {RiDeleteBin5Fill} from 'react-icons/ri';

export const Item = (props) => {

  return (
    <div className='item'>
        <p>{props.title}</p>
        <div className='date'>
            <RiDeleteBin5Fill className='icon' onClick={()=>props.deleteItem(props.id)}></RiDeleteBin5Fill>
            <p>Created at:  {props.date}</p>
        </div>
        
    </div>
  )
}
