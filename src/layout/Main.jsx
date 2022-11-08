import {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { mainContext } from '../context/MainContext';

const Main = () => {
    const {loading} = useContext(mainContext)
    return (
        <div className='absolute w-full'>
            {loading && <div className="w-16 h-16 border-4 absolute left-1/2 top-[15%] border-dashed rounded-full z-50 animate-spin border-gray-800"></div>}
            <NavBar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;