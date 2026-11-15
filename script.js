/* ============================================================
   Ly Fragranza — Perfumería Original
   Catálogo + carrito + pedido por WhatsApp
   ============================================================ */

// 👉 TU NÚMERO DE WHATSAPP (código de país, sin + ni espacios)
const WHATSAPP = "573185705180";

/* ---------- CARRUSEL / PORTADA ----------
   Diseña tus banners a 1920 x 760 px y ponlos en la carpeta banners/.
   Agrega aquí cada imagen. "link" es opcional (a dónde lleva al hacer clic):
   usa "#catalogo" u otra sección, o déjalo en "" para que no sea clicable.
*/
const BANNERS = [
  { img: "banners/1.png", link: "#catalogo", alt: "Colección de perfumes Ly Fragranza" },
  { img: "banners/2.png", link: "#catalogo", alt: "Perfumes árabes" },
  { img: "banners/3.png", link: "#catalogo", alt: "Colección especial" },
];
const CARRUSEL_SEGUNDOS = 5; // cada cuántos segundos cambia solo

/* ---------- PRODUCTOS ----------
   Edita, agrega o quita perfumes libremente.
   categoria: "mujer" | "hombre" | "unisex"
   tag: etiqueta opcional ("Nuevo", "-20%", etc.) o ""
   Para usar una foto real en vez de la ilustración:
   añade  img: "images/mi-foto.png"  al producto.
*/
const PRODUCTOS = [
  { id: 1, nombre: "Versace Pour Homme",       categoria: "hombre", precio: 350000, tag: "",      desc: "EDT 100 ml · Fougère aromática fresca, cítrica y elegante.", img: "imegen_perfumes/1.webp" },
  { id: 2, nombre: "Versace Man Eau Fraîche",  categoria: "hombre", precio: 240000, tag: "",      desc: "EDT 100 ml · Amaderada acuática mediterránea, ligera y deportiva.", img: "imegen_perfumes/2.webp" },
  { id: 3, nombre: "Versace Eros",             categoria: "hombre", precio: 480000, tag: "Top",   desc: "Parfum 100 ml · Fougère dulce con menta y vainilla, seductor y potente.", img: "imegen_perfumes/3.webp" },
  { id: 4, nombre: "CK One",                   categoria: "unisex", precio: 330000, tag: "",      desc: "EDT 200 ml · Cítrica limpia y juvenil, un clásico unisex.", img: "imegen_perfumes/4.webp" },
  { id: 5, nombre: "Montblanc Starwalker",     categoria: "hombre", precio: 190000, tag: "",      desc: "EDT 75 ml · Amaderada especiada con bambú, discreta y versátil.", img: "imegen_perfumes/5.webp" },
  { id: 6, nombre: "CH 212 Men NYC",           categoria: "hombre", precio: 450000, tag: "",      desc: "EDT 100 ml · Amaderada floral con almizcle, urbana y limpia.", img: "imegen_perfumes/6.webp" },
  { id: 7, nombre: "Orientica Amber Rouge",    categoria: "unisex", precio: 395000, tag: "",      desc: "EDP 80 ml · Amaderada ambarada dulce, con gran estela (tipo Baccarat Rouge 540).", img: "imegen_perfumes/7.webp" },
  { id: 8, nombre: "Orientica Velvet Gold",    categoria: "mujer",  precio: 395000, tag: "",      desc: "EDP 80 ml · Floral polvosa y sensual, elegante y de buena duración.", img: "imegen_perfumes/8.webp" },
  { id: 9, nombre: "Orientica Amber Noir",     categoria: "unisex", precio: 395000, tag: "",      desc: "EDP 80 ml · Amaderada oriental cremosa, cálida y versátil.", img: "imegen_perfumes/9.webp" },
  { id: 10, nombre: "Orientica Royal Amber",   categoria: "unisex", precio: 395000, tag: "",      desc: "EDP 80 ml · Frutal ambarada con vainilla, llamativa y de gran proyección.", img: "imegen_perfumes/10.webp" },
  { id: 11, nombre: "Orientica Azure Fantasy", categoria: "unisex", precio: 550000, tag: "Top",   desc: "EDP 80 ml · Fresca especiada y floral cremosa, luminosa y versátil.", img: "imegen_perfumes/11.webp" },
  { id: 12, nombre: "Orientica Royal Bleu",    categoria: "unisex", precio: 395000, tag: "",      desc: "EDP 80 ml · Aromática amaderada especiada, elegante para diario y noche.", img: "imegen_perfumes/12.webp" },
  { id: 13, nombre: "Khamrah Lattafa",         categoria: "unisex", precio: 150000, tag: "",      desc: "EDP 100 ml · Gourmand oriental dulce y especiada, envolvente.", img: "imegen_perfumes/13.webp" },
  { id: 14, nombre: "Khamrah Qahwa Lattafa",   categoria: "unisex", precio: 170000, tag: "",      desc: "EDP 100 ml · Vainilla oriental gourmand con café, dulce y especiada.", img: "imegen_perfumes/14.webp" },
  { id: 15, nombre: "Khamrah Dukhan Lattafa",  categoria: "unisex", precio: 190000, tag: "",      desc: "EDP 100 ml · Oriental ahumada y oscura, intensa con fondo dulce.", img: "imegen_perfumes/15.webp" },
  { id: 16, nombre: "Khamrah Waha Lattafa",    categoria: "unisex", precio: 320000, tag: "",      desc: "EDP 100 ml · Aromática acuática fresca con fondo dulce, versátil.", img: "imegen_perfumes/16.webp" },
  { id: 17, nombre: "Asad Lattafa",            categoria: "hombre", precio: 165000, tag: "",      desc: "EDP 100 ml · Oriental especiada oscura, potente (inspirada en Creed Aventus).", img: "imegen_perfumes/17.webp" },
  { id: 18, nombre: "Asad Bourbon Lattafa",    categoria: "hombre", precio: 165000, tag: "",      desc: "EDP 100 ml · Oriental especiada cálida y achocolatada, cremosa.", img: "imegen_perfumes/18.webp" },
  { id: 19, nombre: "Asad Elixir Lattafa",     categoria: "hombre", precio: 230000, tag: "",      desc: "EDP 100 ml · Oriental amaderada y ahumada, especiada con toque de vainilla.", img: "imegen_perfumes/19.webp" },
  { id: 20, nombre: "Yara Tous Lattafa",       categoria: "mujer",  precio: 230000, tag: "",      desc: "EDP 100 ml · Floral frutal tropical y cremosa, jugosa y suave.", img: "imegen_perfumes/20.webp" },
  { id: 21, nombre: "Yara Moi Lattafa",        categoria: "mujer",  precio: 230000, tag: "",      desc: "EDP 100 ml · Amaderada floral frutal dulce, cálida y envolvente.", img: "imegen_perfumes/21.webp" },
  { id: 22, nombre: "Yara Candy Lattafa",      categoria: "mujer",  precio: 170000, tag: "",      desc: "EDP 100 ml · Floral frutal gourmand tipo golosina, muy dulce y juvenil.", img: "imegen_perfumes/22.webp" },
  { id: 23, nombre: "Yara Rosada Lattafa",     categoria: "mujer",  precio: 120000, tag: "",      desc: "EDP 100 ml · Vainilla oriental gourmand, cremosa tipo crema de fresa.", img: "imegen_perfumes/23.webp" },
  { id: 24, nombre: "One Million",             categoria: "hombre", precio: 495000, tag: "",      desc: "EDT 100 ml · Amaderada especiada dulce e icónica, potente y seductora.", img: "imegen_perfumes/24.webp" },
  { id: 25, nombre: "Guess Dama",              categoria: "mujer",  precio: 150000, tag: "",      desc: "EDP 75 ml · Floral frutal fresca y juvenil, ligera para diario.", img: "imegen_perfumes/25.webp" },
  { id: 26, nombre: "Acqua di Giò",            categoria: "hombre", precio: 495000, tag: "",      desc: "EDT 100 ml · Acuática aromática mediterránea, fresca y atemporal.", img: "imegen_perfumes/26.webp" },
  { id: 27, nombre: "Curve",                   categoria: "hombre", precio: 150000, tag: "",      desc: "Eau de Cologne 125 ml · Aromática verde-cítrica ligera y limpia, casual.", img: "imegen_perfumes/27.webp" },
  { id: 28, nombre: "L'Eau d'Issey Pour Homme",categoria: "hombre", precio: 290000, tag: "",      desc: "EDT 125 ml · Amaderada acuática muy limpia, fresca y sofisticada.", img: "imegen_perfumes/28.webp" },
  { id: 29, nombre: "Angel Elixir",            categoria: "mujer",  precio: 510000, tag: "",      desc: "EDP 100 ml · Floral gourmand amaderado, cremoso y envolvente.", img: "imegen_perfumes/29.webp" },
  { id: 30, nombre: "Good Girl",               categoria: "mujer",  precio: 590000, tag: "Top",   desc: "EDP 80 ml · Floral oriental gourmand, sensual y adictiva, gran duración.", img: "imegen_perfumes/30.webp" },
  { id: 31, nombre: "Creed Silver Mountain Water", categoria: "unisex", precio: 1750000, tag: "Nicho", desc: "EDP 100 ml · Fresca amaderada alpina (nicho), cítrica y elegante.", img: "imegen_perfumes/31.webp" },
  { id: 32, nombre: "Hawas Reina",             categoria: "unisex", precio: 260000, tag: "",      desc: "EDP 100 ml · Floral frutal gourmand tropical, dulce y cálida.", img: "imegen_perfumes/32.webp" },
  { id: 33, nombre: "Hawas Venom",             categoria: "hombre", precio: 260000, tag: "",      desc: "EDP 100 ml · Oriental amaderada ahumada con cuero, intensa.", img: "imegen_perfumes/33.webp" },
  { id: 34, nombre: "Hawas Elixir",            categoria: "unisex", precio: 260000, tag: "",      desc: "EDP 100 ml · Vainilla oriental gourmand con chocolate, cremosa y versátil.", img: "imegen_perfumes/34.webp" },
  { id: 35, nombre: "Al Haramain Amber Oud (Negra)", categoria: "unisex", precio: 410000, tag: "", desc: "EDP 120 ml · Vainilla oriental frutal (tipo Erba Pura), melón dulce y gran duración.", img: "imegen_perfumes/35.webp" },
  { id: 36, nombre: "Al Haramain Amber Oud Gold Edition", categoria: "unisex", precio: 410000, tag: "", desc: "EDP 120 ml · Vainilla oriental frutal ambarada, dulce y de gran proyección.", img: "imegen_perfumes/36.webp" },
  { id: 37, nombre: "Light Blue (Dolce & Gabbana)", categoria: "mujer", precio: 390000, tag: "", desc: "EDT 100 ml · Cítrica amaderada fresca y veraniega, alegre y limpia.", img: "imegen_perfumes/37.webp" },
  { id: 38, nombre: "Light Blue Intense (Dolce & Gabbana)", categoria: "hombre", precio: 380000, tag: "", desc: "EDP 100 ml · Amaderada acuática salina, marina y versátil.", img: "imegen_perfumes/38.webp" },
  { id: 39, nombre: "9PM Clásica (Afnan)",     categoria: "hombre", precio: 199000, tag: "", desc: "EDP 100 ml · Vainilla oriental muy dulce, gran rendimiento (clon de Ultra Male).", img: "imegen_perfumes/39.webp" },
  { id: 40, nombre: "9PM Night Out (Afnan)",   categoria: "unisex", precio: 290000, tag: "", desc: "Extrait 100 ml · Oriental especiada y frutal, amaderada y resinosa, para noche.", img: "imegen_perfumes/40.webp" },
];

