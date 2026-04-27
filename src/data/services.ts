import {
  Briefcase,
  Cable,
  Code2,
  GitMerge,
  Headset,
  MonitorSmartphone,
  Network,
  PhoneCall,
  ServerCog,
  ShieldCheck,
  SignalHigh,
  LucideIcon
} from 'lucide-react';

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  argument: string;
  detailedDescription: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'redes-corporativas',
    icon: Network,
    title: 'Redes Corporativas',
    description: 'Estabilidade e desempenho com Wi-Fi profissional, Mikrotik, Cisco e Unifi sob medida.',
    argument: 'Sua empresa não pode depender de uma rede improvisada.',
    detailedDescription: 'A Intec projeta e configura redes empresariais com equipamentos de alto desempenho — Mikrotik, Cisco, Zyxel, Unifi e outros. O foco é em estabilidade e performance para ambientes de pequenas e médias empresas, que muitas vezes sofrem com Wi-Fi instável, lentidão e quedas que prejudicam a operação diária.'
  },
  {
    id: 'seguranca-firewall',
    icon: ShieldCheck,
    title: 'Segurança e Firewall',
    description: 'VPN segura, segmentação de rede e proteção perimetral contra ameaças modernas.',
    argument: 'Hackers não escolhem o tamanho da empresa. Sua proteção precisa ser séria.',
    detailedDescription: 'Proteção perimetral com VPN, segmentação de rede e políticas de acesso personalizadas. A Intec entende que PMEs são alvos crescentes de ataques cibernéticos e entrega um nível de proteção que antes era exclusivo de grandes empresas.'
  },
  {
    id: 'servidores-automacao',
    icon: ServerCog,
    title: 'Servidores e Automação',
    description: 'Implantação robusta, VPS, automação e backups em nuvem com alta disponibilidade.',
    argument: 'Sua infraestrutura rodando 24/7, sem surpresas.',
    detailedDescription: 'Implantação de servidores físicos, VPS, backups automáticos e serviços em nuvem com foco em alta disponibilidade. Também inclui automações que reduzem trabalho manual e aumentam a confiabilidade do ambiente.'
  },
  {
    id: 'suporte-monitoramento',
    icon: Headset,
    title: 'Suporte e Monitoramento',
    description: 'Atendimento e monitoramento proativo com documentação técnica rigorosa e ágil.',
    argument: 'Suporte que não espera o problema explodir.',
    detailedDescription: 'Atendimento remoto e presencial com monitoramento proativo — ou seja, a Intec identifica e resolve problemas antes que o cliente perceba. Inclui documentação técnica clara, algo raro e valioso no mercado.'
  },
  {
    id: 'telefonia-nuvem',
    icon: PhoneCall,
    title: 'Telefonia em Nuvem',
    description: 'PABX proprietário com suporte a telefones IP e softphones, reduzindo custos.',
    argument: 'Telefonia moderna, sem equipamento caro e sem complicação.',
    detailedDescription: 'Serviço próprio de telefonia em nuvem, compatível com telefones IP e softphones. Elimina a necessidade de PABX físico caro e obsoleto, trazendo escalabilidade e mobilidade para a comunicação empresarial.'
  },
  {
    id: 'cabeamento-estruturado',
    icon: Cable,
    title: 'Cabeamento Estruturado',
    description: 'Cabeamento trançado ou redes POL (Passive Optical LAN) para alta capacidade.',
    argument: 'Uma rede boa começa pelo que você não vê: o cabeamento.',
    detailedDescription: 'Instalação de infraestrutura física com cabos de par trançado ou rede POL (Passive Optical LAN), atendendo desde escritórios pequenos até ambientes mais complexos. Base sólida para qualquer rede funcionar bem.'
  },
  {
    id: 'outsourcing-ti',
    icon: MonitorSmartphone,
    title: 'Outsourcing de TI',
    description: 'Locação estratégica de notebooks, desktops, impressoras e celulares corporativos.',
    argument: 'Equipamentos sempre novos, sem comprar nada.',
    detailedDescription: 'Locação de equipamentos como notebooks, desktops, impressoras e celulares. Ideal para empresas que querem previsibilidade de custo, equipamentos sempre atualizados e sem imobilização de capital.'
  },
  {
    id: 'desenvolvimento-web',
    icon: Code2,
    title: 'Desenvolvimento Web',
    description: 'Sistemas e sites sob medida para digitalizar e otimizar as regras do seu negócio.',
    argument: 'Do servidor ao site, tudo na mesma mão.',
    detailedDescription: 'Criação de sites e aplicações web sob medida. A Intec traz esse serviço como extensão natural do seu ecossistema de TI, entregando soluções digitais integradas à infraestrutura do cliente.'
  },
  {
    id: 'links-redundantes',
    icon: GitMerge,
    title: 'Links Redundantes',
    description: 'Entrega de link dedicado com redundância garantindo 99,8% de disponibilidade SLA.',
    argument: 'Sua internet caiu? A nossa não.',
    detailedDescription: 'Entrega de link dedicado com redundância e rotas distintas, garantindo SLA de disponibilidade de 99,8%. Para empresas que não podem se dar ao luxo de ficar sem internet — nem por uma hora.'
  },
  {
    id: 'internet-5g',
    icon: SignalHigh,
    title: 'Internet 5G Ilimitada',
    description: 'Planos 5G empresariais sem limite de dados com Wi-Fi 6 incluso, redefinindo mobilidade.',
    argument: 'Velocidade 5G, Wi-Fi 6 e sem franquia. Simples assim.',
    detailedDescription: 'Plano de internet 5G ilimitada com Wi-Fi 6 incluso — uma solução inovadora no setor de telecom, especialmente para empresas em locais onde fibra não chega com qualidade ou agilidade.'
  },
  {
    id: 'consultoria-iso-27001',
    icon: Briefcase,
    title: 'Consultoria ISO 27001',
    description: 'Guiamos sua empresa para excelência com adequação aos rigorosos padrões de segurança.',
    argument: 'Sua empresa pronta para a certificação que o mercado exige.',
    detailedDescription: 'Consultoria especializada para empresas que desejam obter a certificação ISO 27001 (Segurança da Informação). A Intec tem equipe capacitada para conduzir o processo de credenciamento de ponta a ponta.'
  }
];
