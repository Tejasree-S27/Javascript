import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <center>
    <table border='1' cellPadding='10' cellSpacing='1' style={{textAlign:'center', width:'80%', marginTop:'20px'}}>
      <tr>
        <th>DAY</th>
        <th>9:30AM-10:20AM</th>
        <th>10:20AM-10:30AM</th>
        <th>11:30AM-11:40AM</th>
        <th>11:40AM-12:30PM</th>
        <th>12:30PM-1:20PM</th>
        <th>1:20PM-2:30PM</th>
        <th>2:30PM-3:20PM</th>
        <th>3:20PM-3:30PM</th>
        <th>3:30PM-4:30PM</th>
        </tr>
        <tr>
        <td>Monday</td>
        <td>Math</td>
        <td>AI</td>
        <td rowSpan='6'>Break</td>
        <td>Science</td>
        <td rowSpan='6'>Lunch Break</td>
        <td>History</td>
        <td>Art</td>
        <td rowSpan='6'>Break</td>
        <td>Physics</td>
        </tr>
        <tr>
        <td>Tuesady</td>
        <td>physics</td>
        <td>DS</td>
        <td>Chemistry</td>
        <td>Biology</td>
        <td>Math</td>
        <td>English</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>AI</td>
          <td>Social</td>
          <td>Math</td>
          <td>Lunch Break</td>
          <td>Physics</td>
          <td>History</td>
        </tr>
        <tr>
          <td>Thursday</td> 
          <td>DTIS</td>
          <td>OS</td>
          <td>Physics</td>
          <td>Math</td>
          <td>History</td>
          <td>MEFA</td>
          </tr>
          <tr>
          <td>Friday</td>
          <td>Math</td>
          <td>AI</td>
          <td>MEFA</td>
          <td>DTI</td>
          <td>Arts</td>
          <td>Social</td>
          </tr>
          <tr>
          <td>Saturday</td>
          <td>Social</td>
          <td>DTI</td>
          <td>DS</td>
          <td>Physics</td>
          <td>English</td>
          <td>Biology</td>
          </tr>
          </table>
          </center>
          </>
  );
}

export default App;
