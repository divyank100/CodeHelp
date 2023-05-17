import React from 'react';
import './index.css';
import {RiDeleteBin5Fill} from 'react-icons/ri';

export const Item = ({title,deleteItem}) => {

  return (
    <div className='item'>
        <p>{title}</p>
        <RiDeleteBin5Fill className='icon' onClick={deleteItem}></RiDeleteBin5Fill>
    </div>
  )
}