/* ---------- ILUSTRACIÓN DE FRASCO (SVG) ----------
   Color del líquido según categoría, para un look limpio y elegante. */
const LIQUID = { mujer: "#e7c9cf", hombre: "#b9c4d6", unisex: "#d8cfa8" };

function bottleSVG(categoria) {
  const liquid = LIQUID[categoria] || "#d8cfa8";
  return `
  <svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frasco de perfume">
    <rect x="50" y="6" width="20" height="16" fill="#2b2b2b"/>
    <rect x="47" y="22" width="26" height="12" fill="#b89247"/>
    <rect x="54" y="34" width="12" height="12" fill="#cfcfcf"/>
    <path d="M38 46 h44 a10 10 0 0 1 10 10 v94 a10 10 0 0 1 -10 10 h-44 a10 10 0 0 1 -10 -10 v-94 a10 10 0 0 1 10 -10 z" fill="#ffffff" stroke="#2b2b2b" stroke-width="2.5"/>
    <path d="M38 92 h44 v58 a10 10 0 0 1 -10 10 h-24 a10 10 0 0 1 -10 -10 z" fill="${liquid}"/>
    <rect x="44" y="104" width="32" height="34" fill="#ffffff" opacity=".9"/>
    <line x1="60" y1="110" x2="60" y2="132" stroke="#b89247" stroke-width="1"/>
    <rect x="46" y="54" width="10" height="26" fill="#ffffff" opacity=".5"/>
  </svg>`;
}

