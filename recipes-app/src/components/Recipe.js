import React from "react";
import Ingredients from "./IngredientsList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Ingredients list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}