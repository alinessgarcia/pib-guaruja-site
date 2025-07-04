import React from 'react';
import { FiUsers, FiHeart, FiBook, FiSun, FiMusic, FiGift } from 'react-icons/fi';

const Sobre = () => {
  const atividades = [
    {
      icon: <FiSun className="w-8 h-8" />,
      titulo: "Cultos Dominicais",
      descricao: "Encontros de adoração e ensino da Palavra de Deus todos os domingos.",
      horario: "Domingos às 9h e 19h"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      titulo: "Grupos de Estudo",
      descricao: "Pequenos grupos para estudo bíblico e comunhão durante a semana.",
      horario: "Terças e Quintas às 19h30"
    },
    {
      icon: <FiMusic className="w-8 h-8" />,
      titulo: "Ministério de Música",
      descricao: "Coral e grupos musicais que abençoam através da música cristã.",
      horario: "Ensaios às Sextas às 20h"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      titulo: "Ação Social",
      descricao: "Projetos de assistência e apoio às famílias em situação de vulnerabilidade.",
      horario: "Ações mensais"
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      titulo: "Escola Dominical",
      descricao: "Ensino bíblico para todas as idades em classes específicas.",
      horario: "Domingos às 8h"
    },
    {
      icon: <FiGift className="w-8 h-8" />,
      titulo: "Ministério Infantil",
      descricao: "Atividades especiais para crianças com ensino lúdico e criativo.",
      horario: "Domingos durante os cultos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-6">
            Sobre Nossa Igreja
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A PIB Guarujá Itapema é uma comunidade de fé comprometida com o crescimento espiritual, 
            a comunhão fraterna e o serviço ao próximo. Há mais de 20 anos servindo a região 
            do Guarujá com amor e dedicação.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                <FiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Nossa Missão</h3>
              <p className="text-gray-600">
                Proclamar o evangelho de Jesus Cristo e formar discípulos que transformem vidas e comunidades.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser uma igreja relevante, acolhedora e impactante na região do Guarujá e além.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto">
                <FiBook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Nossos Valores</h3>
              <p className="text-gray-600">
                Amor, integridade, excelência, comunhão e compromisso com a Palavra de Deus.
              </p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-gray-800 text-center mb-12">
            Nossas Atividades
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atividades.map((atividade, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-primary-500 mb-4">
                  {atividade.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {atividade.titulo}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {atividade.descricao}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  {atividade.horario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">20+</div>
              <div className="text-gray-300">Anos de História</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">300+</div>
              <div className="text-gray-300">Membros Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-gray-300">Voluntários</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-gray-300">Ministérios</div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-display font-bold text-gray-800 mb-8">
            Liderança
          </h3>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-glass max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa igreja é liderada por pastores e líderes comprometidos com o crescimento 
              espiritual da comunidade. Buscamos sempre a orientação divina em todas as decisões 
              e ações, priorizando o bem-estar espiritual, emocional e social de cada membro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;