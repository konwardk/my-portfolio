import React from 'react';
import '../styles/Topbar.css'
function Topbar(props) {
  return (
    <div className='topbar'>
      <div className='message'>
        <p>Website is under Construction</p>
      </div>
      <div className='navigation'>
          
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          
      </div>

    </div>
  );
}

export default Topbar;