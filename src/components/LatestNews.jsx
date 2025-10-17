import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-sm">Latest</p>

      <Marquee pauseOnHover={true} speed={50} className="flex gap-6">
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
