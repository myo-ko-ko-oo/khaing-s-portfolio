import { Fade } from "react-awesome-reveal";
import summaryCover from "@/data/images/summary_cover.webp";
const About = () => {
  return (
    <>
      <section id="about" className="pt-14 pb-10 ">
        <Fade duration={2000}>
          <h1 className="text-3xl font-bold mt-6 mb-10">
            Professional Summary
          </h1>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center">
            <span className="lg:px-10 px-0">
              <Fade direction="left" duration={2500}>
                <img
                  src={summaryCover}
                  alt="about-image"
                  decoding="async"
                  loading="lazy"
                  className="  rounded-md  lg:mr-4 mb-4"
                />
              </Fade>
            </span>
          </div>

          <span className="space-y-2">
            <Fade direction="down" duration={3000}>
              <p className="leading-relaxed clear-left md:clear-none">
                Highly organized and results - oriented professional with a
                Bachelor of Science (Physics) from Yangon University of Distance
                Education and over 12 years of diverse experience in healthcare,
                accounting, business intelligence, and administrative support.
              </p>
            </Fade>
            <p className="leading-relaxed clear-left md:clear-none">
              Currently serving at Grand Hantha International Hospital as a
              Diabetes Educator and Personal Assistant to a Professor Doctor,
              providing patient education, clinical coordination, and
              comprehensive administrative support to ensure the smooth
              operation of medical and academic activities.
            </p>
            <p className="leading-relaxed clear-left md:clear-none">
              Previously held key roles in the travel, media, and healthcare
              sectors, including positions as Business Intelligence Analyst,
              Data Analyst, and Accountant, demonstrating a strong analytical
              mindset and proficiency in data-driven decision-making.
            </p>
            <p className="leading-relaxed clear-left md:clear-none">
              Winner of the First Prize in the UMFCCI & CIESF (Japan) Business
              Plan Contest 2011, recognized for exceptional planning and
              strategic thinking.
            </p>
            <p className="leading-relaxed clear-left md:clear-none">
              Technically proficient in Microsoft Excel, Business Intelligence
              reporting, accounting software, and Microsoft Office tools, with a
              strong commitment to professional growth through continuous
              learning and specialized training in Accounting, Computerized
              Accounting, Retail Business Management, and Advanced Excel.
            </p>
            <p className="leading-relaxed clear-left md:clear-none">
              Dedicated, detail-oriented, and passionate about improving
              healthcare services and organizational efficiency through both
              analytical expertise and empathetic patient engagement.
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
