const fs = require('fs');

const rawText = `
**Clase 1: Preguntas Negativas con 'To be' y el Intensificador 'Tan... que' (Negative questions & *So... that*)**
*   **Tema:** Formular preguntas en negativo en presente y pasado, y usar la estructura *so + adjetivo + that* para expresar una consecuencia debido a una cualidad extrema.
*   **Ejemplos:** *"Why aren't you single?"* (¿Por qué no estás soltero?). *"Why wasn't your birthday yesterday?"* (¿Por qué no fue ayer tu cumpleaños?). *"The book is so big that you can't put it into your pocket"* (El libro es tan grande que no puedes meterlo en tu bolsillo).

**Clase 2: El Intensificador 'Un/una... tan... que' (Intensifier: *Such a... that*)**
*   **Tema:** Contraste con la clase anterior; se usa *such a* cuando la cualidad acompaña a un sustantivo, en lugar de a un adjetivo solo.
*   **Ejemplos:** *"They are such friendly people that they always make you feel at home"* (Son personas tan amigables que siempre te hacen sentir como en casa). *"The movie was so boring that I fell asleep. It was such a boring movie that I fell asleep"* (La película fue tan aburrida que me quedé dormido. Fue una película tan aburrida que me quedé dormido).

**Clase 3: Preguntas Negativas Auxiliares y Verbo 'Durar' (Negative auxiliary questions & Verb: *Last*)**
*   **Tema:** Uso fluido de auxiliares negativos (*didn't, doesn't, can't*) para preguntar el porqué de una situación, y referirse a la duración de algo.
*   **Ejemplos:** *"Why didn't you grow up in the United States?"* (¿Por qué no creciste en Estados Unidos?). *"This class can't last 2 hours. Why can't this class last 2 hours?"* (Esta clase no puede durar 2 horas. ¿Por qué no puede durar 2 horas esta clase?).

**Clase 4: Dictado numérico y Duración de acciones (Dictation & Expression: *How long does it take...*)**
*   **Tema:** Agilidad escuchando cifras exactas y preguntar cuánto se tarda en hacer una tarea.
*   **Ejemplos:** *"8,616,660... 60,666"*. *"How long does it take to make an omelette? It takes about a half an hour to make an omelette"* (¿Cuánto se tarda en hacer una tortilla? Se tarda alrededor de media hora en hacer una tortilla).

**Clase 5: Tardar tiempo en el Pasado y Futuro (Expression: *It will take / It took*)**
*   **Tema:** Aplicar la expresión de duración a situaciones pasadas o trayectos futuros.
*   **Ejemplos:** *"It will take you 3 and 1/2 hours to get to Valencia"* (Te llevará 3 horas y media llegar a Valencia). *"It took me half an hour to make breakfast yesterday"* (Ayer me llevó media hora hacer el desayuno).

**Clase 6: Modales Negativos y Phrasal verb 'Contar con' (Negative Modals: *Wouldn't/Shouldn't/Couldn't* & Phrasal verb: *Count on*)**
*   **Tema:** Cuestionar decisiones hipotéticas ("¿Por qué no harías...?") y aprender el verbo compuesto para confiar en alguien.
*   **Ejemplos:** *"I wouldn't eat a shoe. Why wouldn't you eat a shoe?"* (No me comería un zapato. ¿Por qué no te comerías un zapato?). *"Can I count on you for tomorrow's meeting? Yes, you can count on me"* (¿Puedo contar contigo para la reunión de mañana? Sí, puedes contar conmigo).

**Clase 7: 'La última vez' y el Genitivo Sajón Compuesto (Expression: *When did you last...* & Compound Saxon Genitive)**
*   **Tema:** Maneras nativas de preguntar cuándo ocurrió algo por última vez, y encadenar posesivos.
*   **Ejemplos:** *"When did you last buy a 20-year-old car?"* (¿Cuándo fue la última vez que compraste un coche de 20 años?). *"Whose bone is that? It's Natasha's dog's bone"* (¿De quién es ese hueso? Es el hueso del perro de Natasha).

**Clase 8: Doble Genitivo y Experiencias de Vida (Double Possessive & Present Perfect: *Have you ever...*)**
*   **Tema:** Agilidad con la posesión y preguntar por experiencias insólitas.
*   **Ejemplos:** *"Whose desk is that? It's Louis's boss's desk"* (¿De quién es ese escritorio? Es el escritorio del jefe de Louis). *"Have you ever driven to Mongolia?"* (¿Alguna vez has conducido hasta Mongolia?).

**Clase 9: Dictado de millones y Peticiones Educadas Anidadas (Dictation & Indirect Requests: *Ask me what I would like...*)**
*   **Tema:** Reconocimiento auditivo de millones e instrucciones indirectas usando *would like*.
*   **Ejemplos:** *"1,222,348... 341,562"*. *"Ask me what I would like my students to do. What would you like your students to do?"* (Pregúntame qué me gustaría que hicieran mis alumnos. ¿Qué te gustaría que hicieran tus alumnos?).

**Clase 10: Frecuencia 'Día por medio' y Conectores de Contraste Formales (Expression: *Every other day* & Connectors: *Nevertheless / However*)**
*   **Tema:** Expresar "cada dos días" o "un día sí y otro no", e introducir conectores formales equivalentes a "sin embargo".
*   **Ejemplos:** *"Who do you call every other day? I call my friends every other day"* (¿A quién llamas cada dos días? Llamo a mis amigos cada dos días). *"It's raining. Nevertheless, you're going to go for a walk"* (Está lloviendo. Sin embargo, vas a ir a dar un paseo).

**Clase 11: Deseos hacia terceros y Matemáticas (Verb: *Want someone to do* & Fractions/Percentages)**
*   **Tema:** Estructura compleja del verbo querer ("Quiero que tú hagas..."), y lectura de proporciones matemáticas.
*   **Ejemplos:** *"Do you want your boss to raise your salary?"* (¿Quieres que tu jefe te suba el sueldo?). *"25% is the same as a quarter. 75% is the same as 3/4"* (25% es lo mismo que un cuarto. 75% es lo mismo que tres cuartos).

**Clase 12: Phrasal verbs de tomar nota y el Estilo Indirecto (Phrasal verbs: *Write down/Copy down* & *Reported Speech*)**
*   **Tema:** Verbos compuestos asociados a escribir información, e introducción a reportar lo que dijo otra persona (cambiando presente a pasado).
*   **Ejemplos:** *"Did you write down her name? Yes, I wrote down her name"* (¿Anotaste su nombre? Sí, lo anoté). *"I live in Spain. She said she lived in Spain"* (Vivo en España. Ella dijo que vivía en España).

**Clase 13: Estilo Indirecto con Modales y el Doble Posesivo (*Reported Speech* changes & Double Genitive: *A friend of mine*)**
*   **Tema:** Transformación de modales en el estilo indirecto (*will -> would, can -> could*) y hablar de relaciones ("Un amigo de ella", "Un amigo nuestro").
*   **Ejemplos:** *"I'll do it. She said she would do it... I can do it. She said she could do it"* (Lo haré. Ella dijo que lo haría... Puedo hacerlo. Ella dijo que podía hacerlo). *"She is Alberto's friend. She's a friend of Alberto's"* (Ella es amiga de Alberto. Ella es una amiga de Alberto/de los amigos de Alberto).

**Clase 14: Lectura de Años y Expresar Constancia (Reading Years & Verb: *Keep on* + -ing)**
*   **Tema:** Cifras históricas, y usar el verbo *keep* para acciones repetitivas o molestas que no cesan ("No para de...").
*   **Ejemplos:** *"2005... 18,01"*. *"Your car is always breaking down. My car keeps on breaking down"* (Tu coche se avería siempre. Mi coche no para de averiarse).

**Clase 15: Phrasal verb 'Solucionar' y Tiempos Perfectos (Phrasal verb: *Sort out* & Present Perfect with *Since/For*)**
*   **Tema:** Usar el verbo compuesto para "arreglar un asunto" o encontrar solución, y contraste de periodos temporales.
*   **Ejemplos:** *"Have you sorted out your financial problem? No, I haven't sorted out my financial problems yet"* (¿Has solucionado tu problema financiero? No, aún no...). *"She's been in England since the 29th. She's been there for 2 days"* (Lleva en Inglaterra desde el 29. Lleva allí 2 días).

**Clase 16: Existencia Perfecta y Existencia Modal (Perfect Existence: *There have been* & Modals: *There might/should be*)**
*   **Tema:** Expresar que "ha habido" cosas, o formular hipótesis de que "podría haber" o "debería haber" algo en el futuro.
*   **Ejemplos:** *"Have there been a lot of problems in the office lately?"* (¿Ha habido muchos problemas en la oficina últimamente?). *"Will there be a meeting tomorrow? Yes... There might be more than one"* (¿Habrá una reunión mañana? Sí... Podría haber más de una).

**Clase 17: Existencia Modal Perfecta y Respuestas Cortas (Past Modal Existence: *There must have been* & Short Answers)**
*   **Tema:** Estructura avanzada para deducir lo que hubo en el pasado ("Debe de haber habido"), y ráfagas rápidas de auxiliares.
*   **Ejemplos:** *"There may have been more... There must have been more"* (Puede que haya habido más... Debe de haber habido más). *"Can you make a Spanish omelette? Yes, I can. Do you believe in ghosts? No, I don't"* (¿Sabes hacer una tortilla española? Sí. ¿Crees en fantasmas? No).

**Clase 18: Expresión 'Apetecer' y Matemáticas (Expression: *Feel like* + -ing & Basic Math)**
*   **Tema:** Usar *feel like* seguido de un gerundio para indicar ganas o antojo de algo. Operaciones matemáticas (*plus, minus, times, divided by*).
*   **Ejemplos:** *"Do you feel like having an ice cream? Yes, I feel like having an ice cream"* (¿Te apetece tomarte un helado? Sí, me apetece). *"17 - 3 = 14... 81 / 9 = 9"*.

**Clase 19: El Primer Condicional Afirmativo y Cantidades Grandes (First Conditional: *If + Present, Will* & Questions: *How many*)**
*   **Tema:** Establecer condiciones reales en el futuro, y extraer el dato numérico de grandes frases.
*   **Ejemplos:** *"If you pay me, will you study more? Yes. If you pay me, I'll study more"* (Si te pago, ¿estudiarás más? Sí, si me pagas, estudiaré más). *"Yesterday there were 746,976 people at the bus stop. How many people were there at the bus stop?"* (Ayer había 746.976 personas en la parada de autobús. ¿Cuántas personas había...?).

**Clase 20: El Primer Condicional Negativo e Interrogativo (Negative & Interrogative First Conditional)**
*   **Tema:** Formular resultados negativos ante una condición, y hacer preguntas condicionales.
*   **Ejemplos:** *"Will you come to the party if I invite you? No, I won't come to the party if you invite me"* (¿Vendrás a la fiesta si te invito? No, no vendré a la fiesta si me invitas). *"Will you eat a salad if you're very hungry?"* (¿Te comerás una ensalada si tienes mucha hambre?).

**Clase 21: Conectores Concesivos y Phrasal verb 'Hacer las paces' (Connectors: *Even though / Even if* & Phrasal verb: *Make up with*)**
*   **Tema:** Introducir un obstáculo que no impide la acción ("aunque", "incluso si"), y el verbo para reconciliarse con alguien.
*   **Ejemplos:** *"I'm going to go to the park even though it's raining"* (Voy a ir al parque aunque esté lloviendo). *"Has your mother made up with your father yet?"* (¿Tu madre ya ha hecho las paces con tu padre?).

**Clase 22: Conectores de Causa Formal (Cause Connectors: *Because of* vs *Due to the fact that*)**
*   **Tema:** Diferenciar entre "por culpa de" seguido de un sustantivo, y "debido al hecho de que" seguido de una oración completa.
*   **Ejemplos:** *"He arrived late because of the traffic"* (Llegó tarde por culpa del tráfico). *"My flight arrived late due to the fact that there was a delay"* (Mi vuelo llegó tarde debido al hecho de que hubo un retraso).

**Clase 23: El Segundo Condicional Afirmativo y Agilidad Numérica (Second Conditional: *If + Past, Would* & Thousands dictation)**
*   **Tema:** Hipótesis irreales sobre el presente/futuro ("Si yo tuviera, haría").
*   **Ejemplos:** *"72,32 people went to the rock concert"*. *"If you had more money, would you buy a yacht? Yes. If I had more money, I'd buy a yacht"* (Si tuvieras más dinero, ¿comprarías un yate? Sí, si tuviera más dinero...).

**Clase 24: Segundo Condicional Negativo y el uso de 'Were' (Negative Second Conditional & Use of *Were* for 'I')**
*   **Tema:** Negar situaciones hipotéticas, y recordar que el verbo *To Be* en condicional irreal es *were* para todas las personas.
*   **Ejemplos:** *"Would you give me money if I asked you for it? No, I wouldn't give you money if you asked me for it"* (¿Me darías dinero si te lo pidiera? No...). *"If you were rich, would you stop working? Yes, if I were rich, I'd stop working"* (Si fueras rico, ¿dejarías de trabajar? Sí, si yo fuera rico...).

**Clase 25: Preguntas Irreales y Conectores de Oposición (Second Conditional Questions & Connectors: *Despite / In spite of*)**
*   **Tema:** Entrevistar con situaciones extremas y dominar las traducciones de "a pesar de".
*   **Ejemplos:** *"Would you live on a deserted island if you had a constant supply of food?"* (¿Vivirías en una isla desierta si tuvieras un suministro constante de comida?). *"I'm going to the beach despite the crowds... I'm going to the beach in spite of the crowds"* (Voy a la playa a pesar de la multitud).

**Clase 26: Alternativas y Preferencias (Expressions: *Instead of + ing* & *Rather than*)**
*   **Tema:** Formas de expresar que se hace una cosa en detrimento de otra ("en lugar de").
*   **Ejemplos:** *"Instead of making excuses, just study"* (En lugar de poner excusas, simplemente estudia). *"He doesn't have coffee. He prefers drinking tea. Rather than drinking coffee, he likes to drink tea"* (No toma café. Prefiere beber té. En lugar de beber café, le gusta beber té).

**Clase 27: El Tercer Condicional Afirmativo y Negativo (Third Conditional: *If + Past Perfect, Would have + participle*)**
*   **Tema:** Hipótesis sobre el pasado, referidas a cosas que ya no se pueden cambiar ("Si lo hubiera sabido, habría ido").
*   **Ejemplos:** *"Would you have told me if you'd known? Yes, I'd have told you if I'd known"* (¿Me lo habrías dicho si lo hubieras sabido? Sí, te lo habría dicho si lo hubiera sabido). *"Would you have won if you hadn't trained? No, I wouldn't have won if I hadn't trained"* (¿Habrías ganado si no hubieras entrenado? No, no habría ganado...).

**Clase 28: Preguntas del Tercer Condicional y Expresión 'Quedarse en blanco' (Third Conditional Questions & Expression: *Go blank*)**
*   **Tema:** Ráfaga rápida interrogativa del tercer condicional y la locución nativa para olvidar lo que ibas a decir.
*   **Ejemplos:** *"Would you have come to my party if you'd known about it?"* (¿Habrías venido a mi fiesta si te hubieras enterado/lo hubieras sabido?). *"When did you last go blank? I last went blank 3 weeks ago... Oh, what were you saying? I'm sorry. I've gone blank"* (¿Cuándo fue la última vez que te quedaste en blanco? Me quedé en blanco por última vez hace 3 semanas... Oh, ¿qué estabas diciendo? Lo siento. Me he quedado en blanco).

**Clase 29: Comparativas del Pasado vs Presente (Comparisons with *Used to*)**
*   **Tema:** Contrastar "menos que" o "no tanto como" frente a lo que se solía tener en el pasado.
*   **Ejemplos:** *"I have less time than I used to have. I don't have as much time as I used to have"* (Tengo menos tiempo del que solía tener. No tengo tanto tiempo como el que solía tener). *"Cats aren't as friendly as dogs"* (Los gatos no son tan amigables como los perros).

**Clase 30: Cantidades Masivas y el Adverbio 'Incluso' (Large Quantities Pluralized & Adverb: *Even*)**
*   **Tema:** Aprender que palabras como *million* o *hundred* solo llevan 's' cuando no tienen un número exacto delante ("cientos de"), y cómo enfatizar sorpresa con *even*.
*   **Ejemplos:** *"3.7 million people bought her new album. Millions of people bought her new album"* (3.7 millones de personas... Millones de personas compraron su nuevo álbum). *"She knows how to drive a boat. She even knows how to fly a plane"* (Ella sabe cómo conducir un barco. Incluso sabe cómo pilotar un avión).

**Clase 31: 'Ni siquiera' Negativo y Repaso de Presente Perfecto (Negative Adverb: *Not even* & Present Perfect: *So far today*)**
*   **Tema:** Usar *even* junto a un verbo auxiliar negativo para darle el sentido de "ni siquiera", y verificar acciones de "lo que va de día".
*   **Ejemplos:** *"I can't remember what day it is either. I can't even remember what day it is"* (Tampoco puedo recordar qué día es. Ni siquiera puedo recordar qué día es). *"Have I asked you a lot of questions so far today?"* (¿Te he hecho muchas preguntas en lo que va del día?).

**Clase 32: Imperativos de Grupo y Phrasal verb 'Deshacerse de' (Group Imperative: *Let's / Let's not* & Phrasal verb: *Get rid of*)**
*   **Tema:** Sugerir que nosotros hagamos o no hagamos algo, y el verbo para eliminar o desechar cosas/personas.
*   **Ejemplos:** *"I don't want us to leave the studio. Let's not leave the studio"* (No quiero que nos vayamos del estudio. No nos vayamos del estudio). *"My car keeps breaking down. You should get rid of your car"* (Mi coche no para de averiarse. Deberías deshacerte de tu coche).

**Clase 33: Comparativos de Menor Cantidad (Comparatives: *Fewer vs Less* / *Not as many vs Not as much*)**
*   **Tema:** Reglas estrictas de contables e incontables al comparar inferioridad o igualdad negativa.
*   **Ejemplos:** *"Madrid has fewer skyscrapers than New York. Madrid doesn't have as many skyscrapers as New York"* (Madrid tiene menos rascacielos que Nueva York. Madrid no tiene tantos rascacielos como Nueva York). *"There's less gas in the tank than I thought there was"* (Hay menos gasolina en el tanque de lo que pensaba).

**Clase 34: Dictado Histórico y Expresión 'Ya no' (Historical Dates & Contrast: *Used to* vs *Anymore*)**
*   **Tema:** Leer años de dos en dos, y contrastar hábitos pasados con la realidad actual usando *anymore* al final de la oración.
*   **Ejemplos:** *"1306... 1402... 1501"* (Se lee: Trece cero seis, Catorce cero dos...). *"I don't go out every Friday and Saturday anymore. You used to go out every Friday and Saturday"* (Ya no salgo todos los viernes y sábados. Tú solías salir todos los viernes y sábados).

**Clase 35: Interrogativas con Soler/Ya no, y 'No tan...' (Questions: *Used to/Anymore* & Expression: *Not that* + Adjective)**
*   **Tema:** Formular la pregunta de hábitos pasados, y usar *that* antes de un adjetivo para restar intensidad ("No es para tanto").
*   **Ejemplos:** *"My hair isn't green anymore. Did your hair used to be green?"* (Mi pelo ya no es verde. ¿Solía ser verde tu pelo?). *"This suitcase is heavy, but it's not that heavy"* (Esta maleta es pesada, pero no es tan pesada).
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
const placeholderStartStr = "{ range: '1 - 35', title: 'Énfasis, Duración y Estilo Indirecto', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "1 - 35",\n';
        formattedSection += '                        title: "Énfasis, Duración y Estilo Indirecto (Clases 1 a 35)",\n';
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
        console.log("Successfully replaced the placeholder for classes 1-35 in advanced level.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
