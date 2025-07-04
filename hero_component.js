import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiHeart } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              PIB Guarujá
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-600">
              Itapema
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            Uma igreja acolhedora e ativa, transformando vidas através do amor de Cristo
          </p>

          {/* IDE Description */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-glass max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FiHeart className="w-8 h-8 text-primary-500 mr-3" />
              <h2 className="text-2xl font-display font-semibold text-gray-800">
                Projeto IDE
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold text-primary-600">Itapema Desenvolvendo Esperança</span> - 
              Nossa missão é promover o desenvolvimento comunitário sustentável e oferecer 
              assistência social, emocional e espiritual para pessoas em situação de vulnerabilidade.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('cadastro')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              Cadastrar-se
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-white/90 backdrop-blur-md text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-200 hover:shadow-glass-hover transition-all duration-300 transform hover:scale-105"
            >
              Conhecer mais
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300">
              <FiMapPin className="w-6 h-6 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Endereço</h3>
              <p className="text-gray-600 text-sm">
                Av Thiago Ferreira, 932<br />
                Vila Alice (Vicente de Carvalho)<br />
                Guarujá/SP
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300">
              <FiPhone className="w-6 h-6 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Contato</h3>
              <p className="text-gray-600 text-sm">
                (13) 3352-5730<br />
                WhatsApp disponível
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300">
              <FiMail className="w-6 h-6 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">E-mail</h3>
              <p className="text-gray-600 text-sm">
                contato@pibguaruja.com.br<br />
                ide@guarujacompetitivo.com.br
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;