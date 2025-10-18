import React from "react";
import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    author,
    rating,
    total_view,
    thumbnail_url,
    
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-accent" />
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-accent-content">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news/${id}`}
              className="text-accent font-medium hover:underline ml-1"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-600 font-medium">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
