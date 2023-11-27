import { useSelector } from 'react-redux';
import styles from './PerPage.module.css';
import { RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { changePerPageHandler } from '../../utils/handlers';
import { useRouter } from 'next/router';

const PerPage = () => {
  const perPage = useSelector((state: RootState) => state.shop.perPage);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.selectPerPage}>
        <h4>
          <span>Per page: </span>
          <select
            onChange={(event) => {
              changePerPageHandler(event, dispatch, router);
            }}
            value={perPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </h4>
      </div>
    </>
  );
};

export default PerPage;
