import { FormItem } from '../../state/formSlice';

const FormDataItem = ({ data }: { data: FormItem }) => {
  return (
    <article>
      <h2>{data.name}</h2>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Gender: {data.gender}</p>
      <p>Country: {data.country}</p>
      <p>
        <img src={`${data.picture}`} />
      </p>
    </article>
  );
};

export default FormDataItem;
