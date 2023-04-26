
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import EditQuestionForm from './EditQuestionForm';

function QuizMaster() {
  const [questions, setQuestions] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleEditClick = questionId => {
    setSelectedQuestionId(questionId);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setSelectedQuestionId(null);
    setShowEditModal(false);
  };

  return (
    <div>
      <h1>Quiz Master</h1>
      <QuestionList questions={questions} onEditClick={handleEditClick} />
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleEditModalClose}>&times;</span>
            <h2>Edit Question</h2>
            <EditQuestionForm questionId={selectedQuestionId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizMaster;
