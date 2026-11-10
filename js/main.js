/*
 * 1. Links de WhatsApp: el número y los mensajes viven acá, en un solo lugar.
 *    Cada enlace del HTML con data-wa="tema" se completa solo.
 * 2. Encabezado: se marca al bajar y maneja el menú del celular.
 * 3. Aparición de secciones al hacer scroll.
 */
(function () {
  "use strict";

  /* ---------- 1. WhatsApp ---------- */

  // Formato internacional sin "+" ni espacios: 54 (país) 9 (celular) 11 (área) número.
  var NUMBER = "5491154617460";

  var PREFIX = "Hola, quisiera hacer una consulta";

  var TOPICS = {
    general: ".",
    familia: " sobre un asunto de familia.",
    divorcios: " sobre un divorcio.",
    alimentos: " sobre alimentos.",
    laboral: " sobre un tema laboral.",
    jubilaciones: " sobre mi jubilación.",
    pensiones: " sobre una pensión.",
    civil: " sobre un tema civil.",
    contratos: " sobre un contrato.",
    accidentes: " sobre un accidente de tránsito.",
    danos: " sobre daños y perjuicios."
  };

  function buildLink(topic) {
    var suffix = TOPICS[topic] || TOPICS.general;
    return "https://wa.me/" + NUMBER + "?text=" + encodeURIComponent(PREFIX + suffix);
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href = buildLink(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---------- 2. Encabezado y menú ---------- */

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- 3. Aparición al hacer scroll ---------- */

  var items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
