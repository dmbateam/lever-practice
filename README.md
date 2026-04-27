# The Lever — Solo Practice

Self-paced single-player version of **The Lever**, the Business Models module diagnostic game from [d.MBA](https://d.mba). Live at:

> **https://dmbateam.github.io/lever-practice/**

A business is broken. Diagnose the root cause, pick your levers, see what holds up over 12 months. ~15 minutes per case, four cases included.

## What this repo is

A static mirror of the solo build. Source of truth for development is the private [`dmbateam/biz-model-game`](https://github.com/dmbateam/biz-model-game) repo (which also hosts the multiplayer/workshop version). This repo only exists so GitHub Pages can serve the site for free.

**Don't edit files here directly.** Changes get overwritten by the next sync.

## EmailJS configuration

End-of-game reflections are emailed to admin@d.mba and a confirmation copy to the player via [EmailJS](https://www.emailjs.com/). Two templates need to be configured (search for `TEMPLATE_ADMIN_LEVER` and `TEMPLATE_CONFIRM_LEVER` in `index.html`).

## Sync

Run from the private `biz-model-game` repo: `./scripts/sync_to_lever_practice.sh`.
