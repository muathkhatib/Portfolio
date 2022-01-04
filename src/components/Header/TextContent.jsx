import { useSelector } from 'react-redux';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { Button, Space, Typography } from 'antd';

import style from './style';

const { Title, Text, Paragraph } = Typography;

const TextContent = () => {
  const { detailsReducer: data, screenWidth: width } = useSelector((state) => state);
  const { currentTheme } = useThemeSwitcher();

  return (
    <Space style={style.TextContentContainer}>
      <Title level={1} style={style.TextContentTitle}>
        <Title level={3}>Hi there,</Title>
        <Space>
          This is
          {' '}
          <Text style={{ color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>
            {data['Full Name'] ? data['Full Name'].split(' ')[0] : null}
          </Text>
        </Space>
        Full Stack Web Developer
      </Title>
      <Paragraph
        style={{
          ...style.titleParagraph,
          width: width > 769 ? '65%' : null,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        deserunt numquam possimus, at eaque blanditiis inventore saepe rerum, in
        explicabo debitis,
      </Paragraph>
      <Button type="primary" size="large">
        More about me
      </Button>
    </Space>
  );
};
export default TextContent;
