import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './header.module.css';

const navLinks = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#profile', id: 'profile', label: 'Profile' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const activeSection = useActiveSection(navLinks.map(link => link.id));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navLinks.map(link => {
          const isActive = activeSection === link.id;
          return (
            <a 
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;