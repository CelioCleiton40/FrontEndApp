import { create } from 'zustand';

// Definindo os tipos para o estado
interface Sala {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface StoreState {
  salas: Sala[];
  addSala: (sala: Sala) => void;
  removeSala: (id: number) => void;
}

// Criando a loja Zustand
export const useStore = create<StoreState>((set) => ({
  salas: [],
  addSala: (sala) => set((state) => ({ salas: [...state.salas, sala] })),
  removeSala: (id) => set((state) => ({ salas: state.salas.filter((sala) => sala.id !== id) })),
}));