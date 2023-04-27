import { v4 as uuidv4 } from "uuid";
const saladDate = [
  {
    id: uuidv4(),
    src: "./salad/salad.webp",
    name: "цезар",
    description:
      "салата, чері, перепелині яйця, курка, сухарики, пармезан,заправка 'Цезар' ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "./grill/miaso.jpeg",
    name: "грецький",
    description:
      "салата, огірок, помідор, перець болгарський, оливки, сир фета, цибуля, заправка",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "./grill/ok.jpeg",
    name: "ніцца",
    description: "салата, тунець, стручкова квасоля, часник, перепелині яйця ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "./grill/miaso.jpeg",
    name: "весняний",
    description:
      "салата, огірок, помідор, перець болгарський, цибуля,заправка 'Цезар'",
    price: 30,
  },
  {
    id: uuidv4(),
    src: "./grill/ok.jpeg",
    name: "дністер",
    description: "капуста, цибуля, кріп, ковбаса,зелений горошок,майонез ",
    price: 170,
  },
];
export default saladDate;
