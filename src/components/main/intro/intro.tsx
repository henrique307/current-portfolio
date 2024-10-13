import { DownloadIcon } from "../../../utils/icons/icons";
import { ReactTyped } from "react-typed";
import "./intro.css";
import { useTranslation } from "react-i18next";

export function Intro() {
  interface introTranslation {
    greetings: string;
    typing_values: string[];
    description: string;
    contact: string;
  }

  const { t } = useTranslation("global");
  const introTranslation = t("main.intro", { returnObjects: true }) as introTranslation;

  const curriculo = "https://imagens-portfolio.s3.sa-east-1.amazonaws.com/CurriculoHenriqueFlorencio.pdf";

  return (
    <div
      id="eu"
      className="pt-48 pb-28 px-8 sm:px-16 bg-base-200 w-full flex justify-center"
    >
      <div className="items-start w-[98%] relative">
        <div className="text-left">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-primary">
            {introTranslation.greetings}{" "}
          </h1>
          <div className="-translate-x-1 md:-translate-x-2 bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent font-mono flex sm:flex-row w-fit text-sm sm:text-2xl lg:text-4xl font-bold">
            |
            <ReactTyped
              strings={introTranslation.typing_values}
              i18nIsDynamicList={true}
              typeSpeed={40}
              backSpeed={50}
              backDelay={2000}
              showCursor={false}
              loop
              loopCount={3}
            >
              <p className="w-fit border-r border-base-content typing"></p>
            </ReactTyped>
          </div>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl opacity-75 pb-4 pt-2 max-w-lg lg:max-w-3xl">
            {introTranslation.description}
          </p>
          <div className="flex gap-4">
            <a
              href="#action"
              className="btn btn-sm md:btn-md lg:btn-lg px-5 btn-primary rounded-none"
            >
              {introTranslation.contact}
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
