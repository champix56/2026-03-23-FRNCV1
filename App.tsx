import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { emptyProduct, IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer.connected";
import Banner from "./src/components/ui/Banner/Banner";
import {store} from './src/store/store'
import { Provider } from "react-redux";
import ProductsSearcher from "./src/components/functionnals/ProductsSearcher/ProductsSearcher.connected";
import ProductEditor from "./src/components/ui/ProductEditor/ProductEditor";
import Cart from "./src/components/ui/Cart/Cart";
export default function App() {
const [selected, setselected] = useState(emptyProduct)
  return (
    <Provider store={store}>
      <View style={{ flex: 1, }}>
        {/* <Banner/>
        <ProductsSearcher/>
        <ScrollView>
          <ProductsListViewer/>
        </ScrollView>
        */}
        {store.getState().stock.products.length>0&&<Cart onQuantChange={(p,q)=>console.log(p,q)} products={store.getState().stock.products.filter((e,i)=>i<=6)}/>}
        {store.getState().stock.products.length>0&&<ProductEditor product={store.getState().stock.products[0]} onProductSaved={pr=>{setselected(pr)}}/>}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
