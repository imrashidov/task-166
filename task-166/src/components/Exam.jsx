import clock from "../assets/clock.svg";
import stars4 from "../assets/stars-4.svg";
import bulletPoint from "../assets/bullet-point.svg";

export default function Exam({
  title,
  duration,
  reviews,
  questions,
  subjects,
}) {
  return (
    <div className="p-7 max-md:p-2 md:max-xl:p-3 rounded-xl bg-gray-50">
      <div>
        <div>
          <h5 className="font-bold text-xl mb-7 max-md:mb-3">{title}</h5>
          <div className="flex mb-5 max-md:flex-col md:max-xl:flex-col ">
            <div className="flex">
              <img src={clock} alt="Clock" className="w-6 max-md:w-5" />
              <p className="text-sm items-center flex ml-3 mr-16 max-md:m-0 ">
                {duration} dəqiqə
              </p>
            </div>
            <div className="flex gap-2 max-md:mt-2 ">
              <img src={stars4} alt="Stars" className="w-16" />
              <img src={bulletPoint} alt="Bullet point" className="w-2" />
              <p>{reviews} rəy</p>
            </div>
          </div>
          <div>
            <h6 className="mb-3">Suallar</h6>
            <div className="ml-1 text-sm text-gray-600 border-b-2 border-gray-300 pb-5">
              <p>
                • {questions} sual- {subjects[0]}
              </p>
              <p>
                • {questions} sual- {subjects[1]}{" "}
              </p>
            </div>
          </div>
          <div className="mt-5 text-sm flex gap-3 mb-7">
            <span className="border bg-gray-300 rounded-xl py-1 px-4 max-md:px-2 md:max-xl:px-2">
              İbtidai sinif
            </span>
            <span className="border bg-gray-300 rounded-xl py-1 px-4 max-md:px-2 md:max-xl:px-2">
              3-cü sinif
            </span>
          </div>
          <button className="border-2 border-black rounded-xl w-full px-28 py-2 hover:bg-black hover:text-white max-md:px-5 md:max-xl:px-5">
            1 AZN- indi al
          </button>
        </div>
      </div>
    </div>
  );
}
