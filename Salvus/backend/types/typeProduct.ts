export interface Iproduct {
  productName: string;
  description: string;
  price: number;
}

export interface productUpdate {
  values: Iproduct;
  id: number;
}
