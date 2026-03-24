import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './CartIcon.style';

interface ICartIconProps {
  quantity: number;
}
const CartIcon = ({quantity}: ICartIconProps) => {
  return (
    <TouchableOpacity onPress={()=>{
      
      }}>
      <Image
        source={require('./trolley.png')}
        style={style.icon}
      />
      {quantity > 0 && (
        <View style={style.cartIconContainer}>
          <Text style={style.quantity}>
            {quantity > 999 ? '999+' : quantity}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;
