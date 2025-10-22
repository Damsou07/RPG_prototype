import { create } from "zustand";
import type { GameScreen } from "../core/types/screens";

interface GameState {
  currentScreen: GameScreen;
  setScreen: (screen: GameScreen) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentScreen: "START",
  setScreen: (screen) => set({ currentScreen: screen }),
}));
