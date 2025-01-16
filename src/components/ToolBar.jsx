import styles from '../styles/Chat.module.css';

const ToolBar = () => {
  return (
    <div className={styles['middle-tool']}>
      <div className={styles['middle-tool-message']}>
        <i className="fas fa-comments"></i> 메시지
      </div>
      <div className={styles['middle-tool-canvas']}>
        <i className="fas fa-folder-plus"></i> 캔버스 추가
      </div>
      <div className={styles['middle-tool-file']}>
        <i className="fas fa-file"></i> 파일
      </div>
      <div className={styles['middle-tool-plus']}>
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};

export default ToolBar;
