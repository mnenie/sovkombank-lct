import React, {useState, useEffect} from "react";
// import { NavLink } from 'react-router-dom';
import styles from "./footer.module.scss";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const items1 = [
    {
      id: 1,
      tel: "+7 495 988 00 00",
      link: "tel: +74959880000",
      title: "Для звонков из-за рубежа (платно)",
    },
    {
      id: 2,
      tel: "8 800 100 0006",
      link: "tel: +78001000006",
      title: "Для звонков по России (бесплатно)",
    },
  ];

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

  const isMobile = windowWidth <= 650;
  return (
    <footer className={styles.footer}>
      <div className="container">
        {isMobile ? (
          <FooterMobile />
        ) : (
        <div className={styles.blocks_footer}>
          <div className={styles.blocks_footer_1}>
            {items1.map((item) => (
              <div key={item.id} className={styles.block_footer_1}>
                <a href={item.link}>{item.tel}</a>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
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
              <span>Приложение для IPhone и Android</span>
            </div>
          </a>
        </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
