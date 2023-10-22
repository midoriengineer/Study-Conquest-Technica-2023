import React, { useState } from 'react';
import LevelSelector from '../LevelSelector';
import Question from '../Question';

function Game() {

    const [currentLevel, setCurrentLevel] = useState(0); 

    return (
      <div>
        <LevelSelector currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
        <Question level={currentLevel} setCurrentLevel={setCurrentLevel} />
      </div>
    );
 
}export default Game;