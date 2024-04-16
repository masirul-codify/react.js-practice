import React, { useState } from 'react'

export default function UsestateObj()

{const [user,setuser] = useState({name: " ", email: " ", password: " " });
const {name,email,password} = user;
const handleChange = (e) => {
    setuser({...user, [e.target.name]:[e.target.value]});
};
const handleSubmit = (e) =>{
    console.log("Form submitted");
    console.log(user);
    e.preventDefault();
};

  return (
    <div>
      <h1>Registration Form</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='p-3'>
            <label htmlFor='name' > Name : </label>
            <input value={name} type='text' name='name' id='name' onChange={handleChange}></input>
        </div>
        <div className='p-3'>
            <label htmlFor='email' > Email : </label>
            <input value={email} type='email' name='email' id='email' onChange={handleChange}></input>
        </div>
        <div className='p-3'>
            <label htmlFor='password' > Password : </label>
            <input value={password} type='password' name='password' id='password' onChange={handleChange}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
