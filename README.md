# SkateMentor 🛹

**Plataforma web para encontrar y contactar skaters que ofrecen clases.**

SkateMentor es una aplicación web tipo SaaS que reúne perfiles de skaters con experiencia para que las personas interesadas en aprender puedan comparar modalidades, conocer la experiencia de cada instructor y contactarlo. El catálogo contempla disciplinas como *street*, *bowl*, *grind* y *slide*.

En esta primera versión, el contacto se realiza **fuera de la aplicación**, por ejemplo, mediante WhatsApp o correo electrónico. **No se incluyen pagos ni reservas en línea.** El proyecto se desarrolla como trabajo académico de Buenas Prácticas de Desarrollo de Software, de la Universidad de la Costa (CUC), en noviembre de 2026.

**Integrantes:** Vidal Niebles Cáceres y Mateo Pérez Núñez.  
**Dominio previsto:** [http://skatementor.live](http://skatementor.live)  
**Infraestructura propuesta:** AWS, región `us-east-1`.

> **Nota de alcance:** Este README está elaborado a partir de la propuesta APA, no de una inspección del código fuente o de una instancia desplegada. Los comandos estándar de Next.js son una guía de ejecución; las variables de entorno, rutas de carpetas, secretos y capturas deben contrastarse con el repositorio real antes de la entrega. El enlace público se indica como dominio previsto, no como despliegue verificado.

## Tabla de contenido

- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Getting Started](#getting-started)
- [Build](#build)
- [Deploy](#deploy)
- [Aplicación en producción y dominio público](#aplicación-en-producción-y-dominio-público)
- [Funcionamiento del sistema](#funcionamiento-del-sistema)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Evidencias de funcionamiento](#evidencias-de-funcionamiento)
- [Recursos adicionales](#recursos-adicionales)

## Tecnologías utilizadas

| Tecnología o servicio | Función en SkateMentor |
| --- | --- |
| **React + Next.js** | Interfaz, páginas y lógica web de la aplicación. |
| **Node.js + npm** | Entorno de ejecución y gestión de dependencias. |
| **MySQL** | Base de datos instalada en la propia instancia EC2, no en Amazon RDS. |
| **PM2** | Administración y reinicio del proceso de Next.js en el servidor. |
| **Amazon EC2 (`t3.micro`)** | Servidor de aplicación en AWS. |
| **Amazon EBS (`gp3`, 20 GB)** | Disco de la instancia, donde también reside MySQL. |
| **Amazon S3** | Almacenamiento de fotografías de skaters y recursos estáticos. |
| **Amazon VPC + subred pública + Security Group** | Red virtual y reglas de acceso a EC2. |
| **Elastic IP + Amazon Route 53** | Dirección IPv4 fija y resolución DNS del dominio. |
| **Git, GitHub y GitHub Actions** | Versionamiento colaborativo, integración continua y despliegue mediante SSH. |

El APA no confirma el uso de TypeScript, Tailwind CSS, Prisma, Docker, RDS o servicios de pago. **No deben añadirse como tecnologías implementadas sin comprobarlo en el repositorio.**

## Getting Started

Estas instrucciones describen un entorno local de desarrollo compatible con la arquitectura propuesta. Los comandos `npm` presuponen los scripts usuales de Next.js; comprueba su existencia en `package.json`.

### 1. Requisitos previos

- [Git](https://git-scm.com/).
- [Node.js](https://nodejs.org/) en una versión LTS compatible con la versión de Next.js del repositorio, con `npm` instalado.
- [MySQL](https://dev.mysql.com/doc/) en ejecución local.
- Un editor de código, por ejemplo Visual Studio Code.
- Acceso a AWS solamente si necesitas probar carga/lectura de imágenes desde S3; la aplicación desplegada debe utilizar un **rol IAM**, no claves embebidas en el código.

Verifica las herramientas:

```bash
git --version
node --version
npm --version
mysql --version
```

### 2. Clonar el repositorio

Reemplaza la URL de ejemplo por la dirección **real** del repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 3. Instalar dependencias

Desde la raíz del proyecto:

```bash
npm ci
```

Si todavía no existe `package-lock.json`, usa `npm install` y conserva el archivo de bloqueo generado en Git para favorecer compilaciones reproducibles.

### 4. Preparar MySQL

Crea la base de datos y un usuario de desarrollo. El siguiente SQL es un **ejemplo de configuración**, no un esquema de tablas ni una migración del proyecto:

```sql
CREATE DATABASE skatementor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'skatementor'@'localhost' IDENTIFIED BY 'CAMBIAR_CONTRASENA';
GRANT ALL PRIVILEGES ON skatementor.* TO 'skatementor'@'localhost';
```

Las tablas, datos iniciales y migraciones deberán crearse mediante el mecanismo que realmente exista en el código. No se especifica un ORM ni un comando de migración en el APA.

### 5. Configurar variables de entorno

Crea `.env.local` a partir de la plantilla que acompaña este README:

```bash
cp .env.example .env.local
```

Ejemplo orientativo:

```dotenv
DATABASE_URL="mysql://skatementor:CAMBIAR_CONTRASENA@127.0.0.1:3306/skatementor"
AWS_REGION="us-east-1"
S3_BUCKET_NAME="NOMBRE_REAL_DEL_BUCKET"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Importante:** estos identificadores son una propuesta de nombres, porque el APA no define variables de entorno ni el código que las consume. Deben coincidir con las variables utilizadas realmente por la aplicación. Para probar S3 en local, emplea credenciales de AWS por un mecanismo seguro del SDK o CLI; evita publicar claves en archivos versionados.

No subas `.env.local`, contraseñas, claves SSH ni secretos al repositorio. Asegúrate de excluirlos con `.gitignore`.

### 6. Ejecutar localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si el proyecto incluye el catálogo y las páginas de detalle, verifica que se muestren los perfiles y que los enlaces de contacto lleven al medio externo indicado.

Para detener el servidor, utiliza `Ctrl + C` en la terminal.

## Build

La compilación de producción prevista para Next.js utiliza:

```bash
npm ci
npm run build
```

Para comprobar localmente la versión de producción:

```bash
npm run start
```

Por defecto, Next.js se sirve en el puerto `3000`, salvo que la configuración real establezca otro. El script `build` debe corresponder a `next build` y `start` a `next start` o al comando equivalente definido en `package.json`.

Antes de fusionar cambios en `main`, el equipo debe comprobar que el proyecto compila sin errores y que no se introducen secretos ni archivos temporales al control de versiones.

## Deploy

El despliegue descrito en el APA utiliza **una instancia EC2 `t3.micro` en `us-east-1`**, con Next.js y MySQL en el mismo servidor, y GitHub Actions para automatizar la actualización del código mediante SSH.

### 1. Aprovisionamiento inicial en AWS

1. Crear una **VPC con subred pública**, conectividad a Internet y un Security Group para la instancia.
2. Lanzar una **EC2 `t3.micro`** con un volumen **EBS `gp3` de 20 GB** y asociarle una **Elastic IP**.
3. Configurar las reglas de entrada del Security Group: **TCP 80** para tráfico web y **TCP 22** para administración/despliegue SSH. **No exponer TCP 3306**.
4. Instalar Node.js, npm, MySQL, Git y PM2 en la EC2. Configurar MySQL para escuchar solo en `127.0.0.1` o `localhost`.
5. Crear el bucket de **Amazon S3** para imágenes y recursos, con permisos mínimos mediante el rol IAM asociado a la instancia.
6. Crear o configurar la zona DNS de **Route 53** para `skatementor.live` y establecer un registro **A** del dominio raíz apuntando a la Elastic IP. Configurar en el registrador los servidores de nombres de Route 53 si corresponde.
7. Preparar la carpeta de la aplicación en EC2 y sus variables de entorno **fuera del repositorio**.

> **Alcance de red:** el documento APA contempla HTTP en el puerto 80 y **no implementa HTTPS en esta fase**. Se recomienda añadir HTTPS antes de gestionar cuentas, contraseñas o datos sensibles en una versión pública. El acceso SSH abierto globalmente, si se requiere por las IP variables de runners alojados de GitHub, debe considerarse una medida temporal y protegerse con autenticación exclusiva por llave, sin contraseñas.

### 2. Primer arranque en EC2

Tras instalar las dependencias y preparar MySQL, realiza la compilación desde la carpeta real del proyecto:

```bash
npm ci
npm run build
npm install --global pm2
pm2 start npm --name skatementor -- run start
pm2 save
```

Comprueba el estado y los registros:

```bash
pm2 status
pm2 logs skatementor
```

Para publicar la aplicación en HTTP por el **puerto 80** mientras Next.js escucha en el **3000**, puede utilizarse un proxy inverso, por ejemplo Nginx. **Esta es una recomendación de implementación, no un componente confirmado en el APA.** Configura el proxy antes de comprobar el acceso público. No abras MySQL a Internet.

### 3. Integración y despliegue continuo (GitHub Actions)

El equipo aplica una estrategia de ramas inspirada en Git Flow:

- `main`: versión estable, publicada en AWS.
- `develop`: integración de funcionalidades antes de producción.
- `feature/...`: desarrollo de funcionalidades, por ejemplo `feature/catalogo-skaters`.
- `fix/...`: correcciones, por ejemplo `fix/formulario-contacto`.

Cada integrante debe realizar **al menos 8 commits descriptivos y 8 Pull Requests**, revisados y aprobados por la otra persona, de acuerdo con el APA.

El flujo de CI/CD previsto tiene **dos trabajos**:

| Job | Evento / propósito | Acciones principales |
| --- | --- | --- |
| **Build** | Validar cambios y la rama principal | Obtener código, configurar Node.js, instalar dependencias con `npm ci` y ejecutar `npm run build`. |
| **Deploy** | Después de integrar cambios en `main` y superar Build | Conexión SSH a EC2, respaldo de MySQL, actualización del código, `npm ci`, `npm run build` y reinicio del proceso con PM2. |

El workflow se documentará en `.github/workflows/` una vez se incorpore al repositorio. Para ejecutarlo se necesitarán secretos de GitHub con el **host/IP**, el **usuario SSH** y la **llave privada**, sin incluir sus valores en el código o en este README. La llave pública correspondiente debe autorizarse en la EC2.

Antes de cada despliegue, el APA prevé un respaldo con `mysqldump`. Configura su ejecución sin imprimir credenciales en logs y comprueba periódicamente que los respaldos puedan restaurarse.

Secuencia esperada:

```text
feature/* o fix/*
       │
       ▼
Pull Request + revisión del compañero
       │
       ▼
develop → main
       │
       ▼
GitHub Actions: Build (npm ci → npm run build)
       │
       ▼
GitHub Actions: Deploy (SSH a EC2)
       │
       ├─ Respaldo MySQL (mysqldump)
       ├─ Actualización del código
       ├─ Instalación de dependencias y build
       └─ Reinicio de SkateMentor con PM2
       │
       ▼
http://skatementor.live
```

### 4. Comprobaciones después de desplegar

Comprueba que `pm2 status` muestre el proceso en ejecución, que el dominio resuelva a la Elastic IP correcta, que HTTP responda, que el catálogo se pueda consultar y que las imágenes carguen desde S3. Revisa los registros de GitHub Actions y PM2 si alguna comprobación falla.

## Aplicación en producción y dominio público

**Dominio personalizado definido:** [http://skatementor.live](http://skatementor.live).

El acceso usa `http://` porque, según la propuesta académica, esta versión **no dispone de certificado HTTPS**. El dominio y el DNS deben quedar configurados y comprobados antes de declarar operativa la aplicación; **no se ha verificado desde este README que la web esté publicada**.

## Funcionamiento del sistema

El recorrido esperado del usuario es:

1. Entrar a `skatementor.live` y visualizar la página de inicio (*landing page*).
2. Consultar el catálogo de skaters y sus modalidades de enseñanza.
3. Revisar un perfil con experiencia, modalidad y datos de contacto.
4. Elegir un skater y abrir su medio de contacto, por ejemplo WhatsApp o correo.
5. Coordinar la clase **directamente con el instructor, por fuera de SkateMentor**.

No existe en el alcance inicial un sistema de pagos o reservas dentro del sitio.

### Comunicación entre componentes

```mermaid
flowchart TD
    U[Usuario desde navegador] --> D[Route 53: skatementor.live]
    D --> IP[Elastic IP]
    IP --> SG[Security Group: HTTP 80]
    SG --> APP[EC2 t3.micro: Next.js + Node.js + PM2]
    APP --> DB[(MySQL local / EBS gp3)]
    APP --> S3[(Amazon S3: fotos y estáticos)]
    APP --> C[Enlace de contacto externo]
    C --> M[WhatsApp o correo]
    GH[GitHub Actions] -->|Build y despliegue SSH| APP
```

La aplicación sirve la interfaz y obtiene la información de perfiles de su capa de datos según la implementación real; MySQL permanece dentro de EC2, mientras que S3 guarda las imágenes. El contacto se abre hacia servicios externos. **El APA describe esta arquitectura como propuesta; los nombres concretos de rutas y funciones se deben validar contra el código.**

## Arquitectura del proyecto

![Diagrama de arquitectura AWS de SkateMentor, extraído de la propuesta APA](docs/arquitectura/skatementor-aws.png)

*Figura 1. Diagrama original de la propuesta APA de SkateMentor (noviembre de 2026).*

La arquitectura se concentra en una sola EC2 `t3.micro` para reducir costos. La instancia está en una subred pública dentro de una VPC y recibe tráfico mediante Elastic IP. Route 53 asocia el dominio con esa IP; el Security Group controla los puertos de entrada; Node.js sirve Next.js, PM2 mantiene el proceso en ejecución y MySQL funciona en el propio servidor. Amazon S3 almacena fotografías y GitHub Actions coordina el build y el deploy por SSH.

**Alcance de la propuesta:** no utiliza balanceador de carga, Auto Scaling ni Amazon RDS; tampoco contempla Docker o un NAT Gateway en la arquitectura representada. El documento excluye HTTPS en esta primera fase. El diseño está orientado a un ejercicio académico de bajo costo, no a una infraestructura de producción con alta disponibilidad.

## Estructura de carpetas

**Estructura de referencia, pendiente de ajustarse al repositorio real.** El APA no aporta el árbol de archivos ni confirma si Next.js utiliza `app/` o `pages/`. El siguiente ejemplo corresponde a una organización posible con App Router:

```text
SkateMentor/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                # Workflow previsto de GitHub Actions
├── docs/
│   ├── arquitectura/
│   │   └── skatementor-aws.png      # Diagrama del APA (incluido aquí)
│   └── evidencias/                 # Capturas reales que debe aportar el equipo
├── public/                         # Recursos locales públicos, si se utilizan
├── src/
│   ├── app/                        # Rutas y páginas, si se usa App Router
│   │   ├── page.tsx                # Landing page (nombre ilustrativo)
│   │   └── skaters/                # Catálogo/perfiles (rutas ilustrativas)
│   ├── components/                 # Componentes reutilizables de React
│   └── lib/                        # Acceso a datos e integración con S3
├── .env.example                    # Plantilla de configuración (incluida aquí)
├── .gitignore                      # Archivos que Git no debe publicar
├── package.json                    # Scripts y dependencias reales del proyecto
├── package-lock.json               # Versiones de dependencias, si existe
├── next.config.*                   # Configuración de Next.js, si existe
└── README.md                       # Esta documentación
```

Al incorporar el README al repositorio, sustituye esta estructura orientativa por la salida real de las carpetas y explica cada ruta, API y módulo que efectivamente exista. No es necesario crear directorios ficticios para que coincidan con el ejemplo.

## Evidencias de funcionamiento

Las capturas de esta sección deben mostrar **la aplicación y el despliegue reales**. El APA adjunto incluye el diagrama de arquitectura, pero **no contiene capturas de SkateMentor ejecutándose**. Por esta razón, los siguientes archivos están señalados como pendientes; no se han creado evidencias artificiales.

| Evidencia que debe adjuntarse | Ubicación propuesta en el repositorio | Qué debe demostrar |
| --- | --- | --- |
| **01. Landing page** | `docs/evidencias/01-landing.png` | Página inicial accesible. |
| **02. Catálogo** | `docs/evidencias/02-catalogo.png` | Listado de skaters y modalidades. |
| **03. Perfil y contacto** | `docs/evidencias/03-perfil-contacto.png` | Datos de un instructor y acceso a WhatsApp o correo. |
| **04. Dominio público** | `docs/evidencias/04-dominio-publico.png` | Navegador mostrando `skatementor.live` con la aplicación cargada. |
| **05. GitHub Actions** | `docs/evidencias/05-actions-deploy.png` | Ejecución exitosa de Build y Deploy. |
| **06. PM2 en EC2** *(opcional)* | `docs/evidencias/06-pm2-ec2.png` | Proceso de la aplicación activo. |

Una vez agregadas las imágenes reales al repositorio, reemplaza este aviso con la visualización en Markdown, por ejemplo:

```markdown
![Landing de SkateMentor](docs/evidencias/01-landing.png)
![Catálogo de skaters](docs/evidencias/02-catalogo.png)
![Perfil y contacto](docs/evidencias/03-perfil-contacto.png)
![Dominio público](docs/evidencias/04-dominio-publico.png)
![Build y Deploy exitosos](docs/evidencias/05-actions-deploy.png)
```

Evita que las capturas expongan contraseñas, tokens, claves SSH, variables privadas o información personal innecesaria.

## Recursos adicionales

### Documentación técnica

- [Next.js](https://nextjs.org/docs) y [React](https://react.dev/) — interfaz, componentes y compilación.
- [Node.js](https://nodejs.org/) y [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) — ejecución del servidor y gestión del proceso.
- [Amazon EC2](https://aws.amazon.com/ec2/), [Amazon VPC](https://aws.amazon.com/vpc/), [Amazon S3](https://aws.amazon.com/s3/) y [Amazon Route 53](https://aws.amazon.com/route53/) — servicios incluidos en la arquitectura.
- [GitHub Actions](https://docs.github.com/actions) — automatización del flujo de CI/CD.
- [GitHub Student Developer Pack](https://education.github.com/pack) — programa académico contemplado para el dominio `.live`.

### Consideraciones académicas y operativas

La propuesta APA estima un costo de infraestructura de aproximadamente **USD 13,46 mensuales**, bajo los precios y supuestos incluidos en el documento. El proyecto contempla usar **USD 50 de crédito de AWS Academy** y obtener el dominio `.live` durante su primer año por medio de los beneficios estudiantiles descritos en la propuesta. Estos son **supuestos presupuestarios del APA, no cargos ni beneficios verificados**; deben comprobarse en la cuenta de AWS y en el registrador.

La instancia mantiene MySQL accesible únicamente desde `localhost` y el Security Group no debe abrir el puerto `3306`. Las imágenes S3 deben disponer de permisos ajustados a la forma en que se publican. Los respaldos con `mysqldump`, la protección de secretos y la revisión de Pull Requests son parte del procedimiento de operación esperado.

**Pendiente antes de la entrega final:** incorporar la URL exacta de GitHub, confirmar los scripts de `package.json` y las variables reales, actualizar el árbol de carpetas según el código, añadir las capturas auténticas, comprobar el dominio público y adjuntar evidencia del workflow exitoso. Con ello, las seis secciones exigidas por la rúbrica quedarán documentadas con elementos verificables.

---

**Proyecto académico:** *SkateMentor: plataforma web para contratar clases con skaters profesionales*.  
**Institución:** Universidad de la Costa (CUC), Ingeniería de Sistemas.  
**Asignatura:** Buenas Prácticas de Desarrollo de Software.  
**Docente:** Kelly Villa Collazos.  
**Fecha:** Noviembre de 2026.
