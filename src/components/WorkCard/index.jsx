import {
  Typography, Button, Tag, Image,
} from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const { Title } = Typography;

const WorkCard = ({
  name, deployment, github, staticMedia, technologies,
}) => {
  const { currentTheme } = useThemeSwitcher();

  const { screenReducer } = useSelector((state) => state);
  const styles = {
    cardContainer: {
      // width: screenReducer > 768 ? '33%' : '20rem',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      boxShadow: '0px 4px 18px #bababa4d',
      height: screenReducer >= 768 ? '26rem' : '22rem',
      // border: '1px solid red',
    },
  };

  return (
    <div key={Math.random()} style={styles.cardContainer}>
      <div style={{ height: '60%' }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          src={staticMedia}
          alt={name}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '20%',
          padding: '0 1rem',
        }}
      >
        <Title
          level={3}
          style={{
            color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71',
          }}
        >
          {name}
        </Title>
        <div>
          <Button
            type="link"
            href={deployment}
            target="blank"
            size="large"
          >
            <LinkOutlined />
          </Button>
          <Button
            type="link"
            href={github}
            target="blank"
            size="large"
          >
            <GithubOutlined />
          </Button>
        </div>
      </div>
      <div
        style={{
          height: '20%',
          padding: '0 1rem',
        }}
      >
        {technologies.map((tech) => (
          <Tag key={Math.random()} style={{ margin: '0.25rem' }}>
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  );
};
WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  deployment: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  staticMedia: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

};

export default WorkCard;
