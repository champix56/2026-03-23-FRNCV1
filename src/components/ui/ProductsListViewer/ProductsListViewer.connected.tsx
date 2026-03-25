import { View, Text } from "react-native";
import React from "react";
import ProductsListViewerUnconnected from "./ProductsListViewer";
import { useSelector, connect, useDispatch } from "react-redux";
import { IProduct } from "../../../interfaces/IProducts";
import { AppDispatch, RootState } from "../../../store/store";
import { addProduct } from "../../../store/cartSlice";
import { selectProductToEdition } from "../../../store/productsSlice";
import { useNavigation } from "@react-navigation/native";
type Props = {
  style?: any;
};

const ProductsListViewer = (props: Props) => {
  const products = useSelector((s: RootState) => s.stock.filtredProducts);
  const d = useDispatch<AppDispatch>();
  const n=useNavigation()
  return (
    <ProductsListViewerUnconnected
      onProductAddToCart={(prod) => {
        d(addProduct(prod));
      }}
      onProductAskEdition={(p)=>{
        d(selectProductToEdition(p))
        //@ts-ignore
        n.navigate('edit')
      }}
      {...props}
      products={products}
    />
  );
};

export default ProductsListViewer;
/*************************
 * Old version without Hooks (react<16.8)
 */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onProductAddToCart: (prod: IProduct) => dispatch(addProduct(prod)),
  };
}
function mapStateToProps(props: Props, state: RootState) {
  return {
    ...props,
    products: state.stock.products as Array<IProduct>,
  };
}
export const ProductsListViewerNoHook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListViewerUnconnected);
