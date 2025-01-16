import React from 'react';
import { useToolBarContext } from '../../contexts/ToolBarContextApi';
// import '../styles/ToolBar.module.css'; // 스타일 파일은 필요에 따라 적용
import ToolBarItem from './ToolBarItem';
import styles from '../../styles/Aside.module.css';

// ToolBar 컴포넌트
function ToolBar() {
    const {items} = useToolBarContext();
    return (
        <div className={styles.toolBar}>
            {items.map((item, index) => (
                <ToolBarItem 
                    key={index}
                    href={item.href}
                    iconClass={item.iconClass} 
                    label={item.label}
                />
            ))}
        </div>
    );
}

export default ToolBar;
