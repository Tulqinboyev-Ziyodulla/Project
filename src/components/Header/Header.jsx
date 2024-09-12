import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='container'>
        <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <h2 className="header-title">Where in the world?</h2>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
    <hr />
    </div>
  );
}

export default Header;
