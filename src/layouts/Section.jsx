import styles from '../styles/Section.module.css';
const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      { children }
    </section>
  );
};
export default Section