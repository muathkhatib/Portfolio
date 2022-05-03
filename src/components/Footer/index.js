import { Typography } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { useSelector } from 'react-redux';

import styles from './styles';

const { Text } = Typography;

const Footer = () => {
  const { currentTheme } = useThemeSwitcher();
  const { detailsReducer } = useSelector((state) => state);
  return (
    <footer
      style={{
        ...styles.footerContainer,
        background: currentTheme !== 'dark' ? '#F3F3F3' : '#17181D',
      }}
    >
      <Text type="secondary">
        2022&copy;
        {' '}
        {detailsReducer.fullName}
        , Are Rights Reserved.
      </Text>
    </footer>
  );
};

export default Footer;
