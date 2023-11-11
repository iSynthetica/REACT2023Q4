import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/searchContext';
import { ChangeEvent } from 'react';

const Pagination = () => {
  const { page, totalPages } = useSearchContext();
  const navigate = useNavigate();
  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const page = Number(event.target.value);
    navigate(`/page/${page}`);
  };
  return (
    <>
      {totalPages ? (
        <div id="selectPage">
          <h4>
            <span>Page: </span>
            <select value={page} onChange={onChangePageHandler}>
              {[...Array(totalPages + 1).keys()].slice(1).map((pageIndex) => {
                return <option value={pageIndex}>{pageIndex}</option>;
              })}
            </select>
          </h4>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Pagination;
