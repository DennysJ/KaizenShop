# KaizenShop
KaizenShop es una app que hace que comprar en línea sea tan fácil como hablar, sin importar su experiencia digital o capacidad visual. Con el asistente de voz Kai, cualquier persona puede buscar, elegir y pagar productos solo con la voz. 

KaizenShop is an application that makes online shopping as easy as talking, regardless of your digital experience or visual ability. With the voice assistant Kai, anyone can search for, select, and pay for products using only their voice.

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img/KS.jpg" alt="Logo" width="400">
</div>

## Enlaces 
● Presentación/ Presentation: [link](https://drive.google.com/drive/u/1/folders/1YRC9LtbqexFMKB7oVn69tkNezbNUKN27)

● Demostración/ Demonstration: [link](https://drive.google.com/drive/u/1/folders/1V1DkOPaTb64UILSY8yqYGqddeGpkgvuG)

● Documentación/ Documentation: [link](https://drive.google.com/drive/u/1/folders/1wjlbGF5fdWGIwTob3ZP9wCIQFm40Yebn)

● Otros/ Others: 

-Node.js con Express. `<link>`: <https://nodejs.org/es/download/>  
-Pagos/ Payments: Interledger Open Payments API. `<link>` : <https://openpayments.dev/> 

## ¿Cómo funciona? / How does it work?

KaizenShop permite realizar compras en línea mediante comandos de voz simples.
El asistente virtual Kai escucha, interpreta y guía al usuario durante todo el proceso: desde la búsqueda de productos hasta la finalización del pago, garantizando una experiencia de compra fluida, intuitiva y asistida.

KaizenShop allows users to make online purchases through simple voice commands.
The virtual assistant Kai listens, interprets, and guides the user throughout the process from searching for products to completing the payment ensuring a smooth, intuitive, and assisted shopping experience.

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

## Aprendizajes / Learnings

KaizenShop no solo implicó el desarrollo de una aplicación funcional, sino también la adquisición de habilidades técnicas y personales clave durante el proceso. Entre los aprendizajes más relevantes del equipo se encuentran:

KaizenShop not only involved developing a functional application but also acquiring key technical and personal skills throughout the process. The team’s most significant learnings include:

1. Implementación de la API / API Implementation

Aprendimos a integrar exitosamente la API de Open Payments en nuestra aplicación.
We learned how to successfully integrate the Open Payments API into our application.

2. Networking / Networking
   
El trabajo en equipo fomentó la colaboración activa entre nosotros y otros equipos de trabajo, además del intercambio de conocimientos entre áreas técnicas, fortaleciendo la comunicación.

Teamwork encouraged active collaboration among our team and others, promoting knowledge exchange across technical areas and strengthening communication.

3. Manejo del tiempo y del estrés / Time and Stress Management
   
La presión de los plazos cortos permitió mejorar la gestión del tiempo, priorizando tareas y manteniendo la concentración ante escenarios de alta demanda.

The pressure of tight deadlines helped improve time management by prioritizing tasks and maintaining focus in high-demand situations.

4. Improvisación de soluciones / Problem-Solving and Adaptability
   
Ante imprevistos técnicos, el equipo desarrolló la capacidad de analizar, proponer y aplicar soluciones rápidas y efectivas, manteniendo la estabilidad del proyecto.

When facing unexpected technical issues, the team developed the ability to analyze, propose, and implement quick and effective solutions, ensuring project stability.

5. Aprender a vender la idea / Learning to Pitch the Idea

Se fortalecieron las habilidades de presentación y comunicación, enfocándose en transmitir el valor, la innovación y la funcionalidad del proyecto ante distintos públicos.

Presentation and communication skills were strengthened, focusing on effectively conveying the project’s value, innovation, and functionality to different audiences.

## Logros / Achievements

KaizenShop representó una experiencia de crecimiento tanto técnico como colaborativo, en la que el equipo demostró organización, compromiso y capacidad de adaptación frente a los desafíos del desarrollo.

KaizenShop represented an experience of both technical and collaborative growth, in which the team demonstrated organization, commitment, and the ability to adapt to development challenges.

1. Trabajo en equipo / Teamwork

Aunque la colaboración siempre ha sido una fortaleza, alcanzar un nivel tan alto de organización y sincronía entre todos los miembros fue un avance significativo. Este logro refleja la comunicación efectiva y la coordinación constante dentro del equipo.

Although collaboration has always been a strength, achieving such a high level of organization and synchronization among all members was a significant milestone. This accomplishment reflects effective communication and continuous coordination within the team.

2. Gestión del tiempo / Time Management

Cumplir con las metas establecidas en un periodo más corto del previsto fue un logro importante, resultado de una buena planificación y del compromiso colectivo.

Meeting the established goals in a shorter timeframe than expected was an important achievement, resulting from effective planning and strong team commitment.

3. Superación de desafíos técnicos / Overcoming Technical Challenges

Desarrollar una aplicación funcional en un tiempo limitado, cumpliendo con los estándares y expectativas definidos, representó uno de los mayores retos superados por el equipo.

Developing a fully functional application within a limited timeframe, while meeting defined standards and expectations, represented one of the team’s greatest challenges successfully overcome.

4. Aprendizaje conjunto / Collective Learning

Este proyecto fortaleció nuestras habilidades técnicas y de comunicación, consolidando la confianza en el trabajo colaborativo.

This project strengthened our technical and communication skills, reinforcing trust and efficiency in collaborative work. 

## ¿Qué viene después?/What comes next?

KaizenShop cuenta con un alto potencial para continuar su desarrollo, incorporando nuevas funcionalidades y mejoras que fortalezcan su valor comercial. Entre las áreas más viables y estratégicas se encuentran:

1. Soporte multilingüe / Multilingual Support
Ampliar el alcance de la aplicación mediante la integración de múltiples idiomas, permitiendo llegar a usuarios internacionales y mejorar la accesibilidad global del asistente.

1. Expand the app’s reach by integrating multiple languages, enabling access for international users and improving the assistant’s overall accessibility.

2. Personalización del usuario / User Personalization
Incorporar perfiles personalizados que adapten las recomendaciones, historial de búsqueda y tono de interacción según las preferencias de cada cliente.

2. Implement personalized profiles to tailor recommendations, search history, and interaction tone according to each user’s preferences.

3. Recomendaciones inteligentes / Smart Recommendations
Utilizar técnicas de inteligencia artificial para sugerir productos basados en las búsquedas, historial o comportamientos del usuario, aumentando la retención y satisfacción del cliente.

3. Use artificial intelligence techniques to suggest products based on user searches, history, or behavior, enhancing engagement and customer satisfaction.

4. Asistente con aprendizaje continuo / Continuous Learning Assistant
Implementar un sistema de aprendizaje automático que permita a Kai mejorar sus respuestas y precisión con base en las interacciones de los usuarios, ofreciendo una experiencia cada vez más personalizada y eficiente.

4. Implement a machine learning system that allows Kai to improve its responses and accuracy based on user interactions, delivering a more personalized and efficient experience over time.

## Especificaciones / Specifications
Lenguaje y versión/Language and version: Java Script y Nodle.js (v22.19.0)

Compilador/Compiler: Java Script.

Librerías/libraries:

Reconocimiento de voz: <link> : https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

Animación: <link> : https://gsap.com/

<div align="center">
  <img src="https://github.com/DennysJ/KaizenShop/blob/main/Img/indexas.jpg" alt="InicioIA" width="600">
</div> 
