# KaizenShop
KaizenShop es una app que hace que comprar en línea sea tan fácil como hablar, sin importar su experiencia digital o capacidad visual. Con el asistente de voz Kai, cualquier persona puede buscar, elegir y pagar productos solo con la voz. 

# KaizenShop + Kai  
Aplicación que convierte comandos de voz en *compras digitales accesibles*, usando reconocimiento de voz, inteligencia conversacional y APIs de comercio electrónico.  

Experimental application that transforms voice commands into *accessible digital shopping*, using speech recognition, conversational AI, and e-commerce APIs.  

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img-KaizenShop/Icono.jpg" alt="Prototipo" width="200">
</div>

---

## ¿Cuál es la problemática?  
Muchas personas —especialmente adultos mayores, usuarios con discapacidad visual o personas no familiarizadas con la tecnología— enfrentan dificultades para navegar tiendas en línea.  
Las interfaces llenas de botones, texto y pasos complejos generan frustración, abandono de carrito y exclusión digital.  

KaizenShop nace para eliminar esas barreras, ofreciendo una experiencia de compra *guiada, natural y accesible*, mediante un asistente de voz que acompaña al usuario en cada paso del proceso.  

## What is the problem?  
Many people —especially older adults, visually impaired users, or those unfamiliar with technology— struggle to navigate online stores.  
Interfaces overloaded with buttons, text, and complex steps lead to frustration, cart abandonment, and digital exclusion.  

KaizenShop was created to remove these barriers, offering a *guided, natural, and accessible shopping experience*, powered by a voice assistant that helps users through every step.  

---
## ¿Qué tecnología se usó?  
● Frontend: Web/Móvil (HTML, CSS, JavaScript, React).  
● Asistente de voz: Web Speech API (SpeechRecognition).  
● Backend: Node.js con Express. <link> : <https://nodejs.org/es/download/>  
● API de comercio: Integración REST con tiendas y pasarelas de pago.  
● Base de datos: MongoDB / Firebase (para usuarios y productos).  

## What technology was used?  
● Frontend: Web/Mobile (HTML, CSS, JavaScript, React).  
● Voice Assistant: Web Speech API (SpeechRecognition).  
● Backend: Node.js with Express. <link> : <https://nodejs.org/en/download/>  
● E-commerce API: REST integration with stores and payment gateways.  
● Database: MongoDB / Firebase (for users and products).  

---

## ¿Cuál es la solución?  
*KaizenShop + Kai* permite realizar compras en línea mediante comandos de voz simples.  
El asistente *Kai* escucha, interpreta y guía al usuario paso a paso: desde buscar productos, agregarlos al carrito, hasta completar el pago.  

A diferencia de las tiendas tradicionales, *no requiere navegar, escribir ni leer texto*.  
Kai ofrece confirmaciones habladas y visuales para garantizar seguridad y confianza en cada transacción.  

Además, al integrarse con métodos de pago digitales inclusivos, fomenta la *inclusión financiera* y la *autonomía digital*.  

## What is the solution?  
*KaizenShop + Kai* enables online shopping through simple voice commands.  
The voice assistant *Kai* listens, interprets, and guides users step-by-step — from product search and cart management to checkout.  

Unlike traditional e-commerce apps, *it requires no typing or complex navigation*.  
Kai provides spoken and visual confirmations to ensure secure and confident transactions.  

By integrating inclusive digital payment options, it promotes *financial inclusion* and *digital autonomy*.  
---

## Beneficios / Benefits  
- Accesibilidad total: compras solo con la voz.  
- Acompañamiento humano: experiencia empática y guiada.  
- Inclusión digital: personas mayores o con discapacidad pueden comprar fácilmente.  
- Pagos integrados y seguros: sin depender de bancos tradicionales.  

- Full accessibility: shopping using only voice commands.  
- Human-like guidance: empathetic and step-by-step experience.  
- Digital inclusion: allows elderly and disabled users to shop easily.  
- Integrated and secure payments: without relying on traditional banks.  

---

## Arquitectura / Architecture  
1. Voz → Texto: API de reconocimiento de voz.  
2. Texto → Análisis: interpretación del comando (producto, categoría, acción).  
3. Texto → API: solicitud al backend (/api/shop).  
4. Backend Node.js: integración con la API de tienda/pagos.  
5. Respuesta → Pantalla/Voz: confirmación visual y hablada.

1. Voice → Text: speech recognition API.  
2. Text → Analysis: command interpretation (product, category, action).  
3. Text → API: request to backend (/api/shop).  
4. Backend Node.js: integration with store/payment API.  
5. Response → Screen/Voice: spoken and visual confirmation.  

---

## Funciones indispensables / Essential Features  
- Botón de micrófono para activar Kai.  
- Conversión voz-texto en tiempo real.  
- Búsqueda y selección de productos por voz.  
- Gestión del carrito y pagos mediante comandos naturales.  
- Feedback hablado y visual para cada acción.  
- Autenticación segura y accesible.  

- Microphone button to activate Kai.  
- Real-time voice-to-text conversion.  
- Voice-based product search and selection.  
- Cart and payment management through natural language.  
- Spoken and visual feedback for every action.  
- Secure and accessible authentication.  

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img-KaizenShop/Prototype.jpg" alt="Prototype" width="300">
</div>

---

## Responsables / Team Members  

● *Líder de Proyecto / Project Leader* → [Tu nombre o el de tu equipo principal]  
○ Coordina el desarrollo general del proyecto.  
○ Supervisa la accesibilidad y experiencia del usuario.  

● *Frontend Developer* → [Nombre]  
○ Implementación de interfaz accesible (React/HTML/CSS).  
○ Integración del asistente de voz y flujo de compra.  

● *Backend Developer* → [Nombre]  
○ Desarrollo de API REST.  
○ Integración con base de datos y pasarela de pago.  

● *UX & Documentación* → [Nombre]  
○ Diseño accesible e inclusivo.  
○ Redacción de documentación técnica y pitch.  

## Flujo resumido / Simplified Flow  
1. Usuario activa a Kai con un comando de voz.  
2. Kai reconoce y analiza la intención.  
3. Se realiza la acción (buscar, agregar o comprar).  
4. Backend procesa la solicitud.  
5. Kai responde con confirmación hablada o visual.  

1. User activates Kai with a voice command.  
2. Kai recognizes and analyzes the intent.  
3. The action is performed (search, add, or purchase).  
4. Backend processes the request.  
5. Kai responds with spoken or visual confirmation.  

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img-KaizenShop/view.jpg" width="500">
</div>

---

## Especificaciones / Specifications  
*Lenguaje / Language:* JavaScript  
*Framework:* Node.js (v22.19.0) + React  
*Compilador / Compiler:* JavaScript  
*Plataforma:* Web / Móvil  
*APIs:* Web Speech API, REST API (Shop & Payments)

