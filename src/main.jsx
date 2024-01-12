import React from 'react'
import { createRoot } from 'react-dom/client'

import '@/globals.css'

import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from '@/store'

import HomePage from '@/pages'

export const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
}])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
