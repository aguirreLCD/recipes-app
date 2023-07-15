"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { VeggieParams } from "../../../common.types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Veggie = () => {
  
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    // console.log(JSON.parse(check));

    if (check) {
      // console.log(JSON.parse(check));
      // console.log(check);
      setVeggie(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian`
        );

        const data = await api.json();

        localStorage.setItem("veggie", JSON.stringify(data.recipes));

        // console.log(data);

        setVeggie(data.recipes);

        // console.log(data.recipes);
      }
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  console.log(veggie);

  return (
    <>
      <div>
        <h2>Veggie Picks</h2>
      </div>

      <div>{JSON.stringify(veggie)}</div>

   
    </>
  );
};
export default Veggie;
