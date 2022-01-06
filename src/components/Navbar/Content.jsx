import PropTypes from 'prop-types';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { CloseOutlined } from '@ant-design/icons';

import { Avatar, Menu, Button } from 'antd';
import { ThemeSwitcher } from '../../common';
import style from './style';

const { Item } = Menu;
const Content = ({ setVisible, type }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <>
      {type === 'vertical' ? null : (
        <Avatar size={55} style={{ backgroundColor: currentTheme !== 'dark' ? '#32638e' : '#CD9C71', ...style.Avatar }}>
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
        <Item>Home</Item>
        <Item>History</Item>
        <Item>Skills</Item>
        <Item>Works</Item>
        <Item>Contact</Item>
      </Menu>
      <div style={style.userToolbar}>
        <ThemeSwitcher />
        <Button size="large" type="primary">
          Hire Me
        </Button>
      </div>
    </>
  );
};

Content.propTypes = {
  setVisible: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Content;
