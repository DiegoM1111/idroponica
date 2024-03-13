import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import SecondPage from './pages/SecondPage';
const router = createBrowserRouter([
{path:'/', element:<HomePage/>},
{path:'/second', element:<SecondPage/>}
]);
export default function App() {
return <RouterProvider router={router} />;
}

