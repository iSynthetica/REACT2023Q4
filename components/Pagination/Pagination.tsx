import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import styles from './Pagination.module.css';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../state/shopSlice';
import { useRouter } from 'next/router';

const Pagination = () => {
  const router = useRouter();
  const { page, totalPages } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();
  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const page = Number(event.target.value);
    console.log(page);

    dispatch(setPage(Number(page) || 1));
    router.push(`/page/${page}`);
  };
  return (
    <>
      <div id="selectPage" className={styles.selectPage}>
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
    </>
  );
};

export default Pagination;
