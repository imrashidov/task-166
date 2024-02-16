import { useState } from "react";
export default function Sidebar() {
  const filterCategories = [
    "İbtidai sinif",
    "Buraxılış",
    "Blok",
    "Təkmilləşdirmə",
    "Liseylərə",
    "Magistratura",
    "Olimpiada",
    "Fənn imtahanı",
  ];
  const filterLabels = ["2-ci sinif", "3-cü sinif", "4-cü sinif"];

  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
  const [activeLabel, setActiveLabel] = useState(filterLabels[1]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  const handleLabelClick = (item) => {
    setActiveLabel(item);
  };

  return (
    <div className="sidebar">
      <span className="sidebar-title">Filter</span>
      <div className="sidebar-categories">
        <span className="sidebar-span">Kategoriyalar</span>
        <ul className="sidebar-categories-main">
          {filterCategories.map((category, index) => (
            <li
              key={index}
              className={`sidebar-category ${
                activeCategory === category ? "active" : ""
              }`}
            >
              <button
                className="sidebar-btn"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-labels">
        <span className="sidebar-span">Etiketlər</span>
        <ul className="sidebar-labels-main">
          {filterLabels.map((label, index) => (
            <li
              key={index}
              className={`sidebar-category ${
                activeLabel === label ? "active" : ""
              }`}
            >
              <button
                className="sidebar-btn"
                onClick={() => handleLabelClick(label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
