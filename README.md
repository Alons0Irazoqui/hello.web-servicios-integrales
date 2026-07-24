# Brief de Proyecto — Sitio Web Servicios Integrales 3D

## 1. Resumen del proyecto

- **Tipo de proyecto:** Landing page / sitio web corporativo.
- **Punto de partida:** El desarrollo se realizará sobre una **plantilla base de HTML ya existente**. No se debe modificar la estructura de secciones de la plantilla; el contenido de este brief se adapta a esa estructura, no al revés.
- **Prompt inicial:** Ya se entregó por separado un prompt inicial para adaptar la plantilla al negocio. Este README complementa ese prompt con la información específica del cliente y los lineamientos visuales obligatorios.
- **Flujo de trabajo:** El desarrollador construirá el sitio iterando con Claude Code, usando este documento como fuente de verdad sobre el negocio y el estilo a aplicar.

---

## 2. Información del negocio

> Información extraída de los materiales de marketing (flyers) proporcionados en la carpeta `imagenes/` y de los datos de contacto entregados. Todo dato no encontrado fue omitido.

### Datos generales

| Campo | Detalle |
|---|---|
| **Nombre del negocio** | Servicios Integrales 3D |
| **Correo electrónico** | serviciosintegrales3d@gmail.com |
| **Facebook** | https://www.facebook.com/share/1Ckw6RtCWh/ |
| **Usuario / redes sociales** | @serviciosintegrales3D |
| **Zona de cobertura** | San Luis Potosí y alrededores |
| **Disponibilidad** | Atención inmediata 24/7 (mencionada en servicios de boyas viales e industriales) |

### Teléfonos de contacto

Se identificaron distintos números asociados a distintas líneas de servicio en los flyers. Usarlos según corresponda o consolidar con el cliente si se requiere un único número principal:

- **440 192 1424** — Corte láser / rótulos y placas
- **440 107 7770** — Impermeabilización / señalización vial
- **444 391 4094** — Boyas viales / servicios industriales

### Servicios que ofrece

1. **Pintura** — aplicación de pintura en general.
2. **Impermeabilización profesional** — impermeabilizantes, acrílicos, elastomérico, asfálticos en frío, asfálticos en caliente, fibratados. Aplica a proyectos residenciales, comerciales e industriales.
3. **Rótulos y corte láser** — números residenciales, nombres de escuelas, rótulos para negocios, placas conmemorativas y diseños personalizados.
4. **Tablaroca** — instalación y acabados en tablaroca.
5. **Señalización vial y seguridad** — líneas para carretera, señalización de estacionamientos, señalética, topes de caucho, boyas viales, microesfera reflectante.
6. **Venta e instalación de boyas viales** — con precios especiales para fraccionamientos, escuelas y revendedores.
7. **Servicios industriales especializados (Airless Technology)** — epóxicos, poliuretanos, sandblasting, autonivelantes; trabajos en rapel, hamaca, plataformas y andamios, con personal certificado DC3.

### Mensajes de marca detectados

Frases usadas en el material publicitario existente, útiles como referencia de tono de comunicación (no como estructura de contenido):

- "Nosotros vamos"
- "Protegemos lo que más importa"
- "Calidad y servicio que te dan tranquilidad"
- "Soluciones que marcan el camino"
- "Seguridad, calidad y durabilidad"
- "Seguridad que se ve, calidad que dura"
- "Experiencia, calidad y compromiso en cada proyecto"

---

## 3. Branding

### Paleta de colores

La marca actualmente comunica sus distintas líneas de servicio con paletas independientes (corte láser en azul, impermeabilización en naranja, señalización/boyas en amarillo, industrial en azul marino con amarillo). Para el sitio web se propone unificar esto en una paleta corporativa coherente:

| Uso | Color | HEX |
|---|---|---|
| Primario (marca / fondos oscuros, headers) | Azul Marino Corporativo | `#0B2545` |
| Acento principal (CTAs, destacados) | Naranja Energía | `#F2732A` |
| Acento secundario (detalles, íconos de seguridad/vial) | Amarillo Seguridad | `#FFC627` |
| Neutro oscuro (texto, fondos) | Negro Grafito | `#111111` |
| Neutro claro (fondos, espacios) | Blanco | `#FFFFFF` |
| Neutro medio (texto secundario, bordes) | Gris Acero | `#6B7280` |

