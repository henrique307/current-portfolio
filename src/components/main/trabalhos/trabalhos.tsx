import "./trabalhos.css";
import { TechIconInterface, icons } from "../../../utils/icons/texh-icons";
import { NewWindowIcon } from "../../../utils/icons/icons";
import { useState } from "react";
// import { envConfig } from "../../../config";

export function Trabalhos() {

  interface Trabalho {
    titulo: string;
    descricao: string;
    thumbnail: string;
    link: string;
    github: string;
    icons: ((props: TechIconInterface) => JSX.Element)[];
  }

  const trabalhos: Trabalho[] = [
    {
      titulo: "Ecommerce Confeitaria",
      thumbnail:
        "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/bakery.png",
      descricao:
        "E-comerce integrado com a API de pagamentos do Stripe, website tem o objetivo de apresentar ao cliente com beleza e concisão seus produtos e preços",
      link: "https://henrique307.github.io/bakery-website",
      github: "https://github.com/henrique307/bakery-website",
      icons: [
        icons.IconReact,
        icons.IconRedux,
        icons.IconTailwindcss,
        icons.IconStripe,
      ],
    },
    {
      titulo: "Landing Page Viagens",
      thumbnail:
        "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/hevor.png",
      descricao:
        "Site para agencia de viagens, site possui design responsivo e foi elaborado visando a melhor experiencia possível do usuário",
      link: "https://henrique307.github.io/travels-website",
      github: "https://github.com/henrique307/travels-website",
      icons: [icons.IconJavascript, icons.IconHtml5, icons.IconSass],
    },
    {
      titulo: "API integrada ao Google Sheets",
      thumbnail: "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/api.png",
      descricao:
        "API integrada com o google sheets, que executa todas as operações CRUD necessárias para fazer integração com uma aplicação de sua escolha! ",
      link: "https://api-sheets.onrender.com/api/swagger",
      github: "https://github.com/henrique307/api-sheets",
      icons: [
        icons.IconGoogle,
        icons.IconNestjs,
        icons.IconExpress,
        icons.IconSwagger,
      ],
    },
    {
      titulo: "REST API Petshop",
      thumbnail:
        "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/petshop_api.png",
      descricao:
        "API REST construida com NestJS (Framework que facilita a criação de API's Express de forma rápida e organizada) com atenticação JWT usando MongoDB como base de dados",
      link: "https://petshop-api-9fdk.onrender.com/api/swagger",
      github: "https://github.com/henrique307/petshop-api",
      icons: [
        icons.IconNestjs,
        icons.IconMongodb,
        icons.IconExpress,
        icons.IconSwagger,
      ],
    },
    {
      titulo: "Landing Academia de Muay Thai",
      thumbnail:
        "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/fight.png",
      descricao:
        "Site para uma academia de Muay Thai, com design moderno e responsivo visando informar o cliente sobre os maiores beneficios e sobre a cultura do esporte!",
      link: "https://henrique307.github.io/santa-cruz-fight-club",
      github: "https://github.com/henrique307/santa-cruz-fight-club",
      icons: [icons.IconJavascript, icons.IconHtml5, icons.IconCss3],
    },
  ];

  return (
    <section id="trabalhos" className="py-32 bg-base-100 w-full flex justify-center">
      <div className="text-left flex flex-col items-center mx-auto w-[90%]">
        <div className="flex justify-between w-[90%] items-end">
          <div className="text-center sm:text-left mx-auto sm:m-0">
            <h1 className="text-accent uppercase text-xs md:text-sm tracking-widest font-mono md:text-base">
              --- Meus trabalhos
            </h1>
            <h2 className="text-lg md:text-xl">
              Alguns dos meus projetos favoritos
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center lg:justify-between pt-4 w-full">
          {trabalhos.map((trabalho, i) => {
            return (
              <div
                className="w-[80%] mx-auto py-10 inline gap-3"
                key={`trab-${i}`}
              >
                <div className="relative bg-base-300">
                  <div className="relative aspect-[16/8] z-0">
                    <a
                      href={trabalho.github}
                      target="_blank"
                      className="cursor-pointer z-20 transition-opacity opacity-0 hover:opacity-100 absolute backdrop-brightness-[.15] w-full h-full flex justify-center items-center"
                    >
                      <icons.IconGithub className="text-5xl" />
                    </a>
                    <div className="absolute w-full z-10 h-full backdrop-grayscale-[.45]"></div>
                    <img
                      className="ver-repo object-cover w-full h-full object-center"
                      src={trabalho.thumbnail}
                      alt={trabalho.titulo}
                    />
                  </div>
                  <div className="bottom-0 w-full p-3 pt-0">
                    <h1 className="md:text-lg  cursor-default mt-5">
                      {trabalho.titulo}
                    </h1>
                    <div className="flex mt-2 justify-between">
                      <div className="flex items-center gap-2">
                        {trabalho.icons.map((Icon, i) => {
                          return (
                            <Icon
                              className="text-lg md:text-xl lg:text-xl select-none bg-gradient-to-t from-accent to-primary  text-transparent bg-clip-text"
                              key={`icon-${i}`}
                            />
                          );
                        })}
                      </div>
                      <a
                        href={trabalho.link}
                        target="_blank"
                        className="text-secondary underline cursor-pointer text-xs flex items-center gap-1"
                      >
                        <span className="hidden sm:inline-block opacity-75">
                          ver projeto
                        </span>{" "}
                        <NewWindowIcon className="pt-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
