import { beforeEach, describe, expect, it } from "vitest";
import { Player } from "./Player";

describe("Player", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player({
      name: "John",
      steamId: "abc-123",
      status: "Online",
      avatarUrl: "https://avatar-image",
      estimatedMmr: 4012,
      hoursPlayed: 800,
    });
  });

  it("should create a player with steamId and name", () => {
    expect(player.steamId).toBe("abc-123");
    expect(player.name).toBe("John");
    expect(player.avatarUrl).toBe("https://avatar-image");
    expect(player.hoursPlayed).toBe(800);
    expect(player.estimatedMmr).toBe(4012);
  });

  it("should get player status", () => {
    expect(player.status).toBe("Online");
  });

  it("should update player info", () => {
    player.syncProfile({
      status: "Offline",
      estimatedMmr: 4037,
      hoursPlayed: 832,
    });

    expect(player.status).toBe("Offline");
    expect(player.estimatedMmr).toBe(4037);
    expect(player.hoursPlayed).toBe(832);
    expect(player).toBeInstanceOf(Player);
  });

  it("should update estimated mmr", () => {
    player.syncProfile({ estimatedMmr: 4038 });
    expect(player.estimatedMmr).toBe(4038);
  });

  it("should reset estimated mmr", () => {
    player.syncProfile({ estimatedMmr: null });
    expect(player.estimatedMmr).toBe(null);
  });

  it("should throw an error when steamId is empty", () => {
    expect(
      () =>
        new Player({
          steamId: "",
          name: "John",
          status: "Online",
          avatarUrl: "https://avatar-image",
          estimatedMmr: 4012,
          hoursPlayed: 800,
        }),
    ).toThrow("steamId is required!");
  });

  it("should throw an error when name is empty", () => {
    expect(
      () =>
        new Player({
          steamId: "abc-123",
          name: "",
          status: "Online",
          avatarUrl: "https://avatar-image",
          estimatedMmr: 4012,
          hoursPlayed: 800,
        }),
    ).toThrow("name is required!");
  });

  it("should throw an error when updating with negative mmr", () => {
    expect(() => {
      player.syncProfile({ estimatedMmr: -100 });
    }).toThrow("MMR cannot be negative");
  });
});
