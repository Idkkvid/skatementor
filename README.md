<h1 align="center">SkateMentor 🛹</h1>

<p align="center">Encuentra skaters que dan clases y contáctalos directamente.</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="AWS" src="https://img.shields.io/badge/AWS-FF9900?logo=amazonwebservices&logoColor=white">
</p>

<p align="center">
  <img src="docs/evidencias/01-landing.png" alt="Página de inicio de SkateMentor" width="850">
</p>

<p align="center">🌐 <b><a href="http://skatementor.live">skatementor.live</a></b></p>

---

## Contenido

- [Sobre el proyecto](#sobre-el-proyecto)
- [Cómo funciona](#cómo-funciona)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Instalación local](#instalación-local)
- [Aplicación en producción](#aplicación-en-producción)
- [Evidencias](#evidencias)
- [Equipo](#equipo)

---

## Sobre el proyecto

SkateMentor es un catálogo web de skaters con experiencia (street, bowl, grind, slide). La persona compara perfiles y contacta al skater por WhatsApp o correo.

> Esta versión no incluye pagos ni reservas.

Proyecto de **Buenas Prácticas de Desarrollo de Software**, Universidad de la Costa (CUC), 2026.

## Cómo funciona

1. Entra a la página de inicio.
2. Explora el catálogo de skaters.
3. Abre un perfil.
4. Toca el botón de contacto (WhatsApp o correo).
5. Coordina la clase directamente con el skater.

| Catálogo | Perfil y contacto |
| :---: | :---: |
| <img src="docs/evidencias/03-catalogo.png" alt="Catálogo de skaters" width="400"> | <img src="docs/evidencias/04-perfil.png" alt="Perfil con botón de contacto" width="400"> |

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Aplicación | Next.js, React, TypeScript, Tailwind CSS |
| Servidor | Node.js, MySQL |
| Nube (AWS) | EC2, S3, Route 53 |
| Flujo de trabajo | Git, GitHub, GitHub Actions |

## Arquitectura

<p align="center">
  <img src="docs/arquitectura/skatementor-aws.png" alt="Arquitectura en AWS" width="850">
</p>

- Todo corre en una sola EC2 `t3.micro`.
- Route 53 apunta el dominio a una Elastic IP.
- El Security Group filtra el tráfico.
- S3 guarda los archivos estáticos de la aplicación (CSS, JavaScript y fuentes de `_next`).
- Las fotos de los skaters viven en `public/` y se sirven desde la EC2.
- Sin balanceador, Auto Scaling, RDS ni HTTPS en esta fase.

## Estructura de carpetas

```text
skatementor/
├── .github/workflows/   # CI/CD (build y deploy)
├── app/                 # Páginas y rutas de Next.js
├── public/              # Imágenes y recursos estáticos
├── docs/                # Diagrama y capturas
├── next.config.ts
├── package.json
└── README.md
```



## Instalación local

```bash
git clone https://github.com/mateofernando862-hash/skatementor.git
cd skatementor
npm install
npm run dev
```

Abre <http://localhost:3000>.

Para generar el build de producción:

```bash
npm run build
```

## Aplicación en producción

🔗 <http://skatementor.live>: dominio `.live` en Route 53, apuntando a la Elastic IP de la EC2.

<p align="center">
  <img src="docs/evidencias/02-dominio-publico.png" alt="SkateMentor abierto en skatementor.live" width="800">
</p>

## Evidencias

| GitHub Actions |
| :---: |
| <img src="docs/evidencias/05-actions.png" alt="Build y Deploy exitosos" width="500"> |



## Equipo

| Integrante | Programa |
| --- | --- |
| Vidal Niebles Cáceres | Ingeniería de Sistemas |
| Mateo Pérez Núñez | Ingeniería de Sistemas |

**Docente:** Kelly Villa Collazos

---

<p align="center"><sub>SkateMentor · CUC · Ingeniería de Sistemas · 2026</sub></p>
