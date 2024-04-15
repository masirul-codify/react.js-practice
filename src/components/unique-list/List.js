import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const todos = [
    {
        id: uuidv4(),
        title: "title one",
        desc: "desc one",
    },
    {
        id: uuidv4(),
        title: "title two",
        desc: "desc two",
    },    
    {
        id: uuidv4(),
        title: "title three",
        desc: "desc three",
    },
];

 const List = () => { 
  return (
    <div>
        {
            todos.map((todo) => {
                const {id,title,desc} = todo
                return <div key={id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            })
        }
    </div>
  )
};

export default List;