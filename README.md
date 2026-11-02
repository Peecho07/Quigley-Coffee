# Quigley Coffee Company — website

Static multi-page site (no build step). Each page is its own tab in the top navigation:

| Tab | File |
|---|---|
| Home | `index.html` |
| Menu | `menu.html` |
| Coffee cart | `coffee-cart.html` |
| Q Club | `q-club.html` |
| Own a cart | `own-a-cart.html` |
| Visit | `contact.html` |

Shared styles in `styles.css`, shared behavior (open-now badge, mobile menu, quote-form prefill) in `script.js`.
See `IMPROVEMENTS.md` for build notes and the before-launch checklist.

Preview locally: `python3 -m http.server` and open http://localhost:8000.
