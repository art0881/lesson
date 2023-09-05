import React, { useState } from 'react';
import s from './Users.module.css';


class Users extends React.Component {
     users = [
        {
     id: 1,
     name: 'Рашид',
     lastname:'Омаров' ,
     age:23 
    },
     {
     id: 2,
     name: 'Магомед',
     lastname:'Кадиев' ,
     age:22 
    }
]


render(){
    if(this.users.length>0)
  return ( 
    <div>
    {this.users.map((el)=>(
        <div className={s.block} key={el.id}>
            <h3 className={s.name}>{el.name} {el.lastname}</h3>
            <p>{el.age}</p>
            <button className={s.button}>Редактировать </button>
            <button className={s.button}>Удалить</button>
            </div>
    ))}
    </div>) 
    else
  return(<div className={s.block}>Нет пользователей</div>)
}}

export default Users