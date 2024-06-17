import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Services from "./Components/Services";
import NotFoundPage from "./Components/NotFoundPage";
import Webdev from './Components/Webdev';
import Analytics from './Components/Analytics';
import Engineering from './Components/Engineering';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Services />,
    errorElement:<NotFoundPage />
  },
  {
    path:"webdevelopment",
    element:<Webdev />
  },
  {
    path:"dataanalytics",
    element:<Analytics />
  },
  {
    path:"dataengineering",
    element:<Engineering />
  }

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
