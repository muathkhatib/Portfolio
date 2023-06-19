import PropTypes from 'prop-types';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { CloseOutlined } from '@ant-design/icons';

import { Avatar, Menu } from 'antd';
import { Link } from 'react-scroll';
import { useCallback, useMemo } from 'react';
import { ThemeSwitcher } from '../../common';
import style from './style';

const { Item } = Menu;
const Content = ({ setVisible, type, visible }) => {
  const { currentTheme } = useThemeSwitcher();

  const closeDrawer = useCallback(() => {
    if (visible) {
      setVisible(false);
    }
  });

  const menuItems = useMemo(() => [
    {
      key: 'home',
      content: 'Home',
    },
    {
      key: 'history',
      content: 'History',
    },
    {
      key: 'skills',
      content: 'Skills',
    },
    {
      key: 'works',
      content: 'Works',
    },
    {
      key: 'contact',
      content: 'Contact',
    },

  ], []);

  return (
    <>
      {type === 'vertical' ? null : (
        <Avatar
          size={55}
          style={{
            backgroundColor: currentTheme !== 'dark' ? '#32638e' : '#CD9C71',
            ...style.Avatar,
          }}
        >
          MK
        </Avatar>
      )}
      {type === 'vertical' ? (
        <CloseOutlined
          onClick={() => setVisible((c) => !c)}
          style={style.CloseIcon}
        />
      ) : null}
      <br />
      <Menu
        mode={type}
        style={{
          ...style.Menu,
          width: type !== 'vertical' ? '40%' : null,
        }}
      >
        {menuItems.map((item) => (
          <Item key={item.key}>
            <Link
              to={item.key}
              spy
              smooth
              offset={-70}
              duration={550}
              onClick={closeDrawer}
            >
              {item.content}
            </Link>
          </Item>
        ))}
      </Menu>
      <ThemeSwitcher />
    </>
  );
};

Content.propTypes = {
  setVisible: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Content;
