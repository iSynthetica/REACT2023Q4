import Pagination from '../Pagination/Pagination';
import PerPage from '../PerPage/PerPage';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <section id="footer" className={styles.footer}>
        <Pagination />
        <PerPage />
      </section>
    </>
  );
};

export default Footer;