/* ---------- UTILIDADES ---------- */
const money = (n) => "$ " + n.toLocaleString("es-CO");
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const catLabel = { mujer: "Mujer", hombre: "Hombre", unisex: "Unisex" };

/* ---------- ESTADO ---------- */
let cart = {}; // { id: cantidad }

/* ---------- RENDER DE PRODUCTOS ---------- */
const grid = $("#productGrid");

function renderProductos(filtro = "todos") {
  grid.innerHTML = "";
  const lista = PRODUCTOS.filter((p) => filtro === "todos" || p.categoria === filtro);

  lista.forEach((p) => {
    const media = p.img
      ? `<img src="${p.img}" alt="${p.nombre}">`
      : bottleSVG(p.categoria);

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
      <div class="card__media">${media}</div>
      <p class="card__cat">${catLabel[p.categoria]}</p>
      <h3 class="card__name">${p.nombre}</h3>
      <p class="card__desc">${p.desc}</p>
      <p class="card__price">${money(p.precio)}</p>
      <button class="card__add" data-id="${p.id}">Añadir al carrito</button>
    `;
    grid.appendChild(card);
  });

  $$(".card__add").forEach((btn) =>
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)))
  );
}

/* ---------- FILTROS ---------- */
function setFilter(filtro) {
  $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === filtro));
  renderProductos(filtro);
}
$$(".filter").forEach((btn) => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));

/* Enlaces del menú con data-filter saltan al catálogo y filtran */
$$("[data-filter]").forEach((el) => {
  if (el.classList.contains("filter")) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setFilter(el.dataset.filter);
    $("#catalogo").scrollIntoView({ behavior: "smooth" });
    $("#navMobile").classList.remove("is-open");
  });
});

/* ---------- CARRITO ---------- */
function addToCart(id) { cart[id] = (cart[id] || 0) + 1; updateCart(); openCart(); }
function removeFromCart(id) { delete cart[id]; updateCart(); }
function changeQty(id, d) { cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; updateCart(); }

const cartTotal = () => Object.entries(cart).reduce((s, [id, q]) => {
  const p = PRODUCTOS.find((x) => x.id === +id); return s + (p ? p.precio * q : 0);
}, 0);
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

function updateCart() {
  const items = $("#cartItems");
  const ids = Object.keys(cart);

  if (!ids.length) {
    items.innerHTML = `<p class="cart__empty">Tu carrito está vacío.</p>`;
  } else {
    items.innerHTML = "";
    ids.forEach((id) => {
      const p = PRODUCTOS.find((x) => x.id === +id);
      const q = cart[id];
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item__media">${p.img ? `<img src="${p.img}" alt="">` : bottleSVG(p.categoria)}</div>
        <div class="cart-item__info">
          <div class="cart-item__name">${p.nombre}</div>
          <div class="cart-item__price">${money(p.precio)}</div>
          <div class="cart-item__qty">
            <button class="qty-btn" data-minus="${id}">−</button>
            <span>${q}</span>
            <button class="qty-btn" data-plus="${id}">+</button>
            <button class="cart-item__remove" data-remove="${id}">Quitar</button>
          </div>
        </div>
      `;
      items.appendChild(row);
    });
    $$("[data-plus]").forEach((b) => b.onclick = () => changeQty(+b.dataset.plus, 1));
    $$("[data-minus]").forEach((b) => b.onclick = () => changeQty(+b.dataset.minus, -1));
    $$("[data-remove]").forEach((b) => b.onclick = () => removeFromCart(+b.dataset.remove));
  }

  $("#cartTotal").textContent = money(cartTotal());
  $("#cartCount").textContent = `(${cartCount()})`;
}

