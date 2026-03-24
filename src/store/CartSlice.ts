import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProducts";
interface ICartSliceState {
  produits: Array<IProduct>;
}
const initialState: ICartSliceState = {
  produits: [],
};

const CarSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (s, action: { type: string; payload: IProduct }) => {
      const position = s.produits.findIndex((p) => p === action.payload);
      if (position === -1) {
        action.payload.quant = 1;
        s.produits.push(action.payload);
      } else {
        if (s.produits[position].quant === undefined)
          s.produits[position].quant = 1;
        else s.produits[position].quant++;
      }
    },
    removeProduct: (s, action: { type: string; payload: IProduct }) => {
      const position = s.produits.findIndex((p) => p === action.payload);
      if (position === -1) {
       return
      } else {
        if (s.produits[position].quant !== undefined && s.produits[position].quant>1)
          s.produits[position].quant--
        else{
          const afterdelete=s.produits.slice(position+1)
          s.produits.splice(position)
          s.produits.push(...afterdelete)
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = CarSlice.actions;

const cartReducer = CarSlice.reducer;
export default cartReducer;
