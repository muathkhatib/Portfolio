/* eslint-disable react/prop-types */
import { Steps, Typography } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { useSelector } from 'react-redux';

const { Step } = Steps;
const { Title } = Typography;

const Steper = ({ data, headerTitle }) => {
  const { currentTheme } = useThemeSwitcher();
  const { screenReducer } = useSelector((state) => state);

  return (
    <div style={{ width: screenReducer > 768 ? 530 : '100%' }}>
      <Title level={3}>{headerTitle}</Title>
      <div
        style={{
          background: currentTheme !== 'dark' ? '#F3F3F3' : '#17181D',
          padding: screenReducer > 768 ? '60px 70px' : '10px 20px',
          minHeight: 300,
        }}
      >
        <Steps progressDot current={0} direction="vertical">
          {data && data.length > 0
            ? data.map((elm) => (

              <Step
                title={elm.title}
                subTitle={elm.subTitle}
                description={elm.description}
              />

            ))
            : null}
        </Steps>

      </div>
    </div>
  );
};

export default Steper;