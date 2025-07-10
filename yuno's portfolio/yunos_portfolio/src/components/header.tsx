import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ position: 'fixed', width: '100%', top: 0, background: 'rgba(26, 26, 26, 0.8)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem' }}>
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;