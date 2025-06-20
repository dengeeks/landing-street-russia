import styles from './CheckBox.module.css';
import { InputHTMLAttributes, ReactNode } from 'react'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  children: ReactNode;
  error?: string;
}

const CheckBox = ({ id, children, error, ...inputProps }: CheckBoxProps) => {
  return (
   <div className={styles.checkbox}>
    <label htmlFor={id} className={`${styles.label}`}>
      <input
        type="checkbox"
        id={id}
        name="extra-option"
        value="bold-heading"
        className={styles.input}
        {...inputProps}
      />
      <div className={styles.customBox}/>
      <span className={styles.text}>{children}</span>
    </label>
     {error && <span className={styles.error}>{error}</span>}
   </div>
  );
};

export default CheckBox;
