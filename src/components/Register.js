import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

import React, { useState } from 'react'

const Register = () => {
    const [title, setTitle] = useState("");
    const [name, setName] =useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

const address = {
    street: street,
    city: city,
    pincode: pincode
}
async function submitHandler (e) {
  
        e.preventDefault();
      await axios.post('https://glittery-dusty-balaur.glitch.me/register', {
           title, name, email, phone, password , address
            
        }).then((res) => {
            console.log(res.data);
            alert('ho gya')
        }).catch((err) => {
            
            console.log(err);
        });
    }

  return (
    <div>
      <Form>
        {title} <br/>
        Title: <input  type="text" name='title' placeholder='Enter title here...' onChange={(e) =>setTitle(e.target.value)}/>
        <br/><br/>
       Name:  <input  type="text" name="name" placeholder='Enter your name...' onChange={(e) =>setName(e.target.value)}/>
       <br/><br/>
       Phone: <input  type="number" name="phone" placeholder='Enter phone number...' onChange={(e) =>setPhone(e.target.value)} />
       <br/><br/>
       Email:  <input  type="email" name="email" placeholder='Enter your email...' onChange={(e) =>setEmail(e.target.value)}/>
       <br/><br/>
       Password: <input  type="password" name="password" placeholder='Enter your password...' onChange={(e) =>setPassword(e.target.value)}/>
       <br/><br/>
       Address: <br/>
       Street: <input  type="text" name="street" placeholder='Enter Street name...' onChange={(e) =>setStreet(e.target.value)}/>
       <br/><br/>
       City: <input  type="text" name="city" placeholder='Enter city name...' onChange={(e) =>setCity(e.target.value)}/>
       <br/><br/>
       Pincode: <input  type="number" name='pincode' placeholder='Enter pincode...' onChange={(e) =>setPincode(e.target.value)}/>
       <br/><br/>
       <Button  onClick={submitHandler} >Submit</Button>
       <Button  type="reset" >Reset</Button>
      </Form>
    </div>
  )
}

export default Register
