import { title } from "process";
import React from "react";

export interface TechIconInterface {
  className?: string;
  colored?: boolean;
}
export const icons = {
  IconJavascript(props: TechIconInterface) {
    return <i className={`${props.className} devicon-javascript-plain ${props.colored && "colored"}`} title="Javascript"></i>;
  },
  
  IconHtml5(props: TechIconInterface) {
    return <i className={`${props.className} devicon-html5-plain ${props.colored && "colored"}`} title="HTML"></i>;
  },
  
  IconSass(props: TechIconInterface) {
    return <i className={`${props.className} devicon-sass-original ${props.colored && "colored"}`} title="SASS CSS"></i>;
  },
  
  IconCss3(props: TechIconInterface) {
    return <i className={`${props.className} devicon-css3-plain ${props.colored && "colored"}`} title="CSS"></i>;
  },
  
  IconReact(props: TechIconInterface) {
    return <i className={`${props.className} devicon-react-original ${props.colored && "colored"}`} title="ReactJS"></i>;
  },
  
  IconRedux(props: TechIconInterface) {
    return <i className={`${props.className} devicon-redux-original ${props.colored && "colored"}`} title="Redux"></i>;
  },
  
  IconTailwindcss(props: TechIconInterface) {
    return <i className={`${props.className} devicon-tailwindcss-original ${props.colored && "colored"}`} title="Tailwind CSS"></i>
  },
  
  IconWordpress(props: TechIconInterface) {
    return <i className={`${props.className} devicon-wordpress-plain ${props.colored && "colored"}`} title="Wordpress"></i>;
  },
  
  IconNestjs(props: TechIconInterface) {
    return <i className={`${props.className} devicon-nestjs-original ${props.colored && "colored"}`} title="NestJS"></i>;
  },
  
  IconMongodb(props: TechIconInterface) {
    return <i className={`${props.className} devicon-mongodb-plain ${props.colored && "colored"}`} title="MongoDB"></i>;
  },
  
  IconExpress(props: TechIconInterface) {
    return <i className={`${props.className} devicon-express-original ${props.colored && "colored"} font-bold`} title="Express"></i>
  },
  
  IconSwagger(props: TechIconInterface) {
    return <i className={`${props.className} devicon-swagger-plain ${props.colored && "colored"}`} title="Swagger"></i>;
  },
  
  IconMysql(props: TechIconInterface) {
    return <i className={`${props.className} devicon-mysql-plain ${props.colored && "colored"}`} title="Mysql"></i>;
  },
  
  IconGoogle(props: TechIconInterface) {
    return <i className={`${props.className} devicon-google-plain ${props.colored && "colored"}`} title="Google APIs"></i>;
  },
  
  IconStripe(props: TechIconInterface) {
    return <i className={`${props.className} text-base`} title="Stripe">Stripe</i>;
  },
  
  IconDocker(props: TechIconInterface) {
    return <i className={`${props.className} devicon-docker-plain ${props.colored && "colored"}`} title="Docker"></i>;
  },
  
  IconAmazonWebServices(props: TechIconInterface) {
    return <i className={`${props.className} devicon-amazonwebservices-plain ${props.colored && "colored"}`} title="AmazonWebServices"></i>;
  },
  
  IconHeroku(props: TechIconInterface) {
    return <i className={`${props.className} devicon-heroku-plain ${props.colored && "colored"}`} title="Heroku"></i>;
  },
  
  IconVercel(props: TechIconInterface) {
    return <i className={`${props.className} devicon-vercel-original ${props.colored && "colored"}`} title="Vercel"></i>;
  },

  IconGithub(props: TechIconInterface) {
    return <i className={`${props.className} devicon-github-original ${props.colored && "colored"}`} title="github"></i>;
  },
}