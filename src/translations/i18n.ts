import i18next, { InitOptions } from "i18next";
import global_en from "./en.json";
import global_pt from "./pt.json";
import global_es from "./es.json";

const options: InitOptions = {
  lng: "PT",
  lowerCaseLng: true,
  fallbackLng: "PT",
  resources: {
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
    es: {
      global: global_es,
    },
  },
};

i18next.init(options);

export { i18next };
