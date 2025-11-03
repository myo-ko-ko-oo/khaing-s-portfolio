import FooterSection from "@/components/layout/footer/FooterSection";
import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router";
import "@fontsource-variable/jost"; // Defaults to wght axis
import "@fontsource-variable/jost/wght.css"; // Specify axis
import "@fontsource-variable/jost/wght-italic.css";

import ScrollToTopButton from "@/components/layout/footer/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <div className="dark:bg-slate-900 scroll-auto overflow-hidden">
        <Header />
        <div className="container mx-auto   px-2 lg:px-0 min-h-screen">
          <Outlet />
        </div>
        <FooterSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default RootLayout;
