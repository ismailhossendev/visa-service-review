import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-[url(https://images.pexels.com/photos/879478/pexels-photo-879478.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                International Visa Processing  
                    <strong className="block font-extrabold text-rose-700">
                    With Expert
                    </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                    We are experts who are here to help you with your visa processing. We have a 100% success rate in visa processing.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Popular 
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