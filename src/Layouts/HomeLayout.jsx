import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-456px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomeLayout;