import { appWithTranslation } from "next-i18next";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
