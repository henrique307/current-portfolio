import React from "react";
import { Intro } from "./intro/intro";
import { Experiencia } from "./experience/experience";
import { Trabalhos } from "./projects/projects";
import { Testimonials } from "./testimonials/testimonials";
import { CallToAction } from "./action/action";

export function MainComponent() {
  return (
    <main>
      <Intro />
      <Experiencia />
      <Trabalhos />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
