import { useTranslation } from "react-i18next";
export default function Categories() {
  const categoryLinks = [
    { name: "Buraxılış", link: "/" },
    { name: "Blok", link: "/" },
    { name: "Təkmilləşmə", link: "/" },
    { name: "İbtidai sinif", link: "/" },
    { name: "Liseylərə", link: "/" },
    { name: "Magistratura", link: "/" },
    { name: "Olimpiadalar", link: "/" },
    { name: "Fənn imtahanı", link: "/" },
  ];

  const { t, i18n } = useTranslation();
  return (
    <div className="categories">
      <p>{t("İmtahan")}</p>
      <h3 className="categories-title">{t("Kategoriya seç")}</h3>
      <div className="categories-main">
        {categoryLinks.map((category) => (
          <a
            href={category.link}
            key={category.name}
            className="categories-link"
          >
            <p className="categories-p">{t(category.name)}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
