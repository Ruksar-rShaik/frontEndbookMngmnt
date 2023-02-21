import React from 'react'
import { Form, Button } from 'react-bootstrap'

const UpdateReview = () => {
    return (
        <div id='updatereview'>
            <Form>
                ReviewedBy: <input type="text" name="reviewedBy" placeholder='Enter reviewed by...' /><br /><br />

                Rating: <input type="number" name="rating" placeholder='Enter rating...' /><br /><br />
                Review:  <input type="review" name="review" placeholder='Enter review here...' /><br /><br />
                <Button type="submit" >Submit</Button>
                <Button type="reset" >Reset</Button>


            </Form>
        </div>
    )
}

export default UpdateReview
