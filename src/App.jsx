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
import Cheakout from "./pages/Cheakout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayouts/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/:tittle' element={<FlashPartOne/>}/>
     <Route path="/card/:card" element={<ForYouPartOne/>}/>
     <Route path="/add-to-card" element={<AddToCard/>}/>
     <Route path="/check-out" element={<Cheakout/>}/>
     <Route path='*' element={<Error/>}/>
    </Route>
  )
);

import "./App.css"
import AddToCard from './pages/AddToCard';



function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App