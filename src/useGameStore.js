import create from 'zustand';

const SCORE_MODIFIER = 5;

const useGameStore = create((set) => ({
  score: 0,
  increment: () => set((state) => ({ score: state.score + SCORE_MODIFIER })),
  decrement: () => set((state) => ({ score: state.score - SCORE_MODIFIER })),
}));

export default useGameStore;