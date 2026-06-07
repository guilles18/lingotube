const fs = require('fs');

const rawText = `
**Clase 111: Repaso de la Hora (Telling the Time review)**
*   **Tema:** Agilidad leyendo relojes y horas en sus diferentes formatos.
*   **Ejemplos:** *"It's 10:15. It's quarter to 10. It's 8:50. It's 10 to 9"* (Son las 10:15. Son las 10 menos cuarto. Son las 8:50. Son las 9 menos 10).

**Clase 112: El modal 'Debería' y Phrasal verbs 'Aparecer' (Modal: *Ought to* & Phrasal verbs: *Turn up / Show up*)**
*   **Tema:** Uso de *ought to* como alternativa formal a *should* para dar consejos, y los verbos compuestos para "presentarse" o "aparecer" en un lugar.
*   **Ejemplos:** *"You ought to be grateful... She ought not to be so strict with her children"* (Deberías estar agradecido... Ella no debería ser tan estricta con sus hijos). *"Did your boss turn up late for work last week? ... Did your teacher show up to class this morning?"* (¿Apareció tu jefe tarde a trabajar la semana pasada? ... ¿Se presentó tu profesor a clase esta mañana?).

**Clase 113: Cláusulas temporales de Futuro (Future time clauses with *When*)**
*   **Tema:** Expresar acciones futuras que dependen de que otra acción suceda ("Cuando termine, iré..."). En inglés, la cláusula con *when* va en presente simple y la principal en futuro con *will*.
*   **Ejemplos:** *"Will they let us know when they arrive? Yes, they will let you know when they arrive"* (¿Nos avisarán cuando lleguen? Sí, te avisarán cuando lleguen). *"When the meeting finishes, will he go to the cinema?"* (Cuando termine la reunión, ¿irá él al cine?).

**Clase 114: Pasado irregular 'Lanzar' y Críticas pasadas (Past irregular: *Throw/Threw/Thrown* & Modals in Past: *Should have*)**
*   **Tema:** Uso del verbo lanzar (*throw*) y dar fiestas (*throw a party*), e introducción a la crítica de acciones pasadas ("deberías haberlo hecho").
*   **Ejemplos:** *"Have you thrown a party so far this year? Yes, I've thrown a party so far this year"* (¿Has dado una fiesta en lo que va de año? Sí...). *"He should have called her... She should have gone to the doctor... They should have done it sooner"* (Él debería haberla llamado... Ella debería haber ido al médico... Deberían haberlo hecho antes).

**Clase 115: Críticas pasadas negativas (Negative Modals in Past: *Shouldn't have*)**
*   **Tema:** Reprender sobre algo que se hizo en el pasado pero que no era lo correcto ("no deberías haberlo hecho").
*   **Ejemplos:** *"He shouldn't have forgotten it was her birthday"* (Él no debería haber olvidado que era su cumpleaños). *"You shouldn't have eaten so much... We shouldn't have spent so much money"* (No deberías haber comido tanto... No deberíamos haber gastado tanto dinero).

**Clase 116: Preguntas críticas e 'A finales de' (Questions with *Should have* & Time expression: *Towards the end of*)**
*   **Tema:** Formular preguntas usando el modal perfecto ("¿Deberían haber...?") y aprender la expresión "hacia finales de".
*   **Ejemplos:** *"She didn't buy it. Should she have bought it? Do you think she should have bought it?"* (Ella no lo compró. ¿Debería haberlo comprado? ¿Crees que debería haberlo comprado?). *"Towards the end of last year, did you close many doors?"* (Hacia finales del año pasado, ¿cerraste muchas puertas?).

**Clase 117: Expresión 'Tener prisa' (Expression: *In a hurry*)**
*   **Tema:** Decir "tener prisa" utilizando el verbo *to be* más la expresión *in a hurry*.
*   **Ejemplos:** *"Did they leave in a hurry? Yes, they left in a hurry"* (¿Se fueron con prisa? Sí, se fueron con prisa). *"Is your 8-year-old niece in a hurry to grow up?"* (¿Tiene tu sobrina de 8 años prisa por crecer?).

**Clase 118: Pasado irregular 'Conducir' y Deducciones Pasadas (Past irregular: *Drive/Drove/Driven* & Past Deductions: *Must have / Can't have*)**
*   **Tema:** Uso del verbo conducir y extraer conclusiones lógicas de situaciones que ocurrieron en el pasado ("debe haber sido", "no puede haber sido").
*   **Ejemplos:** *"Did you drive me to the supermarket last week? Yes, I drove you to the supermarket..."* (¿Me llevaste en coche al supermercado la semana pasada?). *"She must have been very thirsty... He can't have spent so much money"* (Ella debe haber estado muy sedienta... Él no puede haber gastado tanto dinero).

**Clase 119: Phrasal verb 'Inventar' (Phrasal verb: *Make up*)**
*   **Tema:** Aprender el *phrasal verb* usado para inventarse historias, mentiras o excusas.
*   **Ejemplos:** *"Did you make up stories when you were little? Yes, I made up stories when I was little"* (¿Inventabas historias cuando eras pequeño? Sí...). *"Did he make up an excuse for his absence? Yes, he made up an excuse..."* (¿Se inventó una excusa por su ausencia?).

**Clase 120: Cláusulas temporales 'Tan pronto como' y 'Lo que' (Future: *As soon as* & Relative pronoun: *What*)**
*   **Tema:** Condicionar acciones a la inmediatez ("tan pronto como"), usando presente simple en la condición y *will* en el resultado. Uso de *what* en frases afirmativas.
*   **Ejemplos:** *"Will you buy it as soon as you have enough money? Yes, I will buy it as soon as I have enough money"* (¿Lo comprarás tan pronto como tengas suficiente dinero?). *"I don't believe what she said... What she did was unbelievable"* (No me creo lo que ella dijo... Lo que ella hizo fue increíble).

**Clase 121: El pronombre 'Todo lo que' (Pronoun: *Everything* without 'that')**
*   **Tema:** Decir "todo lo que" o "todo el que" omitiendo el pronombre relativo para sonar natural.
*   **Ejemplos:** *"Don't believe everything you read in the press... He did everything I told him to do"* (No te creas todo lo que lees en la prensa... Él hizo todo lo que yo le dije que hiciera). *"Everything you wish for will come true"* (Todo lo que desees se hará realidad).

**Clase 122: Pasado irregular 'Llamar' y 'Cogerle el truco' (Past irregular: *Ring/Rang/Rung* & Expression: *Get the hang of it*)**
*   **Tema:** Usar *ring* como alternativa a *call* en Reino Unido, y la expresión coloquial nativa para dominar una habilidad nueva.
*   **Ejemplos:** *"Did she ring you yesterday? Yes, she rang me yesterday"* (¿Te llamó ella ayer? Sí, me llamó ayer). *"Are you getting the hang of using this expression? Yes, I'm getting the hang of using this expression"* (¿Le estás cogiendo el truco a usar esta expresión? Sí...).

**Clase 123: Partículas interrogativas + Infinitivo (Wh- words + Infinitive: *How to get / What to do*)**
*   **Tema:** Expresar conocimiento o dar instrucciones usando qué/cómo/dónde seguido de un verbo en infinitivo.
*   **Ejemplos:** *"Do you know how to get there? Yes, I know how to get there"* (¿Sabes cómo llegar allí? Sí, sé cómo llegar allí). *"Did they explain to you what to do? ... Did they tell you where to meet?"* (¿Te explicaron qué hacer?... ¿Te dijeron dónde reuniros?).

**Clase 124: Phrasal verb 'Rendirse/Dejar de' y 'Siempre y cuando' (Phrasal verb: *Give up* & Conditionals: *As long as*)**
*   **Tema:** El uso de *give up* para hablar de dejar un mal hábito o rendirse, y la estructura condicional limitante "siempre que".
*   **Ejemplos:** *"Did your boss give up smoking last month? Yes, my boss gave up smoking last month"* (¿Tu jefe dejó de fumar el mes pasado? Sí...). *"We'll win as long as we don't lose our concentration... As long as it doesn't rain, I'll go"* (Ganaremos siempre y cuando no perdamos la concentración... Siempre y cuando no llueva, iré).

**Clase 125: Preguntas de Cantidad y Distancia (Questions: *How many* & *How far*)**
*   **Tema:** Extraer el dato numérico o de distancia de una oración larga formulando la pregunta correcta.
*   **Ejemplos:** *"I bought 15 boxes of eggs... How many boxes of eggs did I buy? 15"* (Compré 15 cajas de huevos... ¿Cuántas cajas compré? 15). *"My uncle's house is just 2 and 1/2 miles from the airport. How far is my uncle's house from the airport?"* (La casa de mi tío está a 2 millas y media del aeropuerto. ¿A qué distancia está...?).

**Clase 126: Pasado irregular 'Elegir' y Probabilidad (Past irregular: *Choose/Chose/Chosen* & Modal of probability: *Might*)**
*   **Tema:** Uso del verbo elegir, e introducción del modal *might* para acciones que "quizás" pasen.
*   **Ejemplos:** *"Did your wife choose the shoes you're wearing? Yes, my wife chose the shoes..."* (¿Eligió tu esposa los zapatos que llevas puestos?). *"I might buy a new car. It might be Eric's. It might rain tomorrow"* (Quizás compre un coche nuevo. Quizás sea de Eric. Quizás llueva mañana).

**Clase 127: Probabilidad con 'Pensar' (Modal of probability: *Think + might*)**
*   **Tema:** Añadir *I think* antes de *might* para expresar intenciones tentativas ("Creo que a lo mejor...").
*   **Ejemplos:** *"I think I might buy her some flowers... I think I might phone her tomorrow"* (Creo que quizás le compre algunas flores... Creo que quizás la llame mañana).

**Clase 128: Probabilidad Negativa, 'Después de todo' y 'Hace quince días' (Negative Modal: *Might not*, Expression: *After all* & Time: *A fortnight ago*)**
*   **Tema:** Negar una posibilidad, decir "después de todo" al final de la frase, y usar el término británico para decir "hace dos semanas".
*   **Ejemplos:** *"We might not buy that car after all... I might not tell him after all"* (Quizás no compremos ese coche después de todo... Quizás no se lo diga después de todo). *"Were you in a hurry a fortnight ago? Yes, I was in a hurry two weeks ago"* (¿Tenías prisa hace quince días? Sí, tenía prisa hace dos semanas).

**Clase 129: Respuestas cortas con 'Might' (Short answers with *Might*)**
*   **Tema:** Usar el modal para responder a preguntas directas de forma incierta.
*   **Ejemplos:** *"Are you going to call them? I might. Are they going to come to the party? They might"* (¿Vas a llamarlos? Puede. ¿Van a venir a la fiesta? Puede que sí).

**Clase 130: Expresión 'A partir de' y 'Dejar en paz' (Time expression: *As of* & Expression: *Leave someone alone*)**
*   **Tema:** Indicar a partir de qué momento empezará a suceder algo, y exigir que no se moleste a alguien.
*   **Ejemplos:** *"As of today, I'm going to study English every day. As of next month, we'll be married"* (A partir de hoy, estudiaré inglés todos los días. A partir del próximo mes, estaremos casados). *"Leave your brother alone... Leave him alone right now"* (Deja a tu hermano en paz... Déjalo en paz ahora mismo).

**Clase 131: El verbo 'Estudiar' (Collocations: *Do a subject*)**
*   **Tema:** Usar el verbo *do* (hacer) en lugar de *study* para indicar la carrera que se cursó en la universidad.
*   **Ejemplos:** *"What did you do at university? I did math at university"* (¿Qué estudiaste en la universidad? Estudié matemáticas en la universidad). *"What did your brother do at university? He did chemistry at university"* (¿Qué hizo tu hermano en la universidad? Él hizo/estudió química...).

**Clase 132: Pasado irregular 'Beber' y Preguntar Profesiones (Past irregular: *Drink/Drank/Drunk* & Expression: *What do you do for a living?*)**
*   **Tema:** Agilidad conjugando beber, y formas nativas de preguntar "¿A qué te dedicas?" sin usar la palabra *work*.
*   **Ejemplos:** *"Did your boss drink any water yesterday? Yes, my boss drank some water yesterday"* (¿Bebió agua tu jefe ayer? Sí, bebió agua ayer). *"What do you do? ... What do you do for a living? ... What did your father used to do?"* (¿Qué haces/A qué te dedicas? ... ¿A qué te dedicas para ganarte la vida? ... ¿Qué solía hacer tu padre?).

**Clase 133: Expresión 'Dentro de' para Tiempo Futuro (Time Expression: *In + time + 's time*)**
*   **Tema:** Usar la estructura de genitivo sajón para especificar un plazo de tiempo en el que ocurrirá algo ("Dentro de tres semanas").
*   **Ejemplos:** *"Are you getting married in 3 weeks time? Yes, I'm getting married in 3 weeks time"* (¿Te casas dentro de 3 semanas? Sí...). *"Will it be less busy in a couple of hours time?"* (¿Estará menos ocupado dentro de un par de horas?).

**Clase 134: Verbo 'Perder' Eventos (Verb: *Miss* vs *Lose*)**
*   **Tema:** Diferenciar entre perder un objeto material (*lose*) y perder un vuelo, oportunidad o evento por no llegar a tiempo (*miss*).
*   **Ejemplos:** *"Did you miss your flight? Yes, I missed my flight... Did she miss her chance? Yes, she missed her chance"* (¿Perdiste tu vuelo? Sí... ¿Perdió ella su oportunidad? Sí). *"Have you lost your mobile? Yes, I've lost my mobile. Does Ian always miss the bus? Yes, Ian always misses the bus"* (¿Has perdido tu móvil?... ¿Ian siempre pierde el autobús?).

**Clase 135: Verbo 'Echar de menos' (Verb: *Miss*)**
*   **Tema:** El segundo uso fundamental del verbo *miss*: notar la falta de alguien o algo.
*   **Ejemplos:** *"Do you miss your mother's cooking? Yes, I miss my mother's cooking"* (¿Echas de menos la comida de tu madre? Sí...). *"Do you miss living in the States? Yes, I miss living in the States"* (¿Echas de menos vivir en los Estados Unidos?).

**Clase 136: 'Decidirse' y Phrasal verb 'Callarse' (Expression: *Make up your mind* & Phrasal verb: *Shut up*)**
*   **Tema:** Expresión clave para exigir a alguien que tome una decisión, y uso de un *phrasal verb* contundente.
*   **Ejemplos:** *"Have you made up your mind yet? No, I haven't made up my mind yet... Do I need to make up my mind soon?"* (¿Te has decidido ya? No, todavía no me he decidido... ¿Necesito decidirme pronto?). *"I want them to shut up... He never shuts up... Tell him to shut up, please"* (Quiero que se callen... Él nunca se calla... Dile que se calle, por favor).

**Clase 137: Verbos Causativos de Estado (Causative Verb: *Make you* + Adjective/Verb)**
*   **Tema:** Usar el verbo *make* para describir que algo "da" sed o "da" sueño (provoca un estado).
*   **Ejemplos:** *"Do peanuts make you thirsty? Yes, peanuts make you thirsty"* (¿Los cacahuetes te dan sed/hacen que tengas sed? Sí...). *"Does running make you sweat? Yes, running makes you sweat"* (¿Correr te hace sudar?). *"Does alcohol make you sleepy?"* (¿El alcohol te da sueño?).

**Clase 138: Pasado irregular 'Prestar' y 'Llegar a tiempo' (Past irregular: *Lend/Lent* & Expression: *Make it*)**
*   **Tema:** Pasado de prestar objetos a alguien, y el uso nativo de *make it* para referirse a poder llegar a un lugar o acudir a una cita.
*   **Ejemplos:** *"Did you lend me your umbrella? Yes, I lent you my umbrella"* (¿Me prestaste tu paraguas? Sí, te presté mi paraguas). *"Can you make it on Monday at 5? No, I can't make it on Monday at 5... Can they make it to the wedding? No, they can't make it to the wedding"* (¿Puedes acudir el lunes a las 5? No, no puedo... ¿Pueden venir a la boda? No, no pueden).

**Clase 139: Frecuencia de Acciones (Frequency Expressions)**
*   **Tema:** Responder a "¿Con qué frecuencia?" combinando números, *times* y el período (*a day, a year*).
*   **Ejemplos:** *"How often do you speak to your boss? I speak to my boss three times a day"* (¿Con qué frecuencia hablas con tu jefe? Hablo con mi jefe tres veces al día). *"How often do you go to the office? I go to the office five times a week"* (¿Con qué frecuencia vas a la oficina? Voy a la oficina cinco veces a la semana).

**Clase 140: Reportar 'Lo que' se dijo y 'Estar terminado' (Reported Speech with *what* & Expression: *Be over*)**
*   **Tema:** Contar lo que alguien pensó o dijo, y decir que un evento finalizó usando el *phrasal verb* de estado *be over*.
*   **Ejemplos:** *"Did he say what he thought? Yes, he said what he thought"* (¿Dijo lo que pensaba? Sí, dijo lo que pensaba). *"What did you do when the meeting was over? I ate after the meeting was over... Can we talk about it when the news is over?"* (¿Qué hiciste cuando terminó la reunión? Comí después de que terminara... ¿Podemos hablarlo cuando terminen las noticias?).

**Clase 141: Uso del Adverbio 'Ya' (Adverb: *Already* vs *Yet*)**
*   **Tema:** Contestar afirmativamente a la pregunta "¿ya lo has hecho?" usando *already*.
*   **Ejemplos:** *"Have you spoken to him yet? Yes, I've already spoken to him"* (¿Ya has hablado con él? Sí, ya he hablado con él). *"Can he speak yet? Yes, he can already speak"* (¿Ya puede hablar? Sí, ya puede hablar).

**Clase 142: Phrasal verb 'Tirar' y el Adverbio 'Ya no' (Phrasal verb: *Throw away* & Adverb: *Not... anymore*)**
*   **Tema:** El verbo para desechar o tirar a la basura, y expresar acciones que sucedían en el pasado pero ahora no.
*   **Ejemplos:** *"Did you throw the newspaper away? Yes, I threw it away"* (¿Tiraste el periódico? Sí, lo tiré). *"Do you still live in Cayenne? No, I don't live in Hyen anymore... Do you still love me? No, I don't love you anymore"* (¿Todavía vives en Cayenne? No, ya no vivo en Cayenne... ¿Todavía me quieres? No, ya no te quiero).

**Clase 143: Adverbio formal 'Ya no' (Adverb: *No longer*)**
*   **Tema:** Otra estructura nativa y más formal de decir "ya no", colocando *no longer* delante del verbo principal (o detrás del verbo *to be*).
*   **Ejemplos:** *"Are you still in touch with Mark? No, I'm no longer in touch with Mark"* (¿Sigues en contacto con Mark? No, ya no estoy en contacto con Mark). *"Do you still like rugby? No, I no longer like rugby"* (¿Todavía te gusta el rugby? No, ya no me gusta el rugby).

**Clase 144: Pasado irregular 'Empezar' y Fracciones en inglés (Past irregular: *Begin/Began/Begun* & Proportions: *X out of Y*)**
*   **Tema:** Uso de los tres tiempos del verbo empezar (como alternativa formal a *start*), y expresar estadísticas ("3 de cada 10").
*   **Ejemplos:** *"Did you begin to learn English as a child? Yes, I began to learn English as a child"* (¿Empezaste a aprender inglés de niño? Sí...). *"Did you know that three out of every 10 Spaniards smoke? No, I didn't know that three out of every 10 Spaniards smoke"* (¿Sabías que tres de cada 10 españoles fuman? No, no lo sabía...).

**Clase 145: El Presente Perfecto Continuo (Present Perfect Continuous: *Have been doing*)**
*   **Tema:** Expresar acciones que empezaron en el pasado y continúan desarrollándose ininterrumpidamente hasta ahora ("Llevo haciendo...").
*   **Ejemplos:** *"I've been trying to give up smoking for 5 months"* (Llevo 5 meses intentando dejar de fumar). *"Paula has been working for that company for 3 years. I've been studying English for 3 years"* (Paula lleva trabajando para esa compañía 3 años. Llevo estudiando inglés 3 años).

**Clase 146: Preguntas en Presente Perfecto Continuo y 'Antepasado' (Questions: *Have you been doing?* & Time: *The year before last*)**
*   **Tema:** Formular preguntas usando la nueva estructura verbal, y recordar la expresión para referirse a hace dos años/semanas.
*   **Ejemplos:** *"Has she been living there for very long? No, she hasn't been living there for very long"* (¿Lleva viviendo allí mucho tiempo? No, no lleva viviendo allí mucho tiempo). *"Did you tell her the year before last? Yes, I told her the year before last"* (¿Se lo contaste el año antepasado? Sí, se lo conté el año antepasado).

**Clase 147: Preguntar 'Por cuánto tiempo' (Questions: *How long have you been...?*)**
*   **Tema:** Preguntar el tiempo de duración que lleva una acción en curso.
*   **Ejemplos:** *"How long have you been speaking Spanish? ... How long have you been living in Spain?"* (¿Cuánto tiempo llevas hablando español? ... ¿Cuánto tiempo llevas viviendo en España?). *"Has he been working as a teacher for long?"* (¿Lleva mucho tiempo trabajando como profesor?).

**Clase 148: Pasado irregular 'Marcharse / Salir' y Deletreo (Past irregular: *Leave/Left* & Spelling)**
*   **Tema:** Uso de *leave* para salir del trabajo u hogar, y práctica de ortografía indicando letras mayúsculas y minúsculas.
*   **Ejemplos:** *"Did she leave late yesterday? Yes, she left late yesterday"* (¿Salió tarde ayer? Sí, salió tarde ayer). *"How do you spell Brian McCcluff? That's B R I A N and then M small C capital C L O U G H"* (¿Cómo se deletrea Brian McCcluff? Eso es B R I A N y luego M C minúscula C mayúscula L O U G H).

**Clase 149: Verbo 'Darse cuenta / Notar' (Verb: *Tell*)**
*   **Tema:** El uso del verbo *tell* no para hablar o contar, sino para expresar si se puede "notar" o distinguir algo.
*   **Ejemplos:** *"Can you tell I'm American? Yes, I can tell you're American"* (¿Se nota/puedes notar que soy americano? Sí, se nota que eres americano). *"Could you tell I was annoyed? Yes, I could tell you were annoyed"* (¿Se notaba que estaba molesto? Sí, se notaba que estabas molesto).

**Clase 150: Phrasal verb 'Centrarse en' y Expresión 'Perderse' (Phrasal verb: *Focus on* & Expression: *Get lost*)**
*   **Tema:** Aprender la proposición correcta tras enfocarse en algo (*on*, no *in*), y expresar la acción de desorientarse en una ciudad usando *get*.
*   **Ejemplos:** *"Do you need to focus on your English? Yes, I need to focus on my English"* (¿Necesitas centrarte en tu inglés? Sí, necesito centrarme en mi inglés). *"Did you get lost yesterday? Yes, I got lost yesterday. Have you ever gotten lost in Barcelona?"* (¿Te perdiste ayer? Sí, me perdí ayer. ¿Alguna vez te has perdido en Barcelona?).
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
const placeholderStartStr = "{ range: '111 - 150', title: 'Modales en Pasado y Condicionales', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "111 - 150",\n';
        formattedSection += '                        title: "Modales en Pasado y Cláusulas Temporales",\n';
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
        console.log("Successfully replaced the placeholder for classes 111-150.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
