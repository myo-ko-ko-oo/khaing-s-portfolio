import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import { experiences as steps } from "@/data/data";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <>
      <section id="experiences" className="pt-20 pb-10">
        <Fade direction="up" duration={3000}>
          <h1 className="text-3xl font-bold  mb-10">Experiences</h1>
        </Fade>
        <div className="flex flex-col items-start relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start">
              {/* Left side: logo button + vertical line */}
              <div className="flex flex-col items-center relative">
                {/* Company Logo Button */}
                <Button
                  variant="outline"
                  className="h-12 w-12 p-0 rounded-full overflow-hidden"
                  asChild={!!step.website}
                >
                  {step.website ? (
                    <a
                      href={step.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={step.logo}
                        alt={step.company}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </a>
                  ) : (
                    <img
                      src={step.logo}
                      alt={step.company}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  )}
                </Button>

                {/* Vertical line (Shadcn Separator) */}
                {idx < steps.length && <Icons.step className="h-12 w-6" />}
              </div>

              {/* Right side: text content */}
              <div className="ml-4 mb-8">
                <Fade direction="down" duration={3000}>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </Fade>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.company}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {step.period}
                </p>

                {step.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {step.description.map((list: string, i) => (
                      <ul className="list-disc ml-4" key={i}>
                        <li>{list}</li>
                      </ul>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
