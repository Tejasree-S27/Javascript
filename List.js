import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLaughing, setIsLaughing] = useState(false);

  const toggleEmoji = () => {
    setIsLaughing(!isLaughing);
  };

  return (
    <div>
      <h1>Hello</h1>
      <a href="https://www.youtube.com">CLICK ME </a>
      <ol start="A" type='A'>
        <li>orange</li>
        <li>kiwi</li>
        <li>dragan</li>
      </ol>
      <ul>
        <li>carrot</li>
        <li>Capcicum</li>
        <li>leafy</li>
      </ul>
    </div>
  );
}

export default App;
