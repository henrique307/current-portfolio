import React from "react";
import {
  BackendIcon,
  FrontendIcon,
  IconInterface,
  OtherToolsIcons,
} from "../../../utils/icons/icons";
import "./experiencia.css"

export function Experiencia() {
  interface Servico {
    titulo: string;
    descricao: string;
    icon: (props: IconInterface) => JSX.Element;
  }
  const servicos: Servico[] = [
    {
      titulo: "Front End",
      descricao:
        "Desenvolvimento de interfaces leves, elegantes e responsivas, usando as melhores ferramentas do mercado!",
      icon: FrontendIcon,
    },
    {
      titulo: "Back End",
      descricao:
        "API's escaláveis e optimizadas respeitando o padrão REST, com documentação no Swagger e validação de dados",
      icon: BackendIcon,
    },
    {
      titulo: "Ferramentas",
      descricao:
        "Experiência com as ferramentas mais usadas do mercado; Docker, Git, Swagger, Github, Bitbucket, Heroku, Vercel e muito mais!",
      icon: OtherToolsIcons,
    },
  ];
  return (
    <section id="servicos" className="py-12 px-8 md:px-16 bg-base-200 w-full flex justify-center">
      <div className="text-left flex flex-col items-center w-full md:w-[90%]">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <h1 className="lg:text-xl md:text-lg font-bold text-center md:w-2/4 md:text-left">
            4+ Anos de experiência trabalhando com desenvolvimento de software
          </h1>
          <div className="w-full mt-5 md:mt-0 md:w-1/3">
            <h2 className="text-center md:text-left md:text-sm text-accent uppercase text-xs tracking-widest font-mono">--- Serviços</h2>
            <span className="block text-xs sm:text-sm md:text-base opacity-75 text-center md:text-left">
              Descubra os melhores serviços que ofereço, sempre focado no
              sucesso do seu projeto.
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-5 justify-center lg:justify-between pt-16 w-full">
          {servicos.map((servico, i) => {
            return (
              <div className="px-8 text-center w-[80%] sm:w-96 md:w-86 py-10 bg-base-100 inline gap-3 border-b-secondary border-b-2" key={`exp-${i}`}>
                <servico.icon className="size-12 mb-3 mx-auto" />
                <h1 className="text-2xl font-bold bg-gradient-to-t from-primary to-indigo-500 text-transparent bg-clip-text">{servico.titulo}</h1>
                <span className="text-sm tracking-loose sm:text-base md:text-lg text-base-content inline-block mt-5">{servico.descricao}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
