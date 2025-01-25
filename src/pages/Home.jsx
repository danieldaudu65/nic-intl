import React from 'react';
import Welcome from '../components/home/Welcome';
import Programs from '../components/home/Programs';
import Card from '../components/home/Card';
import BecomeAMember from '../components/home/BecomeAMember';
import Testimonials from '../components/home/Testimomials';
import Pray from '../components/home/Pray';
import Homepage from '../components/home/Homepage';

const Home = () => {
    return (
        <div>
            <Homepage />
            <Welcome />
            <Programs />
            <Card />
            <BecomeAMember />
            <Testimonials />
            <Pray />
        </div>
    );
}

export default Home;
