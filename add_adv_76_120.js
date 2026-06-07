const fs = require('fs');

const rawText = `
**Clase 76: Voz Pasiva en Pasado y Futuro, y 'La última vez' (Passive Voice: *Was/Were* & *Will be* & Expression: *When was the last time...*)**
*   **Tema:** Uso avanzado de la voz pasiva para indicar a quién le sucedió algo, y cómo preguntar por "la última vez" que ocurrió un evento.
*   **Ejemplos:** *"Were you mugged last week? No, I wasn't mugged last week"* (¿Te atracaron la semana pasada? No, no me atracaron la semana pasada). *"Will they paint your house next week? Yes, my house will be painted next week"* (¿Pintarán tu casa la semana que viene? Sí, mi casa será pintada la semana que viene). *"When was she last seen? She was last seen in 2004"* (¿Cuándo fue vista por última vez? Fue vista por última vez en 2004).

**Clase 77: Preguntas con 'Última' y 'Primera vez' (Questions with *Last* and *First* time)**
*   **Tema:** Formular de manera nativa y directa preguntas sobre la primera o la última vez que ocurrió algo, colocando el adverbio antes del verbo principal.
*   **Ejemplos:** *"I last went shopping at Easter. When did you last go shopping?"* (Fui de compras por última vez en Pascua. ¿Cuándo fuiste de compras por última vez?). *"She first came to Madrid when she was 3 years old. When did she first come to Madrid?"* (Vino a Madrid por primera vez cuando tenía 3 años).

**Clase 78: 'Qué sentido tiene' y Condicionales con 'Siempre y cuando' (Expression: *What's the point of...* & Conditionals: *Provided that*)**
*   **Tema:** Cuestionar la lógica de una acción seguida de gerundio, e introducir el conector formal *provided that* como alternativa a *if*.
*   **Ejemplos:** *"What's the point of learning so many expressions if you don't use them?"* (¿Qué sentido tiene aprender tantas expresiones si no las usas?). *"You'll come to my house for dinner provided that you aren't tired when you get home after work"* (Vendrás a mi casa a cenar siempre y cuando no estés cansado cuando llegues a casa después del trabajo).

**Clase 79: Números de teléfono y Marcadores Deportivos (Phone numbers & Sports Scores)**
*   **Tema:** Práctica ágil de lectura de números de teléfono, y vocabulario deportivo para expresar resultados (como el uso de *love* para el cero en el tenis).
*   **Ejemplos:** *"What's your phone number? 6977047"* (¿Cuál es tu número de teléfono?). *"What was the score? Real Madrid won 3-0. Is Nadal winning? Yeah, he's winning 15 love"* (¿Cuál fue el resultado? El Real Madrid ganó 3-0. ¿Va ganando Nadal? Sí, va ganando 15 a cero).

**Clase 80: 'Estar contento de' e 'Intentar hacer algo' (Expression: *Be glad* & *Have a go at* + -ing)**
*   **Tema:** Expresar alegría por un evento pasado, y la frase nativa informal para decir que se ha intentado o probado a hacer algo.
*   **Ejemplos:** *"Are you glad you came to Spain 4 years ago? Yes, I'm glad I came to Spain four years ago"* (¿Estás contento de haber venido a España hace 4 años? Sí, estoy contento...). *"Did you have a go at learning Chinese last year? No, I didn't have a go at learning Chinese last year"* (¿Intentaste/probaste a aprender chino el año pasado? No...).

**Clase 81: Cuantificadores informales (Quantifiers: *Loads of / Heaps of*)**
*   **Tema:** Alternativas coloquiales de nivel nativo a "a lot of" (montones de).
*   **Ejemplos:** *"Does she have loads of dresses? Yes, she has loads of dresses"* (¿Tiene montones de vestidos? Sí, tiene montones de vestidos). *"Does she have heaps of shoes? Yep, she has heaps of shoes"* (¿Tiene montones de zapatos? Sí, tiene montones de zapatos).

**Clase 82: Dar razones y Preguntas Enfáticas (Giving reasons: *That's why / That's the reason why* & Emphatic: *Why on earth*)**
*   **Tema:** Conectar una causa con una consecuencia, y formular preguntas que expresan incredulidad ("¿Por qué demonios...?").
*   **Ejemplos:** *"She bought him a present because it was his birthday. That's why she bought him a present"* (Le compró un regalo porque era su cumpleaños. Por eso le compró un regalo). *"Why on earth did you call him so late? Why in the world did she eat all the cake?"* (¿Por qué demonios lo llamaste tan tarde? ¿Por qué en el mundo se comió ella toda la tarta?).

**Clase 83: Peticiones muy educadas (Polite Requests: *Would you mind if I* + Past Simple)**
*   **Tema:** Pedir permiso de forma extremadamente formal, donde el verbo que sigue al sujeto va obligatoriamente en pasado simple.
*   **Ejemplos:** *"Would you mind if I sat next to you? Yes, I would mind"* (¿Te importaría si me sentara a tu lado? Sí, me importaría). *"Would you mind if I turned up the radio? Oh, I wouldn't mind if you turned up the radio"* (¿Te importaría si subiera el volumen de la radio? Oh, no me importaría...).

**Clase 84: Verbo 'Empezar' y 'Dejar de' (Verb patterns: *Start + -ing / to* & *Stop + -ing*)**
*   **Tema:** Uso indistinto de gerundio o infinitivo tras *start*, y el uso obligatorio del gerundio tras *stop* para referirse a abandonar un hábito.
*   **Ejemplos:** *"When did it start raining? It started raining when we left the office"* (¿Cuándo empezó a llover? Empezó a llover cuando salimos de la oficina). *"Why did she stop eating apples?... When did he stop smoking? He stopped smoking two weeks ago"* (¿Por qué dejó de comer manzanas?... ¿Cuándo dejó de fumar? Dejó de fumar hace dos semanas).

**Clase 85: Verbo 'Parar para hacer algo' (Verb pattern: *Stop* + Infinitive)**
*   **Tema:** Contraste con la clase anterior; se usa *stop* más infinitivo (*to do*) cuando significa detener una acción para empezar a hacer otra.
*   **Ejemplos:** *"Did you stop in Siggoia to visit the aqueduct? Yes, we stopped in Siggoia to see the wonderful aqueduct"* (¿Parasteis en Segovia para visitar el acueducto? Sí, paramos en Segovia para ver el maravilloso acueducto).

**Clase 86: Modismo 'Estar atento' y Advertencias Fuertes (Idiom: *On the ball* & Strong advice: *Had better*)**
*   **Tema:** Expresión para estar despierto o "en la onda", y el modal de consejo casi en tono de amenaza ("más te vale").
*   **Ejemplos:** *"Jose was sleepy, so he wasn't on the ball today"* (José tenía sueño, así que no estuvo atento/en la onda hoy). *"You'd better study. You'd better shape up... You'd better calm down"* (Más te vale estudiar. Más te vale espabilar... Más te vale calmarte).

**Clase 87: Advertencias Negativas (Negative strong advice: *Had better not*)**
*   **Tema:** El formato negativo de advertencia fuerte ("más te vale no hacerlo").
*   **Ejemplos:** *"You'd better not shout. You'd better not cry"* (Más te vale no gritar. Más te vale no llorar). *"We'd better not tell him... He'd better not fight"* (Más nos vale no decírselo... Más le vale no pelear).

**Clase 88: Phrasal verb 'Querer decir' y Adverbio 'Todavía' (Phrasal verb: *Get at* & Adverb: *Still*)**
*   **Tema:** El uso de *get at* para referirse a la intención oculta en las palabras de alguien ("a dónde quieres llegar"), y confirmar acciones continuadas.
*   **Ejemplos:** *"What were they getting at at that meeting?... I knew what he was getting at, but I don't know what she was getting at"* (¿A dónde querían llegar en esa reunión?... Yo sabía a dónde quería llegar él, pero no sé a dónde quería llegar ella). *"Does she still love you? Yes, she still loves me"* (¿Todavía te quiere? Sí, todavía me quiere).

**Clase 89: Presente Perfecto con 'Aún/Ya' (Present Perfect: *Yet*)**
*   **Tema:** Uso avanzado del Presente Perfecto en negaciones y preguntas usando *yet*.
*   **Ejemplos:** *"Have you done your homework yet? No, I haven't done my homework yet"* (¿Ya has hecho tus deberes? No, todavía no he hecho mis deberes). *"Have you paid your bills yet? No, I haven't paid my bills yet"* (¿Ya has pagado tus facturas? No, todavía no las he pagado).

**Clase 90: 'Ya' Afirmativo y 'Ya no' (Adverb: *Already* vs Discontinued Habits: *No longer / Not anymore*)**
*   **Tema:** Afirmar que algo ocurrió antes de lo esperado (*already*) y formas de decir que un hábito se ha abandonado.
*   **Ejemplos:** *"I've already told you the answer. I've already finished my homework"* (Ya te he dicho la respuesta. Ya he terminado mis deberes). *"I no longer smoke. I don't smoke anymore"* (Ya no fumo. Ya no fumo).

**Clase 91: Contraste de Adverbios Temporales (Adverbs Review: *Yet, Already, Still, No longer, Anymore*)**
*   **Tema:** Mezcla rápida para dominar la colocación y el uso de cada adverbio.
*   **Ejemplos:** *"Has it arrived yet? It hasn't arrived yet... Has it arrived yet? Yes, it's already arrived"* (¿Ya ha llegado? Todavía no ha llegado... ¿Ya ha llegado? Sí, ya ha llegado). *"Do you still live in Spain? No, I no longer live in Spain"* (¿Todavía vives en España? No, ya no vivo en España).

**Clase 92: Futuro Perfecto con Plazos Temporales (Future Perfect: *Will have done* & Deadlines: *By*)**
*   **Tema:** Expresar acciones que estarán terminadas antes de un momento determinado del futuro ("Habré hecho esto para...").
*   **Ejemplos:** *"Will you have finished the report by next week? Yes, I'll have finished the report by next week"* (¿Habrás terminado el informe para la semana que viene? Sí, lo habré terminado...). *"Will you have taken your driving test by this time next year?"* (¿Habrás hecho tu examen de conducir para estas fechas el año que viene?).

**Clase 93: Modismo 'Encontrarse mal' (Idiom: *Feel under the weather*)**
*   **Tema:** La forma nativa más habitual de referirse a estar enfermo o pachucho.
*   **Ejemplos:** *"Were you feeling under the weather? Yes, I was feeling a bit under the weather"* (¿Te encontrabas mal? Sí, me encontraba un poco mal/pachucho). *"She told me she was feeling under the weather, too"* (Ella me dijo que también se encontraba mal).

**Clase 94: Expresión 'Tener que / Estar por' y Phrasal verb 'Agotarse' (Expression: *Have yet to* & Phrasal verb: *Sell out of*)**
*   **Tema:** Formato elegante para decir que algo aún no se ha hecho, y el verbo para decir que nos hemos quedado sin mercancía.
*   **Ejemplos:** *"I haven't listened to their new song yet. I've yet to listen to their new song"* (Todavía no he escuchado su nueva canción. Aún tengo que escuchar/Está por escuchar...). *"Do you have any apples? No, we've sold out of apples"* (¿Tienen manzanas? No, se nos han agotado las manzanas).

**Clase 95: Adverbio 'Yet' como Intensificador (Intensifier: *Yet another / Yet more*)**
*   **Tema:** Usar *yet* para dar énfasis a algo que se repite o aumenta con pesadez ("Otro más", "Aún más").
*   **Ejemplos:** *"Do more questions need to be asked? Yes. Yet more questions need to be asked"* (¿Es necesario hacer más preguntas? Sí. Aún más preguntas necesitan ser hechas). *"Has he bought another car? Yes, he's bought yet another car"* (¿Ha comprado otro coche? Sí, ha comprado otro coche más).

**Clase 96: Aproximaciones y Cláusulas 'Para cuando' (Approximations: *Just over/under* & Future Perfect: *By the time*)**
*   **Tema:** Indicar cantidades "ligeramente por encima o debajo de", y usar el Futuro Perfecto cuando el límite temporal es otra acción.
*   **Ejemplos:** *"There were just over 3,000 people at the concert... The baby weighed just under 3 kg at birth"* (Había poco más de 3.000 personas en el concierto... El bebé pesó poco menos de 3 kg al nacer). *"Will you have saved up enough money by the time you retire? Yes, I'll have saved up enough money by the time I retire"* (¿Habrás ahorrado suficiente dinero para cuando te jubiles? Sí, habré ahorrado...).

**Clase 97: Repaso de los Tres Condicionales (Conditionals 1, 2 & 3 Review)**
*   **Tema:** Agilidad mental cambiando entre las consecuencias futuras, hipotéticas presentes o irreales del pasado.
*   **Ejemplos:** *"Will you get angry if she calls tomorrow? If she calls tomorrow, I'll get angry"* (Primer condicional). *"Would you get angry if she called every day? If she called every day, I'd get angry"* (Segundo condicional). *"Would you have got angry if she had called yesterday? If she had called yesterday, I'd have got angry"* (Tercer condicional).

**Clase 98: Mezcla de Condicionales y Dictado Telefónico (Mixed Conditionals & Long phone numbers)**
*   **Tema:** Consolidación total de las estructuras condicionales y dictado de números hiperlargos.
*   **Ejemplos:** *"Will you call me if you have a problem tomorrow?... Would you have called me if you'd had a problem yesterday?"* (¿Me llamarás si tienes un problema mañana?... ¿Me habrías llamado si hubieras tenido un problema ayer?). *"What's I's phone number? It's 01973225973"*.

**Clase 99: 'Nada más que' (Expression: *Nothing but*)**
*   **Tema:** Una estructura para excluir todo lo demás y dar énfasis a la única cosa que se hizo o se vio.
*   **Ejemplos:** *"You only saw sheep in New Zealand. I saw nothing but sheep in New Zealand"* (Solo viste ovejas en Nueva Zelanda. No vi nada más que ovejas en Nueva Zelanda). *"We ate nothing but pizza in Italy"* (No comimos nada más que pizza en Italia).

**Clase 100: Sustantivos Abstractos (Abstract Nouns with/without *The*)**
*   **Tema:** Aprender que palabras como "amor", "justicia" o "éxito" no llevan "the" al hablar en general, pero sí cuando van acompañados de una cláusula relativa.
*   **Ejemplos:** *"Do you believe in truth and justice? ... Is success important to you?"* (¿Crees en la verdad y la justicia? ... ¿El éxito es importante para ti?). *"The success the film achieved was amazing"* (El éxito que logró la película fue increíble).

**Clase 101: Phrasal verb 'Posponer' (Phrasal verb: *Put off*)**
*   **Tema:** Uso nativo de *put off* para hablar de aplazar eventos o reuniones.
*   **Ejemplos:** *"Shall we put it off till next week? Yes, let's put it off until next week"* (¿Lo posponemos hasta la próxima semana? Sí, pospongámoslo hasta la próxima semana). *"Did he put off going to the dentist? Yes, he put off going to the dentist"* (¿Pospuso su visita al dentista? Sí...).

**Clase 102: Verbos 'Conseguir' y 'Lograr' (Verb: *Get* & *Manage to*)**
*   **Tema:** Usar *get* para obtener objetos físicos o diplomas, y *manage to* para hablar de logros tras un esfuerzo.
*   **Ejemplos:** *"Did you get what you were looking for? Yes, I got what I was looking for"* (¿Conseguiste lo que buscabas? Sí, lo conseguí). *"Does he manage to spend time with his children every night? Yes, he manages to spend time with his children..."* (¿Logra/Se las arregla para pasar tiempo con sus hijos todas las noches?).

**Clase 103: Preposición 'Antes de' (Preposition: *Before* + -ing)**
*   **Tema:** Usar el gerundio obligatoriamente cuando el verbo sigue a la preposición *before*.
*   **Ejemplos:** *"Did you go to the bank before going to the gym? Yes, I went to the bank before going to the gym"* (¿Fuiste al banco antes de ir al gimnasio? Sí, fui al banco antes de ir al gimnasio).

**Clase 104: Preposición 'Después de' y Expresiones de Precio (Preposition: *After* + -ing & Pricing: *At... a...*)**
*   **Tema:** Gerundio tras la preposición *after* e indicar precios proporcionales en inglés ("a 2 euros el kilo").
*   **Ejemplos:** *"Did you take a shower after going to the beach? Yes, I took a shower after going to the beach"* (¿Te duchaste después de ir a la playa? Sí...). *"Can you get olive oil at €2 a liter in that shop?"* (¿Puedes conseguir aceite de oliva a 2€ el litro en esa tienda?).

**Clase 105: Cláusulas Temporales Formales (Formal clauses: *On* / *Whilst* + -ing)**
*   **Tema:** Alternativas literarias o formales a "cuando" y "mientras".
*   **Ejemplos:** *"On leaving the office, I fell over"* (Al salir de la oficina, me caí). *"I heard the news whilst driving to work"* (Escuché las noticias mientras conducía al trabajo). *"I took off my jacket on arriving home"* (Me quité la chaqueta al llegar a casa).

**Clase 106: 'Antes de' Formal y Preposiciones de Límite (Formal clause: *Prior to* & Limits: *Until / Up to*)**
*   **Tema:** Alternativa corporativa a "before", y preposiciones para marcar un tope de tiempo.
*   **Ejemplos:** *"I lived in London prior to moving to Madrid"* (Viví en Londres antes de/previo a mudarme a Madrid). *"We won't finish until next Tuesday... We'll have to stop production for up to 3 weeks"* (No terminaremos hasta el próximo martes... Tendremos que detener la producción por hasta 3 semanas).

**Clase 107: Modificadores Comparativos Formales (Modifiers: *Slightly / Considerably*)**
*   **Tema:** Graduar la diferencia en las comparaciones usando adverbios.
*   **Ejemplos:** *"Am I slightly taller or considerably taller than my student? You're slightly taller than your student"* (¿Soy ligeramente más alto o considerablemente más alto que mi estudiante? Eres ligeramente más alto...). *"Texas is considerably bigger than Portugal"* (Texas es considerablemente más grande que Portugal).

**Clase 108: Modificadores 'Un poco' y Expresión de Velocidad (Modifiers: *A bit / Quite a bit* & Expression: *Doing speed*)**
*   **Tema:** Modificadores comunes de comparativos y cómo preguntar a qué velocidad iba un coche usando el verbo *do*.
*   **Ejemplos:** *"Is Madrid a bit warmer or quite a bit warmer than London in the summer? Madrid's quite a bit warmer..."* (¿Es Madrid un poco más cálido o bastante más cálido que Londres en verano? Es bastante más cálido...). *"He was doing 90 mph when the police stopped him. How fast was he going? He was doing 90 mph"* (Iba a 90 mph cuando la policía lo paró. ¿A qué velocidad iba? Iba a 90 mph).

**Clase 109: Cláusulas Concesivas 'Por muy' (Concessive Clauses: *No matter how* + adjective/adverb)**
*   **Tema:** Expresar que la intensidad de una acción no cambiará el resultado ("Por mucho que... / Por muy rápido que...").
*   **Ejemplos:** *"No matter how hard you try, you won't succeed"* (Por mucho que lo intentes, no lo lograrás). *"No matter how fast you go, you'll never finish in time"* (Por muy rápido que vayas, nunca terminarás a tiempo).

**Clase 110: Cláusulas Concesivas de Cantidad (Concessive Clauses: *No matter how much / many*)**
*   **Tema:** Expresar la inutilidad de una acción en función de la cantidad de veces, gente o dinero ("No importa cuánto/os...").
*   **Ejemplos:** *"No matter how much you do, it won't be enough"* (No importa cuánto hagas, no será suficiente). *"No matter how many times you do it, you'll always make mistakes"* (No importa cuántas veces lo hagas, siempre cometerás errores).

**Clase 111: Cláusulas Concesivas 'Lo que sea' (Concessive Clauses: *No matter what*)**
*   **Tema:** Decir "Diga lo que diga" o "Pase lo que pase" usando *no matter what*.
*   **Ejemplos:** *"No matter what you say, I'm still going to do it"* (No importa lo que digas, lo voy a hacer de todos modos). *"No matter what he says, she will never ever forgive him"* (Diga lo que diga él, ella nunca jamás lo perdonará).

**Clase 112: Cláusulas 'Donde sea' y Expresión 'Dormir la siesta' (Concessive Clauses: *No matter where* & Expression: *Take a nap*)**
*   **Tema:** Decir "vayas donde vayas", y el modismo para dormir la siesta.
*   **Ejemplos:** *"No matter where you go, there will be a lot of people"* (No importa a dónde vayas, habrá mucha gente). *"How often does your sister take a nap? She takes a nap about three times a week"* (¿Con qué frecuencia tu hermana se echa una siesta? Se echa la siesta unas tres veces por semana).

**Clase 113: Preguntas Causativas (Causative questions: *What made you...*)**
*   **Tema:** Averiguar la causa de una decisión o cambio ("¿Qué te llevó a...?").
*   **Ejemplos:** *"What made you change your mind?"* (¿Qué te hizo cambiar de opinión?). *"What made them sell all their shares?"* (¿Qué les llevó a vender todas sus acciones?). *"What made her call him?"* (¿Qué le hizo llamarlo?).

**Clase 114: Phrasal verb 'Echarse atrás' y Adverbios 'Casi' (Phrasal verb: *Pull out of* & Adverbs of degree: *Nearly / Almost*)**
*   **Tema:** El verbo para abandonar una carrera o trato, y el uso de adverbios para acciones que estuvieron a punto de ocurrir.
*   **Ejemplos:** *"Have you ever had to pull out of a race at the last minute?"* (¿Alguna vez te has tenido que retirar de una carrera en el último minuto?). *"They've nearly finished the meeting... I almost fell down the stairs"* (Casi han terminado la reunión... Casi me caigo por las escaleras).

**Clase 115: El Adverbio de Escasez 'Apenas' (Adverb: *Hardly / Hardly ever*)**
*   **Tema:** Usar *hardly* (que ya tiene carga negativa) para decir "apenas" o "casi nunca".
*   **Ejemplos:** *"How often do you see him? I hardly ever see him anymore"* (¿Con qué frecuencia lo ves? Ya casi nunca/apenas lo veo). *"How many people came to the party? Hardly anyone showed up"* (¿Cuánta gente vino a la fiesta? Apenas apareció nadie).

**Clase 116: 'Else' con Partículas Interrogativas (Wh- Questions + *Else*)**
*   **Tema:** Formular "qué más", "quién más" o "dónde más", colocando *else* directamente tras la partícula de pregunta.
*   **Ejemplos:** *"What else did they do? They didn't do anything else"* (¿Qué más hicieron? No hicieron nada más). *"Who else went to the party? No one else went to the party... Where else can we go? We can't go anywhere else"* (¿Quién más fue a la fiesta? Nadie más fue... ¿A dónde más podemos ir? No podemos ir a ningún otro sitio).

**Clase 117: 'Else' en Afirmativas e Interrogativas (Pronouns + *Else*: *Someone else / Anywhere else*)**
*   **Tema:** Decir "alguien más", "algún otro lugar" añadiendo *else* al final del pronombre compuesto.
*   **Ejemplos:** *"Is there something else he wants to tell you? He wants to tell you something else"* (¿Hay algo más que él quiera decirte? Él quiere decirte algo más). *"Is there anywhere else you want to go? Yes, I want to go somewhere else"* (¿Hay algún otro lugar al que quieras ir? Sí, quiero ir a algún otro lugar).

**Clase 118: 'Else' con Pronombres Negativos (Negative Pronouns + *Else*: *Nothing else / Nobody else*)**
*   **Tema:** Uso de "nada más" o "nadie más" usando la variante negativa completa de *else*.
*   **Ejemplos:** *"Does anything else work? No, nothing else works"* (¿Funciona algo más? No, nada más funciona). *"Can anyone else do it? No, nobody else can do it"* (¿Puede hacerlo alguien más? No, nadie más puede hacerlo).

**Clase 119: Expresión 'Perder el control de' (Expression: *Lose control of*)**
*   **Tema:** Vocabulario específico para situaciones o vehículos inmanejables.
*   **Ejemplos:** *"Have you ever lost control of a situation? No, I've never lost control of the situation"* (¿Alguna vez has perdido el control de una situación? No...). *"Is it easy to lose control of your car when the road's icy? Yes, it's easy to lose control of your car..."* (¿Es fácil perder el control de tu coche cuando la carretera está helada? Sí...).

**Clase 120: Preposición 'Sin' y 'Sin que' (Preposition: *Without* + -ing & *Without + object + -ing*)**
*   **Tema:** Usar *without* seguido de gerundio ("sin quejarse"). Estructura super avanzada: "sin que él lo supiera", añadiendo un pronombre objeto o posesivo.
*   **Ejemplos:** *"He did it without complaining. She left without saying a word"* (Él lo hizo sin quejarse. Ella se fue sin decir una palabra). *"She did it without him knowing. She did it without his knowing"* (Ella lo hizo sin que él lo supiera). *"The thieves stole the bag without us seeing. The thieves stole the bag without our seeing"* (Los ladrones robaron el bolso sin que nosotros viéramos).
`;

