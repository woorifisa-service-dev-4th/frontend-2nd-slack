import { useProfileTabInfo } from '../contexts/ProfileContext';
import styles from '../styles/Section.module.css';
import Profile from './Profile';

const Section = ({ children }) => {
  const profileTabInfo = useProfileTabInfo();

  return (
    <section className={styles.section}>
      { children }
      {profileTabInfo.open && <Profile />}
    </section>
  );
};
export default Section