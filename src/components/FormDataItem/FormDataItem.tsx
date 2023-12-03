import { FormItem } from '../../state/formSlice';
import { Countries } from '../../data/countries';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const FormDataItem = ({ data }: { data: FormItem }) => {
  const { countries } = useSelector((state: RootState) => state.form);
  const country = countries[data.country as keyof Countries]
    ? countries[data.country as keyof Countries]
    : 'N/A';

  return (
    <article>
      <p>
        <img src={`${data.picture}`} />
      </p>
      <h2>{data.name}</h2>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Gender: {data.gender}</p>
      <p>Country: {country}</p>
      <p>Password: {data.password}</p>
    </article>
  );
};

export default FormDataItem;
