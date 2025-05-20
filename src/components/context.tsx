import React, { createContext, useState, ReactNode, useContext } from "react";
import { Product,products } from "./ProductData";

export type ProductContextType = {
  productItems: Product[];
   setProductItems: React.Dispatch<React.SetStateAction<Product[]>>;
//   filterChoice: string;
//   setFilterChoice: (value: string) => void;
};

export const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductContext.Provider");
  }
  return context;
};