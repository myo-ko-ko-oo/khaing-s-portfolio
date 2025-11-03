import { Fade, Slide } from "react-awesome-reveal";
import { Icons } from "@/components/icons";
import { contactLinks } from "@/data/data";

const ContactCards = () => {
  const renderCard = (link: any) => (
    <Fade direction="left" duration={2000}>
      <a
        href={link.href}
        className={`mt-6 cursor-pointer p-2 h-20 border rounded-2xl flex justify-between items-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br ${link.color} text-white`}
      >
        <div className="flex gap-3 items-center">
          <link.icon className="text-2xl " />
          <p className="font-semibold">{link.title}</p>
        </div>
        <Icons.link className="text-lg" />
      </a>
    </Fade>
  );

  return <div className="space-y-2">{contactLinks.map(renderCard)}</div>;
};

export default ContactCards;
