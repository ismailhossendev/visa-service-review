import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const TopServices = () => {
    return (
        <div className='my-10 px-5 md:px-0 '>
            <h2 className="text-4xl font-bold text-center text-red-900 my-5 font-serif">Our Upcoming Tours</h2>
            <div className="grid md:grid-cols-3 gap-2">
                {
                    [...Array(3)].map(service => <ServiceCard/>)
                }
            </div>
            <Link
            class="my-5  w-[150px] text-center mx-auto block rounded border border-indigo-600 bg-rose-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
            >
            See all
            </Link>
        </div>
    );
};

export default TopServices;