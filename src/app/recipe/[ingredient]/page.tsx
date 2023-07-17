import Link from "next/link";
import { RecipeParams, VeggieRecipe } from "../../../../common.types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getRecipeData = async (ingredient: string) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=1&query=${ingredient}`
  );
  const data = await res.json();
  return data;
};

async function Recipe({ params }: RecipeParams) {
  const recipeData = getRecipeData(params.ingredient);

  const [recipes]: VeggieRecipe[] = await Promise.all([recipeData]);

  return (
    <>
      <div>
        <Link href={"/"}>HOME</Link>
      </div>

      <div>
        <ul>
          <li key={recipes.results[0].id}>{recipes.results[0].title}</li>
          <img src={recipes.results[0].image}></img>
        </ul>
      </div>
    </>
  );
}
export default Recipe;
