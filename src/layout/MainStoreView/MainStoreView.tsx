import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import { Product } from "../../metier/Product";
import ProductInList from "../../ui/ProductInList/ProductInList";
interface IMainStoreView {
  products: Array<Product>;
}
const MainStoreView: React.FC<IMainStoreView> = (props) => {
  const [findValue, setfindValue] = useState<string>("");
  return (
    <View style={styles.MainStoreView}>
      <TextInput
        placeholder="Recherche"
        style={styles.tinput}
        onChangeText={(t) => setfindValue(t)}
      />
      <ScrollView style={styles.sview}>
        <View style={styles.svview}>
          {props.products
            .filter((p) =>
              p.titre.toLowerCase().includes(findValue.toLowerCase()),
            )
            .map((p) => (
              <ProductInList product={p} key={p.id} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainStoreView;
const styles = StyleSheet.create({
  MainStoreView: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
  sview: { flexGrow: 1, width: "100%" },
  svview: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
  },
  tinput: { height: 40, fontSize: 40 },
});
