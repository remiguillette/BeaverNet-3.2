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
      address: "6388 Hawkins Street, Apt. 307, Niagara Falls, Ontario L2G 1P3",
      phone: "613-501-2160",
      email: "info@remiguillette.ca",
      hours: "Operating Hours",
      hoursLine1: "24 hours a day, 7 days a week, year-round",
      hoursLine2: "Continuous availability",
      hoursLine3: "Canadian statutory holidays: on-call",
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
    about: {
      title: "About",
      description: "Official website of Rémi Guillette Groupe.",
    },
    notFound: {
      message: "Page not found.",
      homeLink: "Back to home",
    },
    privacyPolicy: {
      hero: {
        titleLead: "Privacy",
        titleAccent: "Policy",
        lastUpdated: "Last updated: March 25, 2026",
      },
      sections: [
        {
          title: "Introduction",
          body: [
            "Rémi Guillette Group (\"we\", \"our\", \"us\") is committed to protecting the privacy and personal information of our clients and users of our website. This privacy policy describes how we collect, use, disclose, and protect your personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
          ],
        },
        {
          title: "Company Information",
          body: [
            "Legal Name: Rémi Guillette RG Groupe",
            "Operating Name: Rémi Guillette Group",
            "Website: remiguillette.ca",
            "Email: info@remiguillette.ca",
          ],
        },
        {
          title: "What data do we collect?",
          body: [
            "We collect the following personal information when you use our services:",
            "Personal information provided directly",
            "Full name (first and last name)",
            "Email address",
            "Phone number",
            "Mailing address",
            "Information about your business or organization",
            "Messages and communications you send to us",
            "Information about requested services",
            "Automatically collected data",
            "IP address",
            "Browser type and version",
            "Operating system",
            "Pages visited on our website",
            "Date and time of visit",
            "Session duration",
            "Cookie and similar technology data",
          ],
        },
        {
          title: "Why are we collecting this information?",
          body: [
            "We use your personal information for the following purposes:",
            "Provide our professional consulting services",
            "Communicate with you about our services",
            "Process your requests and respond to your inquiries",
            "Improve our website and services",
            "Comply with legal and regulatory obligations",
            "Maintain the security of our systems",
            "Analyze website usage for improvement",
          ],
        },
        {
          title: "How do we obtain consent?",
          body: [
            "We obtain your consent in several ways:",
            "Explicit consent when submitting forms",
            "Implied consent when using our services",
            "Consent through acceptance of terms of use",
            "Consent for cookies via our cookie banner",
          ],
        },
        {
          title: "Who do we share this information with?",
          body: [
            "We do not sell your personal information. We may share it with:",
            "Third-party service providers who help us operate our website (AWS)",
            "Legal or accounting professionals as needed",
            "Government authorities when required by law",
            "Business partners with your explicit consent",
          ],
        },
        {
          title: "International transfers",
          body: [
            "Our website is hosted by Amazon Web Services (AWS), and our domain services are managed by Amazon Web Services (AWS) in the us-east-1 region. Your data may be transferred to and stored in the United States.",
            "AWS implements appropriate security measures to protect your data in accordance with international data protection standards.",
          ],
        },
        {
          title: "How do we protect data?",
          body: [
            "We implement various security measures:",
            "Encryption of data in transit (SSL/TLS)",
            "Limited access to personal information",
            "Regular security monitoring",
            "Staff training on data protection",
            "Regular security system updates",
            "Secure data backup",
          ],
        },
        {
          title: "Cookies and similar technologies",
          body: [
            "We use cookies to improve your experience on our website. These cookies may include session cookies, persistent cookies, and analytics cookies.",
            "AWS also uses cookies for platform functionality. Please refer to AWS privacy policy for more information about their cookie usage.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "Under PIPEDA, you have the right to:",
            "Access your personal information",
            "Correct inaccurate information",
            "Withdraw your consent (subject to legal restrictions)",
            "Request deletion of your data",
            "File a complaint with the Privacy Commissioner of Canada",
          ],
        },
        {
          title: "Who should I contact if I have questions?",
          body: [
            "For any questions about this privacy policy or your personal information, contact us:",
            "info@remiguillette.ca",
          ],
        },
        {
          title: "Changes to this policy",
          body: [
            "We reserve the right to modify this privacy policy at any time.",
            "We will notify you of significant changes through a notice on our website or by email if you have provided your email address.",
          ],
        },
      ],
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
      address: "6388 Hawkins Street, Apt. 307, Niagara Falls, Ontario L2G 1P3",
      phone: "613-501-2160",
      email: "info@remiguillette.ca",
      hours: "Toujours disponibles",
      hoursLine1: "24/7, toute l’année",
      hoursLine2: "Nous sommes disponibles en tout temps",
      hoursLine3: "Jours fériés : sur appel",
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
    about: {
      title: "À propos",
      description: "Site officiel du Groupe Rémi Guillette.",
    },
    notFound: {
      message: "Page introuvable.",
      homeLink: "Retour à l'accueil",
    },
    privacyPolicy: {
      hero: {
        titleLead: "Politique de",
        titleAccent: "confidentialité",
        lastUpdated: "Mise à jour : 25 mars 2026",
      },
      sections: [
        {
          title: "Introduction",
          body: [
            "Le Groupe Rémi Guillette (« nous », « notre », « nos ») s’engage à protéger la vie privée et les renseignements personnels de ses clients et des utilisateurs de son site web. Cette politique de confidentialité décrit comment nous recueillons, utilisons, divulguons et protégeons vos renseignements personnels conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) du Canada.",
          ],
        },
        {
          title: "Informations sur l’entreprise",
          body: [
            "Nom légal : Rémi Guillette RG Groupe",
            "Nom d’exploitation : Rémi Guillette Group",
            "Site web : remiguillette.ca",
            "Courriel : info@remiguillette.ca",
          ],
        },
        {
          title: "Quelles données recueillons-nous?",
          body: [
            "Nous recueillons les renseignements personnels suivants lorsque vous utilisez nos services :",
            "Renseignements fournis directement",
            "Nom complet (prénom et nom de famille)",
            "Adresse courriel",
            "Numéro de téléphone",
            "Adresse postale",
            "Information sur votre entreprise ou organisation",
            "Messages et communications que vous nous envoyez",
            "Information sur les services demandés",
            "Données recueillies automatiquement",
            "Adresse IP",
            "Type et version du navigateur",
            "Système d’exploitation",
            "Pages visitées sur notre site web",
            "Date et heure de la visite",
            "Durée de la session",
            "Données des cookies et technologies similaires",
          ],
        },
        {
          title: "Pourquoi recueillons-nous ces informations?",
          body: [
            "Nous utilisons vos renseignements personnels aux fins suivantes :",
            "Fournir nos services-conseils professionnels",
            "Communiquer avec vous au sujet de nos services",
            "Traiter vos demandes et répondre à vos questions",
            "Améliorer notre site web et nos services",
            "Respecter les obligations légales et réglementaires",
            "Maintenir la sécurité de nos systèmes",
            "Analyser l’utilisation du site web pour l’amélioration continue",
          ],
        },
        {
          title: "Comment obtenons-nous le consentement?",
          body: [
            "Nous obtenons votre consentement de plusieurs façons :",
            "Consentement explicite lors de la soumission de formulaires",
            "Consentement implicite lors de l’utilisation de nos services",
            "Consentement par l’acceptation des conditions d’utilisation",
            "Consentement pour les cookies via notre bannière de cookies",
          ],
        },
        {
          title: "Avec qui partageons-nous ces informations?",
          body: [
            "Nous ne vendons pas vos renseignements personnels. Nous pouvons les partager avec :",
            "Des fournisseurs tiers qui nous aident à exploiter notre site web (AWS)",
            "Des professionnels juridiques ou comptables au besoin",
            "Des autorités gouvernementales lorsque la loi l’exige",
            "Des partenaires d’affaires avec votre consentement explicite",
          ],
        },
        {
          title: "Transferts internationaux",
          body: [
            "Notre site web est hébergé par Amazon Web Services (AWS), et nos services de domaine sont gérés par Amazon Web Services (AWS) dans la région us-east-1. Vos données peuvent être transférées et stockées aux États-Unis.",
            "AWS met en place des mesures de sécurité appropriées pour protéger vos données conformément aux normes internationales de protection des données.",
          ],
        },
        {
          title: "Comment protégeons-nous les données?",
          body: [
            "Nous appliquons diverses mesures de sécurité :",
            "Chiffrement des données en transit (SSL/TLS)",
            "Accès limité aux renseignements personnels",
            "Surveillance régulière de la sécurité",
            "Formation du personnel sur la protection des données",
            "Mises à jour régulières des systèmes de sécurité",
            "Sauvegarde sécurisée des données",
          ],
        },
        {
          title: "Cookies et technologies similaires",
          body: [
            "Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Ces cookies peuvent inclure des cookies de session, des cookies persistants et des cookies d’analyse.",
            "AWS utilise également des cookies pour les fonctionnalités de la plateforme. Veuillez consulter la politique de confidentialité d’AWS pour plus d’informations sur leur utilisation des cookies.",
          ],
        },
        {
          title: "Vos droits",
          body: [
            "En vertu de la LPRPDE, vous avez le droit de :",
            "Accéder à vos renseignements personnels",
            "Corriger des renseignements inexacts",
            "Retirer votre consentement (sous réserve de restrictions légales)",
            "Demander la suppression de vos données",
            "Déposer une plainte auprès du Commissariat à la protection de la vie privée du Canada",
          ],
        },
        {
          title: "Qui contacter en cas de questions?",
          body: [
            "Pour toute question sur cette politique de confidentialité ou vos renseignements personnels, contactez-nous :",
            "info@remiguillette.ca",
          ],
        },
        {
          title: "Modifications de cette politique",
          body: [
            "Nous nous réservons le droit de modifier cette politique de confidentialité en tout temps.",
            "Nous vous informerons des changements importants au moyen d’un avis sur notre site web ou par courriel si vous avez fourni votre adresse courriel.",
          ],
        },
      ],
    },
  },
} as const;

export type TranslationResources = typeof resources;
