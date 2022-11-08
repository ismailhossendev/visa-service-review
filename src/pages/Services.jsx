import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const {data} = useLoaderData();
    return (
        <section>
            <Helmet>
                <title>Visa Dalal -Services</title>
            </Helmet>
                <div className="mt-4 grid max-w-screen-xl mx-auto grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                   {
                        data.map(service => <ServiceCard key={service._id} service={service} />)
                   }
                </div>
            </section>
    );
};

export default Services;