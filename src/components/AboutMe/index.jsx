import { useState, useEffect } from 'react';
import { Typography, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import { useSelector } from 'react-redux';
import { getResume } from '../../api';

import styles from './styles';

const { Title, Text } = Typography;

const AboutMe = () => {
  const { detailsReducer: data, screenReducer: screenWidth } = useSelector(
    (state) => state,
  );
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
    <div
      style={{
        ...styles.container,
        padding: screenWidth > 768 ? '0 140px' : '0 20px',
      }}
    >
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

      <div
        style={{
          width: screenWidth > 768 ? '50%' : '100%',
          ...styles.aboutDetails,
        }}
      >
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
        direction={screenWidth < 769 ? 'Horizntal' : 'vertical'}
        wrap
        style={{
          ...styles.contentContainer,
          height: screenWidth < 769 ? null : '9rem',
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
              <Text type="secondary" style={styles.contentData}>{data[type]}</Text>
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
