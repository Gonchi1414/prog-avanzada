# Ejemplos de Peticiones y Respuestas HTTP por Versión

A continuación se muestran ejemplos conceptuales de cómo han evolucionado las peticiones y respuestas a lo largo de las distintas versiones del protocolo HTTP.

---

## HTTP/0.9 (El protocolo de una línea)
Lanzado en 1991. Era extremadamente simple, solo soportaba el método `GET`, no existían las cabeceras (headers) ni los códigos de estado. La conexión se cerraba inmediatamente después de enviar la respuesta.

**Petición:**
```http
GET /index.html
```
*(Nota: No lleva versión del protocolo ni cabeceras. La petición termina con un salto de línea [CRLF]).*

**Respuesta:**
```html
<html>
  <body>
    <h1>Hola Mundo (HTTP/0.9)</h1>
  </body>
</html>
```
*(Nota: No hay cabeceras de respuesta, solo se devuelve directamente el contenido en formato HTML).*

---

## HTTP/1.0 (Construyendo la web moderna)
Introducido en 1996 (RFC 1945). Añadió soporte para métodos adicionales (`POST`, `HEAD`), cabeceras (headers), códigos de estado (como `200 OK` o `404 Not Found`) y soporte para transferir otros formatos además de HTML (imágenes, scripts, etc.). Cada petición requería abrir una nueva conexión TCP.

**Petición:**
```http
GET /index.html HTTP/1.0
User-Agent: Mozilla/5.0
Accept: text/html

```
*(Nota: Incluye la versión `HTTP/1.0` en la primera línea. Requiere una línea en blanco al final para indicar el fin de las cabeceras).*

**Respuesta:**
```http
HTTP/1.0 200 OK
Date: Tue, 12 May 2026 12:00:00 GMT
Server: Apache/0.8.4
Content-Type: text/html
Content-Length: 64

<html>
  <body>
    <h1>Hola Mundo (HTTP/1.0)</h1>
  </body>
</html>
```

---

## HTTP/1.1 (El estándar duradero)
Lanzado en 1997 (RFC 2068, actualizado luego). Es la versión más reconocible. Introdujo características críticas como:
- Conexiones persistentes (`keep-alive`) por defecto, reutilizando la conexión TCP.
- Soporte para host virtual (la cabecera `Host` es obligatoria).
- Caché mejorado y soporte para respuestas segmentadas (chunked).

**Petición:**
```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0
Accept: text/html
Accept-Encoding: gzip, deflate
Connection: keep-alive

```

**Respuesta:**
```http
HTTP/1.1 200 OK
Date: Tue, 12 May 2026 12:00:00 GMT
Server: Nginx/1.18.0
Content-Type: text/html
Content-Length: 64
Connection: keep-alive
Cache-Control: max-age=3600

<html>
  <body>
    <h1>Hola Mundo (HTTP/1.1)</h1>
  </body>
</html>
```

---

## HTTP/2.0 (Rendimiento y Multiplexación)
Lanzado en 2015 (RFC 7540). Aunque la semántica (métodos, códigos de estado) es la misma que HTTP/1.1, la forma en que se envían los datos cambia drásticamente.
**HTTP/2 es un protocolo binario, no de texto plano.** Usa *multiplexación* (envía múltiples peticiones a la vez por la misma conexión TCP), compresión de cabeceras (HPACK) y flujos (streams).

Como no es texto plano, no se puede "leer" directamente con un telnet, pero conceptualmente, las cabeceras se representan con "pseudo-cabeceras" (que empiezan con dos puntos `:`).

**Petición (Representación conceptual de un Frame de Cabeceras - HEADERS frame):**
```http
HEADERS
  + END_STREAM
  + END_HEADERS
  :method = GET
  :scheme = https
  :path = /index.html
  :authority = www.ejemplo.com
  user-agent = Mozilla/5.0
  accept = text/html
  accept-encoding = gzip, deflate
```

**Respuesta (Representación conceptual de Frames):**

*1. Frame de Cabeceras (HEADERS):*
```http
HEADERS
  - END_STREAM (Aún faltan datos)
  + END_HEADERS
  :status = 200
  content-type = text/html
  content-length = 64
  date = Tue, 12 May 2026 12:00:00 GMT
```

*2. Frame de Datos (DATA):*
<!--  -->
hacemos una modificacion