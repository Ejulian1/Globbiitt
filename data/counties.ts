export type County = {
  id: number;
  name: string;
  airport: string;
  price: number;
  category: string;
  image: string;
};

export const counties: County[] = [
  {
    id: 1,
    name: "Amsterdam",
    airport: "Schiphol Airport",
    price: 1800,
    category: "City Escape",
    image: "/images/Asm.png",
  },
  {
    id: 2,
    name: "Turkey",
    airport: "Istanbul Airport",
    price: 2200,
    category: "Adventure",
    image: "/images/Turkey.png",
  },
  {
    id: 3,
    name: "India",
    airport: "India Airport",
    price: 2400,
    category: "Adventure",
    image: "/images/India.png",
  },
  {
    id: 4,
    name: "Japan",
    airport: "IndiAirport",
    price: 1600,
    category: "City Escape",
    image: "/images/Japan.png",
  },
  {
    id: 6,
    name: "Baharin",
    airport: "IndiAirport",
    price: 2900,
    category: "City Escape",
    image: "/images/HAHA.png",
  },
]; 