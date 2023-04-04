// LanguageSwitcher.jsx
import { useTranslation } from "next-i18next";
import { FiGlobe } from "react-icons/fi";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { t, lang } = useTranslation();

  const switchLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    window.location.href = `/${newLang}`;
  };

  return (
    <button className={styles.switch} onClick={switchLanguage}>
      <FiGlobe className={styles.icon} />
      <span className={styles["lang-text"]}>{lang === "en" ? "VN" : "EN"}</span>
    </button>
  );
}

export default LanguageSwitcher;
