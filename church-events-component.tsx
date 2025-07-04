import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const EventsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Culto Dominical",
      date: "2025-07-06",
      time: "09:00",
      location: "Santuário Principal",
      category: "culto",
      attendees: 250,
      description: "Culto de adoração e palavra com toda a família",
      image: "/api/placeholder/300/200",
      recurring: true
    },
    {
      id: 2,
      title: "Célula de Oração",
      date: "2025-07-08",
      time: "19:30",
      location: "Sala de Oração",
      category: "oracao",
      attendees: 45,
      description: "Momento de intercessão e comunhão",
      image: "/api/placeholder/300/200",
      recurring: true
    },
    {
      id: 3,
      title: "Conferência de Jovens",
      date: "2025-07-12",
      time: "19:00",
      location: "Auditório Central",
      category: "jovens",
      attendees: 180,
      description: "Três dias de ministração e adoração para jovens",
      image: "/api/placeholder/300/200",
      recurring: false,
      featured: true
    },
    {
      id: 4,
      title: "Escola Bíblica Dominical",
      date: "2025-07-13",
      time: "08:00",
      location: "Salas de Ensino",
      category: "ensino",
      attendees: 120,
      description: "Estudo bíblico para todas as idades",
      image: "/api/placeholder/300/200",
      recurring: true
    },
    {
      id: 5,
      title: "Jantar Missionário",
      date: "2025-07-15",
      time: "18:00",
      location: "Salão Social",
      category: "social",
      attendees: 200,
      description: "Evento beneficente em prol das missões",
      image: "/api/placeholder/300/200",
      recurring: false
    },
    {
      id: 6,
      title: "Ministério Infantil",
      date: "2025-07-20",
      time: "15:00",
      location: "Espaço Kids",
      category: "infantil",
      attendees: 80,
      description: "Atividades e ensino para crianças",
      image: "/api/placeholder/300/200",
      recurring: true
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos os Eventos', color: 'bg-blue-500' },
    { id: 'culto', label: 'Cultos', color: 'bg-purple-500' },
    { id: 'oracao', label: 'Oração', color: 'bg-green-500' },
    { id: 'jovens', label: 'Jovens', color: 'bg-orange-500' },
    { id: 'ensino', label: 'Ensino', color: 'bg-indigo-500' },
    { id: 'social', label: 'Social', color: 'bg-pink-500' },
    { id: 'infantil', label: 'Infantil', color: 'bg-yellow-500' }
  ];

  const filteredEvents = selectedCategory === 'todos' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos nossos eventos e fortaleça sua fé em comunidade
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                event.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {/* Imagem do Evento */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                {event.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Destaque
                  </div>
                )}
                {event.recurring && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recorrente
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-sm opacity-90">
                    {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{event.attendees} esperados</span>
                  </div>
                </div>

                {/* Status e Botão */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isUpcoming(event.date)
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isUpcoming(event.date) ? 'Próximo' : 'Passado'}
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendário Resumido */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Calendário do Mês
            </h3>
            <p className="text-gray-600">
              Visualize todos os eventos programados
            </p>
          </div>

          <div className="flex items-center justify-center mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h4 className="text-xl font-semibold text-gray-900 mx-6">
              {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </h4>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <div key={day} className="p-3 font-medium text-gray-500 text-sm">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 5; // Ajuste para começar no domingo
              const hasEvent = events.some(event => 
                new Date(event.date).getDate() === day && day > 0 && day <= 31
              );
              return (
                <div
                  key={i}
                  className={`p-3 text-sm rounded-lg cursor-pointer transition-colors ${
                    day > 0 && day <= 31
                      ? hasEvent
                        ? 'bg-blue-100 text-blue-800 font-medium hover:bg-blue-200'
                        : 'hover:bg-gray-100'
                      : 'text-gray-300'
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não perca nenhum evento!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Cadastre-se para receber notificações sobre novos eventos
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Cadastrar-se
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;