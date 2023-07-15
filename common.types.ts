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



export type VeggieParams = {
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



