import { useRef } from 'react';
import UncontrolledInput from '../ui/UncontrolledInput/UncontrolledInput';

const FormPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <div className="container">
      <h1>Form Page</h1>
      <form>
        <UncontrolledInput
          ref={nameRef}
          name="name"
          label="Name"
          placeholder="Enter name"
          type="text"
        />
        <UncontrolledInput
          ref={emailRef}
          name="email"
          label="Email"
          placeholder="Enter email"
          type="email"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
