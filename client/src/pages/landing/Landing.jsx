import React from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { Landing } from '..';

const LandingPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to our landing page!</h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Here's some information about our product or service.
      </motion.p>
      <a href="/login">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Sign up now
      </motion.button>
      </a>
    </motion.div>
  );
}

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default Landing;