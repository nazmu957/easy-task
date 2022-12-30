import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
