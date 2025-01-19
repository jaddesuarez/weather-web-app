import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";
import PropTypes from "prop-types";

export const NavBar = ({ setIsFavoritesModalOpen }) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 mb-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">☀️ Sunny</div>
        <div className="flex items-center gap-4">
          <button
            className="text-white text-lg font-bold bg-white/10 backdrop-blur px-4 py-2 rounded-md"
            onClick={() => setIsFavoritesModalOpen(true)}
          >
            {t("favoritesBtn")}
          </button>
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setIsFavoritesModalOpen: PropTypes.func.isRequired,
};
