import { beforeEach, describe, expect, it } from "vitest";
import { KDA } from "./KDA";

describe("KDA", () => {
  let kda: KDA;

  beforeEach(() => {
    kda = new KDA({
      kills: 12,
      deaths: 3,
      assists: 23,
    });
  });

  it("should calculte ratio", () => {
    expect(kda.ratio).toBeCloseTo(11.67, 2);
  });

  it("should calculate ratio with zero deaths", () => {
    const zeroDeaths = new KDA({
      kills: 12,
      deaths: 0,
      assists: 23,
    });

    expect(zeroDeaths.ratio).toBe(35);
  });

  it("should calculate ratio equals zero", () => {
    const zeroParams = new KDA({
      kills: 0,
      deaths: 0,
      assists: 0,
    });

    expect(zeroParams.ratio).toBe(0);
  });

  it("throw an error with negative kills value", () => {
    expect(
      () =>
        new KDA({
          kills: -4,
          deaths: 0,
          assists: 0,
        }),
    ).toThrow("Invalid number of KDA, they can't be negative");
  });

  it("throw an error with negative deaths value", () => {
    expect(
      () =>
        new KDA({
          kills: 0,
          deaths: -4,
          assists: 0,
        }),
    ).toThrow("Invalid number of KDA, they can't be negative");
  });

  it("throw an error with negative assists value", () => {
    expect(
      () =>
        new KDA({
          kills: 0,
          deaths: 0,
          assists: -4,
        }),
    ).toThrow("Invalid number of KDA, they can't be negative");
  });

  it("should compare equals KDAs", () => {
    const compareKda = new KDA({
      kills: 12,
      deaths: 3,
      assists: 23,
    });

    expect(kda.equals(compareKda)).toBeTruthy();
  });

  it("should compare differents KDAs", () => {
    const compareKda = new KDA({
      kills: 11,
      deaths: 3,
      assists: 23,
    });

    expect(kda.equals(compareKda)).toBeFalsy();
  });
});
