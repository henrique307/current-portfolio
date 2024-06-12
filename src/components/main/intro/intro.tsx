import { DownloadIcon } from "../../../utils/icons/icons";
import { ReactTyped } from "react-typed";
import "./intro.css";

export function Intro() {
  const curriculo =
    "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/Curriculo+Henrique+Florencio+(portugues).pdf";
  const atividades = [
    "Frontend.",
    "Backend.",
    "Fullstack.",
    "de Chatbots.",
    "de Automações.",
    "de Software.",
  ];

  return (
    <div id="eu" className="pt-48 pb-28 px-8 sm:px-16 bg-base-200 w-full flex justify-center">
      <div className="items-start w-[90%]">
        <div className="text-left">
          <h1 className="text-xs md:text-lg lg:text-xl font-bold text-primary">
            Olá meu nome é Henrique! Sou{" "}
          </h1>
          <div className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent font-mono flex sm:flex-row w-fit text-lg md:text-4xl lg:text-5xl text-nowrap font-bold">
            Desenvolvedor{" "}
            <ReactTyped 
              strings={atividades}
              typeSpeed={40}
              backSpeed={50}
              backDelay={2000}
              showCursor={false}
              loop
              loopCount={3}
            >
              <p className="ml-3 w-fit border-r typing"></p>
            </ReactTyped>
          </div>
          <p className="text-sm md:text-lg lg:text-xl opacity-75 pb-4 pt-2 max-w-lg lg:max-w-3xl">
            Especialista em desenvolvimento web responsivo, automações, Integrações de pagamento, chatbots, APIs e dedicado a criar uma solução criativa para sua necessidade tecnológica!
          </p>
          <div className="flex gap-4">
            <a href="#action" className="btn btn-sm md:btn-md lg:btn-lg px-5 btn-primary rounded-none">
              Contato
            </a>
            <a
              target="_blank"
              href={curriculo}
              className="btn btn-sm md:btn-md lg:btn-lg btn-slate-200 btn-outline rounded-none"
            >
              <DownloadIcon /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
