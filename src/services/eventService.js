import { apiService } from "./apiService";

export const createEvent = async (eventData) => {
    try {
      const response = await apiService.post('/Event', eventData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar o evento:', error);
      throw error;
    }
  };
  
  // Função para buscar todos os eventos (GET)
  export const getEvents = async () => {
    try {
      const response = await apiService.get('/Event');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os eventos:', error);
      throw error;
    }
  };
  
  // Função para buscar um evento específico pelo ID (GET)
  export const getEventById = async (id) => {
    try {
      const response = await apiService.get(`/Event/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o evento com ID ${id}:`, error);
      throw error;
    }
  };
  
  // Função para atualizar um evento pelo ID (PUT)
  export const updateEvent = async (id, eventData) => {
    try {
      const response = await apiService.put(`/Event/${id}`, eventData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar o evento com ID ${id}:`, error);
      throw error;
    }
  };
  
  // Função para deletar um evento pelo ID (DELETE)
  export const deleteEvent = async (id) => {
    try {
      const response = await apiService.delete(`/Event/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar o evento com ID ${id}:`, error);
      throw error;
    }
  };