import { useProfileTabInfo, useProifleTabDispatch } from '../contexts/ProfileContext';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const profileTabInfo = useProfileTabInfo();
  const dispatch = useProifleTabDispatch();
  const profileImage = 'https://pimg.mk.co.kr/meet/neds/2021/03/image_readtop_2021_291080_16167514554588643.jpg';
  const user = profileTabInfo.user;
  const onlineStatus = '온라인';
  const localTime = '오전 11:29';
  const email = 'iu@woori.com';
  return (
    <profile>
    <div className={styles['right-tab']}>
      {/* 프로필 헤더 */}
      <div className={styles['profile-header']}>
        <span style={{ fontWeight: 600, marginLeft: '5%' }}> 프로필 </span>
        <button
          className = {styles['profile-detail-button']}
          onClick={() => dispatch({type:'CLOSE', user})} // 닫기 동작 추가
          style={{ textDecoration: 'none', color: 'black', marginRight: '5%' , backgroundColor: 'white', border: '0px', cursor:'pointer'}}
        >
          ⨉
        </button>
      </div>

      {/* 프로필 이미지 */}
      <div className={styles['profile-img']}>
        <img src={profileImage} alt={`${user}의 프로필`} />
      </div>

      {/* 사용자 이름 */}
      <div className={styles['profile-detail']}>
        <span style={{ fontWeight: 600, fontSize: '24px' }}>{user}</span>
      </div>

      {/* 온라인 상태 */}
      <div className={styles['profile-detail']}>
        <div className={styles['profile-online']}>
          <span style={{ width: '1em', color: 'green', margin: 0 }}> ● </span>
          <span style={{ width: '4em', marginLeft: '10%' }}>{onlineStatus}</span>
        </div>
      </div>

      {/* 현지 시간 */}
      <div className={styles['profile-detail']}>
        <span>
          <i className="fas fa-clock" style={{ marginRight: '2%' }}></i>
          현지 시간 {localTime}
        </span>
      </div>

      {/* 버튼 섹션 */}
      <div
        className={styles['profile-detail']}
        style={{ paddingBottom: '5%', borderBottom: '1px solid #cacaca' }}
      >
        <button style={{ width: '30%' }}>
          <i className="fas fa-comments"></i> 메시지
        </button>
        <button style={{ width: '30%' }}>
          <i className="fas fa-headphones"></i> 허들
        </button>
        <button style={{ width: '20%' }}>
          <i className="fas fa-user"></i> VIP
        </button>
        <button style={{ width: '10%', marginRight: '3%' }} aria-label="옵션">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      {/* 연락처 정보 */}
      <div className={styles['profile-detail']}>
        <span style={{ fontWeight: 600 }}>연락처 정보</span>
      </div>
      <div className={styles['profile-email']}>
        <i className="fas fa-envelope"></i>
        <div style={{ marginLeft: '5%' }}>
          <span style={{ color: 'rgba(29, 28, 29, 0.7)', fontWeight: 600 }}>
            이메일 주소<br />
          </span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
    </profile>
  );
};


export default Profile;
