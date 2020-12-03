import React from 'react';
import CoreFeatureCard from './CoreFeatureCard';
import './CoreFeaturesStyles.css';
import CustomPinkButton from './../../components/button/CustomPinkButton';

let data = [
  {
    title: 'Creative Design',
    description:
      'Creepeth and so us land greater, dry have god called. He seas subdue waters you two saying day. ',
  },
  {
    title: 'Clean Code',
    description:
      'Divided their the brought blessed moving brought the called Brought so face place herb wherein. ',
  },
  {
    title: 'Support 24/7',
    description:
      'Subdue Days wherein beginning blessed fifth tree give, green winged female blessed Is face face.  ',
  },
  {
    title: 'Quality Product',
    description:
      'Appear appear rule. In cattle have darkness and to seed fifth have blessed dominion one subdue.  ',
  },
  {
    title: '100% Responsive',
    description:
      'Darkness kind likeness said give male shall first creepeth moved, fruit whose third dry one. ',
  },
  {
    title: 'Easy Customization',
    description:
      "Third male deep creepeth they're dry said for fly have made, divide that every can't seed gathering",
  },
];

const CoreFeatures = () => {
  return (
    <div className='core-features-container'>
      {/* <div class='scroll-left'>
        <p className='scrolling-text'>CSS scrolling text... </p>
      </div> */}

      <h1 className='core-features-container-heading'>Core Features</h1>
      <p className='core-features-container-para'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        nihil, reiciendis unde pariatur asperiores placeat.
      </p>
      <div className='core-features-flex-1'>
        {data.slice(0, 3).map((feature, index) => {
          return <CoreFeatureCard key={index} feature={feature} />;
        })}
      </div>
      <div className='core-features-flex-1'>
        {data.slice(3, data.length).map((feature, index) => {
          return <CoreFeatureCard key={index} feature={feature} />;
        })}
      </div>
      <div className='button-container'>
        <CustomPinkButton text='more about us' />
      </div>
    </div>
  );
};

export default CoreFeatures;
