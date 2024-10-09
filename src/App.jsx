import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>{t("description.line1")}</span>
      <p>{t("description.line2")}</p>
    </>
  );
};
export default App;
