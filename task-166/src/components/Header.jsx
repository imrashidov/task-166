import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const Links = [
    { name: "Haqqımızda", link: "/" },
    { name: "Kitablar", link: "/" },
    { name: "İmtahanlar", link: "/" },
    { name: "Bizimlə əlaqə", link: "/" },
  ];
  const [isActive, setIsActive] = useState(false);

  function handleMenuToggle() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <div className="flex justify-between items-center  my-4 mx-36 max-md:mx-8  font-medium text-base md:max-xl:mx-2   ">
      <div className="flex z-40">
        <a href="/" className="font-bold text-4xl">
          Logo
        </a>
      </div>
      <div className="md:hidden items-center" onClick={handleMenuToggle}>
        {isActive ? (
          <IoMdClose className="text-4xl" />
        ) : (
          <IoMenu className="text-4xl" />
        )}
      </div>
      <div
        className={`absolute h-max top-0  mt-0 px-8 w-screen inset-0  bg-white transition-all duration-200  ${
          isActive ? ("translate-x-0", "top-[70px]") : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center gap-3 py-3">
          <button className="p-2 border-2 border-black rounded-xl">AZ</button>
          <button className="p-2 border-2 border-black rounded-xl">EN</button>
          <button className="p-2 border-2 border-black rounded-xl">RU</button>
        </div>
        <nav className="flex flex-col pt-5 p-3 gap-5 ">
          {Links.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="border-black border-2 rounded-xl p-2 w-full text-center"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex justify-center px-3 py-3 gap-6 ">
          <button className="border border-black rounded-xl">
            <p className="px-5 py-2">Daxil Ol</p>
          </button>
          <button className="border text-white bg-black border-black rounded-xl">
            <p className="px-4 py-2">Qeydiyyat</p>
          </button>
        </div>
      </div>
      <nav className="max-md:hidden md:max-lg:text-sm">
        {Links.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className="pr-7 hover:text-gray-600 md:max-lg:pr-2 "
          >
            {item.name}
          </a>
        ))}
        <select name="" id="">
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
      </nav>
      <div className="max-md:hidden md:max-lg:flex">
        <button className="border border-black  mr-1 rounded-xl">
          <p className="px-5 py-2 md:max-lg:px-3">Daxil Ol</p>
        </button>
        <button className="border text-white bg-black border-black  ml-1 rounded-xl">
          <p className="px-5 py-2 md:max-lg:px-3">Qeydiyyat</p>
        </button>
      </div>
    </div>
  );
}