const classes = [];
const classBlocks = rawText.trim().split('**Clase ');

for (let i = 1; i < classBlocks.length; i++) {
    const block = classBlocks[i];
    
    // Extract ID and Title
    const headerMatch = block.match(/^(\d+):\s*(.*?)\*\*/);
    if (!headerMatch) continue;
    const id = parseInt(headerMatch[1]);
    const title = headerMatch[2].trim();
    
    // Extract Theme
    const themeMatch = block.match(/\*\s*\*\*Tema:\*\*\s*(.*?)\n/);
    const theme = themeMatch ? themeMatch[1].trim() : '';
    
    // Extract Examples
    const examplesMatch = block.match(/\*\s*\*\*Ejemplos:\*\*\s*(.*)/);
    const examples = examplesMatch ? examplesMatch[1].trim() : '';
    
    classes.push({
        id, title, theme, examples
    });
}

let htmlContent = fs.readFileSync('index.html', 'utf8');

// Find the placeholder
const placeholderStartStr = "{ range: '76 - 120', title: 'Modismos, Expresiones de Tiempo y Phrasal Verbs Complejos', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "76 - 120",\n';
        formattedSection += '                        title: "Modismos, Expresiones de Tiempo y Phrasal Verbs Complejos",\n';
        formattedSection += '                        classes: [\n';
        
        classes.forEach((cls, idx) => {
            formattedSection += '                            {\n';
            formattedSection += '                                id: ' + cls.id + ',\n';
            formattedSection += '                                title: "' + cls.title.replace(/"/g, '\\"') + '",\n';
            formattedSection += '                                theme: "' + cls.theme.replace(/"/g, '\\"') + '",\n';
            formattedSection += '                                examples: "' + cls.examples.replace(/"/g, '\\"') + '"\n';
            formattedSection += '                            }' + (idx < classes.length - 1 ? ',' : '') + '\n';
        });
        
        formattedSection += '                        ]\n';
        formattedSection += '                    },';
        
        const newHtml = htmlContent.substring(0, placeholderStart) + formattedSection + htmlContent.substring(placeholderEnd + 4);
        fs.writeFileSync('index.html', newHtml);
        console.log("Successfully replaced the placeholder for classes 76-120 in advanced level.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
