# KaizenShop
KaizenShop es una app que hace que comprar en línea sea tan fácil como hablar, sin importar su experiencia digital o capacidad visual. Con el asistente de voz Kai, cualquier persona puede buscar, elegir y pagar productos solo con la voz. 

KaizenShop is an application that makes online shopping as easy as talking, regardless of your digital experience or visual ability. With the voice assistant Kai, anyone can search for, select, and pay for products using only their voice.

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/KaizenShop/logo.jpg" alt="Logo" width="200">
</div>

## Enlaces 
● Presentación/ Presentation: `<link>` : <https://nodejs.org/es/download/>

● Demostración/ Demonstration: `<link>` : <https://nodejs.org/es/download/>  

● Otros/ Others: 

-Node.js con Express. `<link>`: <https://nodejs.org/es/download/>  
-Pagos/ Payments: Interledger Open Payments API. `<link>` : <https://openpayments.dev/> 

## ¿Cómo funciona? / How does it work?

KaizenShop permite realizar compras en línea mediante comandos de voz simples.
El asistente virtual Kai escucha, interpreta y guía al usuario durante todo el proceso: desde la búsqueda de productos hasta la finalización del pago, garantizando una experiencia de compra fluida, intuitiva y asistida.

KaizenShop allows users to make online purchases through simple voice commands.
The virtual assistant Kai listens, interprets, and guides the user throughout the process — from searching for products to completing the payment — ensuring a smooth, intuitive, and assisted shopping experience.

Flujo general del Asistente de Compras “Kai” / General Flow of the Shopping Assistant “Kai”
<table> <tr> <th>Español</th> <th>English</th> </tr> <tr> <td>
Inicio / Saludo

Kai: “¡Hola! Soy Kai, tu asistente de compras. ¿Qué te gustaría hacer hoy?”
Opciones:

Buscar producto

Ver carrito

</td> <td>
Start / Greeting

Kai: “Hello! I’m Kai, your shopping assistant. What would you like to do today?”
Options:

Search for a product

View cart

</td> </tr> <tr> <td>
Si el usuario elige “Buscar producto”

Kai: “¿Qué producto quieres buscar?”
Ejemplo: El usuario dice: “teclado”

Kai busca en la base de datos y responde:

Encontré 2 resultados:
1. Teclado mecánico RGB – $450 MXN
2. Teclado inalámbrico compacto – $520 MXN
¿Deseas agregar uno al carrito?


Usuario elige: “Opción 2”
Kai: “Perfecto, agregado al carrito. ¿Qué deseas hacer ahora?”
Opciones:

Seguir buscando

Ver carrito

</td> <td>
If the user chooses “Search for a product”

Kai: “Which product would you like to search for?”
Example: The user says: “keyboard”

Kai searches the database and replies:

I found 2 results:
1. RGB Mechanical Keyboard – $450 MXN
2. Compact Wireless Keyboard – $520 MXN
Would you like to add one to your cart?


User chooses: “Option 2”
Kai: “Perfect, added to your cart. What would you like to do next?”
Options:

Keep searching

View cart

</td> </tr> <tr> <td>
Si el usuario elige “Ver carrito”

Kai muestra el contenido del carrito:

Tienes:
- Teclado inalámbrico compacto – $520 MXN
Total: $520 MXN
¿Deseas pagar o seguir comprando?


Opciones:

Pagar

Seguir comprando

</td> <td>
If the user chooses “View cart”

Kai shows the cart content:

You have:
- Compact Wireless Keyboard – $520 MXN
Total: $520 MXN
Would you like to pay or keep shopping?


Options:

Pay

Keep shopping

</td> </tr> <tr> <td>
Si el usuario elige “Pagar”

Kai: “Excelente, procesando el pago...”
Kai: “Pago exitoso. ¡Gracias por comprar!”

</td> <td>
If the user chooses “Pay”

Kai: “Excellent, processing your payment...”
Kai: “Payment successful. Thank you for your purchase!”

</td> </tr> <tr> <td>
Fin / Despedida

Kai: “Ha sido un placer ayudarte. ¡Vuelve pronto para más compras inteligentes!”

</td> <td>
End / Farewell

Kai: “It’s been a pleasure assisting you. Come back soon for more smart shopping!”

</td> </tr> </table>

## ¿Cómo ejecutar?/ How to run?
- Accesibilidad total: compras solo con la voz.  
- Acompañamiento humano: experiencia empática y guiada.  
- Inclusión digital: personas mayores o con discapacidad pueden comprar fácilmente.  
- Pagos integrados y seguros: with the Open Payments API.

## Equipo de Trabajo / WorkTeam  

● *Líder de Proyecto / Project Leader* → [Denise Jacobo Garcia](https://github.com/DennysJ)

○ Encargada de la coordinación general del equipo, la supervisión de los avances y la elaboración de la documentación técnica y funcional del sistema. Su labor garantiza una comunicación efectiva entre los miembros del equipo y el cumplimiento de los objetivos establecidos.

● *Frontend Developer* → [Alexandra Lizeth Ruiz Martínez](https://github.com/LizZeth06)

○ Responsable del diseño e implementación de la interfaz de usuario, así como de la integración de la API. Su objetivo es ofrecer una experiencia visual atractiva, interactiva y funcional para el usuario final.

● *Backend Developer* → [Julio Andrés Reyes García](https://github.com/nsr-1)

○ Encargado del desarrollo del servidor, la integración del sistema de reconocimiento por voz y la implementación de medidas de seguridad. Su trabajo asegura la estabilidad, eficiencia y protección de la plataforma.

● *Presentador y Estratega de Comunicación/Presenter and Communication Strategist* → [Axell Jonathan Méndez Pérez](https://github.com/TheAxellJonathan)

○ Responsable de la presentación del proyecto ante el jurado o público. Desarrolla y expone el discurso con un enfoque persuasivo, destacando el valor, la innovación y los aspectos más relevantes de la propuesta.

## Aprendizajes/ Learnings

  
## Logros/ Achievements 
- Microphone button to activate Kai.  
- Real-time voice-to-text conversion.  
- Voice-based product search and selection.  
- Cart and payment management through natural language.  
- Spoken and visual feedback for every action.  
- Secure and accessible authentication.  

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img-KaizenShop/Prototype.jpg" alt="Prototype" width="300">
</div>  

## ¿Qué viene despues?
1. Usuario activa a Kai con un comando de voz.  
2. Kai reconoce y analiza la intención.  
3. Se realiza la acción (buscar, agregar o comprar).  
4. Backend procesa la solicitud.  
5. Kai responde con confirmación hablada o visual.  
