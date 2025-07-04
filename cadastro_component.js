import React, { useState } from 'react';
import { cadastrarMembro } from '../firebase';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    cep: '',
    isMembro: false,
    interesse: '',
    observacoes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação básica
      if (!formData.nome || !formData.email || !formData.telefone) {
        toast.error('Por favor, preencha todos os campos obrigatórios');
        return;
      }

      await cadastrarMembro(formData);
      toast.success('Cadastro realizado com sucesso!');
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        cep: '',
        isMembro: false,
        interesse: '',
        observacoes: ''
      });
    } catch (error) {
      toast.error('Erro ao realizar cadastro. Tente novamente.');
      console.error('Erro no cadastro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cadastro" className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cadastre-se para receber informações sobre nossas atividades, 
            eventos e conhecer melhor o nosso trabalho na comunidade.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-glass p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiUser className="w-4 h-4 mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiMail className="w-4 h-4 mr-2" />
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiPhone className="w-4 h-4 mr-2" />
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="(13) 99999-9999"
                />
              </div>

              {/* CEP */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiMapPin className="w-4 h-4 mr-2" />
                  CEP
                </label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="00000-000"
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FiMapPin className="w-4 h-4 mr-2" />
                Endereço
              </label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Rua, número, bairro"
              />
            </div>

            {/* Cidade */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Cidade
              </label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Guarujá, SP"
              />
            </div>

            {/* Interesse */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Área de Interesse
              </label>
              <select
                name="interesse"
                value={formData.interesse}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Selecione uma opção</option>
                <option value="cultos">Participar dos Cultos</option>
                <option value="ide">Projeto IDE</option>
                <option value="voluntario">Ser Voluntário</option>
                <option value="jovens">Ministério de Jovens</option>
                <option value="criancas">Ministério Infantil</option>
                <option value="musica">Ministério de Música</option>
                <option value="aconselhamento">Aconselhamento</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            {/* Observações */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Observações
              </label>
              <textarea
                name="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Conte-nos um pouco sobre você ou suas expectativas..."
              />
            </div>

            {/* Checkbox Membro */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isMembro"
                checked={formData.isMembro}
                onChange={handleChange}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label className="text-sm text-gray-700">
                Já sou membro da PIB Guarujá
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-neon ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Cadastrando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FiCheck className="w-5 h-5 mr-2" />
                    Realizar Cadastro
                  </span>
                )}
              </button>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <div className="flex items-start">
                <FiAlertCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-700">
                  <p className="font-medium mb-1">Sobre seus dados:</p>
                  <p>
                    Suas informações são tratadas com total segurança e privacidade. 
                    Utilizamos apenas para comunicação sobre nossas atividades e eventos.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
