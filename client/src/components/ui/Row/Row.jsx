import styles from './row.module.scss'

// eslint-disable-next-line react/prop-types
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