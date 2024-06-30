import { TechIconInterface, icons } from "../../../../utils/icons/texh-icons";

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  github: string;
  icons?: ((props: TechIconInterface) => JSX.Element)[];
}

export const trabalhoIcons = [
  {
    icons: [
      icons.IconReact,
      icons.IconRedux,
      icons.IconTailwindcss,
      icons.IconStripe,
    ],
  },
  {
    icons: [icons.IconJavascript, icons.IconHtml5, icons.IconSass],
  },
  {
    icons: [
      icons.IconGoogle,
      icons.IconNestjs,
      icons.IconExpress,
      icons.IconSwagger,
    ],
  },
  {
    icons: [
      icons.IconNestjs,
      icons.IconMongodb,
      icons.IconExpress,
      icons.IconSwagger,
    ],
  },
  {
    icons: [icons.IconJavascript, icons.IconHtml5, icons.IconCss3],
  },
];
