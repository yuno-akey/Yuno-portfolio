import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.png';

const Home: React.FC = () => {
  return (
    <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',isolation: 'isolate' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontSize: '3rem', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Yuno Akiba's Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          style={{ fontSize: '1.5rem', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          Welcome to my portfolio website!
        </motion.p>
      </div>
    </section>
  );
};

export default Home;