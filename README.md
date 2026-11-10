# Estudio Jurídico Integral

Sitio web estático de una sola página. HTML, CSS y JS puros, sin build.

## Estructura

```
index.html          Toda la página
css/base.css        Variables, reset y tipografía
css/layout.css      Secciones, grillas y responsive
css/components.css  Botón de WhatsApp, áreas, pasos y balanza
js/main.js          Número de WhatsApp y mensajes de cada área
assets/             Favicon e imágenes
```

## Cambiar el número de WhatsApp

1. En `js/main.js`, editar la constante `NUMBER` (formato `549` + área + número, sin espacios).
2. En `index.html`, actualizar el teléfono visible (`11 5461 7460`) y el `href` de respaldo (`https://wa.me/...`).
3. En el bloque `ld+json` del `<head>`, actualizar `telephone`.

## Ver el sitio en local

Abrir `index.html` en el navegador, o correr `python3 -m http.server` en esta carpeta.

## Publicar

Netlify o Vercel: importar este repositorio. No hay comando de build; el directorio a publicar es la raíz (`/`).
