import { contactLinks } from "@/data/data";
import { siteConfig } from "@/data/site";

const FooterSection = () => {
  return (
    <>
      <footer className="ml-4 w-full border-t lg:ml-0">
        <div className="container mx-auto pt-6 pb-8 lg:py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          {/* Left side: Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.hero_name}. All rights
            reserved.
          </p>

          {/* Right side: Social links */}
          <div className="flex items-center gap-4 mt-4 mr-10 md:mt-0">
            {contactLinks.map((link) => (
              <a key={link.title} href={link.href}>
                <span className="">
                  {" "}
                  <link.icon className={`size-6 `} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
