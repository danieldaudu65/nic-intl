import React from 'react';
import { footer } from '../assets';

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold">Footer Content</h2>
        <p>Some additional information or links can go here.</p>
      </div>
    </div>
  );
};

export default Footer;
