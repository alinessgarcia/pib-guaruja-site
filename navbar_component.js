import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, logOut } from '../firebase';
import { FiMenu, FiX, FiUser, FiLogOut, FiHome, FiUsers, FiBookOpen, FiHeart } from 'react-icons/fi';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-glass border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-800">PIB Guarujá</h1>
                <p className="text-xs text-gray-600">Itapema</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <FiHome className="mr-2" />
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <FiUsers className="mr-2" />
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('ide')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <FiHeart className="mr-2" />
                IDE
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <FiBookOpen className="mr-2" />
                Blog
              </button>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL || '/default-avatar.png'}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200"
                >
                  <FiLogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-neon transition-all duration-300 flex items-center"
              >
                <FiUser className="mr-2" />
                Entrar
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('ide')}
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              IDE
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Blog
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              {user ? (
                <div className="flex items-center space-x-3">
                  <img
                    src={user.photoURL || '/default-avatar.png'}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-base font-medium text-gray-800">{user.displayName}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800 ml-auto"
                  >
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium w-full"
                >
                  Entrar com Google
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;