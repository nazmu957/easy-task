import React from 'react';
import AddTask from '../AddTask/AddTask';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'


const Home = () => {

    return (
        <div className='bg-indigo-50 pb-5 '>
          <Navbar></Navbar>
          <AddTask></AddTask>
          
        </div>
    );
};

export default Home;