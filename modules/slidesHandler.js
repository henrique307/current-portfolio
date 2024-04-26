export function projectsSlideHandler() {
  const slideList = document.querySelector("section.projetos section div ul");
  const projects = [
    {
      name: "Hevor travels",
      title: "Hevor Travels - website de viagens",
      thumbnail: "assets/hevor.png",
      description: "Site para agencia de viagens, site possui design responsivo e foi elaborado visando a melhor experiencia possível do usuário",
      link: "https://henrique307.github.io/travels-website",
      github: "https://github.com/henrique307/travels-website",
      icons: [
        '<i class="devicon-javascript-plain" alt="Javascript" title="Javascript"></i>',
        '<i class="devicon-html5-plain-wordmark" alt="HTML" title="HTML"></i>',
        '<i class="devicon-sass-original" alt="SASS CSS" title="SASS CSS"></i>'
      ]
    },
    {
      name: "confeitaria",
      title: "Site para confeitaria",
      thumbnail: "assets/bakery.png",
      description: "E-comerce integrado com a API de pagamentos do Stripe, website tem o objetivo de apresentar ao cliente com beleza e concisão seus produtos e preços",
      link: "https://henrique307.github.io/bakery-website",
      github: "https://github.com/henrique307/bakery-website",
      icons: [
        '<i class="devicon-react-original-wordmark" alt="ReactJS" title="ReactJS"></i>',
        '<i class="devicon-redux-original" alt="Redux" title="Redux"></i>',
        '<i class="devicon-tailwindcss-original" alt="Tailwind CSS" title="Tailwind CSS"></i>',
        '<i class="stripe" alt="Stripe" title="Stripe">Stripe</i>'
      ]
    },
    {
      name: "Petshop API",
      title: "REST API para Petshop",
      thumbnail: "assets/petshop_api.png",
      description: "API REST construida com NestJS (Framework que facilita a criação de API's Express de forma rápida e organizada) com atenticação JWT usando MongoDB como base de dados",
      link: "https://portfolioapi-production.up.railway.app/api/swagger",
      github: "https://github.com/henrique307/api-sheets",
      icons: [
        '<i class="devicon-nestjs-original" alt="NestJS" title="NestJS"></i>',
        '<i class="devicon-mongodb-plain-wordmark" alt="MongoDB" title="MongoDB"></i>',
        '<i class="devicon-express-original" alt="Express" title="Express"></i>',
        '<i class="devicon-swagger-plain" alt="Swagger" title="Swagger"></i>'
      ]
    },
    {
      name: "API sheets",
      title: "API integrada ao google sheets",
      thumbnail: "assets/api.png",
      description: "API integrada com o google sheets, que executa todas as operações CRUD necessárias para fazer integração com uma aplicação de sua escolha! ",
      link: "https://portfolioapi-production.up.railway.app/api/swagger",
      github: "https://github.com/henrique307/api-sheets",
      icons: [
        '<i class="devicon-google-plain" alt="Google APIs" title="Google APIs"></i>',
        '<i class="devicon-nestjs-original" alt="NestJS" title="NestJS"></i>',
        '<i class="devicon-express-original" alt="Express" title="Express"></i>',
        '<i class="devicon-swagger-plain" alt="Swagger" title="Swagger"></i>'
      ]
    },
    {
      name: "muay-thai",
      title: "Site para academia",
      thumbnail: "assets/fight.png",
      description: "Site para uma academia de Muay Thai, com design moderno e responsivo visando informar o cliente sobre os maiores beneficios e sobre a cultura do esporte!",
      link: "https://henrique307.github.io/santa-cruz-fight-club",
      github: "https://github.com/henrique307/santa-cruz-fight-club",
      icons: [
        '<i class="devicon-javascript-plain" alt="Javascript" title="Javascript"></i>',
        '<i class="devicon-html5-plain-wordmark" alt="HTML" title="HTML"></i>',
        '<i class="devicon-css3-plain-wordmark" alt="CSS" title="CSS"></i>'
      ]
    },
  ];

  projects.forEach((project) => {
    slideList.innerHTML += (
      `<div class="card  ${project.name} splide__slide">
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

  const splide = new Splide('.projetos-container', {
    type: "loop",
    perPage: 3,
    pagination: false,
    width: "100%",
    padding: "10%",
    gap: "15px",
    breakpoints: {
      1250: {
        perPage: 2,
      },
      750: {
        perPage: 1,
      }
    }

  })

  splide.mount();
}

export function skillsSlideHandler() {
  let index = 1
  const stackList = {
    frontend: {
      elemento: document.querySelector(".habilidade.frontend .splide"),
      stackIcons: [
        '<i class="colored devicon-javascript-plain" alt="Javascript" title="Javascript"></i>',
        '<i class="colored devicon-html5-plain-wordmark" alt="HTML" title="HTML"></i>',
        '<i class="colored devicon-sass-original" alt="SASS CSS" title="SASS CSS"></i>',
        '<i class="colored devicon-css3-plain-wordmark" alt="CSS" title="CSS"></i>',
        '<i class="colored devicon-react-original-wordmark" alt="ReactJS" title="ReactJS"></i>',
        '<i class="colored devicon-redux-original" alt="Redux" title="Redux"></i>',
        '<i class="colored devicon-tailwindcss-original" alt="Tailwind CSS" title="Tailwind CSS"></i>',
        '<i class="devicon-wordpress-plain-wordmark"></i>',
      ],
    },
    backend: {
      elemento: document.querySelector(".habilidade.backend .splide"),
      stackIcons: [
        '<i class="colored devicon-nestjs-original" alt="NestJS" title="NestJS"></i>',
        '<i class="colored devicon-mongodb-plain-wordmark" alt="MongoDB" title="MongoDB"></i>',
        '<i class="express" alt="Express" title="Express">Express</i>',
        '<i class="colored devicon-swagger-plain" alt="Swagger" title="Swagger"></i>',
        '<i class="devicon-mysql-plain-wordmark colored"></i>',
      ],
    },
    ferramentas: {
      elemento: document.querySelector(".habilidade.ferramentas .splide"),
      stackIcons: [
        '<i class="colored devicon-google-plain" alt="Google APIs" title="Google APIs"></i>',
        '<i class="stripe" alt="Stripe" title="Stripe">Stripe</i>',
        '<i class="devicon-docker-plain-wordmark colored"></i>',
        '<i class="devicon-amazonwebservices-plain-wordmark colored"></i>',
        '<i class="devicon-heroku-plain-wordmark colored"></i>',
        '<i class="devicon-vercel-original-wordmark"></i>',
      ],
    },
  }

  for(const stack in stackList) {
    const splideList = stackList[stack].elemento.querySelector(".splide__list")

    stackList[stack].stackIcons.forEach(icon => {
      splideList.innerHTML += `<a class="habilidades-icon-container splide__slide">${icon}</a>`
    })

    new Splide(stackList[stack].elemento, {
      type: "loop",
      autoplay: true,
      interval: 1800 + (index * 100), 
      perPage: 1,
      pagination: false,
      arrows: false,
    }).mount()

    index++
  }

}