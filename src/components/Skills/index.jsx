import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Image, Typography } from 'antd';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import * as common from '../../common';

import * as Api from '../../api';

const { Text } = Typography;

const styles = {
  container: {

  },
  title: {
    marginBottom: '3rem',
  },
  skillsWrapContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 0.5rem',
    margin: '0.5rem ',
    borderRadius: '0.25rem',
    height: 52,

  },
};

const Skills = () => {
  const [data, setData] = useState([]);
  const { screenReducer } = useSelector((state) => state);
  const { currentTheme } = useThemeSwitcher();
  useEffect(async () => {
    const skillsRequest = await Api.getSkills();
    setData(skillsRequest);
  }, []);

  return (
    <section style={{ ...styles.container, padding: screenReducer > 768 ? '0 140px' : '0 20px' }}>
      <div style={styles.title}>
        <common.SectionTitle title="Skills" description="Here are a few technologies I've been working with recently." id="skills" />
      </div>
      <div style={styles.skillsWrapContainer}>
        {data.length > 0 ? data.map((elm) => (
          <div key={Math.random()} style={{ ...styles.skillItem, backgroundColor: currentTheme !== 'dark' ? '#f3f3f3' : '#17181D' }}>
            <div style={{ width: 32, marginRight: 16 }}>
              <Image src={elm.icon} alt={elm.name} preview={false} />
            </div>
            <Text style={{ fontSize: '1.25rem', fontWeight: '700', color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>{elm.name}</Text>
          </div>

        )) : null}
      </div>
    </section>
  );
};

export default Skills;
