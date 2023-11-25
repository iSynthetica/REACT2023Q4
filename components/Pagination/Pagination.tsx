import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <>
      <div id="selectPage" className={styles.selectPage}>
        <h4>
          <span>Page: </span>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </h4>
      </div>
    </>
  );
};

export default Pagination;
