import React from 'react'
import { Form, Button } from 'react-bootstrap'

const BookCreate = () => {
  return (
    <div id='createbook'>
      <Form>
        Title: <input type="text" name="title" placeholder="Enter book title..." /> <br/><br/>
        Excerpt: <input type="text" name="excerpt" placeholder="Enter book excerpt..." /><br/><br/>
        ISBN: <input type="text" name="ISBN" placeholder="Enter book ISBN..." /><br/><br/>
        UserId: <input type="text" name="userId" placeholder="Enter userId..." /><br/><br/>
        Category: <input type="text" name="category" placeholder='Enter book category...'/><br/><br/>
        Subcategory: <input type="text" name="subcategory" placeholder="Enter book subcategory..." /><br/><br/>
        <Button type="submit" >Submit</Button>
       <Button type="reset" >Reset</Button>
      </Form>
    </div>
  )
}

export default BookCreate
