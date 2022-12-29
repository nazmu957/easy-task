import React from 'react';
import AddTask from '../AddTask/AddTask';
import CompletedTask from '../CompletedTask/CompletedTask';
import MyTask from '../MyTask/MyTask';
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