import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MainStoreView from "./src/layout/MainStoreView/MainStoreView";
import { Product } from "./src/metier/Product";
import ProductEditor from "./src/ProductEditor/ProductEditor";

export default function App() {
  const [products, setproducts] = useState<Array<Product>>([]);
  useEffect(() => {
    //try {
      fetch("http://192.168.20.29:60000/products")
        .then((r) => r.json())
        .then((a) => setproducts(a));
    //} catch (error) {}
  }, []);
  return (
    <View style={styles.container}>
      <ProductEditor product={products[0]} onSave={(p)=>{
        console.log(p)
      }}/>
      {/*<MainStoreView products={products} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
