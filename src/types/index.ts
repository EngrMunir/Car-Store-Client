export type TCar = {
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    category: string;
    description: string;
    image:string;
    inStock: boolean;
    quantity: number;
    createdAt: string;
    updatedAt: string; 
    __v: number;
  };  

  export type TCarData = {
    _id: string;
    brand: string;
    category: string;
    createdAt: string;
    description: string;
    image: string;
    inStock: boolean;
    model: string;
    price: number;
    quantity: number;
    updatedAt: string;
    year: number;
  };