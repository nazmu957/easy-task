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
            <div className='grid grid-cols-1 lg:gap-5 lg:grid-cols-3 lg:mx-32 mt-20 mx-5 rounded '>
            <div className='bg-red-100 p-20 lg:mt-5'>
                <h1 className='text-center font-bold pb-3'>My Task Functionality</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at, rem doloremque ad modi delectus sed quasi dicta, rerum perspiciatis voluptatem, alias adipisci repellat omnis vel! Quisquam temporibus adipisci officia.</p>
            </div>
            <div className='bg-red-100 p-20 mt-5'>
                <h1 className='text-center font-bold pb-3'>Add Task Functionality</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia possimus similique eos aliquam distinctio repudiandae id molestias, voluptatem maxime cupiditate nobis non accusamus, quidem enim nisi aut totam culpa?</p>
            </div>
            <div className='bg-red-100 p-20 mt-5 mt-5'>
                <h1 className='text-center font-bold pb-3'>Complete Task Functionality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi qui voluptatibus deleniti quam rem, ab praesentium dolorum distinctio optio unde temporibus harum in laboriosam quisquam ut ullam eligendi et! Officiis!</p>
            </div>
        </div>
        </div>
    );
};

export default Details;