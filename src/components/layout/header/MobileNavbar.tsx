import { Icons } from "@/components/icons";
import { navItems } from "@/data/site";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ModeToggle } from "@/components/mode-toggle";
import SiteLogo from "./SiteLogo";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Mobile menu button */}
      <div className="flex items-center gap-2.5">
        {" "}
        <ModeToggle />
        <span onClick={() => setIsOpen(true)} className="">
          <Icons.menu className="size-6" />
        </span>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0  bg-opacity-30 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-4  min-h-screen flex flex-col gap-6 border border-r bg-gray-50 dark:bg-slate-900">
          <span className="flex justify-between">
            <SiteLogo />
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-500 dark:text-gray-400"
            >
              <FiX size={24} />
            </button>
          </span>

          <nav className="flex flex-col gap-6 text-lg ">
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:bg-gray-300 "
              >
                {<Icon className="size-5" />} {label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar;
