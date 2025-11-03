import { navItems } from "@/data/site";
import HeaderIcons from "./HeaderIcons";

const MainNavbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 dark:text-gray-50">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-center gap-1 capitalize hover:text-blue-400 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <HeaderIcons />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
