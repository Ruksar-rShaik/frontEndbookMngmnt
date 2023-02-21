import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function DeleteBooksById() {
    const [bookId, setBookId] = useState('');
    const [details, setDetails] = useState();

const handleBookId=(e)=>{
    setBookId(e.target.value)
}
    const handleClick = async (e) => {
        e.preventDefault();
        await axios.delete(`https://uttermost-spiffy-winterberry.glitch.me/books/${bookId}`)
            .then((response) => {
                setDetails(response.data.data);
                console.log(response.message);
            }).catch(err => alert(err.message))
    }

    return (
        <div id='deletebook'>
            <Form>
            <input value={bookId} onChange={handleBookId} placeholder="book id here"/>
            <Button type="submit" onClick={handleClick}>Delete Book</Button>
            </Form>
            <p>{details&&"Book Successfully Deleted"}</p>
                </div>
    );
}

export default DeleteBooksById