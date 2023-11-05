import { NavLink } from 'react-router-dom';

interface Props {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: Props) => {
  return (
    <>
      <ul id="pages">
        {[...Array(totalPages + 1).keys()].slice(1).map((page) => {
          return totalPages === 1 ? (
            ''
          ) : (
            <li key={page} className="pageItem">
              {currentPage !== page ? (
                <NavLink to={`/page/${page}`}>{page}</NavLink>
              ) : (
                <span>{page}</span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
