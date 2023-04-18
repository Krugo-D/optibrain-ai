import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FiGlobe } from "react-icons/fi";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const lang = i18n.language;

  const switchLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    router.push(router.pathname, router.asPath, { locale: newLang });
  };

  return (
    <div
      className={styles.switch}
      onClick={switchLanguage}
      tabIndex={0}
      role="button">
      <FiGlobe className={styles.icon} />
      <span className={styles["lang-text"]}>{lang === "en" ? "VN" : "EN"}</span>
    </div>
  );
}

export default LanguageSwitcher;
