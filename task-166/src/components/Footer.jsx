import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram-logo.svg";
import facebook from "../assets/facebook-logo.svg";
import whatsapp from "../assets/whatsapp-logo.svg";
import telegram from "../assets/telegram-logo.svg";

export default function Footer() {
  const Links = [
    { name: "Haqqımızda", link: "/" },
    { name: "Kitablar", link: "/" },
    { name: "İmtahanlar", link: "/" },
    { name: "Bizimlə əlaqə", link: "/" },
  ];
  const Social = [
    { icon: instagram, alt: "Instagram" },
    { icon: facebook, alt: "Facebook" },
    { icon: whatsapp, alt: "WhatsApp" },
    { icon: telegram, alt: "Telegram" },
  ];
  return (
    <div className="px-40 max-md:px-2">
      <div className="flex justify-between mb-10 max-md:flex-col">
        <a href="/" className="font-bold text-4xl ">
          Logo
        </a>
        <nav className="max-md:flex max-md:flex-col max-md:gap-2 max-md:mt-2">
          {Links.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="pr-7 hover:text-gray-600 text-lg font-medium mr-5"
            >
              {item.name}
            </a>
          ))}
          <select className="bg-gray-300 rounded-lg p-3 max-md:p-1 dropdown-toggle max-md:w-16">
            <option value="AZ">AZ</option>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>
        </nav>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex items-center gap-3">
          <i className="bg-gray-300 p-2 rounded-full">
            <img src={mail} alt="Mail" />
          </i>
          <p>contact@faridrashidov.com</p>
        </div>
        <div className="flex items-center gap-3">
          <i className="bg-gray-300 p-2 rounded-full">
            <img src={phone} alt="Phone" />
          </i>
          <p>+994 55 867 67 76</p>
        </div>
      </div>
      <div className="border-b-2 border-gray-300">
        <i className="flex justify-end gap-5 mb-5">
          {Social.map((item, index) => (
            <img
              src={item.icon}
              alt={item.alt}
              key={index}
              className="bg-gray-300 p-2 rounded-full w-10 cursor-pointer "
            />
          ))}
        </i>
      </div>
      <div className="text-sm py-5">
        <p>© 2024, şirkətin adı. Bütün hüquqlar qorunur</p>
      </div>
    </div>
  );
}
