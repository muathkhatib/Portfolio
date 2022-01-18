import { useEffect, useState } from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import * as API from '../../api';
import { SectionTitle } from '../../common';
import WorkCard from '../WorkCard';

const Works = () => {
  const [data, setData] = useState([]);
  const { screenReducer } = useSelector((state) => state);

  useEffect(async () => {
    const worksReq = await API.getWorks();
    setData(worksReq);
  }, []);
  return (
    <section
      style={{
        margin: '5rem 0',
        padding: screenReducer > 768 ? '0 140px' : '0 20px',
        minHeight: '100vh',
      }}
    >
      <SectionTitle
        title="My Works"
        description="Here is some of projects I've been working on"
        id="works"
      />

      <List
        itemLayout="vertical"
        style={{
          margin: '5rem 0',
        }}
        size="large"
        pagination={{
          style: {
            width: 'fit-content',
            margin: 'auto',

          },
          pageSize: screenReducer > 768 ? 8 : 4,
        }}
        grid={{ gutter: 50 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.name} style={{ margin: '1.5rem 0' }}>
            <WorkCard
              name={item.name}
              deployment={item.deployment}
              staticMedia={item.staticMedia}
              github={item.github}
              technologies={item.technologies}
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default Works;
