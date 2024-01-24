import ReactDOM from 'react-dom/client';
import React, {Component}from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import ColorBlackHoodie from "./components/Layout/Products/ColorBlackHoodie/ColorBlackHoodie.js";
import reportWebVitals from './reportWebVitals';
import HalfZipAnorak from './components/Layout/Products/HalfZipAnorak/HalfZipAnorak.js';
import InsideOutTee from './components/Layout/Products/InsideOutTee/InsideOutTee.js';
import InsideOutWaffle from './components/Layout/Products/InsideOutWaffle/InsideOutWaffle.js';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// export default class index extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// };



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"ColorBlackHoodie",
    element: <ColorBlackHoodie />
  },
  {
    path:"HalfZipAnorak",
    element: <HalfZipAnorak />
  },
  {
    path:"InsideOutTee",
    element: <InsideOutTee />
  },
  {
    path:"InsideOutWaffle",
    element: <InsideOutWaffle />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}>

    <App />
    </RouterProvider>
  </React.StrictMode>
);



// reportWebVitals();
