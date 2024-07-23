import {
  BackendIcon,
  FrontendIcon,
  OtherToolsIcons,
  TopArrow,
} from "../../../utils/icons/icons";
import { icons } from "../../../utils/icons/tech-icons";
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
    {
      icon: (props: string) => <FrontendIcon className={props} />,
      tecnologies: [
        icons.IconHtml5,
        icons.IconReact,
        icons.IconRedux,
        icons.IconJavascript,
        icons.IconCss3,
        icons.IconSass,
        icons.IconWordpress,
        icons.IconTailwindcss,
      ],
    },
    {
      icon: (props: string) => <BackendIcon className={props} />,
      tecnologies: [
        icons.IconNestjs,
        icons.IconMysql,
        icons.IconMongodb,
        icons.IconExpress,
        icons.IconSwagger,
      ],
    },
    {
      icon: (props: string) => <OtherToolsIcons className={props} />,
      tecnologies: [
        icons.IconAmazonWebServices,
        icons.IconDocker,
        icons.IconGithub,
        icons.IconGoogle,
        icons.IconHeroku,
        icons.IconStripe,
        icons.IconVercel,
      ],
    },
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
                className="px-8 flex overflow-hidden flex-col justify-between text-center w-[80%] sm:w-96 md:w-86 pt-10 pb-10 bg-base-100 inline gap-3 border-b-secondary border-b-2 relative"
                key={`exp-${i}`}
              >
                {servicos[i].icon("size-14 mb-3 mx-auto")}
                <h1 className="text-2xl font-bold bg-gradient-to-t from-primary to-indigo-500 text-transparent bg-clip-text">
                  {servico.header}
                </h1>
                <span className="text-sm tracking-loose sm:text-base md:text-lg text-base-content inline-block mt-5">
                  {servico.description}
                </span>
                <div
                  tabIndex={0}
                  className={`flex flex-col left-0 z-0 w-full h-full absolute translate-y-[70%] focus:translate-y-0 focus:bg-black focus:bottom-0 focus:opacity-90 transition`}
                >
                    <TopArrow className="mt-5 lg:mt-8 scale-[.7] mx-auto cursor-pointer opacity-70 animate-bounce focus:display-none" />
                    <ul className="w-1/2 justify-center mt-10 lg:mt-12 mx-auto flex flex-wrap gap-5">
                      {servicos[i].tecnologies.map((TechIcon, i) => {
                        return (
                          <li key={i}>
                            <TechIcon className="text-3xl sm:text-4xl"/>
                          </li>
                        );
                      })}
                    </ul>
                  {/* <div tabIndex={0} className="z-10 absolute layer w-full h-full "></div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
