import { Component, FormEvent, ReactNode } from 'react';

interface SearchProps {
  s: string;
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

class Search extends Component<SearchProps> {
  render(): ReactNode {
    return (
      <>
        <section id="searchContainer">
          <form onSubmit={this.props.onSubmitHandler}>
            <input
              name="s"
              type="text"
              placeholder="Search..."
              defaultValue={this.props.s}
            />
            <button>Search</button>
          </form>
        </section>
      </>
    );
  }
}

export default Search;
