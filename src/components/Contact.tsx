import { Button } from "./ui/button";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="w-screen h-auto border bg-[#e5e5e5] flex flex-col items-center">
      <div className="my-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        CONTACT
      </div>
      <div className="flex flex-col gap-9">
        <input
          required
          type="text"
          id=""
          placeholder="ENTER YOUR NAME*"
          className="w-[80vw] h-auto p-4 border-b-8 border-l-8 border-black"
        />
        <input
          required
          type="email"
          id=""
          placeholder="ENTER YOUR EMAIL*"
          className="w-[80vw] h-auto p-4 border-b-8 border-l-8 border-black"
        />
        <input
          type="tel"
          id=""
          placeholder="PHONE NUMBER"
          className="w-[80vw] h-auto p-4 border-b-8 border-l-8 border-black"
        />
        <textarea
          rows={5}
          required
          id=""
          placeholder="YOUR MESSAGE*"
          className="w-[80vw] h-auto p-4 border-b-8 border-l-8 border-black"
        />
      </div>
      <Button className="bg-transparent my-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        SUBMIT
      </Button>
      <div className="bg-black w-screen h-auto">
        <div className="font-[Montserrat] flex justify-center items-center text-white ">
          <a href="#Hero" className="mt-10 text-xl font-bold tracking-[6px]">
            BACK TO TOP
          </a>
        </div>
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
        <h1 className="mb-2 text-center text-white text-[12px]">
          @2025 Prihandika Vahryansyah All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
