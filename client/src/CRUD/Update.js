import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('/learn/add-comments') // Assuming '/learn/comments' is the correct endpoint to fetch comments
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, []);

    return (
        <div>
            <h2 className='pt-20'>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index+1}>
                        <p><strong>{comment.username}</strong>: {comment.text}</p>
                        <p>Date: {comment.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Update;
