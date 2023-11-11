import { FormEvent } from 'react';
import { useSearchContext } from '../../context/searchContext';
import './Search.css';

interface SearchProps {
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const Search = ({ onSubmitHandler }: SearchProps) => {
  const { s } = useSearchContext();
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
