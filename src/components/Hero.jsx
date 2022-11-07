import React from 'react';
import {ImYoutube} from "react-icons/im";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-[url(https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Explore Your Dream Palace 
                    <strong className="block font-extrabold text-rose-700">
                    With <Link className='flex gap-1'><ImYoutube/> ISMAIL360</Link>
                    </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                    Travel With Your Best YouTuber And Make Your Dream Come True. <br />We Explore Best Places In Bangladesh And Abroad.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Popular Explore
                    </a>
                    <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    Blog
                    </a>
                </div>
                </div>
            </div>
            </section>

    );
};

export default Hero;