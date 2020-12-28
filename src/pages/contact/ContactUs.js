import React, { useState, useEffect } from 'react';
import CustomPinkButton from '../../components/button/CustomPinkButton';
import CustomTextArea from '../../components/input/CustomTextArea';
import CustomTextInput from '../../components/input/CustomTextInput';
import './ContactUsStyles.css';
import { firebase } from '../../components/config/Config';
import CustomDisabledButton from '../../components/button/CustomDisabledButton';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (name.length && email && phoneNumber && title && message) {
      setDisabled(false);
    }
  }, [name, email, phoneNumber, title, message]);

  const storeUserMessage = () => {
    console.log(name, email, phoneNumber, title, message);
    const userInfo = {
      name,
      email,
      phoneNumber,
      title,
      message,
    };
    if (name.length < 3) {
      setError('Name must contain atleast 3 characters');
    } else if (email.length < 3 || !email.includes('@')) {
      setError('Email must contain atleast 3 chars and includes @ and .com');
    } else if (phoneNumber.length < 10) {
      setError('Phone number must be 10 digits long');
    } else if (!title) {
      setError('Please enter title of the message');
    } else if (message.length < 10) {
      setError('Message must contain 20 chars');
    } else {
      firebase
        .firestore()
        .collection('messages')
        .add(userInfo)
        .then((res) => {
          console.log(res);
          console.log('successfully sent message');
          setName('');
          setEmail('');
          setPhoneNumber('');
          setPhoneNumber('');
          setTitle('');
          setMessage('');
          setError("Sen't message successfully👍");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div id='contact' class='flex-container'>
      <div class='flex-child-1'>
        <h1 style={{ padding: '1.5rem 0', color: 'white' }}>Keep in touch.</h1>
        <p style={{ padding: '1.5rem 0', color: '#ccc' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab
          consequuntur repellat? Commodi, fuga error.
        </p>
        <div className='address'>
          <p style={{ padding: '0.5rem 0', color: '#ccc' }}>
            Address : 9/1477-23,Shanthinagar Colony
          </p>
          <p style={{ padding: '0.5rem 0', color: '#ccc' }}>
            Phone Number : +91 8919308004
          </p>
          <p style={{ padding: '0.5rem 0', color: '#ccc' }}>
            Email : ramubugudi4@gmail.com
          </p>
        </div>
      </div>

      <div class='flex-child-2'>
        <form>
          <div className='flex-child-2-input'>
            <CustomTextInput
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomTextInput
              value={email}
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex-child-2-input'>
            <CustomTextInput
              value={phoneNumber}
              placeholder='Your Phone'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <CustomTextInput
              placeholder='Your Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='flex-child-2-input' style={{ width: '95%' }}>
            <CustomTextArea
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className='flex-child-2-button'>
            {disabled == true ? (
              <CustomDisabledButton text='SEND MESSAGE' />
            ) : (
              <CustomPinkButton
                text='SEND MESSAGE'
                onClick={storeUserMessage}
              />
            )}
          </div>
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            {error ? error : null}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
