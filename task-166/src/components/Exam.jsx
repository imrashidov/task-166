import clock from "../assets/images/clock.svg";
import stars4 from "../assets/images/stars-4.svg";
import bulletPoint from "../assets/images/bullet-point.svg";

export default function Exam({
  title,
  duration,
  reviews,
  questions,
  subjects,
}) {
  return (
    <div className="exam">
      <div>
        <div>
          <h5 className="exam-title">{title}</h5>
          <div className="exam-info">
            <div className="exam-info-main">
              <img src={clock} alt="Clock" className="exam-time-img" />
              <p className="exam-time-desc">{duration} dəqiqə</p>
            </div>
            <div className="exam-reviews">
              <img src={stars4} alt="Stars" className="exam-reviews-img" />
              <img
                src={bulletPoint}
                alt="Bullet point"
                className="exam-bullet-point"
              />
              <p>{reviews} rəy</p>
            </div>
          </div>
          <div>
            <h6 className="exam-questions">Suallar</h6>
            <div className="exam-questions-main">
              <p>
                • {questions} sual- {subjects[0]}
              </p>
              <p>
                • {questions} sual- {subjects[1]}{" "}
              </p>
            </div>
          </div>
          <div className="exam-categories">
            <span className="exam-category">İbtidai sinif</span>
            <span className="exam-category">3-cü sinif</span>
          </div>
          <button className="exam-btn">1 AZN- indi al</button>
        </div>
      </div>
    </div>
  );
}
