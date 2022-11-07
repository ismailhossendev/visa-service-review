import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './route/route';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
