import styles from './Search.module.css';
const s = 'test';

const Search = () => {
  return (
    <>
      <section className={styles.searchContainer}>
        <form>
          <input
            type="text"
            name="s"
            placeholder="Search..."
            defaultValue={s}
          />
          <button>Search</button>
        </form>
      </section>
    </>
  );
};

export default Search;
