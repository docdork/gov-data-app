
// import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';


import Home from './pages/Home';
import Floods from './pages/Floods';
import Police from './pages/Police';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './pages/Root';
import MPs from './pages/MPs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {path: 'floods', element: <Floods/>},
      {path: 'police', element: <Police/>},
      {path: 'mps', element: <MPs/>},
    ]}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
