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
    <div className="w-80 max-md:w-36 p-7 max-md:p-3 md:max-lg:p-3 ">
      <span className="font-bold text-xl">Filter</span>
      <div className="mt-7">
        <span className="text-sm text-gray-400">Kategoriyalar</span>
        <ul className="mb-10">
          {filterCategories.map((category, index) => (
            <li
              key={index}
              className={`flex flex-col my-3 cursor-pointer rounded-xl ${
                activeCategory === category ? "active" : ""
              }`}
            >
              <button
                className="text-left p-3 max-md:p-2 max-md:text-sm"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7">
        <span className="text-sm text-gray-400">Etiketlər</span>
        <ul className="mb-10">
          {filterLabels.map((label, index) => (
            <li
              key={index}
              className={`flex flex-col  my-3 cursor-pointer rounded-xl ${
                activeLabel === label ? "active" : ""
              }`}
            >
              <button
                className="text-left p-3 max-md:p-2 max-md:text-sm"
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
