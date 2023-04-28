import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ progress }) => {
  const progressBarStyle = {
    root: {
      width: '50%',
      margin: 'auto',
    },
    path: {
      stroke: 'url(#progressGradient)', 
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      strokeWidth: 10,
    },
    trail: {
      stroke: '#151515',
      strokeWidth: 10,
      strokeLinecap: 'round',
    },
    text: {
      fill: '#ffffff',
      fontSize: '24px',
      fontFamily: 'Centra',
      fontWeight: 'bold',
      textAnchor: 'middle',
    },
    
    filter: 'url(#blurFilter)',
  };

  return (
    <div style={progressBarStyle.root}>
      <svg viewBox="0 0 100 100">
        <defs>
          {/* Define el gradiente */}
          <linearGradient id="progressGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#6131ad" />
            <stop offset="100%" stopColor="#9c3585" />
          </linearGradient>
          {/* Define el filtro */}
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
        {/* Agrega el filtro a la barra de progreso */}
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={progressBarStyle}
          filter="url(#blurFilter)"
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;


