
import React from 'react';
import { 
  ShieldAlert, 
  Network, 
  Search, 
  Code2, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Target, 
  Lock, 
  FileText, 
  Users,
  Building2,
  Rocket,
  ShoppingBag,
  CircleDollarSign,
  Gavel
} from 'lucide-react';
import { ServiceCardProps, DifferentialItem, Step, Segment } from '../site/types';

export const SERVICES_DATA: ServiceCardProps[] = [
  {
    title: "Pentest (Teste de Invasão)",
    description: "Simulações reais de ataques para identificar vulnerabilidades antes que os criminosos o façam.",
    benefits: ["Relatórios técnicos detalhados", "Simulação de ataques APT", "Validação de controles de segurança"],
    icon: <ShieldAlert className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Redes de Computadores",
    description: "Projeto, segurança, monitoramento e otimização de infraestruturas de rede críticas.",
    benefits: ["Monitoramento 24/7", "Firewall de próxima geração", "Segmentação de rede segura"],
    icon: <Network className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Investigação Forense Digital",
    description: "Análise de incidentes, resposta rápida a ataques e preservação rigorosa de evidências digitais.",
    benefits: ["Análise pós-mortem", "Recuperação de dados", "Suporte legal/compliance"],
    icon: <Search className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Sistemas Seguros",
    description: "Aplicações web, APIs e soluções sob medida desenvolvidas com o framework Security-by-Design.",
    benefits: ["Revisão de código estática/dinâmica", "Integração CI/CD segura", "Pentest de aplicação"],
    icon: <Code2 className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "IA & Machine Learning",
    description: "Automação inteligente e análise preditiva para detectar ameaças em tempo real.",
    benefits: ["Análise de comportamento", "Detecção de anomalias", "Respostas automatizadas"],
    icon: <Cpu className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Automação com n8n",
    description: "Integrações complexas e workflows de segurança para redução de custos e ganho de eficiência.",
    benefits: ["Workflows personalizados", "Integração multi-ferramenta", "Economia de tempo operacional"],
    icon: <Workflow className="w-10 h-10 text-cyan-400" />
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Metodologias Globais",
    description: "Alinhamento total com frameworks OWASP, NIST e MITRE ATT&CK.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Foco em Risco Real",
    description: "Não entregamos apenas listas de bugs, mas análises de impacto no negócio.",
    icon: <Target className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Confidencialidade Total",
    description: "Acordos de NDA rigorosos e processos que garantem o sigilo das informações.",
    icon: <Lock className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Relatórios Executivos",
    description: "Documentação adaptada tanto para o time técnico quanto para o board (C-level).",
    icon: <FileText className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Atendimento B2B",
    description: "Suporte especializado focado nas necessidades de grandes empresas e infraestruturas.",
    icon: <Users className="w-8 h-8 text-emerald-400" />
  }
];

export const PROCESS_STEPS: Step[] = [
  { id: 1, title: "Análise", description: "Mapeamento completo do ambiente e definição de escopo." },
  { id: 2, title: "Planejamento", description: "Desenho estratégico das ações e vetores de ataque/defesa." },
  { id: 3, title: "Execução", description: "Aplicação técnica das soluções ou testes de segurança." },
  { id: 4, title: "Relatório", description: "Entrega de resultados, métricas e planos de remediação." },
  { id: 5, title: "Suporte", description: "Acompanhamento contínuo e monitoramento preventivo." }
];

export const SEGMENTS: Segment[] = [
  { name: "Grandes Empresas", icon: <Building2 className="w-8 h-8" /> },
  { name: "Startups Tech", icon: <Rocket className="w-8 h-8" /> },
  { name: "E-commerce", icon: <ShoppingBag className="w-8 h-8" /> },
  { name: "Fintechs", icon: <CircleDollarSign className="w-8 h-8" /> },
  { name: "Orgãos Governamentais", icon: <Gavel className="w-8 h-8" /> }
];
