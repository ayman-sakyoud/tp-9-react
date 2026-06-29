export type Experience = {
  title: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end?: string;
  description: string;
  tasks: string[];
  tags: string[];
  image?: string;
};

export const experiences: Experience[] = [
  {
    title: "Stage d'Initiation",
    company: "Hôtel Royal Mansour Marrakech",
    location: "Marrakech, Maroc",
    type: "Stage",
    start: "2023",
    end: "2023",
    description:
      "Stage d'initiation au sein du département informatique de l'Hôtel Royal Mansour Marrakech.",
    tasks: [
      "Tests et validation des tablettes de réservation utilisées par les clients",
      "Maintenance préventive et corrective du matériel informatique",
      "Assistance technique aux équipes de l'hôtel",
      "Diagnostic et résolution de pannes sur les équipements",
    ],
    tags: ["Maintenance", "Réseaux", "Support technique", "Tablettes"],
  },
  {
    title: "Stagiaire Développeur",
    company: "Evoltec",
    location: "Marrakech, Maroc",
    type: "Stage",
    start: "2024",
    end: "2025",
    description:
      "Stage au sein d'Evoltec, société de maintenance informatique. Développement d'une application de gestion des ressources humaines.",
    tasks: [
      "Développement d'une application de gestion du personnel",
      "Module de gestion des congés et absences",
      "Module de calcul et suivi des salaires",
      "Conception de la base de données et des interfaces utilisateur",
    ],
    tags: ["Gestion RH", "Développement", "Base de données", "Informatique"],
  },
];
