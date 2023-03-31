import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <header>
      {/* Add your site logo and navigation menu */}
      <div>
        <h1>OptiBrain.ai</h1>
      </div>
      <nav>{/* Add your navigation links */}</nav>
      <DarkModeToggle />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
