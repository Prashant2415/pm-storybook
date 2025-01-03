import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicHomePage from './PublicHomePage'
import About from '../mainComponents/About'
import Home from '../mainComponents/Home'
import TextGenerator from '../mainComponents/TextGenerator'
import Testimonial from '../mainComponents/Testimonial'
import Filter from '../mainComponents/Filter'
import Sorting from '../mainComponents/Sorting'

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
        },
        {
          path: "/testimonial",
          element: <Testimonial/>
        },
        {
          path: "/filter",
          element: <Filter/>
        },
        {
          path: "/sorting",
          element: <Sorting/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default HomeTemplate
