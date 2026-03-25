import { View, Text } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsListViewer.styles";
import ProductViewer from "../ProductViewer/ProductViewer";

interface IProductsListViewerProps {
  products: Array<IProduct>;
  onProductAddToCart: (prod: IProduct) => void;
  onProductAskEdition:(prod:IProduct)=>void
}

const ProductsListViewer = ({
  products,
  onProductAddToCart,
  onProductAskEdition,
}: IProductsListViewerProps) => {
  return (
    <View style={styles.container}>
      {products.map((element) => {
        return (
          <ProductViewer
            onProductAddToCart={onProductAddToCart}
            key={element.id}
            product={element}
            onProductEditTouch={onProductAskEdition}
          />
        );
      })}
    </View>
  );
};

export default ProductsListViewer;
