"use client";
import Image from "next/image";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface veggieTypes {
  id: string;
  image: string;
  title: string;
  sourceUrl: string;
}

export default function VeggieRecipes(props: {
  recipes: veggieTypes[] | null;
}) {
  return (
    <>
      <div className="grid grid-cols-1 flex-wrap gap-3 justify-between sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {props.recipes != null
          ? props.recipes.map((recipe) => {
              return (
                <div
                  key={recipe.id}
                  className="w-full max-w-[350px] flex flex-col items-center"
                >
                  <img src={recipe.image} alt={recipe.title} />
                  <a href={recipe.sourceUrl} target="_blank">
                    <h3 className="font-bold mb-[15px]">{recipe.title}</h3>
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
