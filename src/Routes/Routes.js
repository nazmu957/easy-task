import { createBrowserRouter } from 'react-router-dom'
import AddTask from '../Pages/AddTask/AddTask'
import CompletedTask from '../Pages/CompletedTask/CompletedTask'
import Details from '../Pages/Details/Details'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import MyTask from '../Pages/MyTask/MyTask'
import Register from '../Pages/Register/Register'
import UpdateTask from '../Pages/UpdateTask/UpdateTask'
import PrivateRoute from '../Routes/PrivateRoute/PrivateRoute'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/addTask',
    element: <AddTask></AddTask>,
  },
  {
    path: '/myTask',
    element: (
        <MyTask></MyTask>
    ),
    loader: () => fetch('https://easy-task-server-inky.vercel.app/addTask'),
  },
  {
    path: '/details',
    element: (<PrivateRoute><Details></Details></PrivateRoute>),
  },
  {
    path: '/update/:id',
    element: <UpdateTask></UpdateTask>,
    loader: ({ params }) =>
      fetch(`https://easy-task-server-inky.vercel.app/addTask/${params.id}`),
  },
  {
    path: '/complete/:id',
    element: <CompletedTask></CompletedTask>,
    loader: ({ params }) =>
      fetch(`https://easy-task-server-inky.vercel.app/addTask`),
  },
  {
    path: '/completedTask',
    element: <CompletedTask></CompletedTask>,
    loader: () => fetch('https://easy-task-server-inky.vercel.app/addTask'),
  },
])
