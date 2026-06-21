import { KDA } from "./KDA";

interface HeroPerformanceProps {
  matchId: string;
  steamId: string;
  heroId: number;
  team: "Radiant" | "Dire";
  kda: KDA;
  gpm: number;
  xpm: number;
  lastHits: number;
  denies: number;
  items: number[];
  neutralItem: number;
  backpack: number[];
  skillBuild: number[];
  wardsPlaced: number;
}
