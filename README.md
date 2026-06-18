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

## License

MIT
