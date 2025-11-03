import { siteConfig } from "@/data/site";
import { Link } from "react-router";

const SiteLogo = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          {/* <MobileNavbar /> */}
          <span className="text-4xl italic text-blue-600 dark:text-blue-500  font-bold">
            {siteConfig.name}
          </span>
        </div>
      </Link>
    </>
  );
};

export default SiteLogo;
