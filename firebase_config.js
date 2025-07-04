// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8yh5-9N5Ju7EPx7WfTrKSMW7xKF-goKI",
  authDomain: "cadastro-simples-3a544.firebaseapp.com",
  projectId: "cadastro-simples-3a544",
  storageBucket: "cadastro-simples-3a544.appspot.com",
  messagingSenderId: "1050140768295",
  appId: "1:1050140768295:web:ae8f44ef795ab794417602",
  measurementId: "G-DBB6H8BF22"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Provedor Google
const provider = new GoogleAuthProvider();

// Função para fazer login com Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função para fazer logout
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

// Função para cadastrar membro
export const cadastrarMembro = async (dadosMembro) => {
  try {
    const docRef = await addDoc(collection(db, 'membros'), {
      ...dadosMembro,
      dataCadastro: new Date(),
      timestamp: Date.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao cadastrar membro:', error);
    throw error;
  }
};

// Função para buscar membros
export const buscarMembros = async () => {
  try {
    const q = query(collection(db, 'membros'), orderBy('dataCadastro', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Erro ao buscar membros:', error);
    throw error;
  }
};

// Função para salvar acesso no analytics
export const salvarAcesso = async (usuario) => {
  try {
    await addDoc(collection(db, 'acessos'), {
      usuario: usuario || 'Anônimo',
      timestamp: Date.now(),
      dataAcesso: new Date(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  } catch (error) {
    console.error('Erro ao salvar acesso:', error);
  }
};

// Função para buscar dados do analytics
export const buscarAnalytics = async () => {
  try {
    const q = query(collection(db, 'acessos'), orderBy('dataAcesso', 'desc'), limit(100));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Erro ao buscar analytics:', error);
    throw error;
  }
};