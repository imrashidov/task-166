import clock from "../assets/clock.svg";
import paper from "../assets/paper.svg";
import calendar from "../assets/calendar.svg";
import goldMedal from "../assets/gold-medal.svg";
import silverMedal from "../assets/silver-medal.svg";
import bronzeMedal from "../assets/bronze-medal.svg";
import fourth from "../assets/fourth.svg";
import fifth from "../assets/fifth.svg";
import rightArrow from "../assets/right-arrow.svg";

export default function ExamsInfo() {
  const students = [
    { name: "Ilahə Nəzərova", logo: goldMedal, point: 20, time: 12 },
    { name: "Ilahə Nəzərova", logo: silverMedal, point: 20, time: 12 },
    { name: "Ilahə Nəzərova", logo: bronzeMedal, point: 19, time: 12 },
    { name: "Ilahə Nəzərova", logo: fourth, point: 18, time: 12 },
    { name: "Ilahə Nəzərova", logo: fifth, point: 17, time: 12 },
  ];
  return (
    <div className="flex w-5/6 ">
      <div className="pt-7 pl-7 pr-96 pb-32 mr-5 bg-gray-50 shadow-lg rounded-xl w-3/5 ">
        <span className="font-bold text-xl">Məlumat</span>
        <div className="flex mb-5 mt-5 gap-3 px-3 py-2">
          <img src={clock} alt="Clock" />
          <p>45 dəqiqə</p>
          <img src={paper} alt="Paper" />
          <p>20 sual</p>
          <img src={calendar} alt="Calendar" />
          <p>22.05.2023 hazırlanıb</p>
        </div>
        <div>
          <span className="font-bold text-xl">Suallar</span>
          <div className="mt-5 font-normal px-3">
            <li>Azərbaycan dili - 10 sual</li>
            <li>Riyaziyyat - 10 sual</li>
          </div>
        </div>
      </div>
      <div className="p-8 shadow-lg pl-28 w-2/5 bg-gray-50 rounded-xl ">
        <span className="font-bold text-xl">İmtahan üzrə nəticələr</span>
        <div className="mt-5">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex items-center mt-5 gap-4 text-black"
            >
              <img src={student.logo} alt="Degree" key={index} />
              <p className="ml-3 mr-32">{student.name}</p>
              <p className="text-sm">{student.point} bal</p>
              <li className="text-xs">{student.time} dəq</li>
              <img
                className="cursor-pointer"
                src={rightArrow}
                alt="Right Arrow"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
