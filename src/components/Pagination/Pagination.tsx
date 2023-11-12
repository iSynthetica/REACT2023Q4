import { useNavigate } from 'react-router-dom';
import { ChangeEvent } from 'react';
import { useAppContext } from '../../context/AppProvider';

const Pagination = () => {
  const { page, totalPages } = useAppContext();
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
