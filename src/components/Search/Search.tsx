import { useSearchContext } from '../../context/searchContext';
import './Search.css';

const Search = () => {
  const { s, onSubmitHandler } = useSearchContext();

  return (
    <>
      <section id="searchContainer">
        <form onSubmit={onSubmitHandler}>
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
