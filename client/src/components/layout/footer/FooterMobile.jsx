import React, {useState, useEffect} from "react";
import styles from "./footer.module.scss";
const FooterMobile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const title = 'Приложение для Iphone и Android'
  const isTitle = windowWidth <= 436;
  return (
    <div className={styles.blocks_footer}>
      <a
        href="https://pwa.sovcombank.ru/"
        target="_blank"
        className={styles.block_footer_2}
      >
        <img src="/icons/footer.svg" alt="" />
        <div className={styles.text_footer}>
          <div className={styles.text_footer_1}>
            <span>Мобильный банк</span>
            <img src="/icons/arrow-footer.svg" alt="" />
          </div>
          <span>
            {isTitle ? 'Скачайте приложение' : title}
          </span>
        </div>
      </a>
      <img className={styles.img_phone} src="/img/phone.png" alt="" />
    </div>
  );
};

export default FooterMobile;
