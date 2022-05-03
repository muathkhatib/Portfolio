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
        direction={screenWidth < 768 ? 'Horizntal' : 'vertical'}
        wrap
        style={{
          ...styles.contentContainer,
          height: screenWidth < 768 ? null : '14rem',
          marginTop: screenWidth < 768 ? '2rem' : null,
          width: screenWidth < 768 ? '100%' : '50%',
        }}
      >
        {data?.specifications.length > 0
          ? data?.specifications.map((elm) => (
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
