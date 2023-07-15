15/07/23 updates:

```
=> pages / components on client server rendering:

Entry-point: page.tsx;
Veggie Component inside page.tsx;

```

---

- Veggie Component fetch api data, save data on local storage, then call Veggie Picks component (as a server component) to create the recipe's list;

- Need to check for this decisions: a client component calling a server component to create a list of recipes;

```
=> pages / components on server rendering:

Veggie Picks Component;
page.tsx on recipe/[ingredient];

```

- Check for images configurations needed in next.config.js: next/image hostname error;

- page.tsx on recipe/[ingredient] is called by Entry-point: page.tsx: check for this decision:

  -
  - client server that calls a server component that fetch api data ;

- Check:
  Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed

- go through the differences between Server and Client Components, when to use them, and recommended patterns.

```
When to use Server and Client Components?

To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app directory) until you have a use case for a Client Component.
```
