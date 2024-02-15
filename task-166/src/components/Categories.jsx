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
    <div className="flex flex-col items-center font-medium gap-5 mb-28 ">
      <p>İmtahan</p>
      <h3 className="font-bold text-4xl mb-10">Kategoriya seç</h3>
      <div className="grid grid-cols-4 gap-5 text-center font-semibold  ">
        {categoryLinks.map((category) => (
          <a
            href={category.link}
            key={category.name}
            className="shadow-lg bg-gray-50 rounded-xl"
          >
            <p className="p-10 hover:text-gray-600">{category.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
