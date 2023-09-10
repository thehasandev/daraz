import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";

import Home from "./pages/Home"

import RouteLayouts from './components/RouteLayouts';
import ForYouPartOne from './pages/ForYouPartOne';
import FlashPartOne from './pages/FlashPartOne';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayouts/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/:tittle' element={<FlashPartOne/>}/>
     <Route path='/:card' element={<ForYouPartOne/>}/>
     <Route path='*' element={<Error/>}/>
    </Route>
  )
);

import "./App.css"



function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App