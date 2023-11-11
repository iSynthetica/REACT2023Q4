import { ChangeEventHandler } from 'react';

const SelectPerPage = ({
  perPage,
  onPerPageChange,
}: {
  onPerPageChange: ChangeEventHandler<HTMLSelectElement>;
  perPage: number;
}) => {
  return (
    <>
      <div id="selectPerPage">
        <h4>
          <span>Per page: </span>
          <select name="" onChange={onPerPageChange} value={perPage}>
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
