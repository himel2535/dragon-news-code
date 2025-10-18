import React, { use } from "react";
import { NavLink } from "react-router";

const CategoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoriesPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-semibold">All Categories({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-2">
        {
        categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="btn border-0 bg-white hover:bg-base-200 font-semibold text-accent justify-start text-left"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
