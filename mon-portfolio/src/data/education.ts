export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences de Marrakech (FST)",
    degree: "Licence",
    field: "Informatique",
    location: "Maroc",
    start: "2025-09",
    end: "2026-07",
    courses: [
      "Développement Web",
      "React",
      "Bases de données",
      "Java",
      "Python",
    ],
    highlights: [
      "Année actuelle : Licence en Informatique",
      "Projets web et applications interactives",
      "Travaux pratiques en développement logiciel",
      "Modélisation et conception de systèmes informatiques",
    ],
  },
  {
    school: "Groupe mouik marrakech",
    degree: "DTS",
    field: "Informatique",
    location: "Maroc",
    start: "2021-09",
    end: "2022-07",
    courses: [
      "Algorithmique",
      "Programmation orientée objet",
      "Bases de données",
      "Développement Web",
      "UML",
    ],
    highlights: ["Obtention du DEUG en 2024/2025"],
  },
  {
    school: "Lycée",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Maroc",
    start: "2020-09",
    end: "2021-07",
    courses: ["Physique", "Chimie", "Mathématiques"],
    highlights: ["Obtention du baccalauréat en 2022/2023"],
  },
];
