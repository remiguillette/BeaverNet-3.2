export type Language = "fr" | "en";

export const resources = {
  en: {
    footer: {
      brand: {
        logoAlt: "Stylized beaver logo for Rémi Guillette Group",
        remi: "Rémi",
        guillette: "Guillette",
        group: "Group",
      },
      links: {
        privacyPolicy: "Privacy Policy",
        contactButton: "Contact Us",
      },
      contact: {
        title: "Contact",
        line1: "6388 Hawkins Street",
        line2: "Apt. 307",
        line3: "Niagara Falls, Ontario",
        line4: "L2G 1P3",
        phoneLabel: "Phone",
      },
      social: {
        title: "Suivez-nous / Follow Us",
      },
      aria: {
        companyIdentity: "Company identity",
        footerNav: "Footer navigation links",
        registrations: "Business registrations",
      },
      registration: {
        ontarioFr: "Enregistrement Ontario",
        ontarioEn: "Ontario Registration",
        canadaFr: "Enregistrement Canada",
        canadaEn: "Canada Registration",
      },
    },
    home: {
      hero: {
        titleLead: "Innovative",
        titleAccent: "solutions for your business",
        description:
          "Specializing in business services, the Rémi Guillette Group offers a range of solutions tailored to your needs.",
      },
      sectors: {
        title: "Business sectors",
        viewAriaPrefix: "View",
        items: {
          publicSafety: "Public safety consulting",
          francophoneServices: "Francophone community services",
          healthSafety: "Workplace health and safety services",
          animalFirstAid: "Animal first aid services",
        },
      },
    },
    servicePage: {
      sections: {
        services: "Our services",
        legalAnimalServices: "Notice to the Public",
      },
      services: {
        publicSafety: {
          pageTitle: "Public safety consulting",
          intro:
            "We support public and private organizations with risk analysis, compliance, and sustainable strategy implementation.",
          cards: [
            {
              title: "Risk assessment",
              description:
                "Procedure audits, vulnerability identification, and prioritization of corrective actions.",
            },
            {
              title: "Response plans",
              description:
                "Design of emergency plans, incident scenarios, and crisis communication protocols.",
            },
            {
              title: "Team training",
              description:
                "Hands-on workshops to improve operational reflexes and cross-team coordination.",
            },
          ],
          lists: [
            {
              title: "Examples of interventions",
              items: [
                "Safety diagnostics for institutional sites",
                "Internal policy reviews",
                "Crisis management support",
              ],
            },
          ],
          legalText:
            "Consulting services are delivered under a written mandate, in compliance with the laws and regulations applicable to the client's industry.",
        },
        francophoneServices: {
          pageTitle: "Francophone community services",
          intro:
            "We support Ontario's Francophone communities with services adapted to their local, social, and cultural realities.",
          cards: [
            {
              title: "Personalized support",
              description:
                "Guidance toward the right resources based on health, employment, education, and integration needs.",
            },
            {
              title: "Community facilitation",
              description:
                "Organization of activities, support groups, and initiatives that encourage civic participation.",
            },
            {
              title: "Support for organizations",
              description:
                "Strategic consulting to structure services and increase the impact of community actions.",
            },
          ],
          lists: [
            {
              title: "Client groups served",
              items: [
                "Newcomers",
                "Families and caregivers",
                "Seniors in minority Francophone communities",
              ],
            },
          ],
          legalText:
            "Community interventions comply with personal information confidentiality requirements and current professional ethics standards.",
        },
        healthSafety: {
          pageTitle: "Workplace health and safety services",
          intro:
            "We help employers build safer workplaces with a preventive approach aligned with regulatory obligations.",
          cards: [
            {
              title: "Prevention program",
              description:
                "Implementation of prevention tools, OHS dashboards, and continuous improvement routines.",
            },
            {
              title: "Regulatory compliance",
              description:
                "Support to align internal practices with provincial and sector-specific requirements.",
            },
            {
              title: "Incident investigations",
              description:
                "Root-cause analysis, recommendations, and follow-up on corrective action implementation.",
            },
          ],
          lists: [
            {
              title: "Possible deliverables",
              items: [
                "OHS policies and procedures",
                "Employee training records",
                "Annual prevention plan",
              ],
            },
          ],
          legalText:
            "OHS recommendations remain subject to employer validation and obligations under applicable labour legislation.",
        },
        animalFirstAid: {
          pageTitle: "Animal First Aid Services",
          intro:
            "Rémi Guillette, RG Groupe, and Rémi Guillette Consulting are entities specializing in public safety, disaster management, and business continuity.",
          cards: [
            {
              title: "Nature of Services",
              description:
                "The animal services offered fall exclusively within this operational framework and are intended to provide support during emergency responses, planned events, or exceptional situations.",
            },
            {
              title: "No Veterinary Services",
              description:
                "Our organizations are not veterinary clinics and do not offer veterinary medicine services.",
            },
            {
              title: "Professional Compliance",
              description:
                "Our staff are not registered professionals with the College of Veterinarians of Ontario and do not perform any acts reserved under applicable regulations.",
            },
            {
              title: "Scope of Interventions",
              description:
                "These activities are carried out under contract, notably with institutional partners (e.g., SPCA), municipalities, or government agencies.",
            },
            {
              title: "Training and Skills",
              description:
                "Service providers hold recognized training, including Canadian Red Cross certifications in animal first aid.",
            },
            {
              title: "Access Restrictions",
              description:
                "The services described are offered exclusively on a contractual basis (B2B/institutional). No services are offered to the public or upon individual request.",
            },
          ],
          lists: [
            {
              title: "Interventions may include, but are not limited to:",
              items: [
                "Basic stabilization and emergency first aid (including animal CPR)",
                "Operational support during incidents or disasters",
                "Logistical coordination in evacuation or recovery situations",
              ],
            },
          ],
          legalText:
            "For any emergency, medical situation, or concern regarding an animal, it is imperative to contact a licensed veterinarian or veterinary clinic.",
        },
      },
    },
    header: {
      brand: {
        homeAria: "Home - Rémi Guillette Group",
        logoAlt: "Stylized illustration of an orange beaver representing the company's visual identity",
        remi: "Rémi",
        guillette: "Guillette",
        groupFr: "Groupe",
        groupEn: "Group",
        businessInfo: "Rémi Guillette Groupe Group is a bilingual Ontario business brand.",
      },
      nav: {
        mainAria: "Main menu",
        ontarioPride: "Proud of Ontario",
        languageToggleAria: "Change language to French",
        languageToggleLabel: "EN",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Reach out to us and we will respond as soon as possible.",
      info: "Contact information",
      address: "Ontario, Canada",
      phone: "+1 (555) 123-4567",
      email: "contact@example.com",
      hours: "Hours",
      hoursLine1: "24/7 all year",
      hoursLine2: "Available anytime",
      form: {
        title: "Send us a message",
        firstName: "First Name",
        firstNamePlaceholder: "First name",
        lastName: "Last Name",
        lastNamePlaceholder: "Last name",
        email: "Email Address",
        emailPlaceholder: "you@email.com",
        service: "Service of Interest",
        selectService: "Select a service",
        message: "Message",
        messagePlaceholder: "How can we help you?",
        securityNote: "Enhanced abuse protection enabled",
        submitting: "Sending...",
        submit: "Submit",
        successMessage: "Your message was sent successfully.",
        errorMessage: "An error occurred while sending your message.",
        discord: {
          title: "New contact form submission",
        },
        services: {
          publicSafety: "Public Safety",
          francophone: "Francophone Services",
          healthSafety: "Health & Safety",
          animalAid: "Animal First Aid",
        },
        validation: {
          tooFast: "Please take a moment before submitting the form.",
          required: "Please fill in all required fields.",
          invalidEmail: "Please enter a valid email address.",
          messageMin: "Message must be at least 10 characters.",
          messageMax: "Message must not exceed 2000 characters.",
        },
      },
    },
  },
  fr: {
    footer: {
      brand: {
        logoAlt: "Logo castor stylisé du Groupe Rémi Guillette",
        remi: "Rémi",
        guillette: "Guillette",
        group: "Groupe",
      },
      links: {
        privacyPolicy: "Politique de confidentialité",
        contactButton: "Contactez-nous",
      },
      contact: {
        title: "Contact",
        line1: "6388 Hawkins Street",
        line2: "Apt. 307",
        line3: "Niagara Falls, Ontario",
        line4: "L2G 1P3",
        phoneLabel: "Téléphone",
      },
      social: {
        title: "Suivez-nous / Follow Us",
      },
      aria: {
        companyIdentity: "Identité de l’entreprise",
        footerNav: "Liens de navigation du pied de page",
        registrations: "Enregistrements de l’entreprise",
      },
      registration: {
        ontarioFr: "Enregistrement Ontario",
        ontarioEn: "Ontario Registration",
        canadaFr: "Enregistrement Canada",
        canadaEn: "Canada Registration",
      },
    },
    home: {
      hero: {
        titleLead: "Solutions",
        titleAccent: "innovantes pour votre entreprise",
        description:
          "Spécialiste en services d'entreprise, le Groupe Rémi Guillette offre une gamme de solutions adaptées à vos besoins.",
      },
      sectors: {
        title: "Secteurs d'activité",
        viewAriaPrefix: "Voir",
        items: {
          publicSafety: "Cabinet-conseil en sécurité publique",
          francophoneServices: "Services communautaires francophones",
          healthSafety: "Services en santé et sécurité au travail (SST)",
          animalFirstAid: "Services de premiers soins animaliers",
        },
      },
    },
    servicePage: {
      sections: {
        services: "Nos services",
        legalAnimalServices: "Avis au public",
      },
      services: {
        publicSafety: {
          pageTitle: "Cabinet-conseil en sécurité publique",
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
        francophoneServices: {
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
        healthSafety: {
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
        animalFirstAid: {
          pageTitle: "Services de premiers soins animaliers",
          intro:
            "Rémi Guillette, RG Groupe et Rémi Guillette Consulting sont des entités spécialisées en sécurité publique, gestion des catastrophes et continuité des activités.",
          cards: [
            {
              title: "Nature des services",
              description:
                "Les services animaliers offerts s'inscrivent exclusivement dans ce cadre opérationnel et visent à fournir un soutien lors de réponses d'urgence, d'événements planifiés ou de situations exceptionnelles.",
            },
            {
              title: "Aucun service vétérinaire",
              description:
                "Nos organisations ne sont pas des cliniques vétérinaires et n'offrent pas de services de médecine vétérinaire.",
            },
            {
              title: "Conformité professionnelle",
              description:
                "Notre personnel n'est pas composé de professionnels inscrits à l'Ordre des vétérinaires de l'Ontario et n'exécute aucun acte réservé en vertu des règlements applicables.",
            },
            {
              title: "Portée des interventions",
              description:
                "Ces activités sont réalisées sous contrat, notamment avec des partenaires institutionnels (ex. SPA/SPCA), des municipalités ou des organismes gouvernementaux.",
            },
            {
              title: "Formation et compétences",
              description:
                "Les intervenants détiennent des formations reconnues, incluant des certifications de la Croix-Rouge canadienne en premiers soins animaliers.",
            },
            {
              title: "Restrictions d'accès",
              description:
                "Les services décrits sont offerts exclusivement sur une base contractuelle (B2B/institutionnelle). Aucun service n'est offert au public ni sur demande individuelle.",
            },
          ],
          lists: [
            {
              title: "Les interventions peuvent inclure, sans s'y limiter :",
              items: [
                "Stabilisation de base et premiers soins d'urgence (incluant la RCR animale)",
                "Soutien opérationnel lors d'incidents ou de catastrophes",
                "Coordination logistique en situation d'évacuation ou de rétablissement",
              ],
            },
          ],
          legalText:
            "Pour toute urgence, situation médicale ou inquiétude concernant un animal, il est impératif de contacter un vétérinaire autorisé ou une clinique vétérinaire.",
        },
      },
    },
    header: {
      brand: {
        homeAria: "Accueil - Groupe Rémi Guillette",
        logoAlt: "Illustration stylisée d'un castor orange représentant l'identité visuelle de l'entreprise",
        remi: "Rémi",
        guillette: "Guillette",
        groupFr: "Groupe",
        groupEn: "Group",
        businessInfo: "Rémi Guillette Groupe Group est une marque d'affaires bilingue de l'Ontario.",
      },
      nav: {
        mainAria: "Menu principal",
        ontarioPride: "Fier de l'Ontario",
        languageToggleAria: "Changer la langue en anglais",
        languageToggleLabel: "FR",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Écrivez-nous et nous vous répondrons dès que possible.",
      info: "Informations de contact",
      address: "Ontario, Canada",
      phone: "+1 (555) 123-4567",
      email: "contact@example.com",
      hours: "Heures",
      hoursLine1: "24 h/24, 7 j/7",
      hoursLine2: "Disponibles en tout temps",
      form: {
        title: "Envoyez-nous un message",
        firstName: "Prénom",
        firstNamePlaceholder: "Prénom",
        lastName: "Nom",
        lastNamePlaceholder: "Nom",
        email: "Adresse courriel",
        emailPlaceholder: "vous@courriel.com",
        service: "Service d’intérêt",
        selectService: "Sélectionnez un service",
        message: "Message",
        messagePlaceholder: "Comment pouvons-nous vous aider?",
        securityNote: "Protection anti-abus renforcée activée",
        submitting: "Envoi en cours...",
        submit: "Envoyer",
        successMessage: "Votre message a été envoyé avec succès.",
        errorMessage: "Une erreur est survenue lors de l’envoi de votre message.",
        discord: {
          title: "Nouvelle soumission du formulaire de contact",
        },
        services: {
          publicSafety: "Sécurité publique",
          francophone: "Services francophones",
          healthSafety: "Santé et sécurité",
          animalAid: "Premiers soins animaliers",
        },
        validation: {
          tooFast: "Veuillez patienter un moment avant d’envoyer le formulaire.",
          required: "Veuillez remplir tous les champs obligatoires.",
          invalidEmail: "Veuillez entrer une adresse courriel valide.",
          messageMin: "Le message doit contenir au moins 10 caractères.",
          messageMax: "Le message ne doit pas dépasser 2000 caractères.",
        },
      },
    },
  },
} as const;

export type TranslationResources = typeof resources;
