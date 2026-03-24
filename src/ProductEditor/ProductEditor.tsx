import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";

export interface IProduct {
  id?: number;
  titre: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  stock?: number;
  prix: number;
  quant?: number;
}

interface Props {
  product?: IProduct; // pour édition
  onSave: (product: IProduct) => void;
}

const ProductEditor: React.FC<Props> = ({ product, onSave }) => {
  const [form, setForm] = useState<IProduct>({
    titre: product?.titre || "",
    description: product?.description || "",
    imageUrl: product?.imageUrl || "",
    thumbnailUrl: product?.thumbnailUrl || "",
    prix: product?.prix || 0,
    stock: product?.stock || 0,
    quant: product?.quant || 0,
    id: product?.id
  });

  const handleChange = (key: keyof IProduct, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]:
        key === "prix" || key === "stock" || key === "quant"
          ? Number(value)
          : value
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Titre</Text>
      <TextInput
        style={styles.input}
        value={form.titre}
        onChangeText={text => handleChange("titre", text)}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={form.description}
        onChangeText={text => handleChange("description", text)}
        multiline
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        value={form.imageUrl}
        onChangeText={text => handleChange("imageUrl", text)}
      />

      <Text style={styles.label}>Thumbnail URL</Text>
      <TextInput
        style={styles.input}
        value={form.thumbnailUrl}
        onChangeText={text => handleChange("thumbnailUrl", text)}
      />

      <Text style={styles.label}>Prix</Text>
      <TextInput
        style={styles.input}
        value={form.prix.toString()}
        keyboardType="numeric"
        onChangeText={text => handleChange("prix", text)}
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        value={form.stock?.toString()}
        keyboardType="numeric"
        onChangeText={text => handleChange("stock", text)}
      />

      <Button title="Enregistrer" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default ProductEditor;

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  label: {
    fontWeight: "bold",
    marginTop: 12
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginTop: 4
  }
});