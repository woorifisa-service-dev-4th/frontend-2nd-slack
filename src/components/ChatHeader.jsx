import styles from '../styles/Chat.module.css';

const ChatHeader = () => {
  return (
    <div className={styles['middle-top']}>
      <div className={styles['middle-top-left']}>
        서비스_유승한, 서비스_여은동, 서비스_신희원
      </div>
      <div className={styles['middle-top-right']}>
        <i className="fas fa-headphones"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
