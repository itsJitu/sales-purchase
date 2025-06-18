
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AddSales from "./Components/AddSales";
import First from "./Components/First";
import SalesTable from "./Components/SalesTable";

const router = createBrowserRouter([
  {
    path:"/",
    element: <First />,

    children: [
      {
        index: true,
        element:<AddSales />
      },
      {
        path: "/SalesTable",
        element: <SalesTable />
      },
    ],
  }
]);

function App() {
 

  return <RouterProvider router={router}/>;
}

export default App
