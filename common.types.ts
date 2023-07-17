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

export type VeggieRecipe = {
  id: string;
  name: string;
  title: string;
  sourceUrl: string;
  description: string;
  image: string;
  imageType: string;
  category: string;
  cuisine: string;
  recipes: { [key: string]: string[] } | null;

  results: { [key: string]: string[] };
};

interface dataTypes {
  recipes: { [key: string]: string[] } | null;
  //   error: object | null;
}

export interface VeggieRecipes {
  id: string;
  name: string;
  title: string;
  sourceUrl: string;
  description: string;
  image: string;
  imageType: string;
  category: string;
  cuisine: string;
  results: { [key: string]: string[] };
}
