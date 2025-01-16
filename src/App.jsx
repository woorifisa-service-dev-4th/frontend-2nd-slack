import React from 'react';
import Header from './layouts/Header'; // Header 컴포넌트 경로
import Aside from './layouts/Aside'; // Header 컴포넌트 경로
import Section from './layouts/Section'; // Header 컴포넌트 경로
import Chat from './layouts/Chat';
import Profile from './layouts/Profile';
import {ChatProvider} from './contexts/ChatContext';
import './App.css'; // CSS 파일을 전역으로 import

function App() {
  return (
    <div className="App">
      <Header>
        hello
      </Header>
      <div className="main">
        <Aside>
          Aside에 들어갈 컴포넌트들
        </Aside>
        <Section>
          <ChatProvider>
            <Chat/>
          </ChatProvider>
          <Profile/>
        </Section>
      </div>
    </div>
  );
}

export default App;
