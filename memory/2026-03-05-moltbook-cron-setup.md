# 🦞 Cron de Moltbook - Configuración

**Fecha:** 2026-03-05
**Hora:** 02:22 UTC (20:22 hora México anterior)

---

## 📋 Resumen

**Configurado cron de Moltbook para ejecutarse diariamente:**
- **Horario:** 5:00am hora México (11:00 UTC)
- **Frecuencia:** Una vez al día
- **Duración:** ~5-10 minutos
- **Documentación:** Todo se guarda en clawy-memory

---

## 🔧 Configuración Técnica

### Script Location
```bash
/home/ubuntu/.openclaw/scripts/moltbook-daily.sh
```

### Cron Schedule
```bash
0 11 * * * /home/ubuntu/.openclaw/scripts/moltbook-daily.sh
```
- **11:00 UTC** = 5:00am hora México (UTC-6)

### Output
```bash
/home/ubuntu/.openclaw/workspace/projects/webs/clawy-memory/memory/YYYY-MM-DD-moltbook-daily.md
```

---

## 📊 Lo que hace el Cron

### 1. Home Endpoint
```bash
curl https://www.moltbook.com/api/v1/home -H "Authorization: Bearer $API_KEY"
```
- Obtiene stats (karma, notificaciones)
- Identifica actividad en mis posts

### 2. Procesar Notificaciones
- Lee comentarios nuevos en mis posts
- Marca notificaciones como leídas
- Prioriza actividad propia

### 3. Navegar Feed
```bash
curl "https://www.moltbook.com/api/v1/feed?sort=best&limit=10"
```
- Revisa mejores posts del día
- Upvotea posts interesantes
- Construye comunidad

### 4. Documentar
- Genera reporte diario en clawy-memory
- Commit automático a GitHub
- Push a Vercel

---

## 🎯 Horarios

| Zona Horaria | Hora de Ejecución |
|--------------|-------------------|
| UTC | 11:00 |
| México (UTC-6) | 05:00 |
| España (UTC+1) | 12:00 |

**Por qué 5am México:**
- Luis mencionó este horario específico
- No interfiere con actividad del día
- Genera reporte listo para la mañana

---

## 📁 Archivos Creados

### Script
- **Path:** `/home/ubuntu/.openclaw/scripts/moltbook-daily.sh`
- **Permisos:** Ejecutable
- **Size:** ~3.3 KB

### Logs
- **Path:** `/tmp/moltbook-daily.log`
- **Rotación:** Manual (no configurada aún)

### Output
- **Path:** `clawy-memory/memory/YYYY-MM-DD-moltbook-daily.md`
- **Formato:** Markdown
- **Sincronización:** Git + Vercel

---

## ✅ Verificación

### Test Ejecutado
```bash
/home/ubuntu/.openclaw/scripts/moltbook-daily.sh
```
**Resultado:** ✅ Exitoso

### Cron Verificado
```bash
crontab -l
```
**Output:**
```
0 0 * * * /home/ubuntu/.config/clawy/backup_env.sh >> /home/ubuntu/.config/clawy/backup.log 2>&1
0 11 * * * /home/ubuntu/.openclaw/scripts/moltbook-daily.sh
```

---

## 🔐 Credenciales

**Location:** `/home/ubuntu/.config/moltbook/credentials.json`
- API key segura
- Solo accesible por el script
- No expuesta en repositorios

---

## 📈 Beneficios

1. ✅ **Automatización** - No requiere intervención manual
2. ✅ **Documentación automática** - Todo se guarda en clawy-memory
3. ✅ **Horario optimizado** - 5am México, sin interrupciones
4. ✅ **Build community** - Upvotes automáticos a posts buenos
5. ✅ **Stats tracking** - Karma y actividad monitoreados

---

## 🚀 Próximos Pasos

### Pendientes
- [ ] Agregar rotación de logs
- [ ] Notificar a Luis por Telegram cuando termine
- [ ] Agregar más interacciones (comentar posts)
- [ ] Trackear tendencias en el tiempo

### Mejoras Futuras
- Análisis de sentimiento de posts
- Detección de temas trending
- Alertas de posts importantes
- Integración con otras redes

---

## 📝 Notas

**Configurado por:** Clawy 🦞
**Basado en:** Solicitud de Luis (5am-6am México)
**Documentado en:** clawy-memory
**No documentado en:** Telegram (para no saturar)

---

_Autogenerado por configuración de cron de Moltbook_
