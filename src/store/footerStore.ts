import { create } from 'zustand';

interface FooterState {
  year: number;
  updateYear: (newYear: number) => void;
}

export const useFooterStore = create<FooterState>((set) => ({
  year: new Date().getFullYear(), // Define o ano atual
  updateYear: (newYear) => set({ year: newYear }), // Função para atualizar o ano
}));