export function slidesHandler() {
  const lastScreenSizeLayout = 600
  const projetosGrid = document.querySelector(".projetos-grid")
  const projetosContainer = document.querySelector(".projetos-container")
  const projetos = document.querySelector("div.projetos")
  let screenSizeType = window.innerWidth > lastScreenSizeLayout ? 1 : 2;

  const slideList = document.querySelector("section.projetos section div ul");
  const projects = [
    {
      name: "Hevor travels",
      title: "Hevor Travels - website de viagens",
      thumbnail: "../assets/hevor.png",
      description: "Site de uma agencia de viagens feito baseado em um template wordpress, site possui design responsivo e foi elaborado para a melhor experiencia possível do usuário",
      link: "https://henrique307.github.io/travels-website",
      github: "https://github.com/henrique307/travels-website",
      icons: [
        '<i class="devicon-javascript-plain"></i>',
        '<i class="devicon-html5-plain-wordmark"></i>',
        '<i class="devicon-sass-original"></i>'
      ]
    },
    {
      name: "muay-thai",
      title: "Site para academia",
      thumbnail: "../assets/fight.png",
      description: "Site elaborado para uma academia de Muay Thai, com design moderno e responsivo visando informar o cliente sobre os maiores beneficios e sobre a cultura do esporte!",
      link: "https://henrique307.github.io/santa-cruz-fight-club",
      github: "https://github.com/henrique307/santa-cruz-fight-club",
      icons: [
        '<i class="devicon-javascript-plain"></i>',
        '<i class="devicon-html5-plain-wordmark"></i>',
        '<i class="devicon-css3-plain-wordmark"></i>'
      ]
    },
    {
      name: "confeitaria",
      title: "Site para confeitaria",
      thumbnail: "../assets/cakes.png",
      description: "E-comerce de uma confeitaria, website fala sobre a cultura da empresa, um pouco sobre os chefs e mostra seus produtos de forma organizada e concisa.",
      link: "https://henrique307.github.io/cakes-website",
      github: "https://github.com/henrique307/cakes-website",
      icons: [
        '<i class="devicon-react-original-wordmark"></i>',
        '<i class="devicon-css3-plain-wordmark"></i>'
      ]
    },
    {
      name: "API sheets",
      title: "API integrada ao google sheets",
      thumbnail: "../assets/api.png",
      description: "API integrada com o google sheets, que executa todas as operações CRUD necessárias para fazer integração com uma aplicação de sua escolha! ",
      link: "https://portfolioapi-production.up.railway.app/api/swagger",
      github: "https://github.com/henrique307/api-sheets",
      icons: [
        '<i class="devicon-google-plain"></i>',
        '<i class="devicon-nestjs-original"></i>'
      ]
    }
  ];

  projects.forEach((project) => {
    slideList.innerHTML += (
      `<div class="card ${project.name}"> ${/*splide__slide*/""}
          <div class="img-container"'>
            <div></div>
            <img class="card-img" src="${project.thumbnail}" alt="Card image cap">
          </div>
          <div class="card-text-container">
            <h1 class="card-h1">${project.title}</h1>
            <article class="card-description">${project.description}</article>
          </div>
          <div class="icons">
            ${project.icons.map(icon => icon).toString().replace(/,/g, "")}
          </div>
          <div class="card-links">
            <a  target="_blank" class="card-link" href="${project.link}">Preview</a>
            <a  target="_blank" class="card-link" href="${project.github}">
              <i class="devicon-github-original"></i>
            </a>
          </div
        </svg></a>
      </div>`
    )
  });

  const cards = document.querySelectorAll(".card")
  const splide = new Splide('.projetos-container', {
    type: "loop",
    perPage: 1,
    pagination: false,
    width: "100%",
    padding:"10%",
    gap: "15px"
  });

  function defineLayout(screenSizeType) {
    if (screenSizeType === 1) {
      projetosGrid.classList.add("grid")
      projetosGrid.classList.remove("splide__list")
      projetosContainer.classList.remove("splide")
      projetos.classList.remove("splide__track")
      cards.forEach(card => card.classList.remove("splide__slide"))

      splide.destroy(true);
    }
    
    if (screenSizeType === 2) {
      projetosGrid.classList.remove("grid")
      projetosGrid.classList.add("splide__list")
      projetosContainer.classList.add("splide")
      projetos.classList.add("splide__track")
      cards.forEach(card => card.classList.add("splide__slide"))

      splide.mount();
    }
  }

  function newSlide() {
    const currentScreenType = window.innerWidth > lastScreenSizeLayout ? 1 : 2;

    if (screenSizeType === currentScreenType) return;

    else screenSizeType = window.innerWidth > lastScreenSizeLayout ? 1 : 2

    defineLayout(screenSizeType)
  }

  window.addEventListener("resize", newSlide)

  defineLayout(screenSizeType)

}