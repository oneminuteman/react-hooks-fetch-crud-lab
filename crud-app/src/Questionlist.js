
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.content}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
