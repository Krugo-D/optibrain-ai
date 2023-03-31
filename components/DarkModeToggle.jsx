import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setIsDarkMode(initialColorValue === "dark");
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newColorMode = !isDarkMode ? "dark" : "light";
    root.style.setProperty("--initial-color-mode", newColorMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
