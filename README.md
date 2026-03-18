# Feel-In Landing Page

Página de redirect inteligente para feel-in.app

## Deploy en GitHub Pages (paso a paso)

### 1. Crear el repositorio en GitHub

1. Ir a https://github.com/new
2. Nombre: `feel-in-web` (o el que prefieras)
3. Público (GitHub Pages gratis requiere repo público, o Pro para privado)
4. NO inicializar con README (vamos a pushear estos archivos)
5. Click "Create repository"

### 2. Subir los archivos

Desde tu terminal, en la carpeta donde tengas estos archivos:

```bash
cd /ruta/donde/descargaste/los/archivos
git init
git add .
git commit -m "Initial commit - landing page"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/feel-in-web.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. En el repo → **Settings** → **Pages** (menú lateral izquierdo)
2. Source: **Deploy from a branch**
3. Branch: **main** / carpeta **/ (root)**
4. Click **Save**
5. Esperá 1-2 minutos, va a aparecer la URL `https://tu-usuario.github.io/feel-in-web/`

### 4. Configurar el dominio custom (feel-in.app)

#### En Porkbun:

1. Ir a tu dominio → **DNS Records**
2. Borrar cualquier record A existente
3. Agregar estos 4 registros A (apuntan a GitHub Pages):

| Type | Host | Answer          |
|------|------|-----------------|
| A    |      | 185.199.108.153 |
| A    |      | 185.199.109.153 |
| A    |      | 185.199.110.153 |
| A    |      | 185.199.111.153 |

4. Agregar un CNAME para www:

| Type  | Host | Answer        |
|-------|------|---------------|
| CNAME | www  | tu-usuario.github.io |

(Reemplazá `tu-usuario` con tu username de GitHub)

#### En GitHub:

1. Repo → **Settings** → **Pages**
2. En **Custom domain**, escribir: `feel-in.app`
3. Click **Save**
4. Esperá unos minutos a que los DNS propaguen
5. Marcá **Enforce HTTPS** (obligatorio para .app, GitHub lo maneja automáticamente)

### 5. Verificar

- Visitá https://feel-in.app — debería cargar la landing
- Visitá https://www.feel-in.app — debería redirigir también

La propagación DNS puede tardar entre 10 minutos y 24 horas, aunque generalmente es rápido.

---

## Configurar Email Forwarding en Porkbun

1. En Porkbun → tu dominio → **Email Forwarding**
2. Agregar: `info@feel-in.app` → tu email personal de Gmail
3. Listo, los emails que lleguen a info@feel-in.app se reenvían a tu Gmail

### (Opcional) Responder desde Gmail como info@feel-in.app

1. Gmail → Settings → **Accounts and Import** → **Send mail as**
2. Add another email → `info@feel-in.app`
3. Gmail te manda un código de verificación al forwarded email
4. Confirmás y ya podés elegir desde qué dirección enviás

---

## Cuando publiques en las stores

Editá `index.html` y reemplazá los `#` en estas dos líneas:

```javascript
const IOS_URL = '#'; // → 'https://apps.apple.com/app/feel-in/idXXXXXXXXX'
const ANDROID_URL = '#'; // → 'https://play.google.com/store/apps/details?id=com.feelin.app'
```

Una vez que tengan URLs reales, la página va a auto-detectar iOS/Android y redirigir automáticamente.
