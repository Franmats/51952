# Analizador de Expresiones CRON
**Tarea 25914_16 — Sintaxis y Semántica de los Lenguajes de Programación 2026**

---

## ¿Qué hace?

Analiza expresiones CRON escritas en `input.txt` y realiza:

1. **Análisis léxico y sintáctico** — verifica si la expresión es válida e informa errores con línea y columna
2. **Tabla de lexemas y tokens** — muestra cada símbolo reconocido con su tipo
3. **Árbol de análisis sintáctico** — muestra la estructura jerárquica de la entrada
4. **Interpretación** — traduce la expresión a JavaScript (`const cronString = '...'`)

---

## Requisitos

- Node.js instalado
- Java instalado (solo si se modifica la gramática)

---

## Instalación

```bash
npm install
```

---

## Uso

1. Escribir la expresión cron en `input.txt`
2. Ejecutar:

```bash
node index.js
```

---

## Archivos de prueba

| Archivo | Contenido | Resultado esperado |
|---|---|---|
| `input_correcto_1.txt` | `15 8-10,14-16 *` | Entrada válida |
| `input_correcto_2.txt` | `*/5 9-18 1,15 * 1-5` | Entrada válida |
| `input_incorrecto_1.txt` | `15 8- * *` | Error sintáctico |
| `input_incorrecto_2.txt` | `*/  5 *` | Error sintáctico |

Para probar uno de ellos, copiarlo a `input.txt` y ejecutar `node index.js`.

---

## Estructura del proyecto

```
├── Calculator.g4                 ← gramática ANTLR4
├── CustomCalculatorVisitor.js    ← lógica de interpretación
├── index.js                      ← programa principal
├── generated/                    ← archivos generados por ANTLR4 (no modificar)
├── input.txt                     ← archivo de entrada
├── input_correcto_1.txt
├── input_correcto_2.txt
├── input_incorrecto_1.txt
├── input_incorrecto_2.txt
└── antlr-4.13.2-complete.jar
```

---

## Ejemplo de salida

**Entrada** (`input.txt`):
```
15 8-10,14-16 *
```

**Salida**:
```
Entrada válida.
Árbol de derivación: (prog (stat (schedule (time_field (value 15)) ...)) <EOF>)

Tabla de lexemas y tokens:
  N°  │ Lexema       │ Token
  ────┼──────────────┼─────────────
  1   │ 15           │ NUMBER
  2   │ 8            │ NUMBER
  ...

Traducción a JavaScript:
const cronString = '15 8-10,14-16 *';

Ejecución:
cronString => "15 8-10,14-16 *"
```

---

## Gramática (EBNF original)

```
schedule   = time_field { time_field } ;
time_field = value | range | step | wildcard | list | predefined ;
value      = number ;
range      = number "-" number [ "/" number ] ;
step       = (wildcard | range | value) "/" number ;
wildcard   = "*" ;
list       = item { "," item } ;
predefined = "@yearly" | "@monthly" | "@weekly" | "@daily" | "@hourly" | "@reboot" ;
number     = digit { digit } ;
```
