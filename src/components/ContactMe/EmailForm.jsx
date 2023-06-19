import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, notification, Input,
} from 'antd';
import emailjs from '@emailjs/browser';

import styles from './styles';

const { TextArea } = Input;

const EmailForm = () => {
  const { screenReducer } = useSelector((state) => state);
  const [emailForm, setEmailForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
      message: title,
      description,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailForm({
      name: '',
      subject: '',
      email: '',
      message: '',
    });
    const { text } = await emailjs.sendForm(
      process.env.REACT_APP_EmailJs_Service,
      process.env.REACT_APP_EmailJs_Template,
      e.target,
      process.env.REACT_APP_EmailJs_Public_KEY,
    );

    if (text === 'OK') {
      return openNotificationWithIcon(
        'success',
        'Success',
        'Your email has been sent successfully',
      );
    }
    return openNotificationWithIcon(
      'error',
      'Error',
      'There is some error in your email',
    );
  };
  return (
    <div
      style={{
        ...styles.formContainer,
        width: screenReducer > 768 ? '50%' : '100%',
      }}
    >
      <form onSubmit={sendEmail} style={styles.form}>
        <div
          style={{
            ...styles.formHeadContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Input
            style={styles.formHeadInputs}
            size="large"
            type="text"
            name="sender_name"
            value={emailForm.name}
            placeholder="Name"
            required
            onChange={(e) => setEmailForm((c) => ({ ...c, name: e.target.value }))}
          />

          <Input
            style={styles.formHeadInputs}
            size="large"
            type="email"
            name="sender_email"
            value={emailForm.email}
            placeholder="Email"
            required
            onChange={(e) => setEmailForm((c) => ({ ...c, email: e.target.value }))}
          />
        </div>
        <Input
          style={styles.formInput}
          size="large"
          type="text"
          name="subject_title"
          value={emailForm.subject}
          placeholder="Subject"
          required
          onChange={(e) => setEmailForm((c) => ({ ...c, subject: e.target.value }))}
        />
        <TextArea
          style={styles.formInput}
          name="message_body"
          value={emailForm.message}
          placeholder="Message"
          onChange={(e) => setEmailForm((c) => ({ ...c, message: e.target.value }))}
          autoSize={{ minRows: 5 }}
          required
        />
        <Button style={styles.formBtn} type="primary" htmlType="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
