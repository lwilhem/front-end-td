import { useContext } from 'react'
import { CartContext } from './cart_provider'

export function useCart() {
  return useContext(CartContext)
}
