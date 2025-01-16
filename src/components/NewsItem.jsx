import React from "react";
import image from "../assets/images.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card d-inline-block text-bg-dark m-3 p-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : ""}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
