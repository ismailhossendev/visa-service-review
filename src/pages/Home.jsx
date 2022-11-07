import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import TopServices from '../components/TopServices';
import TrustedBy from '../components/TrustedBy';

const Home = () => {
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Hero/>
            <TrustedBy/>
            <TopServices/>
            <Testimonials/>
        </div>
    );
};

export default Home;