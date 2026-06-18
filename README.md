# Dota Tracker

A TypeScript backend project to fetch and track Dota 2 player stats, match history, and inventory data, using the Steam Web API and the OpenDota API.

_[Versão em português aqui](./README.pt-BR.md)_

## Why I'm building this

I'm building this project to learn object-oriented design and TypeScript in a deeper way — not just the syntax, but how domain modeling, encapsulation, and test-driven development really work. Every entity here started as a test, written before the actual code existed.

This is a work in progress, and that's on purpose. The commit history shows how the design changed over time, including some back and forth on naming and architecture.

## Status

🚧 Early stage — I'm building the domain entities first, with full test coverage, before connecting any real API.

- [x] `Player` entity (profile, status, MMR, sync logic)
- [ ] `Match` entity
- [ ] `Hero` entity
- [ ] Steam Web API integration
- [ ] OpenDota API integration
- [ ] REST API layer

## Tech stack

- TypeScript
- Vitest for testing
- Steam Web API (player profile, inventory)
- OpenDota API (match history, hero stats)

## Getting started

```bash
npm install
npm test
```

## Project structure

```
src/
  domain/
    Player.ts
    Player.test.ts
```

More entities and an integration layer will be added as the project grows.

## Design decisions worth mentioning

A few choices I made while building this, in case they help anyone reading the code:

- `estimatedMmr` is `number | null` instead of defaulting to `0`. A null MMR means "not calculated yet", which is different from an actual MMR of zero.
- Entities validate their own data inside the constructor (for example, `steamId` and `name` can't be empty), instead of trusting whoever creates them.
- Fields that already come calculated from an external API (like `hoursPlayed`) live directly on the entity. Fields that need to be calculated from a list of other entities (like total ranked matches) will be methods instead, once the `Match` entity exists.

## License

MIT
