import { useSelector } from 'react-redux';

import * as common from '../../common';

import EmailForm from './EmailForm';
import ContactDetails from './ContactDetails';
import styles from './styles';

const ContactMe = () => {
  const { screenReducer } = useSelector((state) => state);

  return (
    <section
      style={{
        ...styles.container,
        padding: screenReducer > 768 ? '0 140px' : '0 20px',
      }}
    >
      <common.SectionTitle
        title="Contact Me"
        description="Feel free to contact with me"
        id="contact"
      />
      <div style={{ ...styles.contactContainer, flexDirection: screenReducer > 768 ? 'row' : 'column' }}>
        <EmailForm />
        <ContactDetails />

      </div>

    </section>
  );
};

export default ContactMe;
