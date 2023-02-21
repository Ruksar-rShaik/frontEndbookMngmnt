import React from 'react'
import { Form, Button } from 'react-bootstrap'

const CreateReview = () => {
  return (
    <div id='createreview'>
      <Form>
    BookId: <input type="text" name="bookId" placeholder='Enter book id...' /> <br/><br/>
    ReviewedBy: <input type="text" name="reviewedBy" placeholder='Enter reviewed by...' /><br/><br/>
    ReviewedAt: <input type="date" name="reviewedAt" placeholder='Enter reviewed at...' /><br/><br/>
    Rating: <input type="number" name="rating" placeholder='Enter rating...' /><br/><br/>
    Review:  <input type="review" name="review" placeholder='Enter review here...' /><br/><br/>
    <Button type="submit" >Submit</Button> 
       <Button type="reset" >Reset</Button>


      </Form>
    </div>
  )
}

export default CreateReview
