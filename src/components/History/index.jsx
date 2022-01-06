import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getExperience, getEducation } from '../../api';
import { Steper } from '../../common';
import SectionTitle from '../../common/SectionTitle';

const styles = {
  container: {
    margin: '80px 0',
  },
  header: {
    paddingLeft: '1rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

const History = () => {
  const { screenReducer } = useSelector((state) => state);
  const [experience, setExperience] = useState(null);
  const [education, setEducation] = useState(null);

  useEffect(async () => {
    const getExp = await getExperience();
    setExperience(getExp);
    const getEdu = await getEducation();
    setEducation(getEdu);
  }, []);
  return (
    <section style={{
      ...styles.container,
      padding: screenReducer > 768 ? '0 140px' : '0 20px',
    }}
    >
      <SectionTitle id="history" title="History" description="Work experience and education history" />
      <section
        style={{
          ...styles.content,
          flexDirection: screenReducer > 768 ? 'row' : 'column',
          margin: '80px 0',
        }}
      >
        <Steper data={experience} headerTitle="Experience" />
        <Steper data={education} headerTitle="Education" />
      </section>
    </section>
  );
};

export default History;
