import "./projects.css";
import { icons } from "../../../utils/icons/tech-icons";
import { NewWindowIcon } from "../../../utils/icons/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import { Project, trabalhoIcons } from "./utils/content";

export function Trabalhos() {
  interface ProjectsTranslations {
    header: {
      main_header: string;
      sub_header: string;
    };
    projects: {
      link_text: string
      cards: Project[]
    };
  }

  const { t } = useTranslation("global");
  const projectsTranslations = t("main.projects", {
    returnObjects: true,
  }) as ProjectsTranslations;

  for(let project in projectsTranslations.projects.cards) {
    const projects = projectsTranslations.projects.cards
    projectsTranslations.projects.cards[project].icons = trabalhoIcons[projects.indexOf(projects[project])].icons
  }

  return (
    <section
      id="trabalhos"
      className="py-32 bg-base-100 w-full flex justify-center"
    >
      <div className="text-left flex flex-col items-center mx-auto w-[90%]">
        <div className="flex justify-between w-[90%] items-end">
          <div className="text-center sm:text-left mx-auto sm:m-0">
            <h1 className="text-accent uppercase text-xs md:text-sm tracking-widest font-mono md:text-base">
              --- {projectsTranslations.header.main_header}
            </h1>
            <h2 className="text-lg md:text-xl">
              {projectsTranslations.header.sub_header}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center lg:justify-between pt-4 w-full">
          {projectsTranslations.projects.cards.map((trabalho, i) => {
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
                    <LazyLoadImage
                      src={trabalho.thumbnail}
                      placeholder={<div className="skeleton"></div>}
                      width={"100%"}
                      height={"100%"}
                      alt={trabalho.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="bottom-0 w-full p-3 pt-0">
                    <h1 className="md:text-lg  cursor-default mt-5">
                      {trabalho.title}
                    </h1>
                    <div className="flex mt-2 justify-between">
                      <div className="flex items-center gap-2">
                        {trabalho.icons?.map((Icon, i) => {
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
                          {projectsTranslations.projects.link_text}
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
