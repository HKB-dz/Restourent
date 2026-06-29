// Relational Database mapping specific items (plates) to their designated food categories
const categoryContent = {
    'birthday-cakes': {
        title: "GÂTEAUX D'ANNIVERSAIRE 🎂",
        subtitle: "🎂 Gâteaux d'Anniversaire",
        desc: "Des créations artisanales faites maison, préparées avec soin à partir d'ingrédients sélectionnés pour allier gourmandise, élégance et authenticité...",
        items: [
            { name: "🍓 Pavlova Fraises (8 Personnes)", price: "4500.00 دج", desc: "Une pavlova légère et gourmande composée d'une meringue croustillante et fondante, garnie d'une crème onctueuse et d'un généreux mélange de fraises fraîches...", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400" },
            { name: "Tarte Saint-Honoré", price: "4500.00 دج", desc: "Une création pâtissière d'exception composée d'une base croustillante et caramélisée...", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400" }
        ]
    },
    'entrances': {
        title: "LES ENTRÉES 🥗",
        subtitle: "🥗 Nos Entrées Fraîches",
        desc: "Commencez votre repas en beauté avec nos entrées légères, croquantes et savoureuses.",
        items: [
            { name: "Salade César Poulet", price: "850.00 دج", desc: "Romaine croquante, filets de poulet grillé, copeaux de parmesan et sauce César maison.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400" },
            { name: "Burrata Crémeuse", price: "1200.00 دج", desc: "Burrata fraîche servie sur un lit de tomates cerises confites et pesto basilic.", img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=400" }
        ]
    },
    'specials': {
        title: "LES PLATS DU JOUR 🍽️",
        subtitle: "🍽️ Plats du Jour",
        desc: "Chaque jour, découvrez une suggestion unique cuisinée selon l'inspiration du chef.",
        items: [
            { name: "Entrecôte Grillée", price: "2400.00 دج", desc: "Entrecôte tendre accompagnée de frites maison et d'un beurre maître d'hôtel.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" }
        ]
    },
    'pizza': {
        title: "PIZZA 🍕",
        subtitle: "🍕 Nos Pizzas Artisanales",
        desc: "Une pâte fine reposée 48h, des ingrédients frais et une cuisson parfaite.",
        items: [
            { name: "Pizza Margherita Classique", price: "800.00 دج", desc: "Sauce tomate maison, mozzarella de bufflonne, basilic frais et un filet d'huile d'olive.", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400" },
            { name: "Pizza Quatre Fromages", price: "1100.00 دج", desc: "Mozzarella, gorgonzola, chèvre, et parmesan fondu sur une base crème.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" }
        ]
    },
    'pasta': {
        title: "NOS PATES 🍝",
        subtitle: "🍝 Pâtes Fraîches Maison",
        desc: "Nos pâtes traditionnelles confectionnées avec amour à l'italienne.",
        items: [
            { name: "Homemade Spaghetti Carbonara", price: "900.00 دج", desc: "Prepared with our pasta, this spaghetti is topped with a creamy egg and guanciale.", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400" },
            { name: "Spaghetti Bolognese", price: "1000.00 دج", desc: "Served with genuine Bolognese sauce simmered for a long time. An authentic recipe.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" }
        ]
    },
    'burgers': {
        title: "SANDWICHES / BURGERS 🍔",
        subtitle: "🍔 Burgers Gourmets & Sandwiches",
        desc: "Du pain artisanal brioché et de la viande premium hachée minute.",
        items: [
            { name: "Le Classic Cheeseburger", price: "950.00 دج", desc: "Steak de bœuf, cheddar fondant, cornichons et notre sauce secrète maison.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" }
        ]
    },
    'desserts': {
        title: "DESSERTS 🍰",
        subtitle: "🍰 Douceurs Sucrées",
        desc: "Terminez votre repas sur une note douce avec nos créations pâtissières.",
        items: [
            { name: "Tiramisu Traditionnel", price: "550.00 دج", desc: "Mascarpone onctueux, biscuits imbibés de café fort et cacao amer.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" }
        ]
    },
    'cold-drinks': {
        title: "BOISSONS FRAÎCHES 🧃",
        subtitle: "🧃 Rafraîchissements",
        desc: "Sélection de boissons bien fraîches pour accompagner vos repas.",
        items: [
            { name: "Citronnade Maison Menthe", price: "350.00 دج", desc: "Citrons pressés minute, menthe fraîche et sucre de canne.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400" }
        ]
    }
};

// Global Flat Database Layer dedicated solely to Search Function matching
const searchDatabase = [
    { name: "Cheese border supplement", keywords: ["bo", "boi", "cheese", "border"], price: "200.00 دج", desc: "A melting cheese crust for even more pleasure in every bite.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
    { name: "Homemade Spaghetti Carbonara", keywords: ["bo", "spaghetti", "carbonara", "pasta"], price: "900.00 دج", desc: "Prepared with our pasta, this spaghetti is topped with a creamy egg.", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400" },
    { name: "Spaghetti bolognese", keywords: ["bo", "spaghetti", "bolognese", "pasta"], price: "1000.00 دج", desc: "Served with genuine Bolognese sauce simmered for a long time.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" }
];

// Multi-lingual translation UI state tracking object
const translations = {
    en: { "rating": "4.5 · Excellent", "reviews": "339 ratings", "info-title": "Info", "info-desc": "Phone, Address and Social media" },
    fr: { "rating": "4.5 · Excellent", "reviews": "339 avis", "info-title": "Info", "info-desc": "Téléphone, Adresse et Réseaux sociaux" },
    ar: { "rating": "4.5 · ممتاز", "reviews": "339 تقييمات", "info-title": "معلومات", "info-desc": "الهاتف، العنوان وشبكات التواصل" }
};

// UI Element Hook Selectors
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const currentLangSpan = document.getElementById('current-lang');
const appContainer = document.querySelector('.app-container');

// View Control Operations
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// Category selection pipeline engine
function openCategory(catKey) {
    const data = categoryContent[catKey];
    if (!data) return;

    // Write contents dynamically to the subview layout variables
    document.getElementById('category-title').textContent = data.title;
    document.getElementById('dynamic-category-subtitle').textContent = data.subtitle;
    document.getElementById('dynamic-category-desc').textContent = data.desc;

    // Construct and inject list of food plates mapped to this group
    const platesListContainer = document.getElementById('dynamic-plates-list');
    platesListContainer.innerHTML = data.items.map(item => `
        <div class="menu-item" onclick="openPreview('${item.name.replace(/'/g, "\\'")}', '${item.price}', '${item.desc.replace(/'/g, "\\'")}', '${item.img}')">
            <div class="item-details">
                <h5>${item.name}</h5>
                <p class="item-desc">${item.desc}</p>
                <span class="price">${item.price}</span>
            </div>
            <img src="${item.img}" alt="${item.name}">
        </div>
    `).join('');

    switchView('category-view');
}

function goBackToMain() {
    switchView('main-view');
}

// Language Selector interactions and properties
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('show');
});

document.addEventListener('click', () => langMenu.classList.remove('show'));

langMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = item.getAttribute('data-lang');
        currentLangSpan.textContent = item.textContent;
        applyLanguage(selectedLang);
    });
});

function applyLanguage(lang) {
    if (lang === 'ar') {
        appContainer.classList.add('rtl');
    } else {
        appContainer.classList.remove('rtl');
    }
    const dict = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
}

// Preview Modal Sheet Overlay logic routines
function openPreview(name, price, desc, imgSrc) {
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('preview-modal').classList.add('show');
}

function closePreview() {
    document.getElementById('preview-modal').classList.remove('show');
}

// Search Operations Implementation
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchStatus = document.getElementById('search-status');

document.getElementById('open-search').addEventListener('click', () => switchView('search-view'));
document.getElementById('category-search-btn').addEventListener('click', () => switchView('search-view'));
document.getElementById('close-search').addEventListener('click', () => {
    searchInput.value = "";
    searchResults.innerHTML = "";
    searchStatus.style.display = "block";
    searchStatus.textContent = "Type to search menu...";
    switchView('main-view');
});

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (!value) {
        searchResults.innerHTML = "";
        searchStatus.style.display = "block";
        searchStatus.textContent = "Type to search menu...";
        return;
    }

    const hits = searchDatabase.filter(item => 
        item.name.toLowerCase().includes(value) || 
        item.keywords.some(keyword => keyword.startsWith(value))
    );

    if(hits.length === 0) {
        searchResults.innerHTML = "";
        searchStatus.style.display = "block";
        searchStatus.textContent = `No results found for "${value}"`;
    } else {
        searchStatus.style.display = "none";
        searchResults.innerHTML = hits.map(item => `
            <div class="menu-item" onclick="openPreview('${item.name.replace(/'/g, "\\'")}', '${item.price}', '${item.desc.replace(/'/g, "\\'")}', '${item.img}')">
                <div class="item-details">
                    <h5>${item.name}</h5>
                    <p class="item-desc">${item.desc}</p>
                    <span class="price">${item.price}</span>
                </div>
                <img src="${item.img}" alt="${item.name}">
            </div>
        `).join('');
    }
});