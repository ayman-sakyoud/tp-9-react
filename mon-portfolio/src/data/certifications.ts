export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  certificateFile?: string; // chemin vers le PDF dans /public/certifications/
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title:
      "Certification Professionnelle — Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    issueDate: "2025-02",
    credentialUrl: "https://mliaedu.toubkalit.com/attestations",
    certificateFile: "/certifications/java-fondamentaux.pdf",
    skills: [
      "Java",
      "POO",
      "Gestion d'erreurs",
      "Collections",
      "Multithreading",
      "Tests Unitaires",
    ],
    tags: ["Java", "Programmation"],
    image: "https://mliaedu.toubkalit.com/favicon.ico",
    imageAlt: "Logo MLIAEdu",
    status: "active",
  },
  {
    title:
      "Certification Professionnelle — Java Avancée : Bases de Données, Réseau, Concurrence et Interfaces",
    issuer: "MLIAEdu",
    issueDate: "2025-04",
    credentialUrl: "https://mliaedu.toubkalit.com/attestations",
    certificateFile: "/certifications/java-avancee.pdf",
    skills: ["Java", "Bases de Données", "Réseau", "Concurrence", "Interfaces"],
    tags: ["Java", "Programmation"],
    image: "https://mliaedu.toubkalit.com/favicon.ico",
    imageAlt: "Logo MLIAEdu",
    status: "active",
  },
  {
    title: "Certification Professionnelle — JavaScript Moderne",
    issuer: "MLIAEdu",
    issueDate: "2025-08",
    credentialUrl: "https://mliaedu.toubkalit.com/attestations",
    certificateFile: "/certifications/javascript-moderne.pdf",
    skills: ["JavaScript", "ES6+", "DOM", "Async/Await", "Modules"],
    tags: ["JavaScript", "Web"],
    image: "https://mliaedu.toubkalit.com/favicon.ico",
    imageAlt: "Logo MLIAEdu",
    status: "active",
  },
  {
    title: "One Million Prompters",
    issuer: "dub.ia",
    issueDate: "2026-01",
    credentialUrl: "https://mliaedu.toubkalit.com/attestations",
    certificateFile: "/certifications/certif-ia.pdf",
    skills: ["Prompt Engineering", "IA Générative", "ChatGPT", "LLM"],
    tags: ["IA", "Prompt"],
    image: "/certifications/logo-one-milion_edited.png",
    imageAlt: "Logo One Million Prompters",
    status: "active",
  },
  {
    title: "Certification Professionnelle — Développement JakartaEE & Spring",
    issuer: "MLIAEdu",
    issueDate: "2025-10",
    credentialUrl: "https://mliaedu.toubkalit.com/attestations",
    certificateFile: "/certifications/jakartaee-spring.pdf",
    skills: ["JakartaEE", "Spring", "REST", "Hibernate"],
    tags: ["Java", "Backend"],
    image: "https://mliaedu.toubkalit.com/favicon.ico",
    imageAlt: "Logo MLIAEdu",
    status: "active",
  },
];
