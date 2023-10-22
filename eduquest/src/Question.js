import React, { useState,useEffect } from 'react';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: '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',dangerouslyAllowBrowser: true});

const levelsData = [
  {
    questions: ['What is 2 + 2?', 'What is 3*3?'],
    answers: [4, 9],
  },
  // Add more levels, questions
];

function Question({ level, setCurrentLevel }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [question,setQuestion] = useState('');
  const questions = levelsData[level].questions;
  const correctAnswers = levelsData[level].answers;

  const handleAnswerSubmission = () => {
    const expectedAnswer = correctAnswers[currentQuestionIndex];
    const isAnswerCorrect =
      typeof expectedAnswer === 'number'
        ? parseInt(playerAnswer, 10) === expectedAnswer
        : playerAnswer.toLowerCase() === expectedAnswer.toLowerCase();

    if (isAnswerCorrect) {
      setIsCorrect(true);
      if (currentQuestionIndex === questions.length - 1) {
        if (level < levelsData.length - 1) {
          setCurrentLevel(level + 1);
          setCurrentQuestionIndex(0); 
        } else {
          // Player has completed all levels
        }
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    // Fetch questions from OpenAI
    async function generateQuestion() {
      try {
        const response = await openai.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: `Generate a question for level ${level + 1}.` },
          ],
        });


        setQuestion(response.choices[0].message.content);
        console.log(Question,"This is Question");
      } catch (error) {
        console.error('OpenAI API error:', error);
      }
    }

    generateQuestion();
  }, [level]);

  return (
    <div>
      <h2>Level {level + 1}</h2>
      {isCorrect !== null ? (
        isCorrect ? (
          <p>Congratulations, Let's move to the next Question?</p>
        ) : (
          <p>Oops!! No worries, Let's try again :) </p>
        )
      ) : (
        <div>
          <p>{questions[currentQuestionIndex]}</p>
          <input
            type="text"
            value={playerAnswer}
            onChange={(e) => setPlayerAnswer(e.target.value)}
          />
          <button onClick={handleAnswerSubmission}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Question;
