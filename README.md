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

---

## 🗂️ Project Structure

```
mnb-heaven/
├── index.html        # Main HTML page
├── style.css         # All styling (theme variables, layout, responsiveness)
├── script.js         # Smooth scroll + dynamic product rendering
├── 1.jpg              # Hero image
├── 2.jpg              # Ethiopian Yirgacheffe product image
├── 3.jpg              # Colombian Supremo product image
├── 4.jpg              # Dark Roast Espresso product image
└── README.md         # Project documentation
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

### Run with Live Server (VS Code)

1. **Clone or download** this project to your computer.
2. **Open the project folder** in [Visual Studio Code](https://code.visualstudio.com/).
3. **Install the Live Server extension** (by Ritwick Dey) from the VS Code Extensions Marketplace, if you don't already have it.
4. In the file explorer, **right-click `index.html`** and select **"Open with Live Server"**.
   - Or click the **"Go Live"** button in the bottom-right status bar.
5. Your default browser will open automatically at something like:
   ```
   http://127.0.0.1:5500/index.html
   ```
6. Live Server will auto-reload the page whenever you save changes to `index.html`, `style.css`, or `script.js`.

### Run without Live Server (alternative)

If you don't use VS Code, you can still preview the site by:

- Simply **double-clicking `index.html`** to open it directly in your browser, **or**
- Running a quick local server from the project folder:
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
