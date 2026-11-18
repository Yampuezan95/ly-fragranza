/* ============================================================
   Ly Fragranza — Ficha de producto (producto.html?id=N)
   Usa los datos de data.js
   ============================================================ */

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));
const p = PRODUCTOS.find((x) => x.id === id);
const pdp = $("#pdp");

$("#year").textContent = new Date().getFullYear();

if (!p) {
  pdp.innerHTML = `
    <div class="pdp__notfound">
      <h1>Perfume no encontrado</h1>
      <p>Puede que ya no esté disponible.</p>
      <a class="btn btn--dark" href="index.html#catalogo">Ver el catálogo</a>
    </div>`;
} else {
  document.title = `${p.nombre} — Ly Fragranza`;

  const a = atributos(p);
  const media = p.img ? `<img src="${p.img}" alt="${p.nombre}">` : bottleSVG(p.categoria);

  /* ----- Productos relacionados (misma categoría primero) ----- */
  const mismaCat = PRODUCTOS.filter((x) => x.id !== p.id && x.categoria === p.categoria);
  const otros = PRODUCTOS.filter((x) => x.id !== p.id && x.categoria !== p.categoria);
  const mezcla = (arr) => arr.map((v) => [Math.random(), v]).sort((m, n) => m[0] - n[0]).map((m) => m[1]);
  const relacionados = [...mezcla(mismaCat), ...mezcla(otros)].slice(0, 8);

  const miniCard = (r) => {
    const rmedia = r.img ? `<img src="${r.img}" alt="${r.nombre}">` : bottleSVG(r.categoria);
    return `
      <a class="minicard" href="producto.html?id=${r.id}">
        <div class="minicard__media">${r.tag ? `<span class="card__tag">${r.tag}</span>` : ""}${rmedia}</div>
        <p class="minicard__cat">${catLabel[r.categoria]}</p>
        <h3 class="minicard__name">${r.nombre}</h3>
        <p class="minicard__price">${money(r.precio)}</p>
      </a>`;
  };
  const relacionadosHTML = `
    <section class="related">
      <div class="related__head">
        <h2 class="section-title">También te puede gustar</h2>
        <span class="related__hint">Desliza para ver más →</span>
      </div>
      <div class="related__row">${relacionados.map(miniCard).join("")}</div>
    </section>`;

  const barra = (label, valor) => `
    <div class="meter">
      <div class="meter__top"><span>${label}</span><span>${valor}/10</span></div>
      <div class="meter__track"><div class="meter__fill" style="width:${valor * 10}%"></div></div>
    </div>`;

  const fila = (k, v) => `<div class="spec"><span class="spec__k">${k}</span><span class="spec__v">${v}</span></div>`;

  pdp.innerHTML = `
    <nav class="crumbs"><a href="index.html">Inicio</a> › <a href="index.html#catalogo">Catálogo</a> › <span>${p.nombre}</span></nav>

    <div class="pdp__grid">
      <div class="pdp__media">
        ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
        ${media}
      </div>

      <div class="pdp__info">
        <p class="pdp__cat">${catLabel[p.categoria]} · ${p.familia}</p>
        <h1 class="pdp__name">${p.nombre}</h1>
        <p class="pdp__price">${money(p.precio)}</p>

        <div class="pdp__badges">
          <span class="badge">✔️ 100% Original</span>
          <span class="badge">🚚 Envío nacional</span>
        </div>

        <div class="pdp__buy">
          <div class="qtybox">
            <button id="qMinus" aria-label="Menos">−</button>
            <span id="qVal">1</span>
            <button id="qPlus" aria-label="Más">+</button>
          </div>
          <a class="btn btn--whatsapp btn--full" id="buyWa" href="#">Pedir por WhatsApp</a>
        </div>

        <div class="specs">
          ${fila("Concentración", p.conc)}
          ${fila("Presentación", p.ml)}
          ${fila("Género", p.genero)}
          ${fila("Familia olfativa", p.familia)}
          ${fila("Ocasión", a.ocasion)}
          ${fila("Clima", a.clima)}
        </div>
      </div>
    </div>

    <div class="pdp__detail">
      <section class="pdp__block">
        <h2 class="section-title">Descripción</h2>
        <p class="pdp__desc">${p.descLarga || p.desc}</p>
      </section>

      <section class="pdp__block">
        <h2 class="section-title">Rendimiento</h2>
        <div class="meters">
          ${barra("Intensidad", a.intensidad)}
          ${barra("Proyección", a.proyeccion)}
          ${barra("Duración", a.duracion)}
        </div>
        <p class="pdp__note">* Valores de referencia estimados según concentración y familia.</p>
      </section>
    </div>

    ${relacionadosHTML}
  `;

  /* Cantidad */
  let qty = 1;
  const qVal = $("#qVal");
  $("#qMinus").onclick = () => { qty = Math.max(1, qty - 1); qVal.textContent = qty; updateBuy(); };
  $("#qPlus").onclick = () => { qty = Math.min(99, qty + 1); qVal.textContent = qty; updateBuy(); };

  function updateBuy() {
    const total = money(p.precio * qty);
    const msg = `¡Hola Ly Fragranza! Quiero pedir:\n\n• ${qty} x ${p.nombre} (${p.conc} ${p.ml}) — ${total}\n\n¿Me confirmas disponibilidad y envío?`;
    const el = $("#buyWa");
    el.href = waLink(msg);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
  updateBuy();

  /* ----- Auto-desplazamiento del carrusel de relacionados ----- */
  (() => {
    const row = $(".related__row");
    if (!row) return;
    const paso = () => {
      const card = row.querySelector(".minicard");
      return card ? card.getBoundingClientRect().width + 20 : 240; // ancho card + gap
    };
    let pausado = false;
    const casiAlFinal = () => row.scrollLeft + row.clientWidth >= row.scrollWidth - 5;

    const avanzar = () => {
      if (pausado) return;
      if (row.scrollWidth <= row.clientWidth) return; // no hay desborde
      if (casiAlFinal()) row.scrollTo({ left: 0, behavior: "smooth" });
      else row.scrollBy({ left: paso(), behavior: "smooth" });
    };

    let timer = setInterval(avanzar, 3000);

    // Pausa al interactuar (mouse o táctil)
    ["mouseenter", "touchstart", "pointerdown"].forEach((ev) =>
      row.addEventListener(ev, () => { pausado = true; }, { passive: true })
    );
    ["mouseleave", "touchend"].forEach((ev) =>
      row.addEventListener(ev, () => { pausado = false; }, { passive: true })
    );
    // Pausa si la pestaña no está visible (ahorra recursos)
    document.addEventListener("visibilitychange", () => {
      clearInterval(timer);
      if (!document.hidden) timer = setInterval(avanzar, 3000);
    });
  })();
}

/* WhatsApp flotante */
(() => {
  const saludo = "¡Hola Ly Fragranza! Me gustaría más información sobre sus perfumes.";
  const f = $("#waFloat");
  f.href = waLink(saludo);
  f.target = "_blank";
  f.rel = "noopener noreferrer";
})();
