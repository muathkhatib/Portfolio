import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

import { Drawer } from 'antd';
import Content from './Content';
import style from './style';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(1366);

  window.addEventListener('resize', () => setWidth(window.innerWidth));

  return (
    <div
      style={style.Header}
    >
      {width > 786 ? (
        <Content visible={visible} setVisible={setVisible} type="horizontal" />
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
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
