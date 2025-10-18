import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const {id,name} = useParams();
  console.log(id,name);

  return (
    <div>
      <h1>Category News-({id})</h1>
    </div>
  );
};

export default CategoryNews;
