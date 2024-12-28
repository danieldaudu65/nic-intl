import React from 'react';
import Welcome from '../components/home/Welcome';
import Programs from '../components/home/Programs';
import Card from '../components/home/Card';
import BecomeAMember from '../components/home/BecomeAMember';
import Testimonials from '../components/home/Testimomials';

const Home = () => {
    return (
        <div>
            <Welcome />
            <Programs />
            <Card />
            <BecomeAMember />
            <Testimonials />
        </div>
    );
}

export default Home;
