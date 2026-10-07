# Jurnal Learn English

Personal, offline-first English learning dashboard.

## Production rules
- Fresh install starts with **zero user data**.
- No sample learning history, vocabulary, resources, goals, or progress is bundled.
- Learning data is stored locally in the app/browser.
- No API keys, tokens, passwords, or personal learning history are committed.
- The repository contains only application source/assets.
- GitHub Pages can publish the static frontend.

## Structure
- `index.html` UI shell
- `css/style.css` styles
- `js/app.js` application logic and local data
- `manifest.webmanifest` installable PWA metadata
- `service-worker.js` offline app shell
- `assets/icon.svg` app icon

## Data
The application initializes empty collections. User data is created only after the user logs learning activity.

## Deployment
This is a static frontend and does not require a backend or API key for its local features. GitHub Pages can host the static files.