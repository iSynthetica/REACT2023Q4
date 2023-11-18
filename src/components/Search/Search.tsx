import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useNavigate } from 'react-router-dom';
import { submitHandler } from '../../utils/handlers';

const Search = () => {
  // const { onSubmitHandler } = useAppContext();
  const s = useSelector((state: RootState) => state.shop.s);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <section id="searchContainer">
        <form
          onSubmit={(event) => {
            submitHandler(event, dispatch, navigate);
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
