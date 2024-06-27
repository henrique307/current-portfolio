import "./header.css";
import { Logo } from "../../utils/logo";
import { Settings, Themes } from "../../utils/icons/icons";
import { useState } from "react";
import { suportedLanguages } from "./utils/suportedLanguages";

export function HeaderComponent() {
  const [language, setLanguage] = useState(suportedLanguages[0]);

  interface NavItem {
    nome: string;
    link: string;
  }

  const navItems: NavItem[] = [
    {
      nome: "Quem sou eu",
      link: "#eu",
    },
    {
      nome: "Serviços",
      link: "#servicos",
    },
    {
      nome: "Trabalhos",
      link: "#trabalhos",
    },
    {
      nome: "Testemunhos",
      link: "#testemunhos",
    },
    {
      nome: "Trabalhe comigo",
      link: "#action",
    },
  ];
  return (
    <section className="z-20 drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar pt-4 p-5 fixed bg-base-300">
          <div className="flex w-[90%] mx-auto justify-between relative">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="lg:right-0 lg:translate-x-0 lg:relative absolute right-[50%] translate-x-[50%]">
              <Logo className="text-xl" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navItems.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href={item.link}>{item.nome}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 bg-base-300">
                <Settings className="bg-base-300" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content gap-2 menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
              >
                <Themes className="w-1/2 mx-auto aspect-square" />
                <div className="dropdown dropdown-left w-2/3">
                  <div  className="btn hover:none px-0 bg-transparent border-transparent m-0 text-center text-lg cursor-pointer font-bold aspect-square">
                    {language}
                  </div>
                  <ul
                    tabIndex={1}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {suportedLanguages.map((lang) => {
                      return (
                        <li>
                          <a>{lang}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Logo className="p-5 text-xl" />
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link}>{item.nome}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
