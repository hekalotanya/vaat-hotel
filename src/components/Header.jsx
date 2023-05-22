import React from 'react';

const Header = () => {
  return (<>
    <div className='header'>
      <span className='logo'>VaaT Yapi</span>
      <a href="#" className='header-tab'>Completed projects</a>
      <a href="#" className='header-tab'>Projects on sale</a>
      <a href="#" className='button'><span className='button-text'>Let's talk</span></a>
    </div>
  </>)
}

export default Header;