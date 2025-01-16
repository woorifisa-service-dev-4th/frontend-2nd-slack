import { useState } from 'react';
import { useChats, useChatsDispatch } from '../contexts/ChatContext';
import styles from '../styles/Chat.module.css';

const MessageInput = () => {
  const chats = useChats();
  const chatDispatch = useChatsDispatch();

  const animals = ['호랑이', '토끼', '여우', '늑대', '곰', '사자', '펭귄', '코끼리'];

  const placeholder = `${chats.map(({ user }) => user).join(', ')}에 메시지 보내기`;

  const [message, setMessage] = useState('');

  const getRandomAnimalName = () =>{
    const randomIndex = Math.floor(Math.random() * animals.length);
    return `서비스_${animals[randomIndex]}`;
  };

  // 현재 시간 생성
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours > 12 ? hours - 12 : hours;
    return `${period} ${formattedHours}:${minutes.toString().padStart(2, '0')}`;
  };
  

  const addChatHandler = () => {
    if (message.trim()){
      const newChat = {
        id: self.crypto.randomUUID(), 
        user: getRandomAnimalName(), 
        message: message, 
        time: getCurrentTime()
      };
      chatDispatch({ type : 'ADD', newChat});

      // 입력 필드 초기화
      setMessage('');
    }
    
  }

  // 엔터키 이벤트 핸들러 
  const handleKeyPress = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      addChatHandler();
    }
  }

  return (
    <div className={styles['middle-message']} style={{ marginBottom: 0 }}>
      <div className={styles['middle-message-top']}>
        <i className="fas fa-bold"></i>
        <i className="fas fa-italic"></i>
        <i className="fas fa-strikethrough"></i>
        <i className="fas fa-grip-lines-vertical" style={{ color: '#a9a9a9' }}></i>
        <i className="fas fa-link"></i>
        <i className="fas fa-list-ol"></i>
        <i className="fas fa-list-ul"></i>
        <i className="fas fa-grip-lines-vertical" style={{ color: '#a9a9a9' }}></i>
        <i className="fas fa-stream"></i>
        <i className="fas fa-code"></i>
        <i className="fas fa-terminal"></i>
      </div>
      <textarea
        className={styles['middle-message-input']}
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      ></textarea>
      <div className={styles['middle-message-bottom']}>
        <div className={styles['middle-message-bottom-left']}>
          <i className="fas fa-plus"></i>
          <i className="fas fa-underline"></i>
          <i className="fas fa-smile"></i>
          <i className="fas fa-quote-right"></i>
          <i className="fas fa-grip-lines-vertical" style={{ color: '#a9a9a9' }}></i>
          <i className="fas fa-video"></i>
          <i className="fas fa-volume-up"></i>
          <i className="fas fa-grip-lines-vertical" style={{ color: '#a9a9a9' }}></i>
          <i className="fas fa-keyboard"></i>
        </div>
        <div className={styles['middle-message-bottom-right']}
          onClick={addChatHandler}
          style={{cursor:'pointer'}}
        >
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
