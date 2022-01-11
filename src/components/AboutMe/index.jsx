import { useState, useEffect } from 'react';
import { Typography, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { getResume } from '../../api';

import styles from './styles';

const { Text } = Typography;

const AboutMe = () => {
  const { detailsReducer: data, screenReducer: screenWidth } = useSelector(
    (state) => state,
  );
  const [resumeUrl, setResumeUrl] = useState('');

  const getUrl = async () => {
    const { url } = await getResume();
    return setResumeUrl(url);
  };
  useEffect(() => {
    getUrl();
  }, []);

  return (
    <>

      <Space
        direction={screenWidth < 769 ? 'Horizntal' : 'vertical'}
        wrap
        style={{
          ...styles.contentContainer,
          height: screenWidth < 769 ? null : '14rem',
        }}
      >
        {data.length > 0
          ? data.map((elm) => (
            <li key={Math.random()} style={styles.contentItem}>
              <Text style={styles.contentTitle}>
                {elm.title}
                :
                {' '}
              </Text>
              <Text type="secondary" style={styles.contentData}>{elm.data}</Text>
            </li>
          ))
          : null}
      </Space>
      <div style={styles.resumeButton}>
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

    </>
  );
};

export default AboutMe;
