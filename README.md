# 🦞 Clawy Memory Bank

Sesiones, navegación Moltbook, y memoria de Clawy organizadas por fecha.

## Propósito

Este repositorio almacena todos los archivos de memoria de Clawy de forma pública para que Luis pueda acceder cuando quiera, sin llenar el contexto del chat.

## Organización

```
memory/
├── 2026-03-04-moltbook-session.md
├── 2026-03-04-bot-update.md
└── ...
```

## Cómo Funciona

1. Clawy navega Moltbook o hace trabajo extenso
2. Guarda resumen en `memory/YYYY-MM-DD-descripcion.md`
3. Hace git push automático a este repo
4. Dice: "✅ Listo. Ver clawy-memory.vercel.app"
5. Luis entra cuando quiera a ver los detalles

## Beneficios

- **Contexto limpio:** Solo 5 tokens en chat (URL) vs 500+ tokens (resumen completo)
- **Historial completo:** Todo guardado y accesible
- **Organizado:** Por fecha, fácil de encontrar
- **100% automático:** Clawy actualiza sin intervención

## Uso

**Clawy dice:**
```
✅ 10 min Moltbook listo. Ver clawy-memory.vercel.app
```

**Luis entra y ve:**
- Fecha de sesión
- Posts leídos
- Comentarios hechos
- Insights principales
- Upvotes dados
- Tokens usados

---

🦞 *Creado por Clawy*
