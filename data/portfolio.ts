// Todo o conteúdo do portfólio está neste ficheiro.
// Para actualizar textos, projetos ou links, edita só aqui.

export type Project = {
  slug: string;
  name: string;
  kind: string; // o tipo de produto, em poucas palavras
  role: string; // o teu papel no projeto
  summary: string;
  work: string[]; // o que fizeste
  stack: string[];
  code?: string; // link para o repositório (deixa vazio se for privado)
  site?: string; // link para o site publicado (acrescenta quando estiver online)
  note?: string; // nota curta mostrada quando não há links
  panel: {
    background: string;
    ink: string; // cor do nome do projeto no painel
    title?: string; // texto grande do painel (por omissão, o nome do projeto)
    image?: string; // captura de ecrã ou logótipo em /public
    imageAlt?: string;
    imageKind?: "screenshot" | "logo";
  };
};

export const profile = {
  name: "Manuel Muchanga",
  fullName: "Manuel Francisco Muchanga Júnior",
  title: "Desenvolvedor de software e técnico de informática",
  location: "Maputo, Moçambique",
  intro:
    "Construo aplicações web e mobile para empresas em Moçambique e dou suporte informático: computadores, sistemas e redes.",
  highlights: [
    "Aplicações mobile com Flutter e Dart, e backend com Laravel",
    "Sites institucionais em Next.js, React e TypeScript",
    "Suporte técnico, instalação de sistemas e redes",
    "Licenciatura em Informática de Sistemas no ISCIM",
  ],
  email: "muchangajunior53@gmail.com",
  phone: "+258 84 058 0247",
  whatsapp: "258840580247",
  linkedin: "https://www.linkedin.com/in/manuel-muchanga-0108a5394",
  github: "https://github.com/ManuelMuchang",
  cv: "/cv/Manuel_Muchanga_CV.pdf",
};

export const projects: Project[] = [
  {
    slug: "urbanclick",
    name: "Urban Click",
    kind: "Site de agência de marketing",
    role: "Freelance, desenvolvimento completo",
    summary:
      "Site institucional da Urban Click, agência de estratégia, branding, conteúdo e gestão de redes sociais.",
    work: [
      "Construção do site a partir do design fornecido pela agência",
      "Secções de serviços, portfólio, processo e FAQ, com animações em Framer Motion",
      "Modais de contacto e pedido de orçamento, com componentes reutilizáveis em TypeScript",
      "Layout responsivo, pensado para transformar visitantes em pedidos de contacto",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/ManuelMuchang/urbanclick/tree/urbanClick",
    panel: {
      background: "#0B0A06",
      ink: "#E7B824",
      image: "/projects/urbanclick-logo.png",
      imageAlt: "Logótipo da Urban Click",
      imageKind: "logo",
    },
  },
  {
    slug: "bss",
    name: "BSS",
    kind: "Site de fornecedora de aço",
    role: "Desenvolvimento em equipa",
    summary:
      "Novo site institucional da Better Steel Solutions, fornecedora de produtos de aço em Moçambique, refeito de raiz.",
    work: [
      "Catálogo de produtos com filtro por categoria: flanges, tubos, chapas, grelhas e perfis",
      "Páginas de serviços, empresa e contacto, com botão de WhatsApp para a equipa comercial",
      "Produtos e dados da empresa em ficheiros JSON, fáceis de actualizar sem mexer no código",
    ],
    stack: ["React 19", "Vite", "Tailwind CSS 4", "React Router"],
    code: "https://github.com/ManuelMuchang/bssmoz.com",
    panel: {
      background: "#E8EEF8",
      ink: "#123C8F",
      title: "Better Steel Solutions",
      image: "/projects/bss-logo.png",
      imageAlt: "Logótipo da BSS",
      imageKind: "logo",
    },
  },
  {
    slug: "libombo",
    name: "Libombo Imobiliária",
    kind: "Plataforma de venda de terrenos",
    role: "Projeto para cliente, desenvolvido em equipa",
    summary:
      "Plataforma da Libombo Imobiliária para divulgar terrenos à venda em Marracuene, desenvolvida com outro programador. A lista de terrenos é gerida a partir de uma folha de cálculo.",
    work: [
      "Terrenos lidos do Google Sheets em tempo real através do Google Apps Script",
      "Pedidos de contacto enviados automaticamente por email com Nodemailer",
      "Aplicação responsiva publicada online",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "Google Apps Script"],
    site: "https://libombo-imobiliaria.com",
    panel: {
      background: "#E3EBDC",
      ink: "#2F4A37",
      image: "/projects/libombo.png",
      imageAlt: "Página inicial do site da Libombo Imobiliária",
      imageKind: "screenshot",
    },
  },
  {
    slug: "taskmate",
    name: "TaskMate",
    kind: "Gestor de tarefas",
    role: "Projeto pessoal",
    summary: "Gestor de tarefas pessoais que funciona inteiramente no navegador.",
    work: [
      "Adicionar, concluir e remover tarefas, com contadores de progresso",
      "Tarefas guardadas no navegador com localStorage",
      "Exportação da lista de tarefas para um documento Word",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/ManuelMuchang/TaskMate",
    panel: {
      background: "#D6EAFB",
      ink: "#0A4E8A",
      image: "/projects/taskmate.png",
      imageAlt: "Ecrã do TaskMate com três tarefas na lista",
      imageKind: "screenshot",
    },
  },
];

export const otherProjects = [
  {
    name: "Sistema de Gestão de Consultas Online",
    detail: "Consultas médicas, pacientes, profissionais de saúde e administradores",
    stack: "Java, JSP, Servlets, MySQL",
  },
  {
    name: "Sistema de Gestão de Estacionamento",
    detail: "Entradas, saídas e tempo de permanência de veículos",
    stack: "Java, SQL",
  },
];

export const skills: { area: string; items: string[] }[] = [
  { area: "Web", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML e CSS"] },
  { area: "Mobile", items: ["Flutter", "Dart", "Firebase", "Google Maps API"] },
  { area: "Backend", items: ["PHP e Laravel", "Java", "JSP e Servlets", "APIs REST", "Python"] },
  { area: "Dados e ferramentas", items: ["MySQL", "PostgreSQL", "Git e GitHub", "Vercel", "Google Apps Script"] },
  {
    area: "Suporte informático",
    items: [
      "Suporte técnico a utilizadores",
      "Instalação e configuração de sistemas e software",
      "Manutenção de computadores",
      "Redes (Cisco Packet Tracer)",
    ],
  },
];

export const education = {
  degree: "Licenciatura em Informática de Sistemas",
  school: "Instituto Superior de Comunicação e Imagem de Moçambique (ISCIM)",
  status: "Curso concluído, a aguardar a defesa da monografia",
};
