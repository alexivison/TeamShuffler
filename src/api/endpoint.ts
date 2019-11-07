import api from './index'
import { Member } from './models/Member'
import { Shuffle } from './models/Shuffle'

// Routes
export const Members = {
  get: (): Promise<Member[]> => api.get('/members'),
  getShuffled: (): Promise<Shuffle> => api.get('/members/shuffle'),
  post: (name: string): Promise<void> => api.post('/members', { name }),
  delete: (id: number): Promise<void> => api.delete(`/members/${id}`),
}
