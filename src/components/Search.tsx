import { FormEvent } from 'react';

interface SearchProps {
  s: string;
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const Search = ({ s, onSubmitHandler }: SearchProps) => {
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
