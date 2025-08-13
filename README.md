# TypeScript Boilerplate

Minimal, publish-ready TypeScript library setup with tests, docs, builds, and CI/CD.

## Tech stack

- [Bun](https://bun.sh) — dependency management and scripts
- [TypeScript](https://www.typescriptlang.org) — strict configuration
- [Vitest](https://vitest.dev) — testing and coverage
- [Biome](https://biomejs.dev) — formatting and linting
- [publint](https://publint.dev) — package readiness checks
- [tsup](https://tsup.egoist.dev) — ESM + CJS bundles with types and sourcemaps
- [TypeDoc](https://typedoc.org) — docs generation to `docs/`
- [Changesets](https://github.com/changesets/changesets) — versioning and release management

## Project layout

```sh
.changeset
└── config.json           # Release config
.github
└── workflows             # GitHub Actions workflows
.vscode
└── settings.json         # Shared VS Code settings
src                       
├── exports               # Public API (configured in `tsup.config.ts` & `package.json`)
└── ...                   # Source files
.gitignore
.prettierrc.cjs           # Formatting config for languages not supported by Biome
biome.json                # Formatting & linting config
bun.lock                  # Dependency lockfile
LICENSE
package.json              # Package manifest
README.md
tsconfig.json             # TypeScript config
tsup.config.ts            # Build config
typedoc.json              # Docs generation config
vitest.config.ts          # Testing config
```

## Local development

Install dependencies:

```sh
bun install
```

Common scripts:

```sh
# Typecheck + Biome
bun run check

# Auto-fix formatting/lint issues
bun run fix

# Tests
bun run test
bun run test:watch
bun run test:coverage

# Build library
bun run build
bun run build:watch

# Generate docs (outputs to ./docs)
bun run build:docs

# Validate package exports/metadata
bun run check:package
```

## Docs

- Generated with TypeDoc to `./docs`
- CI deploys to GitHub Pages on pushes to `main`

## Releases (Changesets + CI)

1. Create a changeset locally: `bunx changeset`
2. Commit and push. The Release workflow opens/updates a version PR.
3. Merge the version PR into `main` to publish to npm and create tags.

Requirements: `NPM_TOKEN` repo secret (used by the Release workflow).

## CI/CD

- [`.github/workflows/pull-request.yml`](./.github/workflows/pull-request.yml) — runs check, build,
  and tests on PRs
- [`.github/workflows/docs-pages.yml`](./.github/workflows/docs-pages.yml) — builds TypeDoc and
  deploys to GitHub Pages
- [`.github/workflows/release.yml`](./.github/workflows/release.yml) — manages version PRs and
  publishes to npm

## License

This boilerplate uses the Apache-2.0 license by default, but the boilerplate itself is provided
without restrictions. You can change the license in [`LICENSE`](./LICENSE) and
[`package.json`](./package.json) as needed.