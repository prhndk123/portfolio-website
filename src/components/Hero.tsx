import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-screen h-[70vh] md:h-screen bg-black flex flex-col items-center md:justify-center md:items-center">
        <img
          src="hero.svg"
          alt=""
          className="rounded-full size-80 lg:size-100 mt-[15vh] lg:mt-0 lg:-mr-[75vh]"
        />
        <div className="absolute left-50 mb-12 w-fit h-[20vh] text-[#e5e5e5] items-start p-5 hidden lg:flex flex-col">
          <h1 className="font-[Montserrat] font-bold text-[22px]">Hi, I am</h1>
          <h1 className="font-[Montserrat] font-extrabold text-[36px]">
            Prihandika Vahryansyah
          </h1>
          <h1 className="font-[Montserrat] font-bold text-[18px] tracking-[10px]">
            Fullstack Developer
          </h1>
          <a
            href="#Contact"
            className="bg-green-600 px-30 py-5 mt-12 rounded-2xl font-[Montserrat] font-bold text-[18px]"
          >
            Get In Touch
          </a>
          <div className="px-17 text-white grid grid-cols-3 place-items-center gap-10 mt-8">

            <a
              href="http://wa.me/628818816758"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={35} />
            </a>
            <a
              href="https://github.com/prhndk123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="http://instagram.com/prhn.dhikaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={35} />
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-[#e5e5e5] w-screen h-[20vh] text-black items-start p-5 lg:hidden ">
        <h1 className="font-[Montserrat] font-bold text-[22px]">Hi, I am</h1>
        <h1 className="font-[Montserrat] font-extrabold text-[36px]">
          Prihandika Vahryansyah
        </h1>
        <h1 className="font-[Montserrat] font-bold text-[13.5px] tracking-[10px]">
          Fullstack Developer
        </h1>
      </div>
    </div>
  );
}
