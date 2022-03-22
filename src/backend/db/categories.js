import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Formal Shoes",
    src:"https://images.unsplash.com/photo-1552422554-0d5af0c79fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "Formal shoes are must-have wardrobe essentials that will elevate your style quotient at formal meets, weddings, or any social gatherings. Shop from a wide range of formal shoes at ShoeStore.",
  },
  {
    _id: uuid(),
    categoryName: "Sports Shoes",
    src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "A pair of good-quality running shoes can make a world of difference when you run. These shoes are specifically designed to be worn when you carry out intense physical activities. Have a look at the store collection.",
  },
  {
    _id: uuid(),
    categoryName: "Boots",
    src:"https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80",
    description:
      "Once considered a protective type of footwear, men's boots are now a fashion statement that lends a lot of confidence to the wearer. Boots for men are known to lend a rugged look to the wearer.",
  },
];
