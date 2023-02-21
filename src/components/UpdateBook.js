import React from 'react'
import {Form, Button} from 'react-bootstrap'

const UpdateBook = () => {
  return (
    <div id='updatebook'>
        <Form>
        Title: <input type="text" name="title" placeholder="Enter book title..." /> <br/><br/>
        Excerpt: <input type="text" name="excerpt" placeholder="Enter book excerpt..." /><br/><br/>
        ISBN: <input type="text" name="ISBN" placeholder="Enter book ISBN..." /><br/><br/>
        Release Date: <input type="date" name="releasedAt" placeholder='DD/MM/YYYY' /> <br/><br/>
        <Button type="submit" >Submit</Button> 
       <Button type="reset" >Reset</Button>
      </Form>
    </div>
  )
}

export default UpdateBook
