import React from 'react';
import styles from '../../styles/Aside.module.css'; 

// ToolBarItem 컴포넌트
function ToolBarItem({ href, iconClass, label }) {
    return (
        <a href={href} className={styles['tool-bar-item']}>
        <i className={`${iconClass} ${styles['icon']}`}></i>
        {label && <span className={[styles['toolBarSpan']]}><strong>{label}</strong></span>}
        </a>
    );
}

export default ToolBarItem