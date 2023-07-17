"use client";

import { useEffect, useState } from "react";

import VeggiRecipes from "../VeggieRecipes/VeggieRecipes";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface veggieTypes {
  id: string;
  image: string;
  title: string;
  sourceUrl: string;
}


const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    // let veggie: veggieTypes[] | null;

    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        const veggie = data.recipes;
        // console.log("veggie =>", veggie);
        return veggie as veggieTypes[];
      }
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);
  // console.log("veggie =>", veggie);

  return (
    <>
      <div>
        <h2>Veggie Picks</h2>
      </div>

    
      <VeggiRecipes recipes={veggie} />    

    </>
  );
};
export default Veggie;
