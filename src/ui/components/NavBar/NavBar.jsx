import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";

export const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 mb-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">☀️ Sunny</div>
        <LanguageDropdown />
      </div>
    </nav>
  );
};
