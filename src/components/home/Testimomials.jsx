import React, { useState } from 'react';
import { testimonies } from '../../constant';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine testimonies to display based on state
  const displayedTestimonies = showAll ? testimonies : testimonies.slice(0, 3);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedTestimonies.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{item.no}</h2>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
      {/* Button to toggle testimony display */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showAll ? 'Show Less' : 'More Testimonies'}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
