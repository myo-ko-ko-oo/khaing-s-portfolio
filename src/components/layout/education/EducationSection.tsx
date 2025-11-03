// import Image from "next/image"
import { Button } from "@/components/ui/button";
import { CalendarDays, GraduationCap } from "lucide-react";
import { educations } from "@/data/data";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="pt-18 pb-10">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <Fade direction="up" duration={2000}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-white flex justify-center items-center gap-2">
                <GraduationCap className="w-8 h-8 text-blue-500" />
                Education
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                A journey of learning and growth through academic achievements.
              </p>
            </div>
          </Fade>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <Slide
                direction={index % 2 === 0 ? "left" : "right"}
                duration={2500}
                key={edu.title}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-52 overflow-hidden">
                    <Zoom triggerOnce>
                      <img
                        src={edu.image}
                        alt={edu.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </Zoom>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 text-white">
                      <h3 className="text-xl font-semibold">{edu.title}</h3>
                      <p className="text-sm opacity-90">{edu.edu_name}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
