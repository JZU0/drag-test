import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState('');

  const handleTouchStart = (event) => {
    // 터치가 시작될 때 선택된 텍스트를 초기화하고 기본 동작을 막습니다.
    event.preventDefault();
    setSelectedText('');
  };

  const handleTouchEnd = () => {
    // 터치가 끝날 때 선택된 텍스트를 가져옵니다.
    const text = window.getSelection().toString().trim();
    if (text) {
      setSelectedText(text);
      alert(`You selected: "${selectedText}"`);
    }
  };

  return (
    <div
      className="App"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="App-header">
        <p>
          Drag some text in this area and release the mouse button to see an
          alert. 드래그를 해보자 얍!
        </p>
      </header>
    </div>
  );
}

export default App;
