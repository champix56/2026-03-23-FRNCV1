import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IProduct } from "../../../interfaces/IProducts";

interface IProductViewerProps {
  product: IProduct;
  onProductAddToCart:(prod:IProduct)=>void
  onProductEditTouch:(product:IProduct)=>void
}

const ProductViewer = ({ product, onProductAddToCart, onProductEditTouch }: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={[styles.titre, styles.bold]}>{product.titre}</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
          {undefined !== product.stock && product.stock > 0 ? (
            <Text style={styles.stock}>
              stock:<Text style={styles.bold}>{product.stock}</Text>
            </Text>
          ) : (
            <Text style={styles.indisponible}>Indisponible</Text>
          )}
          <Text style={styles.descriptionLabel}>Description :</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.prix}>Prix:{product.prix}</Text>
        </View>
        <View style={styles.colRight}>
          <Image style={styles.image} source={{ uri: product.imageUrl }} />
        </View>
      </View>
      <Button title="ajouter panier" onPress={()=>{
        onProductAddToCart(product)
      }} />
      <Button title="Edition article" color={'tomato'} onPress={()=>{
        onProductEditTouch(product)
      }} />
    </View>
  );
};

export default ProductViewer;

const styles = StyleSheet.create({
  ProductViewer: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titre: {
    textAlign: "center",
    fontSize: 30,
    textDecorationLine: "underline",
  },
  colsFlex: {
    flexDirection: "row",
    gap: 5,
  },
  colLeft: {},
  colRight: {
    justifyContent: "center",
    gap: 10,
  },
  stock: { fontSize: 20 },
  descriptionLabel: {},
  description: {},
  prix: {},
  bold: { fontWeight: 900 },
  image: {
    width: 200,
    height: 200,
  },
  indisponible: {
    fontStyle: "italic",
    color: "red",
    fontWeight: 100,
  },
});
