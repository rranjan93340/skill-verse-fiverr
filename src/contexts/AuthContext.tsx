
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  userType: 'buyer' | 'seller' | 'both';
  avatar?: string;
  skills?: string[];
  description?: string;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType?: 'buyer' | 'seller') => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, userType?: 'buyer' | 'seller'): Promise<boolean> => {
    try {
      // Mock authentication - in real app, this would call your backend
      console.log('Login attempt:', { email, password, userType });
      
      // Simulate API call
      const mockUser: User = {
        _id: '1',
        name: 'John Doe',
        email: email,
        userType: userType || 'both',
        avatar: '/placeholder.svg',
        skills: userType === 'seller' ? ['Web Development', 'React', 'Node.js'] : undefined,
        description: userType === 'seller' ? 'Full-stack developer with 5+ years of experience' : undefined,
        company: userType === 'buyer' ? 'Tech Solutions Inc.' : undefined,
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Mock registration - in real app, this would call your backend
      console.log('Register attempt:', userData);
      
      const newUser: User = {
        _id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        userType: userData.userType,
        avatar: '/placeholder.svg',
        skills: userData.skills || undefined,
        description: userData.description || undefined,
        company: userData.company || undefined,
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
