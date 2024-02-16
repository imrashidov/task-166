import stars4 from "../assets/images/stars-4.svg";
export default function Review() {
  return (
    <div className="review">
      <div className="review-main">
        <h5 className="review-title">İlaha Nazarova</h5>
        <div className="review-text">
          <img src={stars4} alt="Stars" />
          <p className="review-time">2 gün əvvəl</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard
        </p>
      </div>
    </div>
  );
}
