import React, { use } from "react";

const CategoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoriesPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-semibold">All Categories({categories.length})</h2>
    </div>
  );
};

export default Categories;
