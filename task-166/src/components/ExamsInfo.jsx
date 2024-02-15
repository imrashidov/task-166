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
    <div className="flex w-5/6 justify-between ">
      <div className="pt-7 pl-7 pr-20 pb-32">
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
      <div>
        <span>İmtahan üzrə nəticələr</span>
        <div>
          {students.map((student, index) => (
            <div key={index} className="flex gap-">
              <img src={student.logo} alt="Degree" key={index} />
              <p>{student.name}</p>
              <p>{student.point}</p>
              <p>{student.time}</p>
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
