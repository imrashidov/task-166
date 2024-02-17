import heroImage from "../assets/images/hero-main.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}>
        <h3 className="hero-title">{t("İmtahanlar")}</h3>
        <p className="hero-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it
        </p>
      </div>
    </div>
  );
}
