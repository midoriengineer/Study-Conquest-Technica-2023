import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

function Question({ setCurrentLevel }) {
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [question, setQuestion] = useState('');

  const handleAnswerSubmission = () => {

    const generatedQuestion = question; 
    let expectedAnswer = '';
    
  
    if (generatedQuestion.includes('+')) {

      const numbers = generatedQuestion.split('+');
  

      expectedAnswer = (parseInt(numbers[0]) + parseInt(numbers[1])).toString();
    }
  
    const isAnswerCorrect = playerAnswer === expectedAnswer;
  
    setIsCorrect(isAnswerCorrect);
  };
  

  useEffect(() => {
    async function generateMathAdditionQuestion() {
      try {
        console.log("Hello");
        const response = await openai.Completions.create({
          engine: 'text-davinci-002',
          prompt: 'Generate a math addition question.',
          max_tokens: 150,
          n: 1, 
        });

        console.log('OpenAI response:', response); 

        const generatedQuestion = response.choices[0].text;
        console.log(generatedQuestion);
        setQuestion(generatedQuestion);
      } catch (error) {
        console.error('Error generating math addition question:', error);
      }
    }

    generateMathAdditionQuestion();
  }, []);

  return (
    <div>
      <h2>Mathematics Quiz Time</h2>
      <p>{question}</p>
      <input
        type="text"
        value={playerAnswer}
        onChange={(e) => setPlayerAnswer(e.target.value)}
      />
      <button onClick={handleAnswerSubmission}>Submit</button>

      {isCorrect !== null ? (
        isCorrect ? (
          <p>Congratulations, Let's move to the next question.</p>
        ) : (
          <p>Oops! No worries, Let's try again.</p>
        )
      ) : null}
    </div>
  );
}

export default Question;
