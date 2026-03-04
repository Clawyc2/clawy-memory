# 🔑 API Access Guide - Clawy's Toolkit

**Propósito:** Nunca más improvisar con APIs. Todo documentado aquí.

---

## 📍 Dónde Están los Tokens

**UBICACIÓN:** Variables de entorno del sistema (`env`)

**Cómo acceder:**
```bash
env | grep -i "token\|key\|secret"
```

**Lista completa:**
- `GITHUB_TOKEN` - GitHub API ✅
- `VERCEL_TOKEN` - Vercel API ✅
- `NETLIFY_TOKEN` - Netlify API ✅
- `BRAVE_API_KEY` - Brave Search ✅
- `ZENROWS_API_KEY` - Web scraping ✅
- `BLACKBOX_API_KEY` - Code generation ✅
- `SERPAPI_KEY` - Search API ✅
- `OPENCLAW_GATEWAY_TOKEN` - OpenClaw internal ✅
- `SUPABASE_*` - ❌ NO DISPONIBLE (pedir a Luis)

---

## 🔧 GitHub API

### Crear Repo
```bash
curl -X POST https://api.github.com/user/repos \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{"name":"repo-name","description":"desc","private":false}'
```

### Push con Token
```bash
git remote add origin https://$GITHUB_TOKEN@github.com/USER/REPO.git
git push -u origin main
```

### Ver Repos
```bash
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/user/repos
```

**Documentación:** https://docs.github.com/en/rest

---

## 🚀 Vercel API

### Listar Proyectos
```bash
curl -H "Authorization: Bearer $VERCEL_TOKEN" \
  https://api.vercel.com/v9/projects
```

### Crear Proyecto
```bash
curl -X POST https://api.vercel.com/v9/projects \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"project-name","framework":"nextjs"}'
```

### Deployar (desde repo GitHub)
```bash
curl -X POST https://api.vercel.com/v13/deployments \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"project-name","gitSource":{"type":"github","ref":"main","repoId":"REPO_ID"}}'
```

### Modificar Proyecto (hacer público, quitar SSO)
```bash
curl -X PATCH https://api.vercel.com/v9/projects/PROJECT_NAME \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"publicSource":true,"ssoProtection":null}'
```

**Documentación:** https://vercel.com/docs/rest-api

---

## 🗄️ Supabase API

### ⚠️ Estado: NO TENGO TOKENS DE SUPABASE

**Acción requerida:** Pedir a Luis las credenciales de Supabase y agregarlas al sistema

### Variables que NECESITO:
```bash
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_KEY=eyJ...
```

### Cómo agregar (Luis debe hacer esto):
1. Ir a Supabase Dashboard → Settings → API
2. Copiar URL y keys
3. Agregar a las variables de entorno del servidor

### Consultar Tabla
```bash
curl "$SUPABASE_URL/rest/v1/TABLE_NAME?select=*" \
  -H "apikey: $SUPABASE_SERVICE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_KEY"
```

### Insertar Datos
```bash
curl -X POST "$SUPABASE_URL/rest/v1/TABLE_NAME" \
  -H "apikey: $SUPABASE_SERVICE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"column1":"value1","column2":"value2"}'
```

### Actualizar Datos
```bash
curl -X PATCH "$SUPABASE_URL/rest/v1/TABLE_NAME?id=eq.1" \
  -H "apikey: $SUPABASE_SERVICE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"column1":"new_value"}'
```

**Documentación:** https://supabase.com/docs/reference/rest

---

## 🔍 Brave Search API

### Búsqueda
```bash
curl "https://api.search.brave.com/res/v1/web/search?q=query" \
  -H "Accept: application/json" \
  -H "Accept-Encoding: gzip" \
  -H "X-Subscription-Token: $BRAVE_API_KEY"
```

---

## 🕷️ ZenRows API

### Scraping
```bash
curl "https://api.zenrows.com/v1/?apikey=$ZENROWS_API_KEY&url=https://example.com"
```

---

## 🤖 Blackbox AI API

### Code Generation
```bash
curl -X POST https://api.blackbox.ai/api/generate \
  -H "Authorization: Bearer $BLACKBOX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt":"code here"}'
```

---

## 🦞 Moltbook API

**Token location:** `/home/ubuntu/.config/moltbook/credentials.json`

### Home Endpoint
```bash
curl https://www.moltbook.com/api/v1/home \
  -H "Authorization: Bearer MOLTBOOK_TOKEN"
```

### Feed
```bash
curl "https://www.moltbook.com/api/v1/feed?sort=new&limit=15" \
  -H "Authorization: Bearer MOLTBOOK_TOKEN"
```

---

## 📋 Checklist Antes de Usar Cualquier API

1. ✅ ¿El token está en `env`?
2. ✅ ¿Tengo la URL correcta del endpoint?
3. ✅ ¿Conozco el formato de los headers?
4. ✅ ¿Sé qué devuelve la API?
5. ✅ ¿Documenté el resultado?

---

## 🚨 Reglas de Oro

1. **NUNCA improvisar** - Consultar este archivo primero
2. **NUNCA asumir** - Verificar con `env | grep` antes
3. **NUNCA hardcodear tokens** - Usar siempre variables
4. **SIEMPRE documentar** - Si encuentro algo nuevo, agregarlo aquí
5. **SIEMPRE probar** - Un curl simple antes de implementar

---

## 📝 Notas

### Tokens que NO tengo (pedir a Luis si necesito):
- OpenAI API key (si existe)
- Anthropic API key (si existe)
- Otros servicios específicos

### URLs de Proyectos Activos:
- **Clawy Memory:** https://clawy-memory.vercel.app
- **Sati Academy:** https://sati-academy.vercel.app
- **Agentes C2:** https://agentes-c2.vercel.app
- **Clawy Archives:** https://clawy-archives.vercel.app

---

_Última actualización: 2026-03-04_
_Este archivo es OBLIGATORIO consultar antes de usar cualquier API_
