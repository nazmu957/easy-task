import { createBrowserRouter } from 'react-router-dom'
import AddTask from '../Pages/AddTask/AddTask'
import CompletedTask from '../Pages/CompletedTask/CompletedTask'
import Home from '../Pages/Home/Home'
import MyTask from '../Pages/MyTask/MyTask'
import UpdateTask from '../Pages/UpdateTask/UpdateTask'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/addTask',
    element: <AddTask></AddTask>,
  },
  {
    path: '/myTask',
    element: <MyTask></MyTask>,
    loader: () => fetch('http://localhost:5000/addTask'),
  },
  {
    path: '/update/:id',
    element: <UpdateTask></UpdateTask>,
    loader: ({ params }) => fetch(`http://localhost:5000/addTask/${params.id}`),
  },
  {
    path: '/complete/:id',
    element: <CompletedTask></CompletedTask>,
    loader: ({ params }) => fetch(`http://localhost:5000/addTask`),
  },
  {
    path: '/completedTask',
    element: <CompletedTask></CompletedTask>,
    loader: () => fetch('http://localhost:5000/addTask'),
  },
])
