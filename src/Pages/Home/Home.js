import React from 'react';
import AddTask from '../AddTask/AddTask';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <div>
          <Navbar></Navbar>
          <AddTask></AddTask>
        </div>
    );
};

export default Home;