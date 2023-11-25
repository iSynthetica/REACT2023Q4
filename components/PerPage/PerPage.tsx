import styles from './PerPage.module.css';

const perPage = 25;

const PerPage = () => {
  return (
    <>
      <div className={styles.selectPerPage}>
        <h4>
          <span>Per page: </span>
          <select value={perPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </h4>
      </div>
    </>
  );
};

export default PerPage;
