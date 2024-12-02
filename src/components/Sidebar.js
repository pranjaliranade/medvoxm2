import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;
