# Estudio Jurídico Integral

Sitio web estático de una sola página. HTML, CSS y JS puros, sin build.

## Estructura

```
index.html          Toda la página
css/base.css        Variables, reset y tipografía
css/layout.css      Encabezado, secciones, grillas y responsive
css/components.css  Navegación, botones, paneles de áreas, pasos y balanza
css/motion.css      Animaciones (respetan "reducir movimiento" del sistema)
js/main.js          Número de WhatsApp, menú del celular y aparición al scrollear
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

## Pendiente antes de publicar

- **Imagen al compartir el link:** ya está en `assets/img/og-image.png`. Cuando exista la URL definitiva, agregar en el `<head>` de `index.html`:
  ```html
  <meta property="og:image" content="https://TU-DOMINIO/assets/img/og-image.png">
  <meta property="og:url" content="https://TU-DOMINIO/">
  <meta name="twitter:card" content="summary_large_image">
  ```
- **Fuentes locales (opcional):** hoy se cargan desde Google Fonts. Para alojarlas en el repo, bajar Bodoni Moda y Manrope en formato `woff2` (por ejemplo con google-webfonts-helper), ponerlas en `assets/fonts/` y declararlas con `@font-face` en `css/base.css`.
- **`sitemap.xml`:** crear cuando se defina el dominio.
- **Revisión de calidad:** en Chrome, `F12` > pestaña Lighthouse > Analizar la página.

## Pendiente de contenido

- **Quiénes somos:** el texto es de demostración. Reemplazar por el real (trayectoria, matrícula, foto) cuando esté.

- **Quitar `noindex`:** `index.html` tiene `<meta name="robots" content="noindex, nofollow">` mientras sea demo. Borrar esa línea al publicar la versión final.
