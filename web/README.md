# Vivir en el norte (web)

Guía para imaginar cómo se vive en la costa norte y decidir. Portada: mapa de zonas y el tiempo. La zona 1 (Baixo Miño) es la primera con página propia.

## En local

```bash
cd web
npm install
npm run dev -- --port 43217 --hostname 127.0.0.1
```

Abre http://127.0.0.1:43217

## GitHub Pages

La web es estática (`output: "export"`).

1. En el repositorio de GitHub: **Settings → Pages**.
2. Source: **GitHub Actions**, o bien la carpeta `web/out` tras `npm run build` en `web/`.
3. Si el sitio queda en `https://USUARIO.github.io/NOMBRE-DEL-REPO/`, hay que poner `basePath` en `next.config.ts`.

Hasta entonces se puede usar **Vercel** (Publish) con raíz `web`.
