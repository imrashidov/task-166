import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Exams from "./components/Exams";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClickLang(lang) {
    i18n.changeLanguage(lang);
  }
  function handleChangeLang(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <Header handleClickLang={handleClickLang} />
      <Hero handleClickLang={handleClickLang} />
      <Categories handleClickLang={handleClickLang} />
      <Exams handleClickLang={handleClickLang} />
      <Reviews handleClickLang={handleClickLang} />
      <Footer handleClickLang={handleClickLang} />
    </>
  );
}

export default App;
