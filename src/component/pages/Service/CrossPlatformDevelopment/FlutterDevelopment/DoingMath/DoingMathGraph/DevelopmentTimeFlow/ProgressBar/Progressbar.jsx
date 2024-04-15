import React from 'react';
import './Progressbar.scss';
import { motion } from 'framer-motion';
function Progressbar({ width, backgroundColor, text }) {
  return (
    <div className='progressbar-wrapper'>
      <motion.div
        className='progressbar'
        style={{
          width: width,
          backgroundColor: backgroundColor,
        }}
        animate={{ width: width }}
        transition={{ delay: 0.5, stiffness: 50, type: 'spring' }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default Progressbar;