/* ---------- ABRIR / CERRAR ---------- */
const openCart  = () => { $("#cart").classList.add("is-open"); $("#cartOverlay").classList.add("is-open"); };
const closeCart = () => { $("#cart").classList.remove("is-open"); $("#cartOverlay").classList.remove("is-open"); };
$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#cartOverlay").addEventListener("click", closeCart);

/* ---------- WHATSAPP ---------- */
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function checkout() {
  const ids = Object.keys(cart);
  if (!ids.length) { alert("Tu carrito está vacío."); return; }
  let msg = "¡Hola Ly Fragranza! Quiero realizar este pedido:\n\n";
  ids.forEach((id) => {
    const p = PRODUCTOS.find((x) => x.id === +id);
    msg += `• ${cart[id]} x ${p.nombre} — ${money(p.precio * cart[id])}\n`;
  });
  msg += `\nTotal: ${money(cartTotal())}\n\n¿Me confirmas disponibilidad y envío?`;
  window.open(waLink(msg), "_blank");
}
$("#checkoutWhatsapp").addEventListener("click", checkout);

const saludo = "¡Hola Ly Fragranza! Me gustaría más información sobre sus perfumes.";
$("#waFloat").href = waLink(saludo);
$("#contactWhatsapp").href = waLink(saludo);

