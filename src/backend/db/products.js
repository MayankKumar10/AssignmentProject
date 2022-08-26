
import {v4 as uuid} from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "Apple",
    name: "i Phone 13 Max pro",
    price: 13000,
  },
  {
    _id: uuid(),
    brand: "Acer",
    name: "Acer Strix 5",
    price: 18999,
  },
];
