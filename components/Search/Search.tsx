import styles from './Search.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { RootState } from '../../src/state/store';
import { submitHandler } from '../../utils/handlers';

const Search = () => {
  const s = useSelector((state: RootState) => state.shop.s);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <section className={styles.searchContainer}>
        <form
          onSubmit={(event) => {
            submitHandler(event, dispatch, router);
          }}
        >
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
