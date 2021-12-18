import { useState } from 'react';

import TextContent from './TextContent';
import HeaderImage from './HeaderImage';
import style from './style';

const Header = () => {
  const [width] = useState(window.innerWidth);
  return (
    <section style={width > 768 ? style.headerLandscape : style.headerPortrait}>
      <TextContent />
      <HeaderImage />
    </section>
  );
};

export default Header;
