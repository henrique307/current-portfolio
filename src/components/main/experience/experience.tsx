import {
  BackendIcon,
  FrontendIcon,
  OtherToolsIcons,
} from "../../../utils/icons/icons";
import "./experience.css";
import { useTranslation } from "react-i18next";

export function Experiencia() {
  interface ServicesTranstalation {
    header: {
      left_header: string;
      right_header: {
        main_header: string;
        sub_header: string;
      };
    };
    services: {
      header: string;
      description: string;
    }[];
  }

  const { t } = useTranslation("global");
  const experienceTranslation = t("main.experience", {
    returnObjects: true,
  }) as ServicesTranstalation;
  const servicos = [
    (props: string) => <FrontendIcon className={props} />,
    (props: string) => <BackendIcon className={props} />,
    (props: string) => <OtherToolsIcons className={props} />,
  ];

  return (
    <section
      id="servicos"
      className="py-12 px-8 md:px-16 bg-base-200 w-full flex justify-center"
    >
      <div className="text-left flex flex-col items-center w-full md:w-[90%]">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <h1 className="lg:text-xl md:text-lg font-bold text-center md:w-2/4 md:text-left">
            {experienceTranslation.header.left_header}
          </h1>
          <div className="w-full mt-5 md:mt-0 md:w-1/3">
            <h2 className="text-center md:text-left md:text-sm text-accent uppercase text-xs tracking-widest font-mono">
              {experienceTranslation.header.right_header.main_header}
            </h2>
            <span className="block text-xs sm:text-sm md:text-base opacity-75 text-center md:text-left">
              {experienceTranslation.header.right_header.sub_header}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-5 justify-center lg:justify-between pt-16 w-full">
          {experienceTranslation.services.map((servico, i) => {
            return (
              <div
                className="px-8 text-center w-[80%] sm:w-96 md:w-86 py-10 bg-base-100 inline gap-3 border-b-secondary border-b-2"
                key={`exp-${i}`}
              >
                {servicos[i]("size-14 mb-3 mx-auto")}
                <h1 className="text-2xl font-bold bg-gradient-to-t from-primary to-indigo-500 text-transparent bg-clip-text">
                  {servico.header}
                </h1>
                <span className="text-sm tracking-loose sm:text-base md:text-lg text-base-content inline-block mt-5">
                  {servico.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
