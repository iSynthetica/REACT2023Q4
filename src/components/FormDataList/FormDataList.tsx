import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import FormDataItem from '../FormDataItem/FormDataItem';
import { FormItem } from '../../state/formSlice';
import styles from './FormDataList.module.css';

const FormDataList = () => {
  const { data } = useSelector((state: RootState) => state.form);
  return (
    <section className={styles.dataListSection}>
      {data && data.length > 0
        ? data.map((item: FormItem, index: number) => (
            <FormDataItem key={index} data={item} />
          ))
        : 'No data found'}
    </section>
  );
};

export default FormDataList;
