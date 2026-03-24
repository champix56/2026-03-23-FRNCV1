import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import CartItem from "./CartItem/CartItem";

type Props = {
  products: Array<IProduct>;
  onQuantChange:(p:IProduct,q:number)=>void
};

const Cart = ({ products , onQuantChange}: Props) => {
  const [total, setTotal] = useState(0.0);
  useEffect(()=>{
    let total=0
    for (const element of products) {
        total+=element.prix*(undefined!==element.quant?element.quant:1)
    }
    setTotal(total)
  },[products])
  return (
    <View>
      <Text style={styles.header}>Cart</Text>
      <ScrollView style={styles.scroll}>
      {products.map((p, i) => (
        <CartItem product={p} key={i} onQuantChange={onQuantChange} />
      ))}
      </ScrollView>
      <Text style={styles.total}>
        Total<Text style={styles.totalValue}>{total.toFixed(2)}</Text>
      </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  CartItem: {
    textAlign:'center',
    padding:5
  },
  scroll:{},
  header:{textAlign:'center',
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
    fontSize:15
  },
  total: {textAlign:'right'},
  totalValue: {paddingHorizontal:8,fontSize:15,fontWeight:900},
});
