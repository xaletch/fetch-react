import React from 'react'
import { Layout, LayoutAuth } from '../../shared/ui'
import { createBrowserRouter } from 'react-router'
import { Login, Register } from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <div>home</div>
      }
    ]
  },
  {
    path: '/login',
    element: <LayoutAuth />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/register',
    element: <LayoutAuth />,
    children: [
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
])