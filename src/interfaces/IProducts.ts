export interface IProduct {
  id?: number;
  titre: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  stock?: number;
  prix: number;
  quant?: number;
  cb?: string;
}
export const newProduct: IProduct = {
  description: "",
  imageUrl: "",
  prix: 0,
  stock: 0,
  thumbnailUrl: "",
  titre: "",
  cb: "",
};
