import React, { useEffect } from 'react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, salvarAcesso } from '../firebase';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CadastroForm from '../components/CadastroForm';
import Sobre from '../components/Sobre';
import IDE from '../components/IDE';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Salvar acesso no analytics
    salvarAcesso(user?.displayName || 'Visitante');
  }, [user]);

  return (
    <>
      <Head>
        <title>PIB Guarujá Itapema - Igreja Batista do Guarujá</title>
        <meta name="description" content="PIB Guarujá Itapema - Uma igreja acolhedora e ativa, transformando vidas através do amor de Cristo. Conheça nosso projeto IDE (Itapema Desenvolvendo Esperança)." />
        <meta name="keywords" content="PIB Guarujá, Igreja Batista, Itapema, IDE, Desenvolvendo Esperança, igreja guarujá, comunidade, fé" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PIB Guarujá Itapema - Igreja Batista do Guarujá" />
        <meta property="og:description" content="Uma igreja acolhedora e ativa, transformando vidas através do amor de Cristo. Conheça nosso projeto IDE." />
        <meta property="og:url" content="https://pibguaruja.com.br" />
        <meta property="og:site_name" content="PIB Guarujá Itapema" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PIB Guarujá Itapema - Igreja Batista do Guarujá" />
        <meta name="twitter:description" content="Uma igreja acolhedora e ativa, transformando vidas através do amor de Cristo." />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Sobre />
          <IDE />
          <CadastroForm />
          <Blog />
        </main>
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#333',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </>
  );
}