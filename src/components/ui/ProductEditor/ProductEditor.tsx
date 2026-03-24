import { Button, Image, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductEditor.styles";

type Props = {
  product: IProduct;
  onProductSaved:(produit:IProduct)=>void
};

const ProductEditor = ({ product }: Props) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  return (
    <View>
      <Text style={styles.header}>Edition Produit</Text>
      <View style={styles.central}>
        <View style={styles.left}>
          <Text style={styles.headerValue}>Titre</Text>
          <TextInput style={[styles.input, styles.inputText]} />
          <Text style={styles.headerValue}>Description</Text>
          <TextInput
            style={[styles.input, styles.multiLinesInput]}
            numberOfLines={6}
            multiline
            maxLength={256}
          />
          <Text style={styles.headerValue}>Stock</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="decimal-pad"
            inputMode="numeric"
          />
          <Text style={styles.headerValue}>Prix</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="decimal-pad"
            inputMode="decimal"
          />
          <Text style={styles.headerValue}>Image</Text>
          <TextInput style={[styles.input, styles.inputText]} inputMode="url" />
          <Text style={styles.headerValue}>Thumbnail</Text>
          <TextInput style={[styles.input, styles.inputText]} inputMode="url" />
        </View>
        <View style={styles.right}>
          {product.imageUrl.length > 0 && (
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
          )}
          {product.thumbnailUrl.length > 0 && (
            <Image
              source={{ uri: product.thumbnailUrl }}
              style={styles.thumbnail}
            />
          )}
        </View>
      </View>
      <View style={styles.buttons}>
        <Button title="Cancel" color={"tomato"} />
        <Button title="Ok" color={"skyblue"} />
      </View>
    </View>
  );
};

export default ProductEditor;
