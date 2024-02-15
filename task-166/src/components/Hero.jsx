import heroImage from "../assets/hero-main.png";

export default function Hero() {
  return (
    <div className="w-full !text-white mb-20">
      <div
        className="bg-cover bg-center h-[650px] p-paddingHero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h3 className="font-bold text-5xl mb-5 ">İmtahanlar</h3>
        <p className="font-medium text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it
        </p>
      </div>
    </div>
  );
}
