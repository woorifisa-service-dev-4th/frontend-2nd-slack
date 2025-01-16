import React from 'react';
import styles from '../../styles/Aside.module.css';
import DirectMessage from './DirectMessage';

function DirectMessageList() {
    const messages = [
    { name: '서비스_유승한, 서비스_신희원, 서비스_여은동', icon: 'fas fa-comment' },
    ];

    return (
        <div className={styles.message}>
            <div className={styles.messageTitle}>
                <i className="fas fa-angle-down"></i>
                <button className={styles.messageButton}>다이렉트 메시지</button>
            </div>
            <div className={styles.messageList}>
                {messages.map((message, index) => (
                    <DirectMessage key={index} className={styles.messageItem} icon = {message.icon} name = {message.name}/>
                ))}
                <a href="https://example.com" className={styles.addMessage}>
                    <i className="fas fa-plus"></i>
                    <span>사용자 초대</span>
                </a>
            </div>
        </div>
    );
}

export default DirectMessageList;
