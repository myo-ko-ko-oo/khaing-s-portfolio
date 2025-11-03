import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";

import SiteLogo from "./SiteLogo";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b  bg-transparent backdrop-blur-md  dark:backdrop-blur-md h-16 p-4 lg:px-8">
        <nav className="flex justify-between items-center">
          <SiteLogo />
          <span>
            <MainNavbar />
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
