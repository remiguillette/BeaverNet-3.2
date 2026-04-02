import { HardHat, PawPrint, Shield, User, type LucideIcon } from "lucide-react";

export type ServiceSectionCard = {
  title: string;
  description: string;
};

export type ServiceSectionList = {
  title: string;
  items: string[];
};

export type ServicePageData = {
  key: string;
  path: string;
  homeTitle: string;
  homeIcon: LucideIcon;
  pageTitle: string;
  intro: string;
  cards: ServiceSectionCard[];
  lists: ServiceSectionList[];
  legalText: string;
};

export const servicePages: ServicePageData[] = [
  {
    key: "publicSafety",
    path: "/BeaverPatch",
    homeTitle: "BeaverPatch",
    homeIcon: Shield,
    pageTitle: "BeaverPatch",
    intro:
      "Nous accompagnons les organisations publiques et privées dans l'analyse des risques, la conformité et la mise en place de stratégies durables.",
    cards: [
      {
        title: "Évaluation des risques",
        description:
          "Audit des procédures, identification des vulnérabilités et priorisation des actions correctives.",
      },
      {
        title: "Plans d'intervention",
        description:
          "Conception de plans d'urgence, scénarios d'incident et protocoles de communication de crise.",
      },
      {
        title: "Formation des équipes",
        description:
          "Ateliers pratiques pour améliorer les réflexes opérationnels et la coordination interservices.",
      },
    ],
    lists: [
      {
        title: "Exemples d'interventions",
        items: [
          "Diagnostic sécurité de sites institutionnels",
          "Révision des politiques internes",
          "Accompagnement à la gestion de crise",
        ],
      },
    ],
    legalText:
      "Les services-conseils sont fournis selon un mandat écrit, dans le respect des lois et règlements applicables au secteur d'activité du client.",
  },
  {
    key: "francophoneServices",
    path: "/francophone-services",
    homeTitle: "Services communautaires francophones",
    homeIcon: User,
    pageTitle: "Services communautaires francophones",
    intro:
      "Nous soutenons les communautés francophones de l'Ontario avec des services adaptés à leur réalité locale, sociale et culturelle.",
    cards: [
      {
        title: "Accompagnement personnalisé",
        description:
          "Orientation vers les ressources adéquates selon les besoins en santé, emploi, éducation et intégration.",
      },
      {
        title: "Animation communautaire",
        description:
          "Organisation d'activités, de groupes de soutien et d'initiatives favorisant la participation citoyenne.",
      },
      {
        title: "Appui aux organismes",
        description:
          "Conseil stratégique pour structurer les services et renforcer l'impact des actions communautaires.",
      },
    ],
    lists: [
      {
        title: "Clientèles accompagnées",
        items: [
          "Nouveaux arrivants",
          "Familles et proches aidants",
          "Aînés en milieu francophone minoritaire",
        ],
      },
    ],
    legalText:
      "Les interventions communautaires respectent la confidentialité des informations personnelles et les normes d'éthique professionnelle en vigueur.",
  },
  {
    key: "healthSafety",
    path: "/health-safety",
    homeTitle: "Services en santé et sécurité au travail (SST)",
    homeIcon: HardHat,
    pageTitle: "Services en santé et sécurité au travail (SST)",
    intro:
      "Nous aidons les employeurs à créer des milieux de travail sécuritaires grâce à une approche préventive et conforme aux obligations réglementaires.",
    cards: [
      {
        title: "Programme de prévention",
        description:
          "Mise en place d'outils de prévention, tableaux de bord SST et routines d'amélioration continue.",
      },
      {
        title: "Conformité réglementaire",
        description:
          "Accompagnement pour aligner les pratiques internes avec les exigences provinciales et sectorielles.",
      },
      {
        title: "Enquêtes d'incident",
        description:
          "Analyse des causes, recommandations et suivi de la mise en œuvre des mesures correctives.",
      },
    ],
    lists: [
      {
        title: "Livrables possibles",
        items: [
          "Politiques et procédures SST",
          "Registre de formation des employés",
          "Plan de prévention annuel",
        ],
      },
    ],
    legalText:
      "Les recommandations SST demeurent sujettes à la validation de l'employeur et aux obligations prévues par la législation du travail applicable.",
  },
  {
    key: "animalFirstAid",
    path: "/animal-first-aid",
    homeTitle: "Services de premiers soins animaliers",
    homeIcon: PawPrint,
    pageTitle: "Services de premiers soins animaliers",
    intro:
      "Nous offrons de la formation et de l'accompagnement en premiers soins animaliers pour les milieux professionnels, communautaires et familiaux.",
    cards: [
      {
        title: "Formation pratique",
        description:
          "Ateliers orientés terrain pour réagir rapidement en situation d'urgence animale.",
      },
      {
        title: "Protocoles d'urgence",
        description:
          "Création de guides d'intervention adaptés aux animaux de compagnie et aux environnements de travail.",
      },
      {
        title: "Sensibilisation prévention",
        description:
          "Bonnes pratiques de manipulation, de surveillance et de prévention des blessures courantes.",
      },
    ],
    lists: [
      {
        title: "Publics visés",
        items: [
          "Garderies et pensions animalières",
          "Familles avec animaux domestiques",
          "Intervenants communautaires",
        ],
      },
    ],
    legalText:
      "Les premiers soins animaliers ne remplacent pas une consultation vétérinaire et sont offerts à titre de soutien immédiat avant la prise en charge clinique.",
  },
];

export const servicePagesByKey = servicePages.reduce<Record<string, ServicePageData>>(
  (accumulator, servicePage) => {
    accumulator[servicePage.key] = servicePage;
    return accumulator;
  },
  {},
);
