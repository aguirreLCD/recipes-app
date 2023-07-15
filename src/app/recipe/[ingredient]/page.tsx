import Link from "next/link";
import { RecipeParams } from "../../../../common.types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getRecipeData = async (ingredient: string) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=1&query=${ingredient}`
  );
  // console.log("res:", res);
  return res.json();
};

async function Recipe({ params }: RecipeParams) {
  // console.log("params.ingredient:", params.ingredient);
  const recipeData = getRecipeData(params.ingredient);
  // console.log("recipeData:", recipeData);

  const [recipeInfo] = await Promise.all([recipeData]);
  // console.log("recipeInfo:", recipeInfo);

  // console.log("recipeInfo results:", recipeInfo.results[0]);
  // console.log("recipeInfo results:", recipeInfo.results);

  // const recipeSearched = JSON.stringify(recipeInfo.results);
  const recipeSearched = JSON.stringify(recipeInfo);
  // const recipeSearched = recipeInfo.results[0];
  // console.log("recipeSearched:", recipeSearched);
  // console.log("recipeSearched:", recipeSearched);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <Link href={"/"}>HOME</Link>
        </div>

        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Recipe Info
        </div>

        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          {recipeSearched}
        </div>

        <div className="block mt-1 text-lg leading-tight font-medium text-black"></div>
      </div>
    </div>
  );
}
export default Recipe;
