

export type Product= {
 id:number;
  image: string;
  name: string;
  price: number;
  userChoice: "yes" | "no";
};

export type ProductList = Product[];

export const products: ProductList = [
{   id:1,
    image: "/images/dowffnload.jpg",
    name: "Head Phone",
    price: 100,
    userChoice: "no"
  },
  {  id:2,
    image: "/images/download (1).jpg",
    name: "Head Phone",
    price: 150,
    userChoice: "no"
  },
   {id:3,
    image: "/images/dowdgdnload.jpg",
    name: "Ear Phone",
    price: 200,
    userChoice: "no"
  },
   {id:4,
    image: "/images/imageffs (1).jpg",
    name: "Ear Phone",
    price: 250,
    userChoice: "no"
  },
  {id:5,
    image: "/images/imagedds (1).jpg",
    name: "Air Pods",
    price: 180,
    userChoice: "no"
  },
  {id:6,
    image: "/images/imagffes (1).jpg",
    name: "Air Pods",
    price: 300,
    userChoice: "no"
  }
];