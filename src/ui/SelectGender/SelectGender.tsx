import { ForwardedRef, forwardRef } from 'react';
import styles from '../UncontrolledInput/UncontrolledInput.module.css';
interface Props {
  error?: string;
}

const SelectGender = forwardRef(
  ({ error }: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    const getClassName = () => {
      if (error) {
        return `${styles.formControl} ${styles.formControlErrored}`;
      }
      return styles.formControl;
    };
    return (
      <div className={styles.formGroup}>
        <label className={`${styles.formLabel}`} htmlFor="gender">
          Gender
        </label>
        <select
          ref={ref}
          defaultValue=""
          id="gender"
          className={getClassName()}
        >
          <option value="">-- select gender --</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    );
  }
);

export default SelectGender;
