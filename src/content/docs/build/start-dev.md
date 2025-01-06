---
title: How to Start Development
description: Start develop noraneko
---

1. Run `pnpm install`

You can run `pnpm build` and `pnpm dev`.
`pnpm build` outputs files, while `pnpm dev` is used for debugging the code with file watch.
Refer to "How to Debug" for instructions on using `pnpm dev`.

## How to Debug

### Windows

1. Install `gh cli` from [https://cli.github.com/](https://cli.github.com/)
2. Visit [noraneko-runtime Action](https://github.com/nyanrus/noraneko-runtime/actions/workflows/wrapper_windows_build.yml).
3. Go to latest successful build and check the id in url.
   It is run_id and is number.
   the `Release` version is recommended.
4. Run `gh run download -R nyanrus/noraneko-runtime -n noraneko-win-amd64-dev [run_id]`
5. Run `pnpm dev`.
6. The browser will launch, and if you change some files, you could rerun `pnpm dev`.
  If the source you changed supports HMR, it will reload the browser so you'll not need to rerun.

### GNU/Linux

1. Install `gh cli` from [https://cli.github.com/](https://cli.github.com/) and `lbzip2` from your package manager.
2. Visit [noraneko-runtime Action](https://github.com/nyanrus/noraneko-runtime/actions/workflows/wrapper_linux_build.yml).
3. Go to latest successful build and check the id in url.
   It is run_id and is number.
4. Run `gh run download -R nyanrus/noraneko-runtime -n noraneko-linux-amd64-dev [run_id]`
5. Run `mkdir -p _dist/bin`
6. Run `tar --strip-components=1 -xvf ./noraneko-*.tar.bz2 -C _dist/bin`
7. Run `pnpm dev`
8. The browser will launch, and if you change some files, you could rerun `pnpm dev`.
  If the source you changed supports HMR, it will reload the browser so you'll not need to rerun.