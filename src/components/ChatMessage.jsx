import { useProifleTabDispatch } from '../contexts/ProfileContext';
import styles from '../styles/Chat.module.css';

const ChatMessage = ({ user, time, message }) => {
  const dispatch = useProifleTabDispatch();
  
  const popProfileHandler = () => {
    dispatch({type: 'OPEN', user})
  }
  return (
    <div className={styles['middle-bottom-chatting1']}>
      <div className={styles['middle-bottom-chatting1-icon']}>
        <img 
          src="/annonymous.png" 
          alt={`${user}의 프로필`} 
          onClick={popProfileHandler}
          style={{cursor : 'pointer'}}
        />
      </div>
      <div className={styles['middle-bottom-chatting1-inputbox']}>
        <div className={styles['middle-bottom-chatting1-information']}>
          <div className={styles['middle-bottom-chatting1-information-user']}>
            {user}
          </div>
          <div className={styles['middle-bottom-chatting1-information-time']}>
            {time}
          </div>
        </div>
        <div>
          <div className={styles['middle-bottom-chatting1-chattingbox']}>
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
