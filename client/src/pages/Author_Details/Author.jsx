import React, { useState } from 'react';
import '../../Styling/Author.css';
import logo from '../../assets/Images/virlib_logo.png';
import Profile from './Profile';
import PublishedWork from './PublishedWork';
import Feedback from './Feedback';
import AddNewWork from './NewWork';

const Author = () => {
  const [activeSection, setActiveSection] = useState('Profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile':
        return <Profile />;
      case 'PublishedWork':
        return <PublishedWork />;
      case 'Feedback':
        return <Feedback />;
      case 'AddNewWork':
        return <AddNewWork />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>Welcome to the World of Creativity, [Author]!</h1>
        </div>
      </header>

      {/* Main Layout */}
      <div className="dashboard-main">
        {/* Sidebar */}
        <nav className="sidebar">
          <button onClick={() => setActiveSection('Profile')}>Profile</button>
          <button onClick={() => setActiveSection('PublishedWork')}>Published Work</button>
          <button onClick={() => setActiveSection('Feedback')}>Feedback</button>
          <button onClick={() => setActiveSection('AddNewWork')}>Add New Work</button>
        </nav>

        {/* Content */}
        <div className="content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Author;
