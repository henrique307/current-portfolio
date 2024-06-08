import "./header.css";
import { Logo } from "../../utils/logo";

export function HeaderComponent() {
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
          <div className="flex lg:w-[90%] lg:mx-auto justify-between">
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
            <div className="lg:right-0 lg:translate-x-0 lg:relative absolute right-[50%] translate-x-1/2 flex-1 px-2 mx-2">
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
