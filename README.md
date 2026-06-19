# ☕ MNB Heaven – Coffee Shop Website

A modern, responsive landing page for **MNB Heaven Coffee Roasters**, built with plain HTML, CSS, and JavaScript. The site showcases the brand's coffee blends, a hero section, and a dynamically rendered product grid.

![Coffee](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML](https://img.shields.io/badge/HTML5-orange) ![CSS](https://img.shields.io/badge/CSS3-blue) ![JS](https://img.shields.io/badge/JavaScript-yellow)

---

## 📖 About the Project

MNB Heaven is a single-page coffee shop website featuring:

- A fixed navigation header with logo, menu links, and call-to-action buttons
- A hero section introducing the brand with a masked product image
- A **Signature Coffee Blends** product section, dynamically rendered via JavaScript
- A multi-column footer with contact info and social links
- Smooth-scroll navigation for anchor links
- Fully responsive design for mobile and tablet screens

- LIVE SERVER DEMO
https://john9899cse.github.io/MNB.Heaven/

---

## 🗂️ Project Structure

```
mnb-heaven/
├── index.html             # Main HTML page
├── style.css              # All styling (theme variables, layout, responsiveness)
├── script.js              # Smooth scroll + dynamic product rendering
├── 1.jpg                   # Hero image
├── 2.jpg                   # Ethiopian Yirgacheffe product image
├── 3.jpg                   # Colombian Supremo product image
├── 4.jpg                   # Dark Roast Espresso product image
├── start-live-demo.bat    # One-click live server launcher (Windows)
├── start-live-demo.sh     # One-click live server launcher (macOS/Linux)
└── README.md              # Project documentation
```

> **Note:** Make sure the image files (`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`) are placed in the same folder as `index.html`, since they're referenced with relative paths.

---

## 🛠️ Built With

- **HTML5** – semantic page structure
- **CSS3** – custom properties (CSS variables), Flexbox, Grid, animations, media queries
- **JavaScript (Vanilla)** – smooth scrolling and dynamic DOM rendering of product cards
- **[Font Awesome 6](https://fontawesome.com/)** – icons (via CDN)
- **Google Fonts** – `Montserrat` and `Playfair Display`

---

## 🚀 Getting Started

### Prerequisites

You just need a modern web browser. No build tools or package installation required — this is a static site.

### 🟢 One-Click Live Demo (no setup needed)

The fastest way — **double-click the included launcher file** for your operating system and the site opens live in your browser automatically:

| OS | File to double-click |
|---|---|
| 🪟 Windows | `start-live-demo.bat` |
| 🍎 macOS / 🐧 Linux | `start-live-demo.sh` |

What happens when you double-click it:
1. It automatically installs a tiny local server (`live-server`) the first time you run it (needs [Node.js](https://nodejs.org/) installed — one-time setup).
2. It starts the server and **opens your default browser straight to the live site**.
3. The page **auto-refreshes** instantly whenever you edit `index.html`, `style.css`, or `script.js` — true live demo experience.
4. To stop the server, just close the terminal window.

> macOS/Linux only: if double-clicking doesn't run it, right-click → "Open with Terminal", or run `chmod +x start-live-demo.sh` once to make it executable.

### Run with Live Server (VS Code) — one click inside the editor

1. **Open the project folder** in [Visual Studio Code](https://code.visualstudio.com/).
2. **Install the Live Server extension** (by Ritwick Dey) from the Extensions Marketplace, if you don't already have it.
3. Click the **"Go Live"** button in the bottom-right status bar (or right-click `index.html` → **"Open with Live Server"**).
4. Your browser opens automatically at:
   ```
   http://127.0.0.1:5500/index.html
   ```
5. The page auto-reloads on every save.

### Run without any of the above (manual fallback)

- Simply **double-click `index.html`** to open it directly in your browser, **or**
- Run a quick local server from the project folder:
  ```bash
  # Using Python 3
  python -m http.server 5500
  ```
  Then visit `http://localhost:5500` in your browser.

---

## ✨ Features

- 🎨 **Custom coffee-themed color palette** defined via CSS variables (`:root`)
- 📱 **Responsive layout** — adapts nav, hero, and product grid for screens under 768px
- 🖱️ **Smooth scrolling** to in-page anchors (e.g., "Products" nav link)
- 🔄 **Dynamic product rendering** — product cards are generated from a JS array, making it easy to add/edit/remove products without touching HTML
- 🌟 **Hover animations** on product cards (lift effect) and buttons

---

## 📝 Customization Guide

- **Add/edit products:** update the `products` array inside `script.js`.
- **Change brand colors:** update the CSS variables at the top of `style.css` under `:root`.
- **Update contact info / social links:** edit the footer section in `index.html`.
- **Replace images:** swap out `1.jpg`–`4.jpg` with your own (keep the same filenames, or update the `src` attributes accordingly).

---

## ⚠️ Known Issues / To-Do

- Fix typo in CSS class reference: `fa-star   ` has stray whitespace in `index.html` (rating stars for Colombian Supremo) — minor, but worth cleaning up.
- Note: the static rating icons in `index.html` are overwritten by `script.js` on page load (since `loadProducts()` clears and re-renders `.product-grid`), so the icon markup in the HTML is effectively unused — consider removing it to avoid confusion, or removing the JS rendering if you prefer static HTML.
- Add a working "Order Online" / "Sign In" flow (currently placeholder links).
- Add a real "Locations" and "Contacts" page/section.

---

## 📄 License

This project is free to use and modify for personal or commercial purposes.

---

## 📬 Contact

**MNB Heaven Coffee Roasters**
📍 123 Coffee Lane, Mumbai
📞 9100366118
✉️ hello@MNBheaven.com
🕐 Mon–Sat: 7am – 8pm
