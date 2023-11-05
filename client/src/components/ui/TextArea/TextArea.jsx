import TextareaAutosize from 'react-textarea-autosize';
import styles from './textarea.module.scss'
const TextArea = () => {
  return (
    <TextareaAutosize className={styles.textarea} placeholder='Напишите отзыв' minRows={6} maxRows={6} autoFocus />
  );
};

export default TextArea;