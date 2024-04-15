import React, { useState } from 'react';
import './DoingMathGraph.scss';
import DevelopmentTime from './DevelopmentTimeFlow/DevelopmentTime.jsx';
import { motion } from 'framer-motion';

function DoingMathGraph() {
  const [selectedApp, setSelectedApp] = useState('uber');

  const handleGraphLinkClick = (app) => {
    setSelectedApp(app);
  };
  return (
    <motion.div className='doingmath-graph-wrapper'>
      <div className='dpoingmath-graph'>
        <div className='graph-links'>
          <button
            onClick={() => handleGraphLinkClick('uber')}
            className={`content_para ${selectedApp === 'uber' ? 'active' : ''}`}
          >
            Uber-like app
          </button>
          <button
            className={`content_para ${
              selectedApp === 'shipping' ? 'active' : ''
            }`}
            onClick={() => handleGraphLinkClick('shipping')}
          >
            Shipping app
          </button>
          <button
            className={`content_para ${
              selectedApp === 'ecommerce' ? 'active' : ''
            }`}
            onClick={() => handleGraphLinkClick('ecommerce')}
          >
            E-commerce app
          </button>
          <button
            className={`content_para ${
              selectedApp === 'fitness' ? 'active' : ''
            }`}
            onClick={() => handleGraphLinkClick('fitness')}
          >
            Fitness app
          </button>
        </div>
        <DevelopmentTime selectedApp={selectedApp} />
      </div>
    </motion.div>
  );
}

export default DoingMathGraph;
