import { View, Text } from 'react-native'
import React from 'react'
import UnStore from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { addProduct, removeProduct } from '../../../store/CartSlice'
type Props = {}

const Cart = (props: Props) => {
    const cart = useSelector((s:RootState)=>s.cart.produits)
    const d=useDispatch<AppDispatch>()
  return (
    <UnStore products={cart} onQuantChange={(p,q)=>{
        if(q>0){
            d(addProduct(p))
        }
        else{
            d(removeProduct(p))
        }
    }}/>
  )
}

export default Cart