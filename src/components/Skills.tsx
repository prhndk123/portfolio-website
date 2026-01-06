import type { Skills } from "@/type/Skills";

const skills: Skills[] = [
  { name: "HTML5", img: "html.svg" },
  { name: "CSS3", img: "css3.svg" },
  { name: "JAVASCRIPT", img: "js.png" },
  { name: "TYPESCRIPT", img: "ts.svg" },
  { name: "REACT", img: "react.svg" },
  { name: "TAILWIND", img: "tailwind.svg" },
  { name: "SHADCN UI", img: "shadcn.svg" },
  { name: "VITE", img: "vite.svg" },
];
const learning: Skills[] = [
  { name: "BACKEND LESS", img: "backendless.svg" },
  { name: "REACT ROUTER", img: "react-router.svg" },
  { name: "MySQL", img: "mysql.svg" },
  { name: "EXPRESS JS", img: "express.svg" },
];
const otherSkill: Skills[] = [
  { name: "ENGLISH C1/C2", img: "en.svg" },
  { name: "ARDUINO", img: "arduino.svg" },
  { name: "INVENTOR", img: "inventor.svg" },
  { name: "POWER BI", img: "powerbi.svg" },
];
export default function Skills() {
  return (
    <div className="w-screen h-auto border bg-[#e5e5e5] flex flex-col items-center pt-18">
      <div className="mb-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        SKILLS
      </div>
      {/* WADAH USING NOW */}
      <h1 className="font-[Montserrat] text-black text-2xl font-bold tracking-[6px]">
        USING NOW :
      </h1>
      <div className="mt-18 w-auto grid grid-cols-2 md:grid-cols-4 gap-x-[2vh] gap-y-[4vh]">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center font-[Montserrat] text-black text-xl font-light tracking-[6px]"
            >
              <img src={skill.img} alt="" className="size-25" />
              <h1>{skill.name}</h1>
            </div>
          );
        })}
      </div>
      {/* WADAH LEARNING */}
      <h1 className="mt-18 font-[Montserrat] text-black text-2xl font-bold tracking-[6px]">
        LEARNING :
      </h1>
      <div className="mt-18 w-auto grid grid-cols-2 md:grid-cols-4 gap-x-[2vh] gap-y-[4vh]">
        {learning.map((learn, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center font-[Montserrat] text-black text-xl font-light tracking-[6px]"
            >
              <img src={learn.img} alt="" className="size-25" />
              <h1 className="text-center hyphens-auto">{learn.name}</h1>
            </div>
          );
        })}
      </div>
      {/* WADAH OTHER SKILLS */}
      <h1 className="mt-18 font-[Montserrat] text-black text-2xl font-bold tracking-[6px]">
        OTHER SKILLS :
      </h1>
      <div className="mt-18 w-auto grid grid-cols-2 md:grid-cols-4 gap-x-[2vh] gap-y-[4vh]">
        {otherSkill.map((other, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center font-[Montserrat] text-black text-xl font-light tracking-[6px]"
            >
              <img src={other.img} alt="" className="size-25" />
              <h1 className="text-center hyphens-auto">{other.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
