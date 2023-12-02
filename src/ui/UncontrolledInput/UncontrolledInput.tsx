import { RefObject } from 'react';

const UncontrolledInput = ({
  name,
  label,
  placeholder,
  type = 'text',
}: {
  ref: RefObject<HTMLInputElement>;
  placeholder: string;
  type: string;
  name: string;
  label: string;
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default UncontrolledInput;
