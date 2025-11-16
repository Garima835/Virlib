import React, { useState, useRef, useEffect } from 'react';
import '../../Styling/Author_profile.css';
import defaultProfile from '../../assets/Images/profile.png';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [menuOpen, setMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleRemove = () => {
    setProfileImage(defaultProfile);
    setMenuOpen(false);
  };

  const handleEdit = () => {
    fileInputRef.current.click();
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="author-profile-wrapper">
    <div className="profile-details-box">
    <div className="profile-container">
      <div className="profile-image-wrapper">
        <img src={profileImage} alt="Profile" width="150" height="150" className="profile-img" />
        <div className="menu-wrapper" ref={menuRef}>
          <button onClick={handleMenuToggle} className="menu-dots">⋮</button>
          {menuOpen && (
            <div className="menu-dropdown">
              <p onClick={() => alert("Viewing Profile")}>👁 View Profile</p>
              <p onClick={handleEdit}>✏️ Edit Profile</p>
              <p onClick={handleRemove}>🗑 Remove Profile</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>

    <div className="author-profile-container">
    <h2 className="profile-title">Author Profile</h2>
    <div className="profile-detail-row">
      <span className="label">Author Name:</span>
      <span className="value">[name]</span>
    </div>
    <div className="profile-detail-row">
      <span className="label">Email:</span>
      <span className="value">[email]</span>
    </div>
    <div className="profile-detail-row">
      <span className="label">Books Published:</span>
      <span className="value">5</span>
    </div>
    <div className="profile-detail-row">
      <span className="label">Average Rating:</span>
      <span className="value">4.6</span>
    </div>
    <div className="profile-detail-row">
      <span className="label">Total Feedbacks:</span>
      <span className="value">23</span>
    </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export default Profile;
