import React from 'react'
import { createRoot } from 'react-dom/client'

import '@/globals.css'

import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CartProvider } from '@/lib/cart_provider'
import store from '@/store'

import HomePage from '@/pages'
import ProductPage from '@/pages/product'

export const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
}, {
  path: '/product/:id',
  element: <ProductPage />,
}])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>,
)
