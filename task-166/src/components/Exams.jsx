import Sidebar from "./Sidebar";
import Exam from "./Exam";
import ExamsInfo from "./ExamsInfo";
import { examsData } from "../examData.js";
import examHero from "../assets/hero-exams.png";

export default function Exams() {
  return (
    <div className="mb-28 font-medium flex flex-col items-center  ">
      <p>Ən çox işlənənlər</p>
      <h3 className="font-bold text-4xl my-5 12">İmtahanlar</h3>
      <div className="flex justify-evenly w-full gap-10 px-36 max-md:px-0 max-md:gap-3 md:max-lg:px-2 md:max-lg:gap-5 ">
        <Sidebar />
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-3 ">
          {examsData.map((exam) => (
            <Exam key={exam.id} {...exam} />
          ))}
        </div>
      </div>
      <button className="mt-16 py-2 px-5 border-gray-300 border-2 rounded-xl hover:bg-gray-300">
        Daha çox
      </button>
      <div className="mt-28 max-md:mt-16 bg-black max-md:grid  rounded-xl text-white flex justify-between w-5/6 mb-28">
        <div className="py-20 pl-16 max-md:pt-10 max-md:px-4 max-md:pb-0">
          <h3 className="font-bold text-4xl mb-5">3-cü sinif imtahanı</h3>
          <div className="text-sm font-extralight max-md:text-lg space-y-2">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
            </li>
            <li>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
            </li>
          </div>
          <button className="bg-white text-black rounded-xl px-5 py-2 mt-12 ">
            1 AZN - imtahanı al
          </button>
        </div>
        <div className="px-20 pr-20 max-md:px-0 md:max-lg:px-0 md:max-lg:mt-auto ">
          <img src={examHero} alt="Pupil" />
        </div>
      </div>
      <ExamsInfo />
    </div>
  );
}
