
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditQuestionForm({ questionId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/questions/${questionId}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => console.log(error));
  }, [questionId]);

  const handleSubmit = event => {
    event.preventDefault();
    const question = { title, content };
    axios.put(`http://localhost:4000/questions/${questionId}`, question)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditQuestionForm;
