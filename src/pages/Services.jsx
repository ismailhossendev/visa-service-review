import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    return (
        <section>

                <div className="mt-4 grid max-w-screen-xl mx-auto grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                   {
                        [...Array(12)].map(service => <ServiceCard/>)
                   }
                </div>
            </section>
    );
};

export default Services;