import { ForwardedRef, forwardRef } from 'react';
import styles from '../UncontrolledInput/UncontrolledInput.module.css';

interface Props {
  error?: string;
}

const UploadPicture = forwardRef(
  ({ error }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.formGroup}>
        <label className={`${styles.formLabel}`} htmlFor="picture">
          Upload your avatar
        </label>
        <input type="file" name="myFile" ref={ref} />
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    );
  }
);

export default UploadPicture;
