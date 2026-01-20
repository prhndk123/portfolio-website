import { useState } from "react";
import { Button } from "./ui/button";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Pesan berhasil dikirim! Terima kasih 🙌");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-screen h-auto border bg-[#e5e5e5] flex flex-col items-center">
      <div className="my-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        CONTACT
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-9 items-center">
        <input
          required
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          value={formData.name}
          onChange={handleChange}
          className="w-[80vw] p-4 border-b-8 border-l-8 border-black"
        />

        <input
          required
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          value={formData.email}
          onChange={handleChange}
          className="w-[80vw] p-4 border-b-8 border-l-8 border-black"
        />

        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          value={formData.phone}
          onChange={handleChange}
          className="w-[80vw] p-4 border-b-8 border-l-8 border-black"
        />

        <textarea
          rows={5}
          required
          name="message"
          placeholder="YOUR MESSAGE*"
          value={formData.message}
          onChange={handleChange}
          className="w-[80vw] p-4 border-b-8 border-l-8 border-black"
        />

        <Button
          type="submit"
          variant={"ghost"}
          className="bg-transparent my-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]"
        >
          SUBMIT
        </Button>
      </form>

      {/* FOOTER */}
      <div className="bg-black w-screen h-auto">
        <div className="font-[Montserrat] flex justify-center items-center text-white ">
          <a href="#Hero" className="mt-10 text-xl font-bold tracking-[6px]">
            BACK TO TOP
          </a>
        </div>

        <div className="text-white flex h-[15vh] justify-around items-center">
          <a href="http://wa.me/628818816758" target="_blank">
            <BsWhatsapp size={35} />
          </a>
          <a href="https://github.com/prhndk123" target="_blank">
            <FaGithub size={35} />
          </a>
          <a href="http://instagram.com/prhn.dhikaa" target="_blank">
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
