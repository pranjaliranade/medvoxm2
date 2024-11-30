import React from 'react';
//import '../pages/Profile.css';
import '../App.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">News Aggregator</div>
      <div className="search-bar">
        <input type="text" placeholder="Search news..." />
        <button>Search</button>
      </div>
      <div className="profile-link">
        <a href="/profile">
        <img src="profile-pic-url" alt="User Profile" />
        </a>
      </div>
      
    </div>
  );
};

export default Header;
