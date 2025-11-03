import { skills } from "@/data/data";

const Skill = () => {
  return (
    <>
      {" "}
      <section id="skills" className="pt-20 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Professional Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 border rounded-2xl bg-card text-card-foreground shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className={`p-3 rounded-full mb-2 ${color}`}>
                      <Icon className="size-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
