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
    price: 180,
    category: "City Escape",
    image: "/images/Asm.png",
  },
  {
    id: 2,
    name: "Turkey",
    airport: "Istanbul Airport",
    price: 220,
    category: "Adventure",
    image: "/images/Turkey.png",
  },
  {
    id: 3,
    name: "India",
    airport: "India Airport",
    price: 100,
    category: "Adventure",
    image: "/images/India.png",
  },
  {
    id: 4,
    name: "Japan",
    airport: "IndiAirport",
    price: 100,
    category: "City Escape",
    image: "/images/Japan.png",
  },
  {
    id: 6,
    name: "Baharin",
    airport: "IndiAirport",
    price: 100,
    category: "City Escape",
    image: "/images/HAHA.png",
  },
]; 