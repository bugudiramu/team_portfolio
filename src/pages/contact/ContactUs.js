import React from 'react';
import CustomPinkButton from '../../components/button/CustomPinkButton';
import CustomTextArea from '../../components/input/CustomTextArea';
import CustomTextInput from '../../components/input/CustomTextInput';
import './ContactUsStyles.css';

const ContactUs = () => {
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
        <form netlify>
          <div className='flex-child-2-input'>
            <CustomTextInput placeholder='Your Name' />
            <CustomTextInput placeholder='Your Email' />
          </div>
          <div className='flex-child-2-input'>
            <CustomTextInput placeholder='Your Phone' />
            <CustomTextInput placeholder='Your Title' />
          </div>
          <div className='flex-child-2-input' style={{ width: '95%' }}>
            <CustomTextArea placeholder='Your Message' />
          </div>
          <div className='flex-child-2-button'>
            <CustomPinkButton text='SEND MESSAGE' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
