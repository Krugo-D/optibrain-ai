// LanguageSwitcher.jsx
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FiGlobe } from "react-icons/fi";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const lang = i18n.language;

  const switchLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    router.push(router.pathname, router.asPath, { locale: newLang });
  };

  return (
    <button className={styles.switch} onClick={switchLanguage}>
      <FiGlobe className={styles.icon} />
      <span className={styles["lang-text"]}>{lang === "en" ? "VN" : "EN"}</span>
    </button>
  );
}

export default LanguageSwitcher;
