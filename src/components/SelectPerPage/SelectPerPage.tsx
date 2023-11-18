import { useDispatch, useSelector } from 'react-redux';
import './SelectPerPage.css';
import { RootState } from '../../state/store';
import { changePerPageHandler } from '../../utils/handlers';
import { useNavigate } from 'react-router-dom';

const SelectPerPage = () => {
  const perPage = useSelector((state: RootState) => state.shop.perPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div id="selectPerPage">
        <h4>
          <span>Per page: </span>
          <select
            onChange={(event) => {
              changePerPageHandler(event, dispatch, navigate);
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

export default SelectPerPage;
