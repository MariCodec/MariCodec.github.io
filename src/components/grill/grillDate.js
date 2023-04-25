import { v4 as uuidv4 } from "uuid";

const grillDate = [
  {
    id: uuidv4(),
    src: "/grill/miaso.jpeg",
    name: "короп в клярі",
    description: "   100г сирого продукту / 45 грн ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/grill/miaso.jpeg",
    name: "стейк курячий",
    description: "        100г сирого продукту / 40 грн",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/grill/ok.jpeg",
    name: "млинець з м'ясом",
    description: "150г сирого продукту ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/grill/miaso.jpeg",
    name: "котлета гречана",
    description: "5 шт ",
    price: 30,
  },
  {
    id: uuidv4(),
    src: "/grill/ok.jpeg",
    name: "овочі гриль",
    description:
      "кабачок, печериці, броколі, або цвітна капуста,цибуля, перець болгарський ",
    price: 60,
  },
];
export default grillDate;
