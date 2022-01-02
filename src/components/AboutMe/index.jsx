import { useContext, useState, useEffect } from 'react';
import { Typography, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import { getResume } from '../../api';

import styles from './styles';
import personalData from '../../context';

const { Title, Text } = Typography;

const AboutMe = () => {
  const data = useContext(personalData);
  const [width] = useState(window.innerWidth);
  const [resumeUrl, setResumeUrl] = useState('');
  const { currentTheme } = useThemeSwitcher();

  const getUrl = async () => {
    const { url } = await getResume();
    return setResumeUrl(url);
  };
  useEffect(() => {
    getUrl();
  }, []);

  const keys = Object.keys(data);
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.header,
          borderLeft: `0.25rem solid ${
            currentTheme !== 'dark' ? '#32638e' : '#cd9c71'
          }`,
        }}
      >
        <Title level={3} style={styles.headerTitle}>
          About Me
        </Title>
        <Text>Main information about me and what I love to do.</Text>
      </div>
      <div style={styles.aboutDetails}>
        <Title level={5}>
          Hello, I&apos;m
          {' '}
          {data['Full Name']}
          , Based in Palestine
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          fringilla pretium lacus, eu luctus neque ultricies a. Phasellus
          faucibus orci a purus mattis tincidunt ut non nulla. Donec ullamcorper
          sapien eget neque facilisis euismod.
        </Text>
      </div>
      <Space
        direction={width < 769 ? 'Horizntal' : 'vertical'}
        wrap
        style={{
          ...styles.contentContainer,
          height: width < 769 ? null : '9rem',
        }}
      >
        {keys.length > 0
          ? keys.map((type) => (
            <li style={styles.contentItem}>
              <Text style={styles.contentTitle}>
                {type}
                :
                {' '}
              </Text>
              <Text style={styles.contentData}>{data[type]}</Text>
            </li>
          ))
          : null}
      </Space>
      <div>
        <Button
          type="primary"
          href={resumeUrl}
          target="blank"
          icon={<DownloadOutlined />}
          size="large"
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
