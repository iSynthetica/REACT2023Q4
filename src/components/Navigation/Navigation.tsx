import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Link className={styles.navItem} to="/form-page">
          Form Page
        </Link>
        <br />
        <Link className={styles.navItem} to="/react-hook-form-page">
          React Hook Form Page
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
