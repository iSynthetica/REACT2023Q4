import { FormItem } from '../../state/formSlice';
import { Countries, countries } from '../../data/countries';

const FormDataItem = ({ data }: { data: FormItem }) => {
  const country = countries[data.country as keyof Countries]
    ? countries[data.country as keyof Countries]
    : 'N/A';

  return (
    <article>
      <h2>{data.name}</h2>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Gender: {data.gender}</p>
      <p>Country: {country}</p>
      <p>Password: {data.password}</p>
      <p>
        <img src={`${data.picture}`} />
      </p>
    </article>
  );
};

export default FormDataItem;
