import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Lock,
  Database,
  Network,
  Cpu,
  Bug,
  Code2,
  GitBranch,
  Server,
  Eye,
  Key,
  Fingerprint,
  FileSearch,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Nathan Chapuis',
  handle: 'Natdu15',
  role: 'Étudiant en Data & Cybersécurité',
  tagline: 'Sécuriser les systèmes, analyser des données et concevoir des solutions résilientes telles que des sites web ou des tableaux de bord.',
  location: 'Aurillac, France',
  email: 'nathanchapuis15@gmail.com',
  github: 'https://github.com/Natdu15',
  linkedin: 'https://www.linkedin.com/in/chapuis-nathan-3a4095335/',
  resume: '#',
};

export const about = {
  bio: [
    "Je suis un étudiant de 20 ans en Science des données à Aurillac. J'explore le domaine de la cybersécurité, de la data et de l'avenir d'Internet. ",
    "De l'écriture de code sécurisé à l'analyse du trafic réseau et à la recherche de vulnérabilités, je m'épanouis à la croisée de la protection et de l'investigation. Je considère que la sécurité n'est pas une simple fonctionnalité, mais un fondement.",
  ],
  stats: [
    { label: 'Projets', value: '7' },
    { label: "Années d'apprentissage en formation", value: '2' },
  ],
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  level: number;
  category: 'Securité' | 'Data' | 'Developpement' | 'Outils';
};

export const skills: Skill[] = [
  { name: 'Cybersécurité', icon: Network, level: 85, category: 'Securité' },
  { name: 'Cryptographie', icon: Key, level: 70, category: 'Securité' },
  { name: 'Python', icon: Code2, level: 85, category: 'Developpement' },
  { name: 'SQL & Bases de données', icon: Database, level: 80, category: 'Data' },
  { name: 'Analyse de données', icon: Cpu, level: 75, category: 'Data' },
  { name: 'Bash / Shell (terminal)', icon: Terminal, level: 78, category: 'Developpement' },
  { name: 'Git & Contrôle de version', icon: GitBranch, level: 85, category: 'Outils' },
  { name: 'Linux', icon: Server, level: 82, category: 'Outils' },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  icon: LucideIcon;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'Jeu de cartes à collectionner (TCG)',
    description:
      'Création d\'une base de données fonctionnelle pour gérer des comptes utilisateurs, stocker les cartes obtenues, récupérer des récompenses via des quêtes et gérer l\'ouverture de paquets virtuels. (le site ne possède plus de base de données).',
    tech: ['HTML', 'CSS', 'JS', 'SQL'],
    github: 'https://natdu15.github.io/Echange-TCG/accueil',
    icon: Database,
    tags: ['Database', 'Web', 'Gaming'],
  },
  {
    title: 'Plateforme de mini-jeux Mangas & Animés',
    description:
      'Développement d\'un site web dédié à la culture manga proposant des mini-jeux interactifs de type "Tu préfères", organisés et filtrés par catégories (manga, animé, shonen).',
    tech: ['HTML', 'CSS', 'JS', 'SQL'],
    github: 'https://natdu15.github.io/site-de-manga/',
    icon: Code2,
    tags: ['Web', 'Frontend', 'Entertainment'],
  },
  {
    title: 'Portfolio sur-mesure - Galon d\'Ingres',
    description:
      'Conception et développement d\'un e-portfolio pour une boutique de couture locale afin de mettre en avant ses créations. Intégration et paramétrage du CMS Sanity pour permettre à la gérante de mettre à jour le site en toute autonomie.',
    tech: ['React', 'TypeScript', 'Sanity', 'JSON'],
    github: 'https://galondingres-portfolio.com',
    icon: Eye,
    tags: ['Frontend', 'CMS', 'Web'],
  },
  {
    title: 'Système de gestion des rôles et habilitations (RBAC)',
    description:
      'Création d\'un espace base de données sécurisé pour administrer les droits d\'accès. Le système permet de définir les rôles de chaque utilisateur, de gérer les droits par rôle et d\'ajouter des permissions spécifiques.',
    tech: ['SQL', 'Python'],
    github: 'https://github.com/Natdu15/role-management-db',
    icon: Lock,
    tags: ['Security', 'Database', 'Access Control'],
  },
  {
    title: 'Dashboard de Datavisualisation SNCF',
    description:
      'Participation à une journée challenge de datavisualisation : définition d\'une problématique métier liée à la SNCF, conception d\'un tableau de bord interactif pour y répondre et présentation des résultats devant un jury.',
    tech: ['Excel', 'PowerBI'],
    github: 'https://github.com/Natdu15/sncf-dashboard',
    icon: Activity,
    tags: ['Data', 'Visualization', 'Dashboard'],
  },
  {
    title: 'Explorateur d\'API Pokémon',
    description:
      'Exercice d\'intégration et d\'exploitation d\'une API REST. Récupération, traitement et affichage des données de l\'univers Pokémon (données du Pokédex, cris, baies, dresseurs, etc.).',
    tech: ['Python', 'API REST', 'JSON'],
    github: 'https://github.com/Natdu15/pokemon-api',
    icon: Network,
    tags: ['API', 'Development', 'Data'],
  },

  {
    title: 'Analyse de données de santé - Cas du VIH',
    description:
      'Projet d\'analyse approfondie visant à produire un rapport sur les causes et l\'évolution du VIH, avec des croisements de données par année, par continent et par pathologies (tabac, alcool).',
    tech: ['Python', 'Excel', 'Rstudio'],
    github: 'https://github.com/Natdu15/hiv-data-analysis',
    icon: Cpu,
    tags: ['Data', 'Analytics', 'Health'],
  }
];


export const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];