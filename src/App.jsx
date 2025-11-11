
import './App.css'
import Slider from './components/slider'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/homePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>

  )
}

export default App
