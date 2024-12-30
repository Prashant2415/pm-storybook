import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicHomePage from './PublicHomePage'
import About from '../mainComponents/About'
import Home from '../mainComponents/Home'
import TextGenerator from '../mainComponents/TextGenerator'

const HomeTemplate = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicHomePage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/textGenerator",
          element: <TextGenerator/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default HomeTemplate
