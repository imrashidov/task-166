import clock from "../assets/images/clock.svg";
import paper from "../assets/images/paper.svg";
import calendar from "../assets/images/calendar.svg";
import goldMedal from "../assets/images/gold-medal.svg";
import silverMedal from "../assets/images/silver-medal.svg";
import bronzeMedal from "../assets/images/bronze-medal.svg";
import fourth from "../assets/images/fourth.svg";
import fifth from "../assets/images/fifth.svg";
import rightArrow from "../assets/images/right-arrow.svg";

export default function ExamsInfo() {
  const students = [
    { name: "Ilahə Nəzərova", logo: goldMedal, point: 20, time: 12 },
    { name: "Ilahə Nəzərova", logo: silverMedal, point: 20, time: 12 },
    { name: "Ilahə Nəzərova", logo: bronzeMedal, point: 19, time: 12 },
    { name: "Ilahə Nəzərova", logo: fourth, point: 18, time: 12 },
    { name: "Ilahə Nəzərova", logo: fifth, point: 17, time: 12 },
  ];
  return (
    <div className="examsInfo">
      <div className="examsInfo-main">
        <span className="examsInfo-title">Məlumat</span>
        <div className="examsInfo-info">
          <img src={clock} alt="Clock" />
          <p>45 dəqiqə</p>
          <img src={paper} alt="Paper" />
          <p>20 sual</p>
          <img src={calendar} alt="Calendar" />
          <p>22.05.2023 hazırlanıb</p>
        </div>
        <div>
          <span className="examsInfo-title">Suallar</span>
          <div className="examsInfo-desc">
            <li>Azərbaycan dili - 10 sual</li>
            <li>Riyaziyyat - 10 sual</li>
          </div>
        </div>
      </div>
      <div className="examsInfo-board">
        <span className="examsInfo-title">İmtahan üzrə nəticələr</span>
        <div className="examsInfo-board-main">
          {students.map((student, index) => (
            <div key={index} className="examsInfo-board-main2">
              <img src={student.logo} alt="Degree" key={index} />
              <p className="examsInfo-studentName">{student.name}</p>
              <p className="examsInfo-studentPoint">{student.point} bal</p>
              <li className="examsInfo-studentTime">{student.time} dəq</li>
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
