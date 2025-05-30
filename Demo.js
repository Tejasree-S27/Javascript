//App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLaughing, setIsLaughing] = useState(false);

  const toggleEmoji = () => {
    setIsLaughing(!isLaughing);
  };

  return (
    <div>
      <center>
        <h1 className="h">HELLO PEOPLE!!</h1>
        <button className="emoji-button" onClick={toggleEmoji}>
          Click me
        </button>
        <div className="emoji-display" aria-label="emoji">
          {isLaughing ? '😂' : '🙂'}
        </div>
      </center>
    </div>
  );
}

export default App;


//App.css
.h{
  color:blueviolet;
  border: 2px solid #df7145;
  background-color: bisque;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0);
  width:fit-content;
}

.emoji-button {
  padding: 10px 20px;
  margin-top: 15px;
  font-size: 16px;
  border: 2px solid #df7145;
  border-radius: 8px;
  background-color: bisque;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.emoji-button:hover {
  background-color: #df7145;
  color: white;
}

.emoji-display {
  font-size: 48px;
  margin-top: 20px;
}
