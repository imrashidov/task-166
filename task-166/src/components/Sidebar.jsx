import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  return (
    <div className="sidebar">
      <span className="sidebar-title">{t("Filter")}</span>
      <div className="sidebar-categories">
        <span className="sidebar-span">{t("Kategoriyalar")}</span>
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
                {t(category)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-labels">
        <span className="sidebar-span">{t("Etiketlər")}</span>
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
                {t(label)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
