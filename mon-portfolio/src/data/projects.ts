export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion des Personnels",
    period: "2024",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    summary:
      "Application web de gestion des employés : ajout, modification, suppression et affichage des informations du personnel.",
    repo: "",
  },
  {
    title: "Gestion Coopérative Agricole",
    period: "2024",
    tags: ["Java", "Java Swing", "MySQL"],
    summary:
      "Application desktop pour la gestion d'une coopérative agricole : adhérents, productions, stocks et rapports.",
    repo: "",
  },
  {
    title: "Gestion de Stock",
    period: "2024",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    summary:
      "Système de gestion de stock complet : suivi des entrées/sorties, alertes de rupture et tableau de bord.",
    repo: "",
  },
  {
    title: "Gestion des Visites Médicales à Domicile",
    period: "2025",
    tags: ["Spring Boot", "React", "MySQL", "Axios", "REST API"],
    summary:
      "Plateforme complète de gestion des visites médicales à domicile : planification, suivi des patients, historique et gestion des médecins.",
    repo: "",
  },
  {
    title: "Portfolio Personnel",
    period: "2025",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    summary:
      "Ce portfolio développé avec React et TypeScript pour présenter mes projets, formations et certifications.",
    repo: "",
  },
];
