import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("")

    async function submitHandler (e) {
        e.preventDefault();
      await axios.post('https://glittery-dusty-balaur.glitch.me/login', {
            email, password
            
        }).then((res) => {
            setToken(res.data.data.token);
        }).catch((err) => {
            alert('nhi hua')
            console.log(err);
        });

console.log(email, password);
    }
  return (
    <div id='login'>
            <Form>
      {email} <br/>
       Email:  <input type="email" name="email" placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} />
       <br/><br/>
       {password} <br/>
       Password: <input type="password" name="password" placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}/>
       <br/><br/>
 
       <Button onClick={submitHandler} >Submit</Button>
       <Button type="reset" >Reset</Button>
      </Form>
    </div>
  )
}

export default Login
