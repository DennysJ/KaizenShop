# KaizenShop
KaizenShop es una app que hace que comprar en línea sea tan fácil como hablar, sin importar su experiencia digital o capacidad visual. Con el asistente de voz Kai, cualquier persona puede buscar, elegir y pagar productos solo con la voz. 

KaizenShop is an application that makes online shopping as easy as talking, regardless of your digital experience or visual ability. With the voice assistant Kai, anyone can search for, select, and pay for products using only their voice.

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/KaizenShop/logo.jpg" alt="Logo" width="200">
</div>

---

## Enlaces 
● Presentación: `<link>` : <https://nodejs.org/es/download/>

● Demostración: `<link>` : <https://nodejs.org/es/download/>  

● Otros: 

-Node.js con Express. `<link>`: <https://nodejs.org/es/download/>  
-Pagos: Interledger Open Payments API. `<link>` : <https://openpayments.dev/> 

---

## ¿Cómo funciona?  
*KaizenShop* permite realizar compras en línea mediante comandos de voz simples.  
El asistente *Kai* escucha, interpreta y guía al usuario paso a paso: desde buscar productos, agregarlos al carrito, hasta completar el pago.  

---

## Beneficios 
- Accesibilidad total: compras solo con la voz.  
- Acompañamiento humano: experiencia empática y guiada.  
- Inclusión digital: personas mayores o con discapacidad pueden comprar fácilmente.  
- Pagos integrados y seguros: with the Open Payments API.

## Benefits 
- Full accessibility: shopping using only voice commands.  
- Human-like guidance: empathetic and step-by-step experience.  
- Digital inclusion: allows elderly and disabled users to shop easily.  
- Integrated and secure payments: .  

---

## Arquitectura 
1. Voz → Texto: API de reconocimiento de voz.  
2. Texto → Análisis: interpretación del comando (producto, categoría, acción).  
3. Texto → API: solicitud al backend (/api/shop).  
4. Backend Node.js: integración con la API de tienda/pagos.  
5. Respuesta → Pantalla/Voz: confirmación visual y hablada.

## Architecture 
1. Voice → Text: speech recognition API.  
2. Text → Analysis: command interpretation (product, category, action).  
3. Text → API: request to backend (/api/shop).  
4. Backend Node.js: integration with store/payment API.  
5. Response → Screen/Voice: spoken and visual confirmation.  

---

## Funciones indispensables 
- Botón de micrófono para activar Kai.  
- Conversión voz-texto en tiempo real.  
- Búsqueda y selección de productos por voz.  
- Gestión del carrito y pagos mediante comandos naturales.  
- Feedback hablado y visual para cada acción.  
- Autenticación segura y accesible.
  
## Essential Features 
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

● *Líder de Proyecto / Project Leader* → Denise Jacobo Garcia 

○ Coordina el desarrollo general del proyecto.  
○ Supervisa la accesibilidad y experiencia del usuario.  

● *Frontend Developer* → Alexandra Lizeth Ruiz Martínez  

○ Implementación de interfaz accesible (React/HTML/CSS).  
○ Integración del asistente de voz y flujo de compra.  

● *Backend Developer* → Julio Andrés Reyes García  

○ Desarrollo de API REST.  
○ Integración con base de datos y pasarela de pago.  

● *UX & Documentación* → Axell Jonathan Méndez Pérez 

○ Diseño accesible e inclusivo.  
○ Redacción de documentación técnica y pitch.  

## Flujo resumido 
1. Usuario activa a Kai con un comando de voz.  
2. Kai reconoce y analiza la intención.  
3. Se realiza la acción (buscar, agregar o comprar).  
4. Backend procesa la solicitud.  
5. Kai responde con confirmación hablada o visual.  

## Simplified Flow  
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
*APIs:* Web Speech API, REST API (Shop & Payments)

