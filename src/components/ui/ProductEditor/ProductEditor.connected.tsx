import { View, Text } from "react-native";
import React from "react";
import UnStore from "./ProductEditor";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { emptyProduct } from "../../../interfaces/IProducts";

type Props = {};

const ProductEditor = (props: Props) => {
  const product = useSelector((s: RootState) => s.stock.selectedProduct);
  const d = useDispatch<AppDispatch>();
  return (
    <UnStore
      product={undefined !== product ? product : emptyProduct}
      onProductSaved={(p) => {
        //d(updateProduct(p))
        console.log(p)
      }}
    />
  );
};

export default ProductEditor;
