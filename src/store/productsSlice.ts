import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    selectProductToEdition: (s, a: { type: string; payload: IProduct }) => {
      s.selectedProduct=a.payload
    },
    updateProductEdited:(s,a:{type:string,payload:IProduct})=>{
      const position=s.products.findIndex(p=>p.id===a.payload.id)
      if(position===-1){
        //nouveau product
        return
      }
      else{
        s.products[position]=a.payload
      }
      s.filtredProducts=s.products.filter(p=>{
        if(!Number.isNaN(s.search)){
          return p.titre.toLowerCase().includes(s.search.toLowerCase())
        }
        else{
          return p.cb===s.search
        }
      })
    },
    searchByBarcode: (s, a: { type: string; payload: string }) => {
      s.filtredProducts = s.products.filter((p) => p.cb === a.payload);
      s.search = a.payload;
    },
    updateSearch: (state, action: { type: string; payload: string }) => {
      state.search = action.payload;
      state.filtredProducts = state.products.filter((p) =>
        p.titre.toLowerCase().includes(action.payload.toLowerCase()),
      );
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
  extraReducers: (builder) => {
    // ecoute d'action provenant d'autres tranches
    // builder.addCase('cart/addProduct',(s,a)=>{})
    builder.addCase(loadRestAPI.fulfilled, (state, action) => {
      //vidange
      state.products.splice(0);
      //remplissage avec chaque element contenu dans l'array un par un
      state.products.push(...action.payload);
      state.filtredProducts = state.products;
      state.search = "";
    });
  },
});

export const { initialProductLoad, updateSearch, searchByBarcode, selectProductToEdition, updateProductEdited } =
  productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;

export const loadRestAPI = createAsyncThunk("products/loadAPI", async () => {
  const pr = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_API_PORT}${
      process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS
    }`,
  );
  return await pr.json();
});
// diferentes actions generer par le asyncthunk
//products/loadAPI/pending
//products/loadAPI/fulfilled
//products/loadAPI/rejected
