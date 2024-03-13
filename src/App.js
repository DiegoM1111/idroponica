import logo from './logo.svg';
import './App.css';

// import Titolo from './components/Titolo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';

// function App() {

//   // return (
//   //   // <Titolo></Titolo>
//   // );
// }

const router = createBrowserRouter([
  {path:'/', element:<Homepage/>}
]);

export default function App(){
  return <RouterProvider router={router}/>;
}
