type PlayerStatus = "Online" | "Offline" | "Away" | "Invisible";

interface PlayerProps {
  steamId: string;
  name: string;
  avatarUrl: string | null;
  status: PlayerStatus | null;
  estimatedMmr: number | null;
  hoursPlayed: number;
}

export class Player {
  public readonly steamId: string;

  public name: string;
  public avatarUrl: string | null;
  public status: PlayerStatus | null;
  public estimatedMmr: number | null;
  public hoursPlayed: number;

  constructor(props: PlayerProps) {
    if (!props.steamId) throw new Error("steamId is required!");
    if (!props.name) throw new Error("name is required!");

    this.steamId = props.steamId;
    this.name = props.name;
    this.avatarUrl = props.avatarUrl;
    this.status = props.status;
    this.estimatedMmr = props.estimatedMmr;
    this.hoursPlayed = props.hoursPlayed;
  }

  syncProfile(params: Partial<Omit<PlayerProps, "steamId">>): void {
    if (params.name !== undefined) this.name = params.name;
    if (params.avatarUrl !== undefined) this.avatarUrl = params.avatarUrl;
    if (params.status !== undefined) this.status = params.status;

    if (params.estimatedMmr !== undefined) {
      if (params.estimatedMmr !== null && params.estimatedMmr < 0) {
        throw new Error("MMR cannot be negative");
      }

      this.estimatedMmr = params.estimatedMmr;
    }

    if (params.hoursPlayed !== undefined) this.hoursPlayed = params.hoursPlayed;
  }
}
