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
    <div className="header">
      <div className="header-logo-main">
        <a href="/" className="header-logo">
          Logo
        </a>
      </div>
      <div className="header-menu" onClick={handleMenuToggle}>
        {isActive ? (
          <IoMdClose className="header-menu-icon" />
        ) : (
          <IoMenu className="header-menu-icon" />
        )}
      </div>
      {/* Drawer Start */}
      <div
        className={`drawer ${
          isActive ? ("translate-x-0", "top-[70px]") : "-translate-y-full"
        }`}
      >
        <div className="drawer-lang">
          <button className="drawer-lang-button">AZ</button>
          <button className="drawer-lang-button">EN</button>
          <button className="drawer-lang-button">RU</button>
        </div>
        <nav className="drawer-links">
          {Links.map((item) => (
            <a href={item.link} key={item.name} className="drawer-link">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="drawer-auth-buttons">
          <button className="drawer-sign-in">
            <p className="drawer-auth-button">Daxil Ol</p>
          </button>
          <button className="drawer-register">
            <p className="drawer-auth-button">Qeydiyyat</p>
          </button>
        </div>
      </div>
      {/* Drawer End */}
      <nav className="header-links">
        {Links.map((item) => (
          <a href={item.link} key={item.name} className="header-link">
            {item.name}
          </a>
        ))}
        <select>
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
      </nav>
      <div className="header-auth-buttons">
        <button className="header-sign-in">
          <p className="header-auth-button">Daxil Ol</p>
        </button>
        <button className="header-register">
          <p className="header-auth-button">Qeydiyyat</p>
        </button>
      </div>
    </div>
  );
}
