import heroImage from "../assets/hero-main.png";

export default function Hero() {
  return (
    <div className=" !text-white mb-20">
      <div
        className="max-md:bg-center bg-cover bg-center h-[650px] p-paddingHero max-md:px-10 max-md:py-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h3 className="font-bold text-5xl mb-5 ">İmtahanlar</h3>
        <p className="font-medium text-base w-48">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it
        </p>
      </div>
    </div>
  );
}
