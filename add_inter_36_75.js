const fs = require('fs');

const rawText = `
**Clase 36: Comparativo contable de igualdad y Verbo 'Oír' (Equality for countables: *As many... as* & Verb: *Hear*)**
*   **Tema:** Expresar que hay "tantos" elementos como otros (contables) y usar el verbo oír con preguntas incrustadas.
*   **Ejemplos:** *"Are there as many people in Wales as there are sheep? No, there aren't as many people as there are sheep in Wales"* (¿Hay tantas personas en Gales como ovejas? No, no hay tantas...). *"Can you hear what they're saying? No, I can't hear what they're saying"* (¿Puedes oír lo que están diciendo? No, no puedo).

**Clase 37: Pasado irregular 'Sentir' y Sustantivos generales (Past irregular: *Felt* & General nouns)**
*   **Tema:** El pasado del verbo sentir (*feel/felt*) y el uso de sustantivos plurales sin artículo para hablar en general.
*   **Ejemplos:** *"Did you feel fine yesterday? Yes, I felt fine yesterday"* (¿Te sentiste bien ayer? Sí, me sentí bien ayer). *"Are elephants big or small? Elephants are big... Do you like dogs? Yes, I like dogs"* (¿Los elefantes son grandes o pequeños? Son grandes... ¿Te gustan los perros?).

**Clase 38: Phrasal verb 'Pasar una llamada' y Genitivo Sajón (Phrasal verb: *Put through* & Saxon Genitive)**
*   **Tema:** Expresiones telefónicas para comunicar con alguien y el uso del genitivo sajón para posesiones de terceros.
*   **Ejemplos:** *"I'd like to speak to Juan, please. I'll put you through to him right away"* (Me gustaría hablar con Juan, por favor. Le paso con él de inmediato). *"Mark's dog. Maria's boss... This is Carlos's cat"* (El perro de Mark. El jefe de María... Este es el gato de Carlos).

**Clase 39: Pasado irregular 'Entender' y Expresión 'Hace unos' (Past irregular: *Understood* & Expression: *A few... ago*)**
*   **Tema:** Automatizar el pasado de entender (*understand/understood*) y expresar tiempo usando "hace unos días/semanas".
*   **Ejemplos:** *"Did you understand what I said? Yes, I understood what you said"* (¿Entendiste lo que dije? Sí, lo entendí). *"Did you think of me a few days ago? Yes, I thought of you a few days ago"* (¿Pensaste en mí hace unos días? Sí, pensé en ti hace unos días).

**Clase 40: Existencia en pasado afirmativo y negativo (Past existence: *There was/were* & *There wasn't/weren't any*)**
*   **Tema:** Expresar que "había" o "no había" cosas en el pasado, tanto en singular como en plural.
*   **Ejemplos:** *"There's a helicopter on the roof. There was a helicopter on the roof yesterday"* (Hay un helicóptero en el techo. Había un helicóptero en el techo ayer). *"There isn't any money in my account. There wasn't any money in my account yesterday either"* (No hay dinero en mi cuenta. Tampoco había dinero en mi cuenta ayer).

**Clase 41: Pasado irregular 'Escribir' y Verbo de sentido 'Ver' (Past irregular: *Wrote* & Senses: *See*)**
*   **Tema:** Práctica del pasado de escribir (*write/wrote*) y preguntas usando el verbo "ver" para percibir objetos.
*   **Ejemplos:** *"Did you write many things yesterday? Yes, I wrote many things yesterday"* (¿Escribiste muchas cosas ayer? Sí, escribí muchas cosas). *"Can you see a chair? Yes, I can see a chair"* (¿Puedes ver una silla? Sí, puedo ver una silla).

**Clase 42: Cuantificador 'La mayoría' y Phrasal verb 'Encender' (Quantifier: *Most people* & Phrasal verb: *Turn on*)**
*   **Tema:** Hacer generalizaciones usando *most* (sin usar el artículo "the") y el verbo compuesto para encender aparatos.
*   **Ejemplos:** *"Do most people have a car? Yes, most people have a car"* (¿La mayoría de la gente tiene coche? Sí, la mayoría de la gente tiene coche). *"Did you turn on your computer this morning? Yes, I turned on my computer this morning"* (¿Encendiste tu ordenador esta mañana? Sí, lo encendí).

**Clase 43: Pasado irregular 'Sostener' y Relativos con 'Alguien' (Past irregular: *Held* & Pronoun: *Anyone who*)**
*   **Tema:** El pasado de *hold/held* y formar preguntas sobre "alguien que" cumpla una condición.
*   **Ejemplos:** *"Did you hold many things yesterday? Yes, I held many things yesterday"* (¿Sostuviste muchas cosas ayer? Sí, sostuve muchas cosas). *"Do you know anyone who has a stapler? Yes, I know someone who has a stapler"* (¿Conoces a alguien que tenga una grapadora? Sí, conozco a alguien que tiene una).

**Clase 44: Dictado numérico y Práctica de relativos (Dictation & Relatives: *Anyone who*)**
*   **Tema:** Agilidad con cifras de hasta cinco dígitos y práctica de la estructura "alguien que".
*   **Ejemplos:** *"490... 619... 3,319... 1,319... 2,590... 34,590"*. *"Ask me if I know someone who is married. Do you know anyone who's married?"* (Pregúntame si conozco a alguien que esté casado. ¿Conoces a alguien que esté casado?).

**Clase 45: Pasado irregular 'Comer' (Past irregular: *Ate*)**
*   **Tema:** Automatizar el pasado afirmativo e interrogativo del verbo comer (*eat/ate*).
*   **Ejemplos:** *"Did you eat fruit yesterday? Yes, I ate a lot of fruit yesterday"* (¿Comiste fruta ayer? Sí, comí mucha fruta ayer).

**Clase 46: Negaciones con Relativos y Expresión 'El otro' (Negative Relatives & Expression: *The other day*)**
*   **Tema:** Responder en negativo a preguntas con "anyone who", e introducir expresiones temporales como "el otro día".
*   **Ejemplos:** *"Do you know anyone who has three mouths? No, I don't know anyone who has three mouths"* (¿Conoces a alguien que tenga tres bocas? No, no conozco a nadie que tenga tres bocas). *"The other day I wrote five letters. The other week I held 10 pens"* (El otro día escribí cinco cartas. La otra semana sostuve 10 bolígrafos).

**Clase 47: Pasado irregular 'Venir' y Pronombres Absolutos (Past irregular: *Came* & Pronouns: *Anybody/Nobody*)**
*   **Tema:** El pasado del verbo venir (*come/came*) y el uso de nadie en frases afirmativas (*nobody*).
*   **Ejemplos:** *"Do you come home every day? Yes, I come home every day. Did anybody come to your house yesterday? No, nobody came to my house yesterday"* (¿Vienes a casa todos los días? Sí... ¿Vino alguien a tu casa ayer? No, no vino nadie).

**Clase 48: Comparativos contables (Comparatives: *More... than* & *Fewer... than*)**
*   **Tema:** Comparar cantidades contables usando "más que" y "menos que" (*fewer* en lugar de *less* para contables).
*   **Ejemplos:** *"Are there more people in Toledo than in Madrid? No, there aren't more people in Toledo than in Madrid"* (¿Hay más gente en Toledo que en Madrid? No, no hay más gente...). *"Are there fewer people in China than in Andor? No, there aren't fewer people in China than in Andor"* (¿Hay menos gente en China que en Andorra? No, no hay menos gente...).

**Clase 49: Pasado irregular 'Traer' (Past irregular: *Brought*)**
*   **Tema:** Uso del pasado del verbo traer (*bring/brought*) en rutinas contra acciones pasadas.
*   **Ejemplos:** *"Did you bring any friends home last month? Yes, I brought some friends home last month"* (¿Trajiste algunos amigos a casa el mes pasado? Sí, traje algunos amigos...).

**Clase 50: Comparativos incontables y Phrasal verb 'Apagar' (Comparatives: *Less... than* & Phrasal verb: *Turn off*)**
*   **Tema:** Comparar cantidades que no se pueden contar (arena, dinero) con *less*, y el verbo para apagar luces.
*   **Ejemplos:** *"Do you have less money than a Real Madrid football player? Yes, I have less money..."* (¿Tienes menos dinero que un jugador del Real Madrid? Sí, tengo menos dinero...). *"Did you turn off the light before you left your house? Yes, I always turn off the light..."* (¿Apagaste la luz antes de salir de casa? Sí, siempre apago la luz...).

**Clase 51: Pasado irregular 'Construir' (Past irregular: *Built*)**
*   **Tema:** Automatizar el pasado del verbo construir (*build/built*).
*   **Ejemplos:** *"Did you build a house yesterday? Yes, I built a house yesterday"* (¿Construiste una casa ayer? Sí, construí una casa ayer).

**Clase 52: Pronombre 'Cualquiera' y Verbos en Singular (Pronouns: *Anyone* as 'Cualquiera' & *Everybody/Nobody*)**
*   **Tema:** Usar *anyone* en afirmativo para decir "cualquiera", y recordar que *everybody* y *nobody* llevan el verbo en singular (como he/she).
*   **Ejemplos:** *"Who can go to the party? Anyone can go to the party"* (¿Quién puede ir a la fiesta? Cualquiera puede ir a la fiesta). *"Do you know where to go? Everybody knows where to go. Nobody knows where to go"* (¿Sabes a dónde ir? Todo el mundo sabe a dónde ir. Nadie sabe a dónde ir).

**Clase 53: Pasado irregular 'Volar' (Past irregular: *Flew*)**
*   **Tema:** Uso del pasado del verbo volar (*fly/flew*).
*   **Ejemplos:** *"Did you fly to China yesterday? Yes, I flew to China yesterday"* (¿Volaste a China ayer? Sí, volé a China ayer).

**Clase 54: Tiempos en la vida y Superlativos cortos (Time clauses: *When I was...* & Short Superlatives: *-est*)**
*   **Tema:** Indicar un periodo del pasado ("cuando estaba en la universidad") y comparar formando el superlativo de adjetivos cortos.
*   **Ejemplos:** *"When I was at school, I came to Madrid. When I was at university, I flew to China"* (Cuando estaba en el colegio, vine a Madrid. Cuando estaba en la universidad, volé a China). *"Peter is stronger than David. Peter is the strongest"* (Peter es más fuerte que David. Peter es el más fuerte).

**Clase 55: Pasado irregular 'Nadar' (Past irregular: *Swam*)**
*   **Tema:** Conjugación en pasado del verbo nadar (*swim/swam*).
*   **Ejemplos:** *"Did you swim in the pool this morning? Yes, I swam in the pool this morning"* (¿Nadaste en la piscina esta mañana? Sí, nadé en la piscina esta mañana).

**Clase 56: Dictado numérico y Superlativos largos (Dictation & Long Superlatives: *The most*)**
*   **Tema:** Agilidad con números de cinco cifras y superlativo de adjetivos largos con *the most*.
*   **Ejemplos:** *"430... 613... 3,313... 1,313... 2,530... 30,530"*. *"David is more intelligent than Alberto. Peter is more intelligent than David. Peter is the most intelligent"* (David es más inteligente que Alberto. Peter es más inteligente que David. Peter es el más inteligente).

**Clase 57: Pasado irregular 'Hacerse daño' y Reflexivos (Past irregular: *Hurt* & Reflexive pronouns)**
*   **Tema:** El pasado de hacerse daño (que es igual en presente y pasado: *hurt*) y acciones que recaen en el propio sujeto.
*   **Ejemplos:** *"Did you hurt anyone yesterday? No, I didn't hurt anyone yesterday"* (¿Hiciste daño a alguien ayer? No, no le hice daño a nadie). *"Did he hurt himself this morning? Yes, he hurt himself this morning"* (¿Se hizo daño él mismo esta mañana? Sí, se hizo daño a sí mismo...).

**Clase 58: Expresión 'Lo más...' y Verbo de habilidad (Expression: *The most... thing about* & Verb: *Find*)**
*   **Tema:** Describir la característica principal de alguien/algo y usar el verbo encontrar para hablar de localizar objetos.
*   **Ejemplos:** *"Robert's laugh is very peculiar. The most peculiar thing about Robert is his laugh"* (La risa de Robert es muy peculiar. Lo más peculiar de Robert es su risa). *"Can you find that folder on your desk? Yes, I can find the folder on my desk"* (¿Puedes encontrar esa carpeta en tu escritorio? Sí, puedo encontrarla).

**Clase 59: Pasado irregular 'Perder' (Past irregular: *Lost*)**
*   **Tema:** Uso en pasado del verbo perder (*lose/lost*) aplicado a objetos o dinero.
*   **Ejemplos:** *"Did you lose €1,000 yesterday? Yes, I lost €1,000 yesterday"* (¿Perdiste 1.000€ ayer? Sí, perdí 1.000€ ayer).

**Clase 60: Futuro de Existencia (Future existence: *There will be / There won't be*)**
*   **Tema:** Formular afirmaciones y negaciones para decir que "habrá" o "no habrá" cosas o personas.
*   **Ejemplos:** *"Will there be a lot of people in the supermarket tomorrow? Yes, there will be a lot of people..."* (¿Habrá mucha gente en el supermercado mañana? Sí, habrá mucha gente...). *"Will there be enough pens for everybody? No, there won't be enough pens for everybody"* (¿Habrá suficientes bolígrafos para todos? No, no habrá suficientes...).

**Clase 61: Pasado irregular 'Encontrar' (Past irregular: *Found*)**
*   **Tema:** Automatizar el pasado afirmativo del verbo encontrar (*find/found*).
*   **Ejemplos:** *"Did you find Mike's house? Yes, I found Mike's house easily"* (¿Encontraste la casa de Mike? Sí, encontré la casa de Mike fácilmente).

**Clase 62: Preguntas de existencia futura y Phrasal verb 'Buscar información' (Future existence questions & Phrasal verb: *Look up*)**
*   **Tema:** Convertir enunciados en preguntas directas sobre el futuro y el verbo compuesto para buscar palabras en un libro o internet.
*   **Ejemplos:** *"Ask me if there will be lots of people at the party. Will there be lots of people at the party?"* (Pregúntame si habrá mucha gente en la fiesta. ¿Habrá mucha gente en la fiesta?). *"Did you look it up on the internet? Yes, I looked it up on the internet"* (¿Lo buscaste en internet? Sí, lo busqué en internet).

**Clase 63: Pasado irregular y Phrasal verb 'Lidiar con' (Past irregular & Phrasal verb: *Dealt with*)**
*   **Tema:** El pasado del verbo *deal* combinado con la preposición *with* para hablar de "tratar" o "lidiar" con alguien.
*   **Ejemplos:** *"Did you deal with Mark the other day? Yes, I dealt with Mark the other day"* (¿Trataste con Mark el otro día? Sí, traté con Mark el otro día).

**Clase 64: Dictado de cifras grandes y Exceso incontable (Dictation & Quantifier: *Too much*)**
*   **Tema:** Práctica intensiva de miles y millones, y la expresión "demasiado/a" para cosas que no se pueden contar.
*   **Ejemplos:** *"71,240... 15,114... 40,514... 14,14,444"*. *"Do you agree that there's too much traffic in Barcelona? Yes, I agree that there's too much traffic in Barcelona"* (¿Estás de acuerdo en que hay demasiado tráfico en Barcelona? Sí, estoy de acuerdo en que hay demasiado tráfico...).

**Clase 65: Pasado irregular 'Ganar' (Past irregular: *Won*)**
*   **Tema:** Uso del pasado del verbo ganar premios, partidos o carreras (*win/won*).
*   **Ejemplos:** *"Did Spain win the European Cup in 2008? Yes, Spain won the European Cup in 2008"* (¿Ganó España la Eurocopa en 2008? Sí, España ganó la Eurocopa en 2008).

**Clase 66: Exceso contable y Expresión de Décadas (Quantifier: *Too many* & Time Expression: *In the 70s*)**
*   **Tema:** Expresar "demasiados/as" para elementos plurales y nombrar décadas.
*   **Ejemplos:** *"Do you agree that there are too many cars in Madrid? Yes, I agree that there are too many cars in Madrid"* (¿Estás de acuerdo en que hay demasiados coches en Madrid? Sí, estoy de acuerdo...). *"Did you find a pen in the 70s? Yes, I found a pen in the 70s"* (¿Encontraste un bolígrafo en los años 70? Sí, encontré un bolígrafo en los 70).

**Clase 67: Pasado irregular 'Vencer a' (Past irregular: *Beat*)**
*   **Tema:** Pasado de vencer o derrotar a alguien (que no cambia: *beat*). Se utiliza la preposición *at* para referirse al juego o deporte.
*   **Ejemplos:** *"Did you beat me at tennis last week? Yes, I beat you at tennis last week"* (¿Me venciste al tenis la semana pasada? Sí, te vencí al tenis la semana pasada).

**Clase 68: Adverbio 'Suficiente' vs Excesos (Adverb: *Enough* vs *Too much/many*)**
*   **Tema:** Contraste de "demasiado" y "suficiente", prestando atención a que *enough* va después del adjetivo pero antes del sustantivo.
*   **Ejemplos:** *"There are too many ice cubes. There's enough ice"* (Hay demasiados cubitos de hielo. Hay suficiente hielo). *"Is she hungry enough to eat everything? No, she isn't hungry enough to eat everything"* (¿Tiene la suficiente hambre como para comer todo? No, no tiene la suficiente hambre...).

**Clase 69: Pasado irregular 'Costar' (Past irregular: *Cost*)**
*   **Tema:** Pasado del verbo costar dinero (que se mantiene igual: *cost*).
*   **Ejemplos:** *"Did your mobile phone cost a lot of money? Yes, my mobile phone cost a lot of money"* (¿Tu teléfono móvil costó mucho dinero? Sí, mi móvil costó mucho dinero).

**Clase 70: Tareas con 'Hacer' y Pronombre Absoluto (Collocations with *Do* & Absolute Pronoun: *Whose*)**
*   **Tema:** Tareas domésticas o actividades que usan el verbo *do* (en lugar de *make*), y preguntar "de quién es" en contextos directos e indirectos.
*   **Ejemplos:** *"Does your neighbor do any gardening at the weekends? Yes, my neighbor does some gardening at weekends"* (¿Hace jardinería tu vecino los fines de semana? Sí, mi vecino hace jardinería...). *"It's my birthday. Whose birthday is it? Those are their pens. Whose pens are those?"* (Es mi cumpleaños. ¿De quién es el cumpleaños? Esos son sus bolígrafos. ¿De quién son esos bolígrafos?).

**Clase 71: Pasado irregular 'Enseñar' (Past irregular: *Taught*)**
*   **Tema:** Automatización del verbo enseñar una materia o lección en pasado (*teach/taught*).
*   **Ejemplos:** *"Did I teach you last week? Yes, you taught me last week"* (¿Te enseñé la semana pasada? Sí, me enseñaste la semana pasada).

**Clase 72: Dictado numérico y Práctica de Décadas (Dictation & Decade practice)**
*   **Tema:** Repaso de cifras exactas y confirmación de eventos sucedidos en los años 90.
*   **Ejemplos:** *"450... 515... 3,315... 1,315... 2550... 34,550"*. *"Did Spain beat England in the '90s? Yes, Spain beat England in the '90s"* (¿Venció España a Inglaterra en los 90? Sí, España venció a Inglaterra en los 90).

**Clase 73: Pasado irregular 'Coger / Atrapar' (Past irregular: *Caught*)**
*   **Tema:** El pasado de *catch* (*caught*, pronunciado como /cot/), utilizado en inglés nativo para tomar el transporte público.
*   **Ejemplos:** *"Did you catch the metro to come here last week? Yes, I caught the metro to come here last week"* (¿Cogiste el metro para venir aquí la semana pasada? Sí, cogí el metro para venir aquí la semana pasada).

**Clase 74: Phrasal verb 'Asumir/Contratar' y Clima (Phrasal verb: *Take on* & Weather vocabulary)**
*   **Tema:** El uso de *take on* para hablar de asumir más trabajo o contratar personal, además de modismos sobre el tiempo meteorológico.
*   **Ejemplos:** *"Do you want to take on more responsibilities? Yes, I want to take on more responsibilities"* (¿Quieres asumir más responsabilidades? Sí, quiero asumir más responsabilidades). *"What's the weather like? It's raining. It's hailing. It's pouring cats and dogs"* (¿Qué tiempo hace? Está lloviendo. Está granizando. Está lloviendo a cántaros).

**Clase 75: Pasado irregular 'Gastar' (Past irregular: *Spent*)**
*   **Tema:** Uso del pasado de gastar dinero o invertir tiempo (*spend/spent*).
*   **Ejemplos:** *"Did you spend any money last week? Yes, I spent some money last week"* (¿Gastaste algo de dinero la semana pasada? Sí, gasté algo de dinero la semana pasada). *"Did you spend any time studying English last month? Yes, I spent some time studying English last month"* (¿Pasaste algo de tiempo estudiando inglés el mes pasado? Sí, pasé algo de tiempo estudiando inglés...).
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
const placeholderStartStr = "{ range: '36 - 75', title: 'Cuantificadores Avanzados y Preguntas Complejas', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "36 - 75",\n';
        formattedSection += '                        title: "Automatización, Comparativos y Phrasal Verbs",\n';
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
        console.log("Successfully replaced the placeholder for classes 36-75.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
}
