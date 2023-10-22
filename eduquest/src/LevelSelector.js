
import React from 'react';

function LevelSelector({ currentLevel, setCurrentLevel }) {
  const levels = [0, 1, 2, 3, 4]; 

  return (
    <div>
      <h2>Yaayy, Get Set Go!!!!</h2>
      <ul>
        {levels.map((level) => (
          <li
            key={level}
            onClick={() => setCurrentLevel(level)}
            style={{
              cursor: currentLevel >= level ? 'pointer' : 'not-allowed',
              textDecoration: currentLevel > level ? 'line-through' : 'none',
            }}
          >
            Level {level + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LevelSelector;
