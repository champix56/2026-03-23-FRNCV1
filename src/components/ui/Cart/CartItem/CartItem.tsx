import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IProduct } from "../../../../interfaces/IProducts";

type Props = {
  product: IProduct;
  onQuantChange: (p: IProduct,q: number) => void;
};

const CartItem = ({ product, onQuantChange }: Props) => {
  return (
    <View style={styles.CartItem}>
      <Image style={styles.img} source={{ uri: product.thumbnailUrl }} />
      <View style={styles.central}>
      <View style={styles.centralText}>
        <Text style={styles.titre}>{product.titre}</Text>
        <Text style={styles.center}>
          Prix:{product.prix.toFixed(2)} X{" "}
          {undefined !== product.quant ? product.quant.toFixed(2) : "1.00"}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button title=" - " color={'tomato'} onPress={()=>{
            onQuantChange(product,undefined!==product.quant?product.quant-1:0)
        }}/>
        <Button title=" + " color={'skyblue'} onPress={()=>{
             onQuantChange(product,undefined!==product.quant?product.quant+1:1)
        }}/>
      </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalValue}>
          {(
            Number(product.prix.toFixed(2)) *
            Number(undefined !== product.quant ? product.quant.toFixed(2) : 1)
          ).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  CartItem: {
    flexDirection: "row",
    paddingHorizontal: 5,
    borderTopColor:'grey',
    borderTopWidth:1,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    borderStyle:'solid',
    paddingVertical:5,
    // marginBottom:5
  },
  img: {
    width: 32,
    height: 32,
  },
  centralText:{flexGrow:1},
  central: {
    flexGrow: 1,
    flexDirection:'row'
  },
  center: { textAlign: "center", fontSize: 10 },
  titre: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 12,
  },
  buttons:{
    flexDirection:'row',
    paddingRight:10,
    gap:5
  },
  total: {
    justifyContent:'flex-end'
  },
  totalValue:{
    fontWeight:900,
    fontSize:15
  }
});
