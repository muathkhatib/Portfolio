import { useSelector } from 'react-redux';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { Space, Typography } from 'antd';

import style from './style';
import AboutMe from '../AboutMe';

const { Text } = Typography;

const TextContent = () => {
  const { detailsReducer: data, screenReducer: width } = useSelector((state) => state);
  const { currentTheme } = useThemeSwitcher();
  return (
    <Space style={{ ...style.TextContentContainer, height: width > 768 ? '45vh' : null }}>
      <p style={style.TextContentTitle}>
        <Text style={{ fontSize: '1.5rem', fontWeight: '300' }}>Hi there,</Text>
        <Space>
          This is
          {' '}
          <Text style={{ color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>
            {Array.isArray(data) && data[0].data ? data[0].data.split(' ')[0] : null}
            ,
          </Text>
        </Space>
        {Array.isArray(data) && data[3].data ? data[3].data : null}
      </p>

      <AboutMe />

    </Space>
  );
};
export default TextContent;
