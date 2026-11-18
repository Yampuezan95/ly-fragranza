/* ============================================================
   Ly Fragranza — Perfumería Original
   Catálogo + carrito + pedido por WhatsApp
   ============================================================ */

// Los datos (WHATSAPP, PRODUCTOS, money, bottleSVG, waLink...) están en data.js,
// que se carga ANTES que este archivo en index.html.

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



/* ---------- UTILIDADES ---------- */
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

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
      <a class="card__link" href="producto.html?id=${p.id}">
        <div class="card__media">${media}</div>
        <p class="card__cat">${catLabel[p.categoria]}</p>
        <h3 class="card__name">${p.nombre}</h3>
        <p class="card__desc">${p.desc}</p>
        <p class="card__price">${money(p.precio)}</p>
      </a>
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

function checkout() {
  const ids = Object.keys(cart);
  if (!ids.length) { alert("Tu carrito está vacío."); return; }
  let msg = "¡Hola Ly Fragranza! Quiero realizar este pedido:\n\n";
  ids.forEach((id) => {
    const p = PRODUCTOS.find((x) => x.id === +id);
    msg += `• ${cart[id]} x ${p.nombre} — ${money(p.precio * cart[id])}\n`;
  });
  msg += `\nTotal: ${money(cartTotal())}\n\n¿Me confirmas disponibilidad y envío?`;
  window.open(waLink(msg), "_blank", "noopener");
}
$("#checkoutWhatsapp").addEventListener("click", checkout);

const saludo = "¡Hola Ly Fragranza! Me gustaría más información sobre sus perfumes.";
[ "#waFloat", "#contactWhatsapp" ].forEach((sel) => {
  const el = $(sel);
  el.href = waLink(saludo);
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

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
