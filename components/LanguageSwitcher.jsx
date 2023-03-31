import useTranslation from "next-translate/useTranslation";

function LanguageSwitcher() {
  const { t, lang } = useTranslation();
  const switchLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    window.location.href = `/${newLang}`;
  };

  return (
    <button onClick={switchLanguage}>
      {lang === "en" ? "Tiếng Việt" : "English"}
    </button>
  );
}

export default LanguageSwitcher;
