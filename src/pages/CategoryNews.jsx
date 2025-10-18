import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();

  const parsedId = parseInt(id);

  const data = useLoaderData();

  // console.log(id, data);

  useEffect(() => {
    if (parsedId === 0) {
      setCategoryNews(data);
      return;
    } else if (parsedId === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id === parsedId);
      setCategoryNews(filteredNews);
    }
  }, [data, parsedId]);

  // console.log(categoryNews)

  return (
    <div>
      <h1>Category News-({categoryNews.length}) Found</h1>
    </div>
  );
};

export default CategoryNews;
