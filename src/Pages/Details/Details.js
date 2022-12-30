import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Details = () => {
    const tasks = useLoaderData()
    console.log(tasks);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center text-3xl mt-5 font-bold'>Description</h1>
            <div className='grid grid-cols-1 lg:gap-5 lg:grid-cols-3 lg:mx-32 mt-20 mx-5 mb-20 rounded '>
            <div className='bg-red-100 p-20 lg:mt-5'>
                <h1 className='text-center font-bold pb-3'>My Task Functionality</h1>
                <p>In this section user can see the all user task list.In this list user can easyly update his task and also delete task from my Task.It's very usefull feature for user.</p>
            </div>
            <div className='bg-red-100 p-20 mt-5'>
                <h1 className='text-center font-bold pb-3'>Add Task Functionality</h1>
                <p>In this section user can add his task .Here have a input field for give input task for forward my task list.</p>
            </div>
            <div className='bg-red-100 p-20 mt-5 mt-5'>
                <h1 className='text-center font-bold pb-3'>Complete Task Functionality</h1>
                <p>This section is very important.Because of in this section user show thats task which are user clicked completed.There also have deleted button for delete task after complete task.</p>
            </div>
        </div>
        </div>
    );
};

export default Details;