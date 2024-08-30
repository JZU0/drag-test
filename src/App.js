import React from 'react';
import { useGesture } from '@use-gesture/react';
import './App.css';

function App() {
  const bind = useGesture({
    onDragEnd: () => {
      // 드래그가 끝났을 때 선택된 텍스트를 알림으로 보여줍니다.
      const text = window.getSelection().toString().trim();
      if (text) {
        alert(`You selected: "${text}"`);
      }
    },
  });

  return (
    <div className="App" {...bind()}>
      <header className="App-header">
        <p>
          Drag some text in this area and release the mouse button to see the
          selected text below. 드래그를 해보자 얍얍!
        </p>
      </header>
    </div>
  );
}

export default App;
