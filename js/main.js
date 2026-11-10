/*
 * Links de WhatsApp.
 * El número y los mensajes viven acá, en un solo lugar.
 * Cada enlace del HTML con data-wa="tema" se completa solo.
 */
(function () {
  "use strict";

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
})();
