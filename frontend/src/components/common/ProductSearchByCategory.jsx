import React from "react";
// import { Link } from "react-router-dom";

const SearchByCategory = ({ categories }) => {
  return (
    <section className="sidebar-links">
      <div className="sidebar-links__header">
        <h2 className="sidebar-links__title"></h2>
        <div to={"categories"} className="sidebar-links__more"></div>
      </div>
      <ul className="sidebar-links__list">
        {categories.slice(0, 6).map((category, index) => (
          <li className="sidebar-links__item" key={index}>
            <div
              to={`/products?category_name=${category.slug}`}
              className="sidebar-links__link"
            >
              {category.name}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchByCategory;
