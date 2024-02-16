import heroImage from "../assets/images/hero-main.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}>
        <h3 className="hero-title">İmtahanlar</h3>
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
