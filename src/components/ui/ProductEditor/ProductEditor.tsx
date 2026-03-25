import { Button, Dimensions, Image, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductEditor.styles";
import { useNavigation } from "@react-navigation/native";

export type IProductEditorProps = {
  product: IProduct;
  onProductSaved: (produit: IProduct) => void;
};

const ProductEditor = ({ product, onProductSaved }: IProductEditorProps) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  //setCurrentProduct({...currentProduct,prix:1.0})
  const n = useNavigation();
  return (
    <View>
      <Text style={styles.header}>Edition Produit</Text>
      <View style={styles.central}>
        <View
          style={[
            styles.left,
            { maxWidth: Dimensions.get("screen").width - 140 },
          ]}
        >
          <Text style={styles.headerValue}>Titre</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            value={currentProduct.titre}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,titre:t});}}
          />
          <Text style={styles.headerValue}>Description</Text>
          <TextInput
            style={[styles.input, styles.multiLinesInput]}
            numberOfLines={6}
            multiline
            maxLength={256}
            value={currentProduct.description}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,description:t});}}

          />
          <Text style={styles.headerValue}>Stock</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="decimal-pad"
            inputMode="numeric"
            value={(undefined !== currentProduct.stock
              ? currentProduct.stock
              : 0
            ).toFixed(2)}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,stock:Number(parseFloat(t).toFixed(2))});}}

          />
          <Text style={styles.headerValue}>Prix</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="decimal-pad"
            inputMode="decimal"
            value={(undefined !== currentProduct.prix
              ? currentProduct.prix
              : 0
            ).toFixed(2)}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,prix:Number(parseFloat(t).toFixed(2))});}}

          />
          <Text style={styles.headerValue}>Image</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            inputMode="url"
            value={currentProduct.imageUrl}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,imageUrl:t});}}

          />
          <Text style={styles.headerValue}>Thumbnail</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            inputMode="url"
            value={currentProduct.thumbnailUrl}
            onChangeText={(t)=>{setCurrentProduct({...currentProduct,thumbnailUrl:t});}}

          />
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
        <Button
          title="Cancel"
          color={"tomato"}
          onPress={() => {
            n.goBack();
          }}
        />
        <Button
          title="Ok"
          color={"skyblue"}
          onPress={() => {
            onProductSaved(currentProduct);
            n.navigate('store');
          }}
        />
      </View>
    </View>
  );
};

export default ProductEditor;
