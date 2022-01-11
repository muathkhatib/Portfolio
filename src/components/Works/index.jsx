import { useEffect, useState } from 'react';

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
        height: '100vh',
      }}
    >
      <SectionTitle
        title="My Works"
        description="Here is some of projects I've been working on"
        id="works"
      />
      <div
        style={{
          margin: '5rem 0',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: screenReducer > 768 ? 'space-between' : 'center',
          flexWrap: 'wrap',
        }}
      >
        {data.length > 0
          ? data.map((elm) => (
            <WorkCard
              name={elm.name}
              deployment={elm.deployment}
              staticMedia={elm.staticMedia}
              github={elm.github}
              technologies={elm.technologies}
            />
          ))
          : null}
      </div>
    </section>
  );
};

export default Works;
