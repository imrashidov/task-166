import Review from "./Review";
import star1 from "../assets/images/star-1.svg";
import stars2 from "../assets/images/stars-2.svg";
import stars3 from "../assets/images/stars-3.svg";
import stars4 from "../assets/images/stars-4.svg";
import stars5 from "../assets/images/stars-5.svg";
import comment from "../assets/images/comment.svg";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const reviews = [
    { comments: 378, stars: stars5, percentage: 72 },
    { comments: 24, stars: stars4, percentage: 32 },
    { comments: 21, stars: stars3, percentage: 20 },
    { comments: 15, stars: stars2, percentage: 16 },
    { comments: 2, stars: star1, percentage: 1 },
  ];
  const { t, i18n } = useTranslation();

  return (
    <div className="reviews">
      <div className="reviews-main">
        <h3 className="reviews-title">{t("Rəylər")}</h3>
        <div className="reviews-main2">
          <div className="reviews-left">
            <span className="reviews-point">4.9</span>
            <div className="reviews-left-main">
              <img src={comment} alt="Comment" />
              <p>440 {t("rəy")}</p>
            </div>
          </div>
          <div className="reviews-right">
            {reviews.map((review, index) => (
              <div key={index} className="reviews-right-main">
                <p className="reviews-comment">{review.comments}</p>
                <img src={review.stars} alt="Stars" className="ml-2" />
                <div className={`w-${review.percentage}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reviews-review">
        {Array.from({ length: 18 }).map((_, index) => (
          <Review key={index} id={index + 1} />
        ))}
      </div>
      <button className="more-btn">{t("Daha çox")}</button>
    </div>
  );
}
