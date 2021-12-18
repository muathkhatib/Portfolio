import PropTypes from 'prop-types';

import { CloseOutlined } from '@ant-design/icons';

import { Avatar, Menu, Button } from 'antd';
import { ThemeSwitcher } from '../../common';
import style from './style';

const { Item } = Menu;
const Content = ({ setVisible, type }) => (
  <>
    {type === 'vertical' ? null : (
      <Avatar size={55} style={style.Avatar}>
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
      <Item>About</Item>
      <Item>Experience</Item>
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

Content.propTypes = {
  setVisible: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Content;
