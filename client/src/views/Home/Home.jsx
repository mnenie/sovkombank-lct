import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.blocks}>
          <div className={styles.block_1}>
            <HomeTasks />
          </div>
          <MapBlock />
        </div>
      </div>
    </div>
  );
};

export default Home;
