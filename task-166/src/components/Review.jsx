import stars4 from "../assets/images/stars-4.svg";
import { useTranslation } from "react-i18next";
export default function Review() {
  const { t, i18n } = useTranslation();
  return (
    <div className="review">
      <div className="review-main">
        <h5 className="review-title">İlaha Nazarova</h5>
        <div className="review-text">
          <img src={stars4} alt="Stars" />
          <p className="review-time">2 {t("gün əvvəl")}</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard
        </p>
      </div>
    </div>
  );
}
