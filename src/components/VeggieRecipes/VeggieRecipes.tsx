

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface veggieTypes {
  id: string;
  image: string;
  title: string;
}


export default async function VeggieRecipes() {
  let veggie: veggieTypes[] | null;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian`
  );

  //   veggie = (await res.json()) as veggieTypes[];
  veggie = await res.json();

  return (
    <section className="px-7 md:px-10 lg:px-40 mt-6 md:mt-10 lg:mt-16">
      
      <div className="grid grid-cols-2 gap-7 flex-wrap justify-between sm:grid-cols-3 lg:grid-cols-6">
        <ul>
          {veggie != null
            ? veggie.map((recipe) => {
                return <li key={recipe.id}>{recipe.title}</li>;
              })
            : null}
          ;
        </ul>
      </div>
    </section>
  );
}
