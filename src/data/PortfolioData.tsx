export interface PortfolioItem {
  id: number;
  title: string;
  descriptions: string;
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
  id: 1,
  title: "ShopBuy",
  descriptions: "Dummy e-commerce web app inspired by Shopee. Users can browse products, view details, and add items to cart. Built using React Vite and Tailwind CSS.",
  image: "shopee.svg",
},
{
  id: 2,
  title: "GoFoodie",
  descriptions: "Food delivery web app inspired by GoFood. Users can explore restaurants and view food menus. Built using React Vite and Tailwind CSS.",
  image: "gofood.svg",
},
{
  id: 3,
  title: "Grab & Take",
  descriptions: "Ride booking web interface inspired by Grab. Features include pickup location input and fare estimation UI. Built using React Vite and Tailwind CSS.",
  image: "grab.svg",
},
{
  id: 4,
  title: "Shoppedia",
  descriptions: "Online marketplace web app inspired by Tokopedia. Includes product listing and simple checkout UI. Built using React Vite and Tailwind CSS.",
  image: "tokopedia.svg",
},
{
  id: 5,
  title: "Travelowkey",
  descriptions: "Travel booking web app inspired by Traveloka. Users can search flights and hotels with a clean UI. Built using React Vite and Tailwind CSS.",
  image: "traveloka.svg",
},

];
