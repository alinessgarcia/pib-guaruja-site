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
      <div className="max-w