import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";
import instagram from "../assets/images/instagram-logo.svg";
import facebook from "../assets/images/facebook-logo.svg";
import whatsapp from "../assets/images/whatsapp-logo.svg";
import telegram from "../assets/images/telegram-logo.svg";

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
    <div className="footer">
      <div className="footer-links">
        <a href="/" className="footer-logo">
          Logo
        </a>
        <nav className="footer-link-main">
          {Links.map((item) => (
            <a href={item.link} key={item.name} className="footer-link">
              {item.name}
            </a>
          ))}
          <select className="footer-lang">
            <option value="AZ">AZ</option>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>
        </nav>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-main">
          <i className="footer-contact-icon">
            <img src={mail} alt="Mail" />
          </i>
          <p>contact@faridrashidov.com</p>
        </div>
        <div className="footer-contact-main">
          <i className="footer-contact-icon">
            <img src={phone} alt="Phone" />
          </i>
          <p>+994 55 867 67 76</p>
        </div>
      </div>
      <div className="footer-social">
        <i className="footer-social-main">
          {Social.map((item, index) => (
            <img
              src={item.icon}
              alt={item.alt}
              key={index}
              className="footer-social-icon"
            />
          ))}
        </i>
      </div>
      <div className="footer-copyright">
        <p>© 2024, şirkətin adı. Bütün hüquqlar qorunur</p>
      </div>
    </div>
  );
}
