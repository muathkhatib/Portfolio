import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getExperience, getEducation } from '../../api';
import { Steper } from '../../common';

const styles = {
  container: {
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
    <section
      style={{
        ...styles.container,
        flexDirection: screenReducer > 768 ? 'row' : 'column',
        padding: screenReducer > 768 ? '0 140px' : '0 20px',
        margin: '80px 0',
      }}
    >
      <Steper data={experience} headerTitle="Experience" />
      <Steper data={education} headerTitle="Education" />
    </section>
  );
};

export default History;
