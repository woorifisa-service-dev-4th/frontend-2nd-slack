import React, { useState } from 'react';
import Header from './layouts/Header'; // Header 컴포넌트 경로
import Aside from './layouts/Aside'; // Header 컴포넌트 경로
import Section from './layouts/Section'; // Header 컴포넌트 경로
import Chat from './layouts/Chat';
import {ChatProvider} from './contexts/ChatContext';
import './App.css'; // CSS 파일을 전역으로 import
import ToolBar from './components/toolbar/ToolBar';
import ChannelBar from './components/channel/ChannelBar'
import { ToolBarProvider } from './contexts/ToolBarContextApi';

import { ProfileProvider, useProfileTabInfo } from './contexts/ProfileContext';

function App() {
  return (
    <div className="App">
      <Header>
        hello
      </Header>
      <div className="main">
        <Aside>
          <ToolBarProvider>
            <ToolBar/>
          </ToolBarProvider>
          <ChannelBar/>
        </Aside>
        <ProfileProvider>
          <Section>
            <ChatProvider>
              <Chat/>
            </ChatProvider>
          </Section>
        </ProfileProvider>
      </div>
    </div>
  );
}

export default App;
