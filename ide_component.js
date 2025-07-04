import React from 'react';
import { FiHeart, FiUsers, FiBookOpen, FiPhone, FiMail, FiCalendar, FiMapPin } from 'react-icons/fi';

const IDE = () => {
  const servicos = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      titulo: "Acolhimento Emocional",
      descricao: "Atendimento especializado para pessoas em sofrimento emocional e mental.",
      detalhes: "Profissionais qualificados e voluntários treinados"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      titulo: "Grupos de Apoio",
      descricao: "Encontros regulares para compartilhamento e apoio mútuo.",
      detalhes: "Semanalmente com acompanhamento profissional"
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      titulo: "Orientação Familiar",
      descricao: "Apoio e orientação para famílias em situações difíceis.",
      detalhes: "Atendimento personalizado e confidencial"
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      titulo: "Programas Semanais",
      descricao: "Atividades regulares focadas no desenvolvimento pessoal.",
      detalhes: "Terças e quintas-feiras, 19h às 21h"
    }
  ];

  const impactos = [
    { numero: "500+", descricao: "Pessoas Atendidas" },
    { numero: "3", descricao: "Anos de Atuação" },
    { numero: "25+", descricao: "Voluntários Ativos" },
    { numero: "100%", descricao: "Gratuito" }
  ];

  return (
    <section id="ide" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
              <FiHeart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-800">
                Projeto IDE
              </h2>
              <p className="text-lg text-primary-600 font-medium">
                Itapema Desenvolvendo Esperança
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Um projeto social da PIB Guarujá dedicado ao cuidado da saúde mental e emocional 
            da comunidade, oferecendo apoio psicológico, acolhimento e esperança para pessoas 
            em situação de vulnerabilidade emocional.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Promover o desenvolvimento comunitário sustentável através do cuidado integral 
              da pessoa humana, oferecendo assistência social, emocional e espiritual para 
              indivíduos e famílias em situação de vulnerabilidade.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser referência na região do Guarujá no atendimento humanizado e acolhedor, 
              contribuindo para a formação de uma comunidade mais saudável emocionalmente 
              e resiliente diante dos desafios da vida.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-gray-800 text-center mb-12">
            Nossos Serviços
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-primary-500 mb-4">
                  {servico.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {servico.titulo}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {servico.descricao}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  {servico.detalhes}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">
            Nosso Impacto
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactos.map((impacto, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary-400">
                  {impacto.numero}
                </div>
                <div className="text-gray-300">
                  {impacto.descricao}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Participate */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-glass">
          <h3 className="text-3xl font-display font-bold text-gray-800 text-center mb-8">
            Como Participar
          