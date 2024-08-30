import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseUp = (event) => {
    const text = window.getSelection().toString().trim();
    if (text) {
      setSelectedText(text);

      // 선택된 텍스트의 위치에 버튼 표시
      const range = window.getSelection().getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setButtonPosition({
        top: rect.top + window.scrollY - 30,
        left: rect.left + rect.width / 2,
      });
      setShowButton(true);
    } else {
      setShowButton(false); // 텍스트가 선택되지 않으면 버튼 숨기기
    }
  };

  const handleButtonClick = () => {
    alert(`You selected: "${selectedText}"`);
    setShowButton(false); // 버튼 클릭 후 숨기기
  };

  return (
    <div className="App" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
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

      {showButton && (
        <button
          ref={buttonRef}
          style={{
            position: 'absolute',
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
            transform: 'translate(-50%, -100%)',
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick}
        >
          검색하기
        </button>
      )}
    </div>
  );
}

export default App;
