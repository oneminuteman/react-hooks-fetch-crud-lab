
import React, { useState } from 'react';
import axios from 'axios';

function NewQuestionForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const question = { title, content };
    axios.post('http://localhost:4000/questions', question)
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

export default NewQuestionForm;
