import { useState } from 'react'
import './App.css'
import route from './Routes/Routes'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'

function App() {

  const routes=createBrowserRouter(route)
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
