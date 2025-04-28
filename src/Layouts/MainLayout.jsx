


import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber';
import Footer from '../Pages/Shared/Footer';


const MainLayout = () => {


    return (
        <div >

<div className="bg-[#F2F6FD]">
<Navber></Navber>
 
</div>
            <div className='max-w-6xl mx-auto' >
            <Outlet></Outlet>
            </div>
          
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;