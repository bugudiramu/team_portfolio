import React from 'react';
import './ProductInfoStyles.css';

const ProductInfo = () => {
  return (
    <div className='product-info-container'>
      <div className='product-info-container-flex flex-1'>
        <img
          className='product-info-container-flex-img'
          src='https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          alt=''
        />
      </div>
      <div className='product-info-container-flex flex-2'>
        <h1>We create successful digital products.</h1>
        <p className='flex-2-para'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          necessitatibus culpa repellendus eaque. Perspiciatis consequuntur
        </p>
        <p className='flex-2-para'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          necessitatibus culpa repellendus eaque. Perspiciatis consequuntur.
        </p>
        <div className='product-info-container-flex-analytics'>
          <div className='works-completed'>
            <h1>10</h1>
            <p className='works-completed-text'>Works Completed</p>
          </div>
          <div className='works-completed'>
            <h1>2</h1>
            <p className='works-completed-text'>Happy Customers</p>
          </div>
          <div className='works-completed'>
            <h1>2</h1>
            <p className='works-completed-text'>Positive Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
