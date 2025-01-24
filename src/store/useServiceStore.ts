import { create } from 'zustand';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ServiceState {
  services: Service[];
  addServices: (service: Service) => void;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  addServices: (service) => set((state) => ({ services: [...state.services, service] })),
})); 