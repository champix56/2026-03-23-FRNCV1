import React from "react";
import { Product } from "../../metier/Product";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
interface IProductInList {
  product: Product;
}
const ProductInList: React.FC<IProductInList> = ({ product }) => {
  return (
    <View style={styles.ProductInList}>
      <Text style={styles.titre}>{product.titre}</Text>
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text>stock:{product.stock}</Text>
          <Button title="Voir" color={'green'} onPress={()=>{}}/>
        </View>
        <Image style={styles.image} source={{ uri: product.thumbnailUrl }} />
      </View>
          <Button title="Ajouter panier" color={'blue'} onPress={()=>{}}/>

    </View>
  );
};
const styles = StyleSheet.create({
  ProductInList: {
    borderColor:'grey',
    borderWidth:1,
    marginBottom:5,
    padding:5,
    width:300
  },
  container: {
    flexDirection: "row",
    marginVertical:5
  },
  titre:{textAlign:'center',textDecorationStyle:'solid', textDecorationLine:'underline', fontSize:22, fontWeight:900},
  leftView: {flexGrow:1, padding:5},
  image: {
    width:128,
    height:128,
  },
});


export default ProductInList