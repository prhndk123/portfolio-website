export default function Hero() {
  return (
    <div className="">
      <div className="w-screen h-[70vh] bg-black flex flex-col items-center">
        <img src="hero.svg" alt="" className="rounded-full size-80  mt-[15vh]" />
      </div>
      <div className=" bg-[#e5e5e5] w-screen h-[20vh] text-black items-start p-5 ">
        <h1 className="font-[Montserrat] font-bold text-[22px]">Hi, I am</h1>
        <h1 className="font-[Montserrat] font-extrabold text-[36px]">Prihandika Vahryansyah</h1>
        <h1 className="font-[Montserrat] font-bold text-[13.5px] tracking-[10px]">Fullstack Developer</h1>
      </div>
    </div>
  );
}
