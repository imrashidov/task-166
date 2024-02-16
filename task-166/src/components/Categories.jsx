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
  return (
    <div className="categories">
      <p>İmtahan</p>
      <h3 className="categories-title">Kategoriya seç</h3>
      <div className="categories-main">
        {categoryLinks.map((category) => (
          <a
            href={category.link}
            key={category.name}
            className="categories-link"
          >
            <p className="categories-p">{category.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
