# Turborepo full stack starter

This Turborepo starter is maintained by Yuvaraj.

# How it look now:

<img width="1590" alt="Screenshot 2025-06-22 at 12 59 22 PM" src="https://github.com/user-attachments/assets/9a45da4c-41b0-4c09-9514-1ae32a561ff9" />
<img width="1710" alt="Screenshot 2025-06-27 at 11 04 24 AM" src="https://github.com/user-attachments/assets/de862de9-2a28-49dd-b523-83f8be91a595" />
<img width="1710" alt="Screenshot 2025-06-27 at 11 04 17 AM" src="https://github.com/user-attachments/assets/072d4608-e21b-4162-8f64-a4da7e9a6d97" />
<img width="1649" alt="Screenshot 2025-06-27 at 11 04 05 AM" src="https://github.com/user-attachments/assets/3fdbc117-f33b-4f58-be57-f2347553c02e" />



## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/trpc-schema`: `trpc`s used throughout the monorepo single source of truth. in feature if moving to micro service need see how to merge multiple TRPC schemas.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build Do the build 1st before you run any of the server. some packages needs to be transpiled the JIT compilation is creating issue in the nest.js dist folder in feature will fix it and make it no build require.

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo: (read this first to understand the turborepo)

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
