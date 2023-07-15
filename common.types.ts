export interface RecipeParams {
  params: { ingredient: string };
}

export type RecipeData = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cuisine: string;
  veggie: Array<string>;
  setVeggie: (value: string) => void;
};

export interface VeggieParams {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cuisine: string;
  veggie: Array<string>;
  setVeggie: (value: string) => void;
}

// interface VeggieData {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   cuisine: string;
// }

// interface VeggieParams {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   cuisine: string;
//   veggie: Array<string>;
//   setVeggie: (value: string) => void;
// }

// type VeggieParams = {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   cuisine: string;
//   veggie: Array<string>;
//   setVeggie: (value: string) => void;
// };
