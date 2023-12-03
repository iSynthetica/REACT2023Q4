import { ForwardedRef, forwardRef } from 'react';
import styles from './UncontrolledInput.module.css';
interface Props {
  placeholder: string;
  type: string;
  name: string;
  label: string;
  error?: string;
}

const UncontrolledInput = forwardRef(
  (
    { placeholder, type, name, label, error = '' }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const getClassName = () => {
      if (error) {
        return `${styles.formControl} ${styles.formControlErrored}`;
      }
      return styles.formControl;
    };
    return (
      <div className={styles.formGroup}>
        <label className={`${styles.formLabel}`} htmlFor={name}>
          {label}
        </label>
        <input
          ref={ref}
          defaultValue=""
          type={type}
          className={getClassName()}
          id={name}
          placeholder={placeholder}
        />
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    );
  }
);

export default UncontrolledInput;
