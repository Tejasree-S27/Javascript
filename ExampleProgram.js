//App.js
import React from 'react';
import FirstProgram from './FirstProgram';
function App() {
  var a=20;
  var b=30;
  var c=a+b;
  console.log("Sum of a and b is: " + c);
  return (
    <div>
      <p>Sum of a and b is: {c}</p>
      <FirstProgram />
    </div>
  );
}
export default App;


//FirstProgram.js
import React from "react";
function FirstProgram() {
    return (
        <h1>My First Program</h1>
    );
}
export default FirstProgram;
