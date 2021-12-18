import { useState, useEffect } from 'react';

import { Button, Typography } from 'antd';

import { getDetails } from '../../api';

import style from './style';

const { Title, Text, Paragraph } = Typography;

const TextContent = () => {
  const [width] = useState(window.innerWidth);
  const [name, setName] = useState('...');

  useEffect(async () => {
    const { first_name: firstName } = await getDetails();
    setName(firstName.stringValue);
  }, []);

  return (
    <div style={style.TextContentContainer}>
      <Title level={1} style={style.TextContentTitle}>
        <Title level={3}>Hi there,</Title>
        <div>
          This is
          {' '}
          <Text type="secondary" style={style.titleName}>
            {name}
          </Text>
        </div>
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
      <Button type="primary" size="large">More about me</Button>
    </div>
  );
};
export default TextContent;
