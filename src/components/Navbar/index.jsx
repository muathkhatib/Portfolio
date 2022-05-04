import {
  useRef, useState, useEffect,
} from 'react';

import { useSelector } from 'react-redux';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { MenuOutlined } from '@ant-design/icons';

import { Drawer, Avatar } from 'antd';
import Content from './Content';

import style from './style';

const Navbar = () => {
  const { screenReducer: width } = useSelector((state) => state);
  const { currentTheme } = useThemeSwitcher();

  const [visible, setVisible] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbarRef.current.style.top = '0';
      } else {
        navbarRef.current.style.top = '-80px';
      }
      prevScrollpos = currentScrollPos;
    });
    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div
      ref={navbarRef}
      style={{ ...style.Header, padding: width > 768 ? '0 140px' : '0 20px', background: currentTheme !== 'dark' ? '#FFF' : '#17181D' }}
    >
      {width >= 1200 ? (
        <Content setVisible={setVisible} type="horizontal" />
      ) : (
        <>
          <Drawer
            placement="left"
            closable={false}
            onClose={() => setVisible((c) => !c)}
            visible={visible}
            keyboard
            bodyStyle={{ textAlign: 'center' }}
          >
            <Content
              visible={visible}
              setVisible={setVisible}
              type="vertical"
            />
          </Drawer>
          <div
            style={style.MenuBtn}
          >
            <MenuOutlined
              onClick={() => setVisible((c) => !c)}
              style={style.MenuIcon}
            />
            <Avatar size={55} style={{ backgroundColor: currentTheme !== 'dark' ? '#32638e' : '#CD9C71', ...style.Avatar }}>
              MK
            </Avatar>
          </div>
        </>
      )}

    </div>
  );
};

export default Navbar;
