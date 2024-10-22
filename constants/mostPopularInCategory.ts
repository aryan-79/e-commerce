import { StaticImageData } from "next/image";

export interface MostPopularInCategoryItem {
  productName: string;
  price: number;
  img: string | StaticImageData;
  discount?: number;
}
const MOST_POPULAR_IN_FASHION: MostPopularInCategoryItem[] = [
  {
    productName: "Zip-Front Track Jacket",
    price: 3000,
    img: "/pic1.jpg",
    discount: 10,
  },
  {
    productName: "Zip-Front Track Jacket",
    price: 3000,
    img: "/pic1.jpg",
    // discount: 10,
  },
  {
    productName: "Zip-Front Track Jacket",
    price: 3000,
    img: "/pic1.jpg",
    discount: 15,
  },
  {
    productName: "Zip-Front Track Jacket",
    price: 3000,
    img: "/pic1.jpg",
    discount: 15,
  },
  {
    productName: "Zip-Front Track Jacket",
    price: 3000,
    img: "/pic1.jpg",
    discount: 15,
  },
];

export { MOST_POPULAR_IN_FASHION };
