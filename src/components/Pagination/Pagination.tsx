import { useNavigate } from 'react-router-dom';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Pagination = () => {
  const { page, totalPages } = useSelector((state: RootState) => state.shop);

  const navigate = useNavigate();
  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const page = Number(event.target.value);
    // dispatch(setPage(Number(page) || 1));
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
                return (
                  <option key={pageIndex} value={pageIndex}>
                    {pageIndex}
                  </option>
                );
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
