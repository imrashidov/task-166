import stars4 from "../assets/stars-4.svg";
export default function Review() {
  return (
    <div className="p-5 max-md:p-3 rounded-sm bg-gray-50">
      <div className="flex flex-col text-left">
        <h5 className="font-semibold">İlaha Nazarova</h5>
        <div className="flex gap-3 mt-4 mb-5 text-sm">
          <img src={stars4} alt="Stars" />
          <p className="text-gray-700">2 gün əvvəl</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard
        </p>
      </div>
    </div>
  );
}
