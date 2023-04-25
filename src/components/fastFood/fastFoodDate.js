import { v4 as uuidv4 } from "uuid";

const fastfoodDate = [
  {
    id: uuidv4(),
    src: "/fastfood/GOOD.jpeg",
    name: "картопля фрі",
    description: "50г сирого продукту ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/fastfood/GOOD.jpeg",
    name: "картопля по-селянськи",
    description: "150г сирого продукту ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/fastfood/GOOD.jpeg",
    name: "нагетси",
    description: "5 шт ",
    price: 30,
  },
  {
    id: uuidv4(),
    src: "/fastfood/GOOD.jpeg",
    name: "картопля фрі + нагетси",
    description: "150г сирого продукту картоплі фрі +5 штук нагетсів ",
    price: 60,
  },
  {
    id: uuidv4(),
    src: "/fastfood/GOOD.jpeg",
    name: "курячі крильця",
    description: "100г сирого продукту ",
    price: 80,
  },
];
export default fastfoodDate;
