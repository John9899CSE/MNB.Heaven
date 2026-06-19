document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

async function loadProducts() {
    const products = [
        {
            img: '2.jpg',
            title: 'Ethiopian Yirgacheffe',
            desc: 'Floral notes with bright citrus acidity and a tea-like body. Light roast.',
            price: '18.99',
            rating: '4.5',
            tag: 'BESTSELLER'
        },
        {
            img: '3.jpg',
            title: 'Colombian Supremo',
            desc: 'Rich caramel sweetness with nutty undertones and balanced acidity. Medium roast.',
            price: '16.99',
            rating: '4.0'
        },
        {
            img: '4.jpg',
            title: 'Dark Roast Espresso',
            desc: 'Bold notes and a creamy mouthfeel. Dark roast.',
            price: '17.99',
            rating: '5.0',
            tag: 'NEW'
        }
    ];
    const grid = document.querySelector('.product-grid');

    if (!grid) {
        console.error('Product grid element not found.');
        return;
    }

    grid.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${p.img}" alt="${p.title}">
                ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-footer">
                    <div class="product-price">$${p.price}</div>
                    <div class="rating">⭐ ${p.rating}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);

        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-15px)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
    });
}

loadProducts();