import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  sendRecoveryEmail: (email: string) => Promise<{ success: boolean }>;
  registerUser: (userData: { name: string; email: string; password: string }) => Promise<{ success: boolean }>;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  sendRecoveryEmail: async (email) => {
    try {
      // Implemente aqui a lógica de envio do email
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  },
  registerUser: async (userData) => {
    try {
      // Implemente aqui a lógica de registro
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  },
}));

export default useAuthStore;