### Tipografía sugerida

- **Encabezados/Titulares:** Montserrat o Poppins, en pesos Bold/ExtraBold — coherente con la tipografía condensada y de alto impacto usada en los materiales actuales de la marca.
- **Cuerpo de texto:** Inter o Roboto, en pesos Regular/Medium — para máxima legibilidad.

### Identidad visual

- Estética técnica/industrial pero confiable: bloques de color de alto contraste, iconografía clara por servicio, y fotografía de trabajos en proceso (aplicación, instalación, obra).
- La combinación de azul marino como base con acentos en naranja y amarillo debe transmitir solidez corporativa sin perder la energía y visibilidad propias de una empresa de servicios técnicos y de seguridad vial.

---

## 4. Estilo visual obligatorio

El sitio debe manejar un estilo **premium, enterprise y corporativo de marca**, con un acabado de **nivel big tech**: elegante y a la vez minimalista. Evitar recargar la interfaz; priorizar espacios en blanco, jerarquía visual clara y consistencia en el uso de la paleta de colores y tipografía definidas arriba.

---

## 5. Efectos y animaciones requeridos

El sitio debe incluir:

- **Efectos visuales y animaciones activadas por scroll** (reveal de elementos, transiciones suaves al hacer scroll, etc.).
- **Pantalla de carga (preloader)** con spinner animado + logo del negocio, mostrada antes de renderizar el sitio.
- **Animación en el título del hero**, aplicando efecto de máquina de escribir (typewriter), cambio de color en las letras, u otro efecto tipográfico dinámico similar.

---

## 6. Instrucciones sobre assets

- El **logo** debe usarse **sin fondo**. Si el archivo de logo disponible viene con fondo, el desarrollador debe removerlo antes de integrarlo al sitio (herramienta de remoción de fondo, edición manual, o generación de una versión limpia con Claude Code).
- **Nota:** en la carpeta `imagenes/` provista no se identificó un archivo de logo independiente; el contenido disponible corresponde a flyers publicitarios de cada línea de servicio. Si el cliente entrega un logo posteriormente, aplicar la instrucción anterior (remover fondo) antes de usarlo. Mientras tanto, tomar la paleta y tipografía definidas en este documento como guía de identidad visual.
- Optimizar/comprimir las imágenes antes de integrarlas al sitio para no afectar el rendimiento de carga.

---

## 7. Nota para el desarrollador

Este brief es el punto de partida, no el resultado final. El desarrollador puede **iterar sobre el proyecto dándole instrucciones a Claude Code las veces que sea necesario**, ajustando estilos, animaciones, textos o cualquier otro elemento hasta lograr el resultado deseado.

---

## 8. Checklist de trabajo

- [ ] Adaptar la plantilla base con la información del negocio (nombre, servicios, contacto, redes sociales).
- [ ] Aplicar la paleta de colores corporativa definida (`#0B2545`, `#F2732A`, `#FFC627`, `#111111`, `#FFFFFF`, `#6B7280`).
- [ ] Aplicar la tipografía sugerida (Montserrat/Poppins para encabezados, Inter/Roboto para cuerpo).
- [ ] Lograr un acabado visual premium, enterprise y minimalista (nivel big tech).
- [ ] Implementar animaciones/efectos activados por scroll.
- [ ] Implementar pantalla de carga (preloader) con spinner + logo del negocio.
- [ ] Implementar animación en el título del hero (typewriter, cambio de color u otro efecto tipográfico).
- [ ] Remover el fondo del logo antes de integrarlo al sitio (o generar/definir un logo si no existe uno disponible).
- [ ] Optimizar imágenes para web antes de publicarlas.
- [ ] Verificar que los datos de contacto (teléfonos, correo, Facebook, redes) estén correctamente enlazados y funcionales.
- [ ] Iterar con Claude Code hasta alcanzar el resultado final deseado.
