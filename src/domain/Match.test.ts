import { beforeEach, describe, expect, it } from "vitest";
import { Match } from "./Match";

describe("Match", () => {
  let match: Match;

  beforeEach(() => {
    match = new Match({
      matchId: "abc-123",
      gameMode: "single_draft",
      ranked: true,
      duration: 600,
      startTime: new Date(),
      winner: "Radiant",
    });
  });

  it("should create a match", () => {
    expect(match.gameMode).toBe("single_draft");
    expect(match.winner).toBe("Radiant");
    expect(match.ranked).toBe(true);
    expect(match.duration).toBe(600);
    expect(match.matchId).toBe("abc-123");
  });

  it("should throw an error when matchId is empty", () => {
    expect(
      () =>
        new Match({
          matchId: "",
          gameMode: "single_draft",
          ranked: true,
          duration: 600,
          startTime: new Date(),
          winner: "Radiant",
        }),
    ).toThrow("matchId is required!");
  });

  it("should throw an error when duration is empty", () => {
    expect(
      () =>
        new Match({
          matchId: "abc-123",
          gameMode: "single_draft",
          ranked: true,
          duration: 0,
          startTime: new Date(),
          winner: "Radiant",
        }),
    ).toThrow("duration must be greater than zero!");
  });
});
