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
        <Space>
          This is
          {' '}
          <Text style={{ color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>
            {data.fullName ? data.fullName.split(' ')[0] : 'name'}
            ,
          </Text>
        </Space>
        {data.jobTitle}
      </p>

      <AboutMe />

    </Space>
  );
};
export default TextContent;
