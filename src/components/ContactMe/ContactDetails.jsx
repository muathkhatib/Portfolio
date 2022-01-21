import {
  PhoneOutlined, MailOutlined, EnvironmentOutlined, LinkedinOutlined,
} from '@ant-design/icons';
import {
  Typography,
} from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import { useSelector } from 'react-redux';

const { Title, Text } = Typography;

const ContactDetails = () => {
  const { detailsReducer } = useSelector((state) => state);

  const data = detailsReducer.filter((element) => element.title === 'Phone' || element.title === 'Email' || element.title === 'Address');
  const { currentTheme } = useThemeSwitcher();

  const iconGenration = (name) => {
    switch (name) {
      case 'Phone':
        return <PhoneOutlined />;
      case 'Email': return <MailOutlined />;
      case 'Address': return <EnvironmentOutlined />;
      case 'LinkedIn': return <LinkedinOutlined />;
      default: return <PhoneOutlined />;
    }
  };
  return (
    <div>
      <Title level={4}>Let&apos;s talk about everything !</Title>
      <Text type="secondary" style={{ fontSize: '1.1rem' }}>
        Here is my main information to have contact with me,
      </Text>
      {Array.isArray(data) && data.length > 0 ? data.map((e) => (
        <div style={{ margin: '1rem 0' }}>
          <Text style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center' }}>
            <Text style={{ marginRight: '0.5rem', fontSize: '1.5rem', color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>
              {iconGenration(e.title)}
            </Text>
            {e.data}
          </Text>
        </div>
      )) : null }
      <div style={{ margin: '1rem 0' }}>
        <Text style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center' }}>
          <Text style={{ marginRight: '0.5rem', fontSize: '1.5rem', color: currentTheme !== 'dark' ? '#32638e' : '#CD9C71' }}>
            {iconGenration('LinkedIn')}
          </Text>
          muathkhatib
        </Text>
      </div>
    </div>
  );
};

export default ContactDetails;
