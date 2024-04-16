import React, { useState } from 'react'
import style from './form.module.css'
export default function Forms() {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const handleNameChange = (e) =>{
        setname(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setemail(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setpassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        console.log("Form submitted");
        let userInfo = {
            Name: name,
            Email: email,
            Password: password,
            
        }
        console.log(userInfo);
        e.preventDefault();
    }
  return (
    <div>
      <h1> Registration Forms </h1>
      <form className='p-5' action='' onSubmit={handleSubmit}>
        <div className='my-5'>
            <label htmlFor='name'>Name:  </label>
            <input type='text' value={name} name='name' id='name' onChange={handleNameChange}></input>
        </div>
        <div className='mb-3'>
            <label htmlFor='email'>Email:  </label>
            <input type='email' value={email} name='email' id='email' onChange={handleEmailChange} ></input>
        </div> 
        <div className='mb-3'>
            <label htmlFor='password'>password:  </label>
            <input type='password' value={password} name='password' id='password'  onChange={handlePasswordChange}></input>
        </div> 
        <button type='submit'  onSubmit={handleSubmit}>Register</button>
      </form>
    </div>
  )
}
