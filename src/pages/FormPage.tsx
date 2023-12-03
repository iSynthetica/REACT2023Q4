import { useRef, useState } from 'react';
import UncontrolledInput from '../ui/UncontrolledInput/UncontrolledInput';
import formSchema from '../models/formItemSchema';
import { ValidationError } from 'yup';
import { useDispatch } from 'react-redux';
import { FormItem, addFormItem } from '../state/formSlice';
import { useNavigate } from 'react-router-dom';
import CountriesAutocomplete from '../ui/CountriesAutocomplete/CountriesAutocomplete';
import SelectGender from '../ui/SelectGender/SelectGender';
import TCCheckbox from '../ui/TCCheckbox/TCCheckbox';
import UploadPicture from '../ui/UploadPicture/UploadPicture';
import { convertToBase64 } from '../utils/utils';

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState<Errors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const tcRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  interface Errors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    country?: string;
    age?: string;
    gender?: string;
    tc?: string;
    picture?: string;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const country = countryRef.current?.value;
    const age = ageRef.current?.value ? Number(ageRef.current?.value) : 0;
    const gender = genderRef.current?.value;
    const tc = tcRef.current?.checked;
    const picture = pictureRef.current?.files?.[0]
      ? (pictureRef.current?.files?.[0] as File)
      : undefined;

    try {
      await formSchema.validate(
        {
          name,
          email,
          password,
          confirmPassword,
          age,
          country,
          gender,
          tc,
          picture,
        },
        { abortEarly: false }
      );
      setValidationErrors({});

      if (name && email && password && age && gender && country && picture) {
        const pictureBase64 = await convertToBase64(picture as File);
        const formData: FormItem = {
          name,
          email,
          password,
          age,
          gender: gender as 'male' | 'female',
          country,
          picture: pictureBase64 as string,
        };
        dispatch(addFormItem(formData));

        navigate('/');
      }
    } catch (error) {
      const errors = (error as ValidationError).inner;
      const errorsObj: Errors = {};

      for (let i = 0; i < errors.length; i++) {
        const error = errors[i];

        errorsObj[error.path as keyof Errors] = error.message;
      }

      setValidationErrors(errorsObj);
    }
  };

  return (
    <div className="container">
      <h1>Form Page</h1>
      <form onSubmit={onSubmit} noValidate>
        <UncontrolledInput
          ref={nameRef}
          name="name"
          label="Name"
          placeholder="Enter name"
          type="text"
          error={validationErrors.name}
        />
        <UncontrolledInput
          ref={emailRef}
          name="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          error={validationErrors.email}
        />
        <UncontrolledInput
          name="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          ref={passwordRef}
          error={validationErrors.password}
        />
        <UncontrolledInput
          name="confirmPassword"
          label="Confirm password"
          placeholder="Enter password once again"
          type="password"
          ref={confirmPasswordRef}
          error={validationErrors.confirmPassword}
        />
        <UncontrolledInput
          name="age"
          label="Your age"
          placeholder="Enter your age"
          type="number"
          ref={ageRef}
          error={validationErrors.age}
        />

        <UploadPicture error={validationErrors.picture} ref={pictureRef} />

        <SelectGender error={validationErrors.gender} ref={genderRef} />

        <CountriesAutocomplete
          error={validationErrors.country}
          ref={countryRef}
        />

        <TCCheckbox error={validationErrors.tc} ref={tcRef} />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
