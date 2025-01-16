import styles from '../styles/Chat.module.css';

const Notice = () => {
  return (
    <div className={styles['middle-notice']}>
      <div className={styles['middle-notice-profile']}>
        <img src="/annonymous.png" alt="Woori FG Logo" />
        <img src="/annonymous.png" alt="Woori FG Logo" />
        <img src="/annonymous.png" alt="Woori FG Logo" />
      </div>
      <div className={styles['middle-notice-description']}>
        이 대화는 사용자와
        <span className={styles.highlight}>@서비스_유승한</span>,
        <span className={styles.highlight}>@서비스_여은동</span>,
        <span className={styles.highlight}>@서비스_신희원</span> 님 간의 대화입니다.
        이 대화의 <span className={styles['bold-text']}>모든 새 메시지</span>에 대한 알림을 받게 됩니다.
      </div>
    </div>
  );
};

export default Notice;
