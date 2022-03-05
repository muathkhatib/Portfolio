import { useSelector } from 'react-redux';

import TextContent from './TextContent';
import HeaderImage from './HeaderImage';

import style from './style';

const Header = () => {
  const { screenReducer: width } = useSelector((state) => state);

  return (
    <section id="body" style={width > 768 ? style.headerLandscape : style.headerPortrait}>
      <TextContent />
      <HeaderImage />
    </section>
  );
};

export default Header;
