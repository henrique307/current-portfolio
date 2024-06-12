import "./testimonials.css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css/skyblue';
import { NextArrow } from "../../../utils/icons/icons";
import { useRef } from "react";

export function Testimonials() {
  const splideOptions: Options = {
    autoplay: true,
    focus: "center",
    drag: false,
    rewind: true,
    flickMaxPages: 1,
    pauseOnHover: true,
    interval: 4000,
    type: "fade",
    classes: {
      pagination: 'splide__pagination translate-y-[50px]',
    }
  };

  interface Testemunho {
    nome: string;
    titulo: string;
    perfil: string;
    descricao: string;
  }

  const testemunhos: Testemunho[] = [
    {
      nome: "Mario",
      titulo: "Cliente Workana",
      perfil: "",
      descricao:
      '"[...] Atendeu a todas as especificações solicitadas, mas também trouxe ideias inovadoras para melhorias, o que demonstra seu compromisso com a excelência e sua proatividade. Além disso, a entrega foi feita de forma rápida. Parabéns pelo trabalho exemplar e pela dedicação! Recomendo a todos!"',
    },
  ];

  return (
    <div id="testemunhos" className="py-32 px-2  bg-base-300 w-full flex justify-center">
      <div className="items-start w-[90%]">
        <div className="w-full">
          <span className="uppercase text-xs tracking-widest font-mono md:text-base block mb-2 text-accent w-full text-center">
            --- avaliações
          </span>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold w-full text-center">
            O que dizem sobre o meu serviço 👀
          </h1>
        </div>
        <Splide aria-label="My Favorite Images" options={splideOptions}>
          {testemunhos.map((testemunho, i) => {
            return (
              <SplideSlide key={i}>
                <div className="py-12 w-full mx-auto max-w-[50rem]">
                  <span className="text-sm md:text-lg block text-base-content opacity-75 mb-16 text-center">
                    {testemunho.descricao}
                  </span>
                  <div className="flex gap-3 items-center justify-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img className="object-center object-cover" src={!testemunho.perfil && `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${testemunho.nome}` || undefined} />
                      </div>
                    </div>
                    <div className="">
                      <h1 className="text-base md:text-lg font-bold">
                        {testemunho.nome}
                      </h1>
                      <span className="text-xs opacity-50 md:text-base">
                        {testemunho.titulo}
                      </span>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
          <div className="splide__arrows hidden sm:block text-transparent text-xs font-bold">
            <button className="splide__arrow splide__arrow--prev translate-x-[-22px]">
              <NextArrow className="fill-transparent" />
            </button>
            <button className="splide__arrow splide__arrow--next translate-x-[22px]">
              <NextArrow />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}
