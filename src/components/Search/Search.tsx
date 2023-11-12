import './Search.css';
import { useAppContext } from '../../context/AppProvider';

const Search = () => {
  const { s, onSubmitHandler } = useAppContext();

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
