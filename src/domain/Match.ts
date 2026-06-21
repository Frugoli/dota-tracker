type GameMode =
  | "all_pick"
  | "turbo"
  | "single_draft"
  | "random_draft"
  | "ability_draft";

type MatchWinner = "Radiant" | "Dire";

interface MatchProps {
  matchId: string;
  startTime: Date;
  duration: number;
  ranked: boolean;
  gameMode: GameMode;
  winner: MatchWinner;
}

export class Match {
  public readonly matchId: string;
  public readonly ranked: boolean;
  public readonly gameMode: GameMode;
  public readonly winner: MatchWinner;
  public readonly startTime: Date;
  public readonly duration: number;

  constructor(props: MatchProps) {
    if (!props.matchId.trim()) throw new Error("matchId is required!");
    if (props.duration <= 0)
      throw new Error("duration must be greater than zero!");

    this.matchId = props.matchId;
    this.startTime = props.startTime;
    this.duration = props.duration;
    this.ranked = props.ranked;
    this.gameMode = props.gameMode;
    this.winner = props.winner;
  }
}
