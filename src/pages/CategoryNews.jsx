import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

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
      <h1 className="font-semibold ml-2">
        Total News- <span className="text-red-500">{categoryNews.length}</span>{" "}
        Found
      </h1>
      <div className="mt-4 mx-4 grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={NewsCard.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
