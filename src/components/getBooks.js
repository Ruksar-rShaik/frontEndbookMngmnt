import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function GetBooks() {
    const [userId, setUserId] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [details, setDetails] = useState('');

    const handleUidChange = (event) => {
        setUserId(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        console.log(`Email: ${category}`);
    };

    const handleSubcategoryChange = (event) => {
        setSubcategory(event.target.value)

    };

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post('https://uttermost-spiffy-winterberry.glitch.me/book', {}, {
            params: {
                userId,
                category,
                subcategory
            }
        })
            .then((response) => {
                setDetails(response.data.data);
                console.log(details);
                console.log(response.message);
            }).catch(err => alert(err.message))
        console.log(category);
    }

    return (
        <div id='getbooks'>
            <Form >

                UserId : <input type="text" value={userId} onChange={handleUidChange} required />
                <br /><br />
                Category : <input type="text" value={category} onChange={handleCategoryChange} required />
                <br /><br />
                Sub Category : <input type="text" value={subcategory} onChange={handleSubcategoryChange} required />
                <br /><br />
                <Button type="submit" onClick={handleClick}>Get Books</Button>
                <li id='bookdetails'>{details.length > 0 && details.map(x => <p id='books'>
                    Title -{JSON.stringify(x.title)}<br /><br />
                    User Id -{JSON.stringify(x.userId)}<br /><br />
                    Category -{JSON.stringify(x.category)} </p>)}</li>
            </Form>
        </div>
    );
}

export default GetBooks