import Sidebar from "./Sidebar";
import Exam from "./Exam";
import ExamsInfo from "./ExamsInfo";
import { examsData } from "../examData.js";
import examHero from "../assets/images/hero-exams.png";
import { useTranslation } from "react-i18next";

export default function Exams() {
  const { t, i18n } = useTranslation();
  return (
    <div className="exams">
      <p>{t("Ən çox işlənənlər")}</p>
      <h3 className="exams-title">{t("İmtahanlar")}</h3>
      <div className="exams-sidebar">
        <Sidebar />
        <div className="exams-sidebar-main">
          {examsData.map((exam) => (
            <Exam key={exam.id} {...exam} />
          ))}
        </div>
      </div>
      <button className="more-btn">{t("Daha çox")}</button>
      <div className="exams-hero">
        <div className="exams-hero-left">
          <h3 className="exams-hero-title">{t("3-cü sinif imtahanı")}</h3>
          <div className="exams-hero-desc">
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
          <button className="exams-hero-button">{t("1 AZN- indi al")}</button>
        </div>
        <div className="exams-hero-img">
          <img src={examHero} alt="Pupil" />
        </div>
      </div>
      <ExamsInfo />
    </div>
  );
}
