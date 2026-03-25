import { View, Text } from "react-native";
import React from "react";
import Pedit from "./ProductEditor";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { newProduct } from "../../../interfaces/IProducts";
import { updateProductEdited } from "../../../store/productsSlice";
type Props = {};

const ProductEditor = (props: Props) => {
  const p = useSelector((s: RootState) => s.stock.selectedProduct);
  const d = useDispatch<AppDispatch>();
  return (
    <Pedit
      product={undefined === p ? newProduct : p}
      onProductSaved={(p) => {
        d(updateProductEdited(p));
      }}
    />
  );
};

export default ProductEditor;
