import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProducts";
interface IProductsSliceState {
  products: Array<IProduct>;
  selectedProduct: undefined | IProduct;
  filtredProducts: Array<IProduct>;
  search: string;
}
const initialState: IProductsSliceState = {
  products: [],
  filtredProducts: [],
  selectedProduct: undefined,
  search: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateSearch: (state, action: { type: string; payload: string }) => {
      state.search = action.payload;
      state.filtredProducts = state.products.filter((p) =>
        p.titre.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    updateProduct: (s, action: { type: string; payload: IProduct }) => {
      const p = s.products.findIndex((p) => p.id === action.payload.id);
      if (p >= 0) {
        s.products[p] = action.payload;
      } else s.products.push(action.payload);
    },
    unselectProduct: (s, a) => {
      s.selectedProduct = undefined;
    },
    initialProductLoad: (
      state,
      action: { type: string; payload: Array<IProduct> },
    ) => {
      //vidange
      state.products.splice(0);
      //remplissage avec chaque element contenu dans l'array un par un
      state.products.push(...action.payload);
      state.filtredProducts = state.products;
    },
  },
});

export const {
  initialProductLoad,
  updateSearch,
  updateProduct,
  unselectProduct,
} = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
