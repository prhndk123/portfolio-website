import { portfolioData } from "@/data/PortfolioData";
// import Carousel from "./ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { testimonials } from "@/data/TestimoniData";
import Autoplay from "embla-carousel-autoplay"


export default function Portfolio() {
  return (
    <div className="w-screen h-auto border bg-[#e5e5e5] flex flex-col items-center">
      <div className="my-18 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        PORTFOLIO
      </div>
      <div className="bottom-0 w-screen h-auto bg-black flex flex-col justify-center items-center">
        <Carousel className="w-[90%]">
          <CarouselContent className="">
            {portfolioData.map((data) => {
              return (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={data.id}
                >
                  <div className="">
                    <Card className="bg-transparent border-transparent text-white font-[Montserrat]">
                      <h1 className="text-2xl font-bold">{data.title}</h1>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img src={data.image} alt="" />
                      </CardContent>
                      <h1 className="">{data.descriptions}</h1>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-[16%]  my-[-8%] md:ml-0 md:my-0" />
          <CarouselNext className="mr-[16%] my-[-8%] md:mr-0 md:my-0" />
        </Carousel>
      </div>
      <div className="mt-18 mb-9 w-52 h-17 border-8 border-black flex justify-center items-center font-[Montserrat] text-black text-xl font-bold tracking-[6px]">
        TESTIMONY
      </div>
      <Carousel className="w-[90%] overflow-visible relative" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent className="">
          {testimonials.map((testimony) => {
            return (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={testimony.id}
              >
                <div className="">
                  <Card className="bg-transparent text-black font-[Montserrat] flex">
                    <img
                      className="size-18 relative left-2 rounded-2xl"
                      src={testimony.image}
                      alt=""
                    />
                    <div className="bg-white h-[216px] rounded-[8px] mt-[-40px] p-2 text-justify">
                      <h1 className="mt-4 text-[18px] font-black">
                        {testimony.name}
                      </h1>
                      <h1 className="text-[14px] font-medium tracking-[2px]">
                        {testimony.role}
                      </h1>
                      <h1 className="text-[16px] mt-4 font-bold">
                        {testimony.testimonial}
                      </h1>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
