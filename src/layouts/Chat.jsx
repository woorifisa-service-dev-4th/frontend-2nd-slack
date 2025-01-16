import styles from '../styles/Chat.module.css';
import ChatHeader from '../components/ChatHeader';
import ToolBar from '../components/ToolBar';
import Notice from '../components/Notice';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';
import { useChats } from '../contexts/ChatContext';
import { useEffect, useMemo, useRef } from 'react';

const Chat = () => {
  const chats = useChats();
  const scrollRef = useRef(null); // 스크롤 컨테이너 참조 생성

  // useMemo를 사용하여 성능 최적화, 데이터가 변경되지 않는 한, 동일한 결과를 재사용
  const chatList = useMemo(() => 
    chats.map(({ id, user, time, message }) => (
      <ChatMessage key={id} user={user} time={time} message={message} />
    )), 
    [chats]
  );

    
  useEffect(()=>{
    if(scrollRef.current){
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className={styles['middle-tab']}>
      <ChatHeader />
      <ToolBar />
      <div className={styles['middle-space']} ref={scrollRef}>
        <Notice />
        <div className={styles['middle-divider']}>
          <span className={styles['divider-text']}>오늘</span>
        </div>
        <div className={styles['middle-bottom']}>
          {chatList}
        </div>
      </div>
      <MessageInput />
    </div>
  );
};

export default Chat;
