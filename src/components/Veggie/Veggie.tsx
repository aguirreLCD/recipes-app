"use client";

import { useEffect, useState } from "react";

import VeggiePicks from "../VeggiePicks/VeggiePicks";
import VeggieRecipes from "../VeggieRecipes/VeggieRecipes";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface veggieTypes {
  id: string;
  title: string;
  sourceURL: string;
}

interface dataTypes {
  data: veggieTypes[] | null;
  error: object | null;
}

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    let veggie: veggieTypes[] | null;

    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian`
        );

        let data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        veggie = data;
      }
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <>
      <div>
        <h2>Veggie Picks</h2>
      </div>

      {/* <div>
        <ul>
          {veggie != null
            ? veggie.map((recipe) => {
                return (
                  <VeggiePicks
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    sourceUrl={recipe.sourceUrl}
                  />
                );
              })
            : null}
        </ul>
      </div> */}

      {/* <VeggieRecipes recipes={veggie} /> */}
      <VeggieRecipes recipes={veggie} />
    </>
  );
};
export default Veggie;
