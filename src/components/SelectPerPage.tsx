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
      <h4>
        <span>Per page: </span>
        <select name="" onChange={onPerPageChange} defaultValue={perPage}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </h4>
    </>
  );
};

export default SelectPerPage;
