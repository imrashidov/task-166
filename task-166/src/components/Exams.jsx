import Sidebar from "./Sidebar";
import Exam from "./Exam";
import { examsData } from "../examData.js";

export default function Exams() {
  return (
    <div className="mb-28 font-medium flex flex-col items-center  ">
      <p>Ən çox işlənənlər</p>
      <h3 className="font-bold text-4xl my-5 12">İmtahanlar</h3>
      <div className="flex justify-evenly w-full gap-10 px-36">
        <Sidebar />
        <div className="grid grid-cols-2 gap-5">
          {examsData.map((exam) => (
            <Exam key={exam.id} {...exam} /> // Pass exam data as props
          ))}
        </div>
      </div>
    </div>
  );
}
