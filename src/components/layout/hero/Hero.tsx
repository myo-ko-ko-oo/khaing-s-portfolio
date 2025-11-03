import { contactLinks } from "@/data/data";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/data/site";
import ContactCards from "./ContactCards";
import { Fade } from "react-awesome-reveal";
import profileImage from "@/data/images/kpa_profile.webp";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="grid lg:grid-cols-2 gap-2.5 pt-24 lg:pt-32 pb-6 lg:pb-16 "
      >
        {/* show pc view */}
        <div className="hidden lg:block ">
          <span className=" flex flex-col items-center space-y-4 mt-10">
            <p>Welcome to my site</p>
            <Fade direction="up" duration={3000}>
              <h1 className="text-4xl font-bold">I'm {siteConfig.hero_name}</h1>
            </Fade>

            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
              {siteConfig.role_1}
            </h1>
            <h1 className="text-4xl font-bold">& {siteConfig.role_2}</h1>
          </span>
          <div className="flex gap-4 mt-8 justify-center">
            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  {" "}
                  <link.icon
                    className={`size-13 text-gray-50 rounded-full border p-3 ${link.color}`}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        <Fade direction="right" duration={2500}>
          <div className="flex justify-center ">
            <img
              src={profileImage}
              alt="profile_image"
              loading="lazy"
              decoding="async"
              className="rounded-4xl lg:w-1/2 object-cover"
            />
          </div>{" "}
        </Fade>

        <div className="lg:hidden mt-4">
          {/* Intro section */}
          <div className="text-center space-y-2.5">
            <p className="text-xl">Hello Everyone, I’m</p>
            <h1 className="text-4xl font-bold">{siteConfig.hero_name}</h1>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-500">
              {siteConfig.role_1}
            </p>

            <p className="text-xl font-bold">& {siteConfig.role_2}</p>
          </div>

          {/* Contact cards */}
          <ContactCards />
        </div>
      </section>
    </>
  );
};

export default Hero;

{
  /* <div className="mt-8 space-y-4">
{/* First grid: Phone + Facebook */
}
<div className="grid grid-cols-3 gap-2.5">
  {contactLinks.slice(0, 2).map((link) => (
    <a
      key={link.title}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer text-gray-100 ${link.color} ${
        link.colSpan || ""
      } p-3 h-20 border rounded-xl flex justify-between `}
    >
      <div>
        <link.icon className="size-7 mb-2" />
        <p>{link.title}</p>
      </div>
      <Icons.link className="size-5" />
    </a>
  ))}
</div>;

{
  /* Single LinkedIn block */
}
{
  contactLinks[2].single && (
    <a
      href={contactLinks[2].href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer p-3 text-gray-100 ${contactLinks[2].color} h-20 border rounded-xl flex justify-between `}
    >
      <div>
        {(() => {
          const Icon = contactLinks[2].icon;
          return <Icon className="size-7 mb-2" />;
        })()}

        <p>{contactLinks[2].title}</p>
      </div>
      <Icons.link className="size-5" />
    </a>
  );
}

{
  /* Last grid: Twitter + Email */
}
<div className="grid grid-cols-3 gap-2.5">
  {contactLinks.slice(3).map((link) => (
    <a
      key={link.title}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer text-gray-100 ${link.color} ${
        link.colSpan || ""
      } p-3 h-20 border rounded-xl flex justify-between `}
    >
      <div>
        <link.icon className="size-7 mb-2" />
        <p>{link.title}</p>
      </div>
      <Icons.link className="size-5" />
    </a>
  ))}
</div>;
// </div> */}
