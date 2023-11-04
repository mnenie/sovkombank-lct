import styles from './row.module.scss'
import Button from '../Button/Button';

const Row = ({data}) => {
    return (
        <tr className={styles.tr}>
            {Object.keys(data).map(elem =>(
                <td className={styles.td} key={Math.random()}>{data[elem]}</td>
            ))}
        </tr>
      );
};


export default Row;