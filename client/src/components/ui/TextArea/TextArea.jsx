import TextareaAutosize from 'react-textarea-autosize';
import styles from './textarea.module.scss'
const TextArea = () => {
  return (
    <TextareaAutosize className={styles.textarea} placeholder='Напишите отзыв' minRows={7} maxRows={7} autoFocus />
  );
};

export default TextArea;