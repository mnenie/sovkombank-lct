import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const items1 = [
    {
      id: 1,
      tel: '+7 495 988 00 00',
      link: 'tel: +74959880000',
      title: 'Для звонков из-за рубежа (платно)'
    },
    {
      id: 2,
      tel: '8 800 100 0006',
      link: 'tel: +78001000006',
      title: 'Для звонков по России (бесплатно)'
    },
  ]
  return (
    <div className='container'>
      <footer>
        <div className="blocks_footer">
          {items1.map(item => (
            <div key={item.id} className="block_footer_1">
              <a href={item.link}>{ item.tel }</a>
              <span>{ item.title }</span>
            </div>  
          ))}
          <a href='https://pwa.sovcombank.ru/' target='_blank' className="block_footer_2">
            <img src="/icons/footer.svg" alt="" />
            <div className="text_footer">
              <div className="text_footer_1">
                <span>Мобильный банк</span>
                <img src="/icons/arrow-footer.svg" alt="" />
              </div>
              <span>Приложение для IPhone и Android</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;