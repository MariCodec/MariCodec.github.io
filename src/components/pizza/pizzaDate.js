import { v4 as uuidv4 } from "uuid";

const pizzas = [
  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "маргарита",
    description: "Соус, моцарелла, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [85, 160],
  },
  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "фунджі",
    description: " Соус, моцарелла, печериці, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [97, 180],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "вегетеріанська",
    description:
      "  Соус, моцарелла, печериці, кукурудза, перець болгарський, цибуля,орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [111, 205],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "вегано",
    description:
      "Соус, моцарелла, зелений кабачок, груша, перець болгарський,горіх, дор блю, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [124, 235],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "везувіо",
    description: "Соус, моцарелла, шинка, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [120, 232],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "чотири сири",
    description:
      "Соус, моцарелла, пармезан, сир королівський, дор блю, виноград, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [135, 235],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "селянська",
    description: " Соус, моцарелла, печериці, шинка, бочок, цибуля, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [137, 248],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "салямі",
    description: "Соус, моцарелла, печериці, салямі, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [120, 220],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "мисливська",
    description:
      " Соус, моцарелла, печериці, мисливські ковбаски, часник, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [115, 225],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "капрічоза",
    description: "Соус, моцарелла, печериці, шинка, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [130, 240],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "фантазія",
    description: "Соус, моцарелла, 4 довільні складники, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [155, 280],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "американа",
    description:
      "Соус, моцарелла, печериці, курка, кукурудза, перець болгарський, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [147, 269],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "палома",
    description:
      " Соус, моцарелла, печериці, шинка, перець болгарський, цибуля, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [140, 255],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "гавайська",
    description: "Соус, моцарелла, курка, ананас, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [140, 255],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "козацька",
    description:
      "Соус, моцарелла, печериці, бочок, ковбаса домашня, огірок маринований, перець болгарський, цибуля, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [150, 275],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "мексикансбка",
    description:
      " Соус, моцарелла, салямі, кукурудза,квасоля, халапенйо, цибуля, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [144, 260],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "папероні",
    description: "Соус, моцарелла, пепероні, халапенйо, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [160, 270],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "фіт",
    description: "Соус, моцарелла, прошуто, чері, рукола, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [160, 270],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "грецька",
    description: "Соус, моцарелла, курка, фета, оливки, чері, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [150, 277],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "карбонара",
    description:
      "Соус, моцарелла, бекон, цибуля, вершково-яєчний сосус, часник, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [155, 280],
  },

  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "тонно",
    description: "Соус, моцарелла, тунець, оливки, помідор, цибуля, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [152, 280],
  },
  {
    id: uuidv4(),
    src: "/pizza/first.jpeg",
    name: "фірмова",
    description:
      "Соус, моцарелла, печериці, шматочки стейка, цибуля, чері,зелень,соус фірмовий, орегано",
    types: [0, 1],
    sizes: [33, 45],
    price: [160, 295],
  },
];
export default pizzas;