/* ---------- MENÚ MÓVIL ---------- */
$("#menuToggle").addEventListener("click", () => $("#navMobile").classList.toggle("is-open"));
$$("#navMobile a:not([data-filter])").forEach((a) => a.addEventListener("click", () => $("#navMobile").classList.remove("is-open")));

/* ---------- AÑO ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- CARRUSEL ---------- */
(function initCarrusel() {
  const track = $("#carruselTrack");
  const dotsWrap = $("#carDots");
  if (!track || !BANNERS.length) return;

  let actual = 0;
  let timer = null;

  // crear slides
  track.innerHTML = BANNERS.map((b) => {
    const img = `<img src="${b.img}" alt="${b.alt || ""}">`;
    const contenido = b.link ? `<a href="${b.link}">${img}</a>` : img;
    return `<div class="carousel__slide">${contenido}</div>`;
  }).join("");

  // crear puntos
  dotsWrap.innerHTML = BANNERS.map((_, i) =>
    `<button class="carousel__dot" data-i="${i}" aria-label="Ir al banner ${i + 1}"></button>`
  ).join("");
  const dots = $$(".carousel__dot");

  function ir(i) {
    actual = (i + BANNERS.length) % BANNERS.length;
    track.style.transform = `translateX(-${actual * 100}%)`;
    dots.forEach((d, k) => d.classList.toggle("is-active", k === actual));
  }
  function siguiente() { ir(actual + 1); }
  function anterior() { ir(actual - 1); }

  function auto() {
    if (BANNERS.length <= 1) return;
    clearInterval(timer);
    timer = setInterval(siguiente, CARRUSEL_SEGUNDOS * 1000);
  }

  $("#carNext").addEventListener("click", () => { siguiente(); auto(); });
  $("#carPrev").addEventListener("click", () => { anterior(); auto(); });
  dots.forEach((d) => d.addEventListener("click", () => { ir(+d.dataset.i); auto(); }));

  // pausa al pasar el mouse
  const car = $("#inicioCarrusel");
  car.addEventListener("mouseenter", () => clearInterval(timer));
  car.addEventListener("mouseleave", auto);

  // oculta flechas/puntos si solo hay un banner
  if (BANNERS.length <= 1) {
    $("#carPrev").style.display = "none";
    $("#carNext").style.display = "none";
    dotsWrap.style.display = "none";
  }

  ir(0);
  auto();
})();

/* ---------- INICIO ---------- */
renderProductos();
updateCart();
