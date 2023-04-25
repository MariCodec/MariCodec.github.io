import { v4 as uuidv4 } from "uuid";

const lanchDate = [
  {
    id: uuidv4(),
    src: "/lunchTime/ok.jpeg",
    name: "вареники з картоплею та грибами",
    description:
      "салата, чері, перепелині яйця, курка, сухарики, пармезан,заправка 'Цезар' ",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/lunchTime/ok.jpeg",
    name: "вареники з сиром",
    description:
      "салата, огірок, помідор, перець болгарський, оливки, сир фета, цибуля, заправка",
    price: 80,
  },
  {
    id: uuidv4(),
    src: "/lunchTime/ok.jpeg",
    name: "пельмені",
    description: "салата, тунець, стручкова квасоля, часник, перепелині яйця ",
    price: 80,
  },
];
export default lanchDate;
