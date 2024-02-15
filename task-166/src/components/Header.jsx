export default function Header() {
  const Links = [
    { name: "Haqqımızda", link: "/" },
    { name: "Kitablar", link: "/" },
    { name: "İmtahanlar", link: "/" },
    { name: "Bizimlə əlaqə", link: "/" },
  ];

  return (
    <div className="flex justify-between items-center my-4 mx-36 font-medium text-base">
      <div>
        <a href="/" className="font-bold text-4xl">
          Logo
        </a>
      </div>
      <nav>
        {Links.map((item) => (
          <a href={item.link} key={item.link} className="pr-7">
            {item.name}
          </a>
        ))}
        <select name="" id="">
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
      </nav>
      <div>
        <button className="border border-black  mr-1 rounded-xl ">
          <p className="px-5 py-2">Daxil Ol</p>
        </button>
        <button className="border text-white bg-black border-black  ml-1 rounded-xl">
          <p className="px-5 py-2">Qeydiyyat</p>
        </button>
      </div>
    </div>
  );
}
