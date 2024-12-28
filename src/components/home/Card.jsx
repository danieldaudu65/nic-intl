import React from 'react';
import { Cards } from '../../constant';
import Button from '../Button';

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {Cards.map((item, index) => (
                <div key={index} className="border rounded-lg shadow-md p-4 text-center">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.text}</p>
                    <Button text={item.button} />
                </div>
            ))}
        </div>
    );
};

export default Card;
