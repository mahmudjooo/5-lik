import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { navLinks } from "../constants/indext";
import { AiFillLike } from "react-icons/ai";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./language-toggle";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="w-full border-b items-center h-20">
      <div className="max-w-6xl w-full container mx-auto flex justify-around items-center h-20">
        <img
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="image"
        />
        <div className="flex gap-4">
          {navLinks.map((item) => (
            <button>{t(item.name)}</button>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <CiSearch />
          <AiFillLike />
          <CiShoppingCart />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
