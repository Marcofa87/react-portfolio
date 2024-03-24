// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traduzioni
const resources = {
  debug: true,
  en: {
    translation: {
      greeting: "Hello! I'm",
      name: "Marco Falasca",
      role: "Front-End Developer",
      about:
        "I'm studying Front-End Web development since 2 Years, feel free to contact me if you're interested!",
      welcome:
        " Welcome to my corner of the web! I'm a passionate junior front-end developer with hands-on experience in crafting dynamic web applications using React and Angular, with a good knowledge in the field of application development and a strong motivation to grow professionally in the role. I can rely on good organizational skills and time management. I can easily adapt to new work environments thanks to their teamwork spirit and excellent listening and communication skills.",
      skills:
        "In my journey as a developer, I've honed my skills in HTML, CSS, and JavaScript, always pushing the boundaries of what's possible in web development. Whether it's building responsive layouts, or integrating APIs.",
      motivation:
        "Beyond coding, I'm a continual learner, always eager to explore new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape. Collaborative by nature, I thrive in team environments where ideas flow freely and innovation is encouraged.",
      explore:
        "Explore my portfolio to see some of the projects I've brought to life, and feel free to reach out—I'm always up for new challenges and opportunities to contribute to exciting projects.",
    },
  },
  it: {
    translation: {
      greeting: "Ciao! Sono",
      name: "Marco Falasca",
      role: "Sviluppatore Front-End",
      about:
        "Studio lo sviluppo Web Front-End da 2 anni, sentiti libero di contattarmi se sei interessato!",
      welcome:
        " Benvenuti nel mio angolo del web! Sono un appassionato sviluppatore front-end junior con esperienza pratica nella creazione di applicazioni web dinamiche utilizzando React e Angular, con una buona conoscenza nel campo dello sviluppo delle applicazioni e una forte motivazione a crescere professionalmente nel ruolo. Posso contare su buone capacità organizzative e gestione del tempo. Posso adattarmi facilmente a nuovi ambienti di lavoro grazie al loro spirito di squadra e alle eccellenti capacità di ascolto e comunicazione.",
      skills:
        "Nel mio percorso come sviluppatore, ho affinato le mie competenze in HTML, CSS e JavaScript, spingendo sempre i limiti di ciò che è possibile nello sviluppo web. Che si tratti di costruire layout responsive o integrare API.",
      motivation:
        "Oltre alla codifica, sono sempre desideroso di esplorare nuove tecnologie e metodologie per rimanere al passo con il panorama tecnologico in continua evoluzione. Collaborativo per natura, prospero in ambienti di squadra dove le idee fluiscono liberamente e l'innovazione è incoraggiata.",
      explore:
        "Esplora il mio portfolio per vedere alcuni dei progetti che ho portato alla vita e sentiti libero di contattarmi: sono sempre pronto per nuove sfide e opportunità di contribuire a progetti interessanti.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Lingua predefinita
  fallbackLng: "english", // Lingua di fallback
  interpolation: {
    escapeValue: false, // react già escapea tutto
  },
});

export default i18n;
