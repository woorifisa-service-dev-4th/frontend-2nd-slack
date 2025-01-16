import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../styles/Header.module.css';

// CSS 파일 import, Header.css(스타일 충돌 발생 가능성 있음)
// module.css -> Header.module.css로 네이밍 (네이밍규칙: 컴포넌트명.module.css)
// moudule.css 방식은 충돌이 안남(딱 해당 컴포넌트에만 적용됨)

const Header = ({children}) => {
  return (
    <header>
        <div className={styles['left-of-search-box']}>
        <i className="fas fa-arrow-left" style={{ marginRight: '5%' }}></i>
        <i className="fas fa-arrow-right" style={{ marginRight: '5%' }}></i>
        <i className="fas fa-clock" style={{ marginRight: '5%' }}></i>
        </div>
        <div className={styles['search-box']}>
        <span style={{ marginLeft: '1%' }}>우리 FISA 4기 검색</span>
        <i className="fas fa-search" style={{ marginRight: '2%' }}></i>
        </div>
        <div className={styles['right-of-search-box']}>
        <i className="fas fa-question-circle" style={{ marginRight: '5%' }}></i>
        </div>
    </header>
);
}

export default Header