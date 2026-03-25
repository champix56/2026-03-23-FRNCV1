import { View, Text } from 'react-native'
import React from 'react'
import CartConnected from '../components/ui/Cart/Cart.connected'


const Cart = () => {
  return (
    <View style={{flex:1}}>
      <CartConnected/>
    </View>
  )
}

export default Cart