import React, { createContext, useContext, useState } from 'react';
import AuthModal from '../components/auth/AuthModal';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  openAuthModal: (mode?: 'login' | 'signup' | 'forgot') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  openAuthModal: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialMode, setInitialMode] = useState<'login' | 'signup' | 'forgot'>('login');

  const openAuthModal = (mode: 'login' | 'signup' | 'forgot' = 'login') => {
    setInitialMode(mode);
    setIsModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsModalOpen(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // TODO: Implement logout logic (clear tokens, etc.)
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        openAuthModal,
        logout,
      }}
    >
      {children}
      <AuthModal
        isOpen={isModalOpen}
        onClose={closeAuthModal}
        initialMode={initialMode}
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
