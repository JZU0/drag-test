import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      alert(`You selected: "${selectedText}"`);
    }
  };

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <header className="App-header">
        <p>
          Drag some text in this area and release the mouse button to see an
          alert. 드래그를 해보자 얍!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
