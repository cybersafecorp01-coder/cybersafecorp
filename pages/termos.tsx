import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Lock, 
  CheckCircle, 
  Award, 
  ChevronDown,
  ChevronUp,
  FileCheck,
  Users,
  Database,
  Globe,
  ShieldCheck,
  AlertTriangle,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface TermSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const TermosPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const termosSections: TermSection[] = [
    {
      id: 'privacidade',
      title: 'Política de Privacidade',
      icon: <Lock size={20} className="text-[#1e88e5]" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            A <strong className="text-[#1e88e5]">CyberSafeCorp Soluções Tecnológicas</strong> valoriza a privacidade e segurança dos dados de nossos clientes, parceiros e visitantes. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Informações Coletadas</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span><strong>Dados de contato:</strong> Nome, e-mail, telefone, empresa, cargo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador, páginas visitadas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span><strong>Dados profissionais:</strong> Informações sobre sua empresa e necessidades de segurança</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Uso das Informações</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#1e88e5] mt-1 flex-shrink-0" />
                <span>Fornecer nossos serviços de cibersegurança</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#1e88e5] mt-1 flex-shrink-0" />
                <span>Comunicação sobre serviços e atualizações</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#1e88e5] mt-1 flex-shrink-0" />
                <span>Melhorar a experiência do usuário em nosso site</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#1e88e5] mt-1 flex-shrink-0" />
                <span>Cumprir obrigações legais e regulatórias</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-[#1e88e5]">
            <p className="text-slate-300 italic">
              "Na CyberSafeCorp, tratamos seus dados com o mesmo nível de segurança que protegemos os dados de nossos clientes. Segurança e privacidade são nosso core business."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'termos',
      title: 'Termos de Uso',
      icon: <FileText size={20} className="text-[#1e88e5]" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            Ao acessar e utilizar os serviços da CyberSafeCorp, você concorda com estes Termos de Uso. Leia atentamente antes de utilizar nossos serviços.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Condições de Uso</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>É proibido utilizar nossos serviços para atividades ilegais ou não autorizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>Não é permitida a tentativa de acesso não autorizado a nossos sistemas</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>A reprodução não autorizada de conteúdo técnico é proibida</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Direitos de Propriedade</h4>
            <p className="text-slate-300">
              Todo o conteúdo técnico, metodologias, ferramentas e software desenvolvidos pela CyberSafeCorp são de nossa propriedade intelectual. O uso é concedido mediante contrato de serviço.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Limitação de Responsabilidade</h4>
            <p className="text-slate-300">
              A CyberSafeCorp atua com máxima diligência na prestação de serviços, porém não pode garantir proteção absoluta contra todos os tipos de ataques cibernéticos, dado o caráter dinâmico das ameaças digitais.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'lgpd',
      title: 'LGPD Compliance',
      icon: <ShieldCheck size={20} className="text-[#1e88e5]" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#1e88e5]/10 to-transparent p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-3">Lei Geral de Proteção de Dados Pessoais</h4>
            <p className="text-slate-300">
              A CyberSafeCorp está em plena conformidade com a Lei nº 13.709/2018 (LGPD), atuando como Operadora e Controladora de dados em diferentes cenários.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-bold text-white flex items-center gap-2">
                <Users size={18} className="text-[#1e88e5]" />
                Direitos dos Titulares
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Confirmação da existência de tratamento</li>
                <li>• Acesso aos dados</li>
                <li>• Correção de dados incompletos ou desatualizados</li>
                <li>• Anonimização, bloqueio ou eliminação</li>
                <li>• Portabilidade dos dados</li>
                <li>• Revogação do consentimento</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white flex items-center gap-2">
                <Database size={18} className="text-[#1e88e5]" />
                Nossos Compromissos
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Nomeação de Encarregado (DPO)</li>
                <li>• Mapeamento completo de fluxo de dados</li>
                <li>• Relatórios de Impacto à Proteção de Dados (RIPD)</li>
                <li>• Contratos específicos com operadores</li>
                <li>• Políticas internas de segurança da informação</li>
                <li>• Plano de resposta a incidentes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Encarregado de Proteção de Dados (DPO)</h4>
            <div className="bg-slate-800/30 p-5 rounded-xl">
              <p className="text-slate-300">
                <strong className="text-[#1e88e5]">Contato do DPO:</strong><br />
                <span className="flex items-center gap-2 mt-2">
                  <Mail size={16} className="text-[#1e88e5]" />
                  dpo@cybersafecorp.com.br
                </span>
                <span className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-[#1e88e5]" />
                  +55 (11) 99999-9999 (ramal 201)
                </span>
              </p>
              <p className="text-sm text-slate-400 mt-3">
                Horário de atendimento: Segunda a sexta, das 9h às 18h
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certificacoes',
      title: 'Certificações Técnicas',
      icon: <Award size={20} className="text-[#1e88e5]" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300">
            Nossa equipe técnica possui certificações reconhecidas internacionalmente que garantem a excelência e atualização constante em cibersegurança.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                <Globe size={18} className="text-[#1e88e5]" />
                Certificações de Equipe
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>CISSP - Certified Information Systems Security Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>CISM - Certified Information Security Manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>CEH - Certified Ethical Hacker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>OSCP - Offensive Security Certified Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>ISO 27001 Lead Auditor/Implementer</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                <FileCheck size={18} className="text-[#1e88e5]" />
                Certificações da Empresa
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>ISO/IEC 27001:2013 - Sistema de Gestão de Segurança da Informação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>PCI DSS - Payment Card Industry Data Security Standard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>Certificação ANATEL para laboratório de testes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span>Credenciamento como OSCIP - Organização da Sociedade Civil de Interesse Público</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1565c0]/20 to-transparent p-6 rounded-xl">
            <h5 className="font-bold text-white mb-2">Compromisso com a Excelência</h5>
            <p className="text-slate-300 text-sm">
              Nossas certificações são auditadas anualmente por organismos independentes, garantindo a manutenção dos mais altos padrões de qualidade e segurança em todos os nossos serviços.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050B14] to-[#0A1A2F] text-white">
      {/* Header */}
      <header className="bg-[#050B14]/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <ArrowLeft size={20} className="text-[#1e88e5] group-hover:scale-110 transition-transform" />
              <span className="text-[#1e88e5] font-bold">Voltar ao Site</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="text-[#1e88e5]" />
              <span className="text-xl font-bold">CyberSafe<span className="text-[#1e88e5]">Corp</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#1e88e5]/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e88e5]/10 border border-[#1e88e5]/20 rounded-full"
            >
              <ShieldCheck size={16} className="text-[#1e88e5]" />
              <span className="text-sm text-[#1e88e5] font-mono uppercase">Documentos Legais & Compliance</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              Transparência e <span className="text-[#1e88e5]">Conformidade</span> Total
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conheça nossas políticas, termos e certificações que garantem a segurança e confiabilidade de nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-slate-800/30 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Índice</h3>
                <nav className="space-y-2">
                  {termosSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        toggleSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                        activeSection === section.id
                          ? 'bg-[#1e88e5] text-white'
                          : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {section.icon}
                        {section.title}
                      </span>
                      {activeSection === section.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              {termosSections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1e88e5]/10 flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    {activeSection === section.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: activeSection === section.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <div className="pt-6 border-t border-slate-800">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#1565c0]/20 to-[#1e88e5]/20 rounded-2xl p-8 text-center border border-[#1e88e5]/30">
            <h3 className="text-2xl font-bold text-white mb-4">Dúvidas sobre Nossas Políticas?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe jurídica e de compliance está disponível para esclarecer qualquer questão relacionada aos nossos termos e políticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:compliance@cybersafecorp.com.br"
                className="px-6 py-3 bg-[#1e88e5] hover:bg-[#1565c0] text-white font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Falar com Compliance
              </a>
              <a 
                href="tel:+5511999999999"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone size={18} />
                Ligar para o DPO
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050B14] border-t border-slate-800 py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="text-[#1e88e5]" />
              <span className="text-xl font-bold">CyberSafe<span className="text-[#1e88e5]">Corp</span></span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} CyberSafeCorp Soluções Tecnológicas. Todos os direitos reservados.
            </p>
            <p className="text-slate-600 text-xs">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};