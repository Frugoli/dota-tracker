interface KDAProps {
  kills: number;
  deaths: number;
  assists: number;
}

export class KDA {
  public readonly kills: number;
  public readonly deaths: number;
  public readonly assists: number;

  constructor(props: KDAProps) {
    if (props.kills < 0)
      throw new Error("Invalid number of KDA, they can't be negative");
    if (props.deaths < 0)
      throw new Error("Invalid number of KDA, they can't be negative");
    if (props.assists < 0)
      throw new Error("Invalid number of KDA, they can't be negative");

    this.kills = props.kills;
    this.deaths = props.deaths;
    this.assists = props.assists;
  }

  get ratio(): number {
    if (this.deaths === 0) return this.kills + this.assists;
    return Math.round(((this.kills + this.assists) / this.deaths) * 100) / 100;
  }

  equals(other: KDA): boolean {
    return (
      this.kills === other.kills &&
      this.deaths === other.deaths &&
      this.assists === other.assists
    );
  }
}
