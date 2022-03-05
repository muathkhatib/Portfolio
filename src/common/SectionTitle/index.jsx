import { useThemeSwitcher } from 'react-css-theme-switcher';

import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Text, Title } = Typography;
const styles = {
  header: {
    paddingLeft: '1rem',
  },
  headerTitle: {
    margin: '0.25rem 0',
    fontSize: '2rem',
    fontWeight: '700',
  },
  description: {
    fontSize: '1.1rem',
  },
};

const SectionTitle = ({ title, description, id }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div
      style={{
        ...styles.header,
        borderLeft: `0.25rem solid ${
          currentTheme !== 'dark' ? '#32638e' : '#cd9c71'
        }`,
      }}
      id={id}
    >
      <Title level={3} style={styles.headerTitle}>
        {title}
      </Title>
      <Text type="secondary" style={styles.description}>{description}</Text>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

export default SectionTitle;
