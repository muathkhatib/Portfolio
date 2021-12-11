import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';

import {
  Avatar, Menu, Button,
} from 'antd';
import style from './style';

const { Item } = Menu;
const Content = ({ setVisible, type }) => (
  <>
    <Avatar
      size={55}
      style={style.Avatar}
    >
      MK
    </Avatar>
    {type === 'vertical' ? (
      <CloseOutlined
        onClick={() => setVisible((c) => !c)}
        style={style.CloseIcon}
      />
    ) : null}
    <Menu
      mode={type}
      style={{
        ...style.Menu,
        background: type === 'horizontal' ? '#0B0C10' : null,

      }}
    >
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Experience</Item>
      <Item>Skills</Item>
      <Item>Works</Item>
      <Item>Contact</Item>
    </Menu>
    <Button size="large" type="primary">
      Hire Me
    </Button>
  </>
);

Content.propTypes = {
  setVisible: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Content;
