// import { HiMenu } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const triggerPoint = 0;
      setIsSticky(window.scrollY > triggerPoint);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-screen h-15 bg-black border-b border-b-white ${
        isSticky ? "bg-transparent shadow-2xl backdrop-blur-md" : null
      }`}
    >
      <div className="flex items-center h-15 justify-between px-4 font-[Josefin Sans] text-white font-extrabold tracking-widest ">
        <a href="#Hero">DHIKA</a>
        <div className="">
          <Drawer  direction="top">
            <DrawerTrigger><DialogTitle></DialogTitle>
              <div className="border border-white rounded-lg py-2.5 px-3.75 active:outline-6">
                <FaBars className="" size={30} />
              </div>
            </DrawerTrigger>
            <DrawerContent className="bg-transparent shadow-2xl backdrop-blur-md h-[70vh]">
              <div className="mt-1 w-auto h-15 border-b-1 border-b-white flex items-center h-15 justify-between p-4 font-[Josefin Sans] text-white font-extrabold tracking-widest">
                <DrawerClose asChild>
                  <a href="#Hero">DHIKA</a>
                </DrawerClose>
                <DrawerClose asChild>
                  <div className="border-1 border-white rounded-[4px] py-[10px] px-[15px] active:outline-6">
                    <FaBars size={30} />
                  </div>
                </DrawerClose>
              </div>
              <nav className="text-white grid grid-cols-1 divide-y divide-gray-600 h-[40vh]">
                <DrawerClose asChild>
                  <a
                    href="#AboutMe"
                    className="h-full w-full flex items-center justify-center font-[Montserrat] font-bold text-[16px] hover:bg-white hover:text-black hover:text-[20px] hover:uppercase"
                  >
                    About Me
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a
                    href="#Skills"
                    className="h-full w-full flex items-center justify-center font-[Montserrat] font-bold text-[16px] hover:bg-white hover:text-black hover:text-[20px] hover:uppercase"
                  >
                    Skills
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a
                    href="#Portfolio"
                    className="h-full w-full flex items-center justify-center font-[Montserrat] font-bold text-[16px] hover:bg-white hover:text-black hover:text-[20px] hover:uppercase"
                  >
                    Portfolio
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a
                    href="#Contact"
                    className="h-full w-full flex items-center justify-center font-[Montserrat] font-bold text-[16px] hover:bg-white hover:text-black hover:text-[20px] hover:uppercase"
                  >
                    Contact Me
                  </a>
                </DrawerClose>
              </nav>
              <div className="text-white flex w-auto h-[15vh] justify-around items-center">
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
              <DrawerDescription></DrawerDescription>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
