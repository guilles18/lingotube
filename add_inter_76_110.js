const fs = require('fs');

const rawText = `
**Clase 76: Presente Perfecto con 'So far' (Present Perfect: *So far / This morning*)**
*   **Tema:** Introducción al Presente Perfecto para acciones que han ocurrido en un periodo de tiempo que aún no ha terminado ("hasta ahora", "esta mañana").
*   **Ejemplos:** *"I've written five emails this morning. I haven't eaten fruit today"* (He escrito cinco correos esta mañana. No he comido fruta hoy). *"So far today, I've had four coffees"* (Hasta ahora, hoy he tomado cuatro cafés).

**Clase 77: Presente Perfecto vs. Pasado Simple: 'Tomar/Llevar' (Present Perfect vs. Past Simple: *Take/Took*)**
*   **Tema:** Contraste directo entre una acción terminada ayer y una acción en un periodo abierto (hoy/esta semana) con el verbo *take*.
*   **Ejemplos:** *"Have you taken a shower today? Yes, I've taken a shower today"* (¿Te has duchado hoy? Sí...). *"Did you take a shower yesterday? Yes, I took a shower yesterday"* (¿Te duchaste ayer? Sí...).

**Clase 78: Expresión 'La semana antepasada' y Preguntas combinadas (Expression: *The week before last* & Perfect Tenses)**
*   **Tema:** Formular preguntas en Presente Perfecto y aprender la expresión nativa para "la semana anterior a la pasada".
*   **Ejemplos:** *"Has your neighbor been to the bank this week?"* (¿Ha ido tu vecino al banco esta semana?). *"Did you catch the metro the week before last? Yes, I caught the metro the week before last"* (¿Cogiste el metro la semana antepasada? Sí, lo cogí...).

**Clase 79: Verbo 'Comprar' en Presente Perfecto y Pasado (Present Perfect vs Past Simple: *Buy/Bought*)**
*   **Tema:** Agilidad con el verbo *buy* combinándolo con pronombres reflexivos (*myself*) y objetos indirectos.
*   **Ejemplos:** *"Have you bought the paper today? Yes, I've bought the paper today"* (¿Has comprado el periódico hoy?). *"Did you buy me lunch yesterday? Yes, I bought you lunch yesterday"* (¿Me compraste el almuerzo ayer?).

**Clase 80: Pronombre Relativo 'De quién' e Hitos pasados (Relative pronoun: *Whose* & Contrasting actions)**
*   **Tema:** Formular preguntas indirectas complejas usando *whose* (de quién) y contrastar un logro del año pasado con uno de este año.
*   **Ejemplos:** *"Do you know whose shoes they are? No, I don't know whose shoes they are"* (¿Sabes de quién son esos zapatos? No...). *"Last year I beat three people at tennis, but this year I haven't beaten anybody"* (El año pasado vencí a tres personas al tenis, pero este año no he vencido a nadie).

**Clase 81: Verbo 'Ver' en Presente Perfecto y Pasado (Present Perfect vs Past Simple: *See/Saw/Seen*)**
*   **Tema:** Conjugación rápida del verbo ver (*see*) en los tres tiempos principales.
*   **Ejemplos:** *"Did you see me yesterday? Yes, I saw you yesterday"* (¿Me viste ayer? Sí, te vi ayer). *"Have you seen your neighbor today? Yes, I've seen my neighbor today"* (¿Has visto a tu vecino hoy?).

**Clase 82: Phrasal verb 'Investigar' y Expresión 'Oír hablar de' (Phrasal verb: *Look into* & Expression: *Hear of*)**
*   **Tema:** Usar *look into* para referirse a revisar o investigar un asunto, y *hear of* para preguntar si se conoce o se ha oído hablar de alguien.
*   **Ejemplos:** *"Will you look into the matter? Yes, I'll look into the matter"* (¿Investigarás el asunto? Sí...). *"Have you heard of the Beatles? Yes, I've heard of The Beatles"* (¿Has oído hablar de los Beatles? Sí...).

**Clase 83: Verbo 'Conseguir/Obtener' en Presente Perfecto (Present Perfect vs Past Simple: *Get/Got*)**
*   **Tema:** Uso del verbo *get* para referirse a conseguir trabajo, préstamos o aumentos de sueldo.
*   **Ejemplos:** *"Did you get a job yesterday? Yes, I got a job yesterday"* (¿Conseguiste un trabajo ayer?). *"Have you got a pay raise this month? Yes, I've got a pay raise this month"* (¿Has obtenido un aumento de sueldo este mes?).

**Clase 84: Presente Perfecto con 'Alguna vez' y 'A principios de' (Present Perfect: *Ever* & Time Expression: *Early last year*)**
*   **Tema:** Preguntar por experiencias vitales usando *ever* y fijar eventos al principio de un año.
*   **Ejemplos:** *"Have you ever talked to Bob Dylan? No, I've never talked to Bob Dylan"* (¿Alguna vez has hablado con Bob Dylan? No, nunca...). *"Did you buy a jumper early last year? Yes, I bought a jumper early last year"* (¿Compraste un jersey a principios del año pasado?).

**Clase 85: Verbo 'Cantar' en Presente Perfecto y Pasado (Present Perfect vs Past Simple: *Sing/Sang/Sung*)**
*   **Tema:** Conjugación del verbo cantar diferenciando claramente el sonido del pasado (*sang*) y el participio (*sung*).
*   **Ejemplos:** *"Did you sing in the shower yesterday? Yes, I sang in the shower yesterday"* (¿Cantaste en la ducha ayer?). *"Have you sung opera this year? Yes, I've sung opera this year"* (¿Has cantado ópera este año?).

**Clase 86: Duración con 'Por' y 'Desde' (Present Perfect: *How long*, *For* and *Since*)**
*   **Tema:** Preguntar "¿Cuánto tiempo llevas...?" y responder especificando el volumen de horas (*for*) o el momento de inicio (*since*).
*   **Ejemplos:** *"How long have you been awake? I've been awake for 10 hours... I've been awake since 8:00 p.m."* (¿Cuánto tiempo llevas despierto? Llevo despierto 10 horas... Llevo despierto desde las 20:00). *"How long have you known me? I've known you for 3 months"* (¿Cuánto tiempo hace que me conoces? Te conozco desde hace 3 meses).

**Clase 87: 'Desde' con Oraciones en Pasado (Present Perfect + *Since* + Past Simple Clause)**
*   **Tema:** Usar *since* seguido de una acción en Pasado Simple que marca el punto de partida.
*   **Ejemplos:** *"How long have you known me? I've known you since we were introduced"* (¿Desde cuándo me conoces? Te conozco desde que nos presentaron). *"I've had my job since I moved to Spain"* (Tengo mi trabajo desde que me mudé a España).

**Clase 88: Verbo 'Llevar puesto' y Repaso de tiempos temporales (Present/Past of *Wear* & Contrasting *Ago/For/Since*)**
*   **Tema:** El verbo *wear* (*wore/worn*) y la transformación de la misma idea usando diferentes estructuras de tiempo.
*   **Ejemplos:** *"Have you worn gloves this year? Yes, I've worn gloves this year"* (¿Has usado guantes este año?). *"I got married 10 months ago. You've been married for 10 months. You've been married since October"* (Me casé hace 10 meses. Llevas casado 10 meses. Llevas casado desde octubre).

**Clase 89: Phrasal verb 'Buscar' (Phrasal verb: *Look for*)**
*   **Tema:** Diferenciar *look for* (buscar algo perdido o deseado) de *look at* (mirar).
*   **Ejemplos:** *"Did you look for your car in the car park yesterday? Yes, I looked for my car..."* (¿Buscaste tu coche en el aparcamiento ayer? Sí, busqué mi coche...). *"What do you often look for? I often look for my keys"* (¿Qué buscas a menudo? A menudo busco mis llaves).

**Clase 90: Verbo Causativo 'Dejar / Permitir' (Causative Verb: *Let*)**
*   **Tema:** Usar el verbo *let* (que es igual en sus tres formas) para indicar permiso o la acción de permitir algo.
*   **Ejemplos:** *"Has your boss let you leave the office early this month? Yes, my boss has let me leave..."* (¿Tu jefe te ha dejado salir temprano de la oficina este mes?). *"Do you let your students leave early? No, I don't let my students leave early"* (¿Dejas que tus estudiantes salgan temprano? No...).

**Clase 91: El adverbio 'Acabar de' (Adverb: *Just* in Present Perfect and Past Simple)**
*   **Tema:** Expresar inmediatez ("Acabo de...") utilizando *just* con el Presente Perfecto (estilo británico) o el Pasado Simple (estilo americano).
*   **Ejemplos:** *"I've just had breakfast. I just had breakfast"* (Acabo de desayunar). *"She's just arrived. She just arrived"* (Ella acaba de llegar).

**Clase 92: Phrasal verb 'Regañar' y 'A principios de' (Phrasal verb: *Tell off* & Time Expression: *At the beginning of*)**
*   **Tema:** El uso nativo de *tell off* para reprender a alguien, y marcar momentos al comienzo de una semana o mes.
*   **Ejemplos:** *"Did your parents tell you off when you were little if you ate lots of sweets? Yes, my parents told me off..."* (¿Te regañaban tus padres cuando eras pequeño si comías muchos dulces?). *"Did you sing in the car at the beginning of the week?"* (¿Cantaste en el coche a principios de semana?).

**Clase 93: Respuestas cortas en Presente Perfecto (Short answers in Present Perfect: *Yes, I have / No, I haven't*)**
*   **Tema:** Agilidad con el auxiliar *have/has* para contestar rápidamente sin repetir el verbo.
*   **Ejemplos:** *"Have you ever eaten chicken? Yes, I have"* (¿Alguna vez has comido pollo? Sí, lo he hecho). *"Have I talked to you in Chinese? No, you haven't"* (¿Te he hablado en chino? No). *"Has he seen that movie? Yes, he has"*.

**Clase 94: Verbo 'Oír' y Dictado en los Miles (Past/Present Perfect: *Hear/Heard* & Dictation)**
*   **Tema:** Uso del verbo oír en pasado y práctica intensiva de escucha de números en decenas y cientos de miles.
*   **Ejemplos:** *"Did you hear the storm last night? Yes, I heard the storm last night"* (¿Oíste la tormenta anoche? Sí, la oí...). *"Last week I ate 43,675 apples... I ate 341,562 apples last week"* (La semana pasada comí 43.675 manzanas... Yo comí 341.562 manzanas).

**Clase 95: Pasado Continuo Interrumpido (Interrupted Past Continuous: *Was/Were doing... when*)**
*   **Tema:** Describir una acción que estaba en progreso (*was playing*) cuando fue interrumpida por otra acción en pasado simple (*saw*).
*   **Ejemplos:** *"What was he doing when I saw him? He was playing tennis when you saw him"* (¿Qué estaba haciendo él cuando lo vi? Estaba jugando al tenis cuando lo viste). *"What were they doing when the thief stole her bag? They were having dinner when the thief stole her bag"* (¿Qué estaban haciendo cuando el ladrón robó su bolso? Estaban cenando...).

**Clase 96: Obligación 'Tener que' en Pasado y Presente Perfecto (Modals: *Have to / Had to / Have had to*)**
*   **Tema:** Expresar obligación y necesidad en diferentes tiempos verbales. El pasado de *must* siempre es *had to*.
*   **Ejemplos:** *"Do I have to go to the supermarket to buy bread? Yes, you have to go..."* (¿Tengo que ir al supermercado a comprar pan?). *"She hasn't had to go to the office for 3 days"* (Ella no ha tenido que ir a la oficina durante 3 días).

**Clase 97: Preguntas de Obligación en Diferentes Tiempos (Questions with *Have to* in Present/Past/Present Perfect)**
*   **Tema:** Más práctica intensiva haciendo preguntas sobre obligaciones pasadas o recientes.
*   **Ejemplos:** *"Did your sister have to pick her children up from school yesterday? Yes, my sister had to pick her children up..."* (¿Tu hermana tuvo que recoger a sus hijos de la escuela ayer?). *"Have you had to go to Munich 3 days this week? Yes, I've had to go..."* (¿Has tenido que ir a Múnich 3 días esta semana?).

**Clase 98: Verbo 'Pelear' y Expresión 'Da la casualidad' (Verb: *Fight/Fought* & Expression: *As it happens*)**
*   **Tema:** El pasado y participio del verbo pelear o discutir, y la muletilla introductoria "As it happens" (Da la casualidad que...).
*   **Ejemplos:** *"Have you fought with your neighbor this week? No, I haven't fought with my neighbor this week"* (¿Te has peleado con tu vecino esta semana?). *"As it happens, we work in the same building... As it happens, our children go to the same school"* (Da la casualidad de que trabajamos en el mismo edificio... Da la casualidad de que nuestros hijos van al mismo colegio).

**Clase 99: Repaso Interrogativo en Pasado Simple (Past Simple Questions Review)**
*   **Tema:** Mezcla de verbos en pasado interrogativo (*take, teach, buy, see*) para comprobar fluidez.
*   **Ejemplos:** *"Did you take any pictures yesterday? Yes, I took some pictures yesterday"* (¿Tomaste alguna foto ayer?). *"Did you buy any furniture yesterday? No, I didn't buy any furniture yesterday"* (¿Compraste algún mueble ayer?).

**Clase 100: Presente Perfecto con 'Todavía / Ya' (Present Perfect + *Yet*)**
*   **Tema:** Uso de *yet* al final de la oración para preguntas ("¿Ya has...? ") y negaciones ("Todavía no he...").
*   **Ejemplos:** *"Have you had dinner yet? No, I haven't had dinner yet"* (¿Ya has cenado? No, todavía no he cenado). *"Has he decided where to go yet? No, he hasn't decided where to go yet"* (¿Ya ha decidido a dónde ir? No, no ha decidido a dónde ir todavía).

**Clase 101: Plazos temporales con 'Para las' (Deadlines: *By* + Time)**
*   **Tema:** Usar la preposición *by* en lugar de *at* para indicar un límite de tiempo ("para las 5", "a más tardar a las 7").
*   **Ejemplos:** *"I had to be in Malaga by quarter to 6"* (Tenía que estar en Málaga para las 6 menos cuarto). *"She will have to be there by 7. We will have to finish by 7:00"* (Ella tendrá que estar allí para las 7. Tendremos que terminar para las 7:00).

**Clase 102: Verbo 'Dormir' y Modales de Obligación (Verb: *Sleep/Slept* & Modals: *Must* vs *Had to*)**
*   **Tema:** El pasado de dormir y el contraste directo entre la obligación presente (*must*) y su forma en el pasado (*had to*).
*   **Ejemplos:** *"Have you slept well lately? Yes, I've slept well lately"* (¿Has dormido bien últimamente?). *"I must buy more fruit... I had to go on a diet because I had gained a little weight"* (Debo comprar más fruta... Tuve que hacer dieta porque había engordado un poco).

**Clase 103: Prohibiciones 'No debes' (Prohibition: *Mustn't*)**
*   **Tema:** Usar la forma negativa *mustn't* para dictar normas estrictas o prohibiciones.
*   **Ejemplos:** *"You mustn't speak in the library. Passengers mustn't talk to the driver"* (No debes hablar en la biblioteca. Los pasajeros no deben hablar con el conductor). *"You mustn't take off the helmet"* (No debes quitarte el casco).

**Clase 104: Expresión 'Visto que / Ya que' (Expression: *Seeing as*)**
*   **Tema:** Introducir cláusulas de causa/consecuencia con "Seeing as".
*   **Ejemplos:** *"Seeing as he has a cold, we won't go out"* (Visto que él está resfriado, no saldremos). *"Seeing as I don't know this expression, we'll study it"* (Ya que no conozco esta expresión, la estudiaremos).

**Clase 105: Deducciones Lógicas Afirmativas (Deduction: *Must be / Must have*)**
*   **Tema:** Extraer conclusiones evidentes en el presente usando *must* ("Debes estar cansado", "Debe tener dinero").
*   **Ejemplos:** *"I haven't slept for 3 days. You must be very tired"* (No he dormido en 3 días. Debes estar muy cansado). *"He has a Ferrari. He must have a lot of money"* (Tiene un Ferrari. Debe tener mucho dinero).

**Clase 106: Verbo 'Cerrar' y Deducciones Negativas (Verb: *Shut* & Negative Deduction: *Can't be*)**
*   **Tema:** El uso del verbo *shut* (que es irregular y se mantiene igual: *shut/shut/shut*) y extraer conclusiones negativas contundentes ("No puede ser que...").
*   **Ejemplos:** *"Did you shut the gate last night? Yes, I shut the gate last night"* (¿Cerraste el portón anoche?). *"I have slept 16 hours. You can't be tired"* (He dormido 16 horas. No puedes estar cansado). *"He has eaten five hamburgers. He can't be hungry"* (Se ha comido cinco hamburguesas. No puede tener hambre).

**Clase 107: El Adverbio 'Todavía' en Afirmativo (Adverb: *Still*)**
*   **Tema:** Usar *still* (colocado entre el sujeto y el verbo, o después del verbo *to be*) para indicar que una situación continúa.
*   **Ejemplos:** *"Are you still learning English? Yes, I'm still learning English"* (¿Todavía estás aprendiendo inglés? Sí, todavía estoy aprendiendo inglés). *"Do you still work as a teacher? Yes, I still work as a teacher"* (¿Todavía trabajas como profesor?).

**Clase 108: La Hora y Consejos con 'Debería' (Telling the Time & Advice Modal: *Should / Shouldn't*)**
*   **Tema:** Diferentes formas de leer la hora y dar recomendaciones o consejos morales.
*   **Ejemplos:** *"It's quarter to 10. It's 10:15. It's 10 to 9"* (Son las 10 menos cuarto. Son las 10 y cuarto. Son las 9 menos 10). *"You should propose to her. He shouldn't work so much. You should tell them off"* (Deberías pedirle matrimonio. Él no debería trabajar tanto. Deberías regañarles).

**Clase 109: Pedir Consejo (Asking for Advice: *Should I/we...?*)**
*   **Tema:** Formular preguntas usando *should* para pedir la opinión o consejo de otra persona.
*   **Ejemplos:** *"Should I tell her? Should we go out less? Do you think I should eat more fruit?"* (¿Debería decírselo? ¿Deberíamos salir menos? ¿Crees que debería comer más fruta?). *"Should I lock the door? Should we invite him?"* (¿Debería cerrar la puerta con llave? ¿Deberíamos invitarlo?).

**Clase 110: Verbo 'Sentarse' y Cantidad 'Sobrante / Restante' (Verb: *Sit/Sat* & Expression: *Left*)**
*   **Tema:** El pasado del verbo sentarse y el uso nativo de *left* al final de la oración para referirse a algo que "queda" o "sobra".
*   **Ejemplos:** *"Did you sit on the floor yesterday? Yes, I sat on the floor yesterday"* (¿Te sentaste en el suelo ayer? Sí, me senté en el suelo...). *"He doesn't have any patients left. We don't have anything left"* (No le quedan pacientes. No nos queda nada). *"How much time do we have left?"* (¿Cuánto tiempo nos queda?).
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
const placeholderStartStr = "{ range: '76 - 110', title: 'Tiempos Perfectos y Modales de Obligación', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "76 - 110",\n';
        formattedSection += '                        title: "Tiempos Perfectos y Modales de Obligación",\n';
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
        console.log("Successfully replaced the placeholder for classes 76-110.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
