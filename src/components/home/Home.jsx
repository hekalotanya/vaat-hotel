import React from 'react';
import './Home.scss';

const Home = () => {
  return (<>
    <div className='main_container'>
      <div className='main_container-text'>
        <h1 className='main_container-title'>WE PROMISE COMFORTABLE LIVING SPACES AND BEAUTIFUL DAYS TO LIVE.</h1>
        <a href="#" className='button'><span className='button-text'>Scroll to discover</span></a>
        <div className='main_container-social'>
          <a href="#" className='social_link'>FACEBOOK</a>
          <a href="#" className='social_link'>INSTAGRAM</a>
          <a href="#" className='social_link'>YOUTUBE</a>
        </div>
      </div>
      <div className='main_container-gallery'></div>
    </div>
  </>)
}

export default Home;