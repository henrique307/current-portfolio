import { action } from "./modules/action.js";
import { starsHandler } from "./modules/allTheStars.js";
import { circlesHandler } from "./modules/circles.js"
import { slidesHandler } from "./modules/slidesHandler.js";

//STARS
  
starsHandler()

// CIRCLES

circlesHandler(5);

// SLIDES

slidesHandler();

// Action

action()