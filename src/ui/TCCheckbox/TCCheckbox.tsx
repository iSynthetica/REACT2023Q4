import { ForwardedRef, forwardRef } from 'react';
import styles from '../UncontrolledInput/UncontrolledInput.module.css';

interface Props {
  error?: string;
}

const TCCheckbox = forwardRef(
  ({ error = '' }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.formGroup}>
        <label className={`${styles.formLabel}`} htmlFor="tc">
          Accept the terms and conditions
          <input id="tc" type="checkbox" ref={ref} />
        </label>
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    );
  }
);

export default TCCheckbox;
