export default function AboutMe() {
  return (
    <div className="w-screen h-auto border bg-[#e5e5e5] flex flex-col items-center pt-18">
      <div className="w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        ABOUT ME
      </div>
      <div className="pt-8 w-[40vh] lg:w-[150vh] flex flex-col gap-4 justify-center text-justify items-center font-[Montserrat] text-black text-[20px]">
        <h1>
          My name is Prihandika Vahryansyah, I am a IoT Engineering graduate
          from Toyota Indonesia Academy and now I've been challenging myself to
          go out from my comfort zone in software Engineering. I learn at
          Purwadhika Technology School, now i still learning about Front-End
          Development
        </h1>

        <div className="mt-8 w-52 h-17 border-x-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
          EXPLORE
        </div>
        <div className="mt-8 grid grid-cols-1 gap-12">
          <div className="">
            <h1 className="font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
              DESIGN
            </h1>
            <h2 className="font-[Montserrat] text-black text-[20px]">
              I can design the website based on your needs and suggestions. I
              can also create it from scratch by consulting with you during
              work.
            </h2>
          </div>
          <div className="">
            <h1 className="font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
              DEVELOPMENT
            </h1>
            <h2 className="font-[Montserrat] text-black text-[20px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </h2>
          </div>
          <div className="">
            <h1 className="font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
              MAINTENANCE
            </h1>
            <h2 className="font-[Montserrat] text-black text-[20px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
