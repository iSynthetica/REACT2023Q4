import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import FormDataItem from '../FormDataItem/FormDataItem';
import { FormItem } from '../../state/formSlice';

const FormDataList = () => {
  const { data } = useSelector((state: RootState) => state.form);
  return (
    <>
      {data && data.length > 0
        ? data.map((item: FormItem, index: number) => (
            <FormDataItem key={index} data={item} />
          ))
        : 'No data found'}
    </>
  );
};

export default FormDataList;
