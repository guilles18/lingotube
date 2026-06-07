const fs = require('fs');

const rawText = `
**Clase 36: Estilo Indirecto Negativo y Expresiones de Inevitabilidad (Reported Speech: *Not to do* & Expressions: *Hard not to / Can't help*)**
*   **Tema:** Reportar órdenes o peticiones en negativo ("me pidió que no lo hiciera") y expresar acciones que no se pueden evitar hacer.
*   **Ejemplos:** *"I told my neighbor, 'Don't step on the lawn.' You asked your neighbor not to step on the lawn"* (Le pediste a tu vecino que no pisara el césped). *"I can't help crying when I watch sad movies. It's hard not to cry when you watch sad movies"* (No puedo evitar llorar cuando veo películas tristes. Es difícil no llorar...).

**Clase 37: Phrasal verb 'Quedarse sin' y Contraste de 'Recordar' (Phrasal verb: *Run out of* & Verb patterns: *Remember doing* vs *Remember to do*)**
*   **Tema:** Usar el verbo compuesto para agotar existencias, y diferenciar entre recordar un evento del pasado (*remember* + gerundio) o acordarse de hacer una tarea (*remember* + infinitivo).
*   **Ejemplos:** *"Have you ever run out of sugar? No, I've never run out of sugar"* (¿Alguna vez te has quedado sin azúcar?). *"You met me a few months ago. I remember meeting you a few months ago... I remembered to buy a present for my wife"* (Recuerdo haberte conocido hace unos meses... Me acordé de comprarle un regalo a mi esposa).

**Clase 38: Fechas Históricas y 'Estar acostumbrado a' (Dates: *BC / AD* & Expressions: *Be used to / Be accustomed to*)**
*   **Tema:** Lectura de años antes y después de Cristo, y el uso nativo de *be used to* seguido de un gerundio para indicar costumbre.
*   **Ejemplos:** *"456 BC. 551 AD. 732 BC"* (456 A.C. 551 D.C.). *"My neighbor's boss isn't accustomed to getting up early. Your neighbor's boss isn't used to getting up early"* (El jefe de tu vecino no está acostumbrado a levantarse temprano).

**Clase 39: 'Acostumbrarse a' (Expressions: *Get used to / Take getting used to*)**
*   **Tema:** Expresar el proceso de adaptación a algo nuevo ("acostumbrarse") y decir que algo "toma tiempo" para acostumbrarse.
*   **Ejemplos:** *"It takes English people long to get accustomed to driving on the right. It takes English people long to get used to driving on the right"* (A los ingleses les toma tiempo acostumbrarse a conducir por la derecha). *"Does living in Madrid take much getting used to?"* (¿Cuesta mucho acostumbrarse a vivir en Madrid?).

**Clase 40: Condicionales con 'A menos que' y Phrasal verb 'Pelearse' (Conditionals: *Unless* & Phrasal verb: *Fall out with*)**
*   **Tema:** Sustituir "if not" por *unless* en condiciones, y aprender el verbo compuesto para discutir o distanciarse de alguien.
*   **Ejemplos:** *"The plant will grow if you water it every day. The plant won't grow unless you water it every day"* (La planta no crecerá a menos que la riegues todos los días). *"Did you fall out with your neighbor last week? No, I didn't fall out with my neighbor"* (¿Te peleaste con tu vecino la semana pasada?).

**Clase 41: Verbo 'Get' para Cambios de Estado (The verb *Get* for changes: *get married, get tired, get lost, get scared*)**
*   **Tema:** La versatilidad del verbo *get* para describir procesos donde alguien pasa a estar casado, cansado, perdido, asustado o aburrido.
*   **Ejemplos:** *"When are they getting married? They got married two weeks ago"* (¿Cuándo se casan? Se casaron hace dos semanas). *"Did she get scared when she saw the spider? She got scared when she saw the spider"* (¿Se asustó cuando vio la araña?).

**Clase 42: Acuerdo/Desacuerdo y Modismos de Riqueza (Verbs: *Agree / Disagree* & Wealth Idioms: *Filthy rich, loaded, make a killing*)**
*   **Tema:** Uso de los verbos para concordar (sin el verbo to be), y expresiones altamente coloquiales para hablar de gente adinerada.
*   **Ejemplos:** *"Do they agree with her? No, they disagree with her"* (¿Están de acuerdo con ella? No, no están de acuerdo con ella). *"Has he made a killing yet? Yes, he's filthy rich... Have you made a fortune yet? Yeah, I'm rolling in it. Are you loaded? I've got lots of money"* (¿Ya se ha forrado? Sí, está podrido de dinero... ¿Estás forrado de dinero? Sí, estoy nadando en él).

**Clase 43: Phrasal verb 'Encontrar tiempo para' (Phrasal verb: *Get around to* + -ing)**
*   **Tema:** Expresar que finalmente se encuentra el tiempo o la disposición para hacer una tarea pendiente.
*   **Ejemplos:** *"Will you get around to doing it? Yes, I'll get around to doing it eventually"* (¿Encontrarás tiempo para hacerlo? Sí, finalmente encontraré tiempo para hacerlo). *"I went to Africa in 2004. What year did I go to Africa?"* (Fui a África en 2004. ¿En qué año fui a África?).

**Clase 44: Preferencias (Preferences: *Prefer* vs *Would rather*)**
*   **Tema:** Contraste entre hablar de preferencias generales (*prefer*) y lo que uno prefiere hacer en un momento específico (*would rather* + infinitivo sin 'to').
*   **Ejemplos:** *"Do you like tea? I prefer coffee"* (¿Te gusta el té? Prefiero el café). *"Shall we go to the movies? I'd rather go to the theater"* (¿Vamos al cine? Preferiría ir al teatro). *"Why don't you sell your car? I'd rather not sell my car"* (Preferiría no vender mi coche).

**Clase 45: Preferencias sobre las acciones de otros (*Would rather* + subject + Past Simple)**
*   **Tema:** Estructura compleja para decir "Preferiría que tú hicieras algo", que en inglés requiere usar el verbo en pasado.
*   **Ejemplos:** *"Do you want Juan to do it? No, I'd rather you did it"* (¿Quieres que lo haga Juan? No, preferiría que lo hicieras tú). *"Do you want me to pick up the phone? No, I'd rather get it myself"* (¿Quieres que coja el teléfono? No, preferiría cogerlo yo mismo).

**Clase 46: Preguntas de Elección e Intenciones (Choices: *Would rather* & Future: *Want to* vs *Going to*)**
*   **Tema:** Plantear dos opciones usando *would rather* y diferenciar entre querer hacer algo e ir a hacerlo de verdad.
*   **Ejemplos:** *"Do you want to play tennis or would you rather play paddle?"* (¿Quieres jugar al tenis o preferirías jugar al pádel?). *"Do you want to go home? Yes, I want to go home. Are you going home now? No, I'm not going home now"* (¿Quieres irte a casa? Sí... ¿Te vas a casa ahora? No...).

**Clase 47: Phrasal verb 'Defender / Dar la cara por' (Phrasal verb: *Stick up for*)**
*   **Tema:** Uso del verbo compuesto que significa apoyar o defender a alguien verbalmente.
*   **Ejemplos:** *"Would you stick up for me if I asked you to? Yes, I would stick up for you if you asked me to"* (¿Darías la cara por mí si te lo pidiera? Sí, la daría...). *"Why didn't you stick up for me last week? You stuck up for her"* (¿Por qué no me defendiste la semana pasada? La defendiste a ella).

**Clase 48: Pronombres de Alternativa (Pronouns: *Another one* & *Some... other*)**
*   **Tema:** Evitar la repetición del sustantivo al pedir "otro", y contrastar grupos ("algunos... y otros").
*   **Ejemplos:** *"He doesn't want his car... He wants another car. You don't want that pen. You want another one"* (Él no quiere su coche... Él quiere otro coche. Tú no quieres ese bolígrafo. Tú quieres otro). *"Not all people own a house. True. Some people own a house and other people don't"* (No todas las personas son dueñas de una casa. Verdad. Algunas personas son dueñas de una casa y otras no).

**Clase 49: Preguntas de Dimensión y Superficie (Questions: *How big* & Area measurements)**
*   **Tema:** Preguntar por el tamaño exacto de algo y usar metros cuadrados (*meters squared*).
*   **Ejemplos:** *"Ask me how big my neighbor's plot of land is. How big is your neighbor's plot of land? It's 600 m squared"* (Pregúntame cómo de grande es la parcela de mi vecino. ¿De qué tamaño es...? Es de 600 metros cuadrados).

**Clase 50: Verbo 'Depender' y Cláusulas Binarias (Verb: *Depend on* & Clauses: *Depends whether... or not*)**
*   **Tema:** La preposición correcta tras el verbo depender (*on*, nunca *of*) y expresar que algo depende de "si pasa o no pasa" una acción.
*   **Ejemplos:** *"It depends on the weather. It depends on my sister"* (Depende del clima. Depende de mi hermana). *"It depends whether she lets me or not... It depends whether there are tickets or not"* (Depende de si ella me deja o no... Depende de si hay entradas o no).

**Clase 51: 'Depende de' con Partículas Interrogativas (Clauses: *It depends + when/what/where*)**
*   **Tema:** Combinar "depende" con palabras de pregunta, omitiendo siempre la preposición *on*.
*   **Ejemplos:** *"It depends when they come. It depends what you want. It depends where it takes place"* (Depende de cuándo vengan. Depende de lo que quieras. Depende de dónde tenga lugar). *"It depends how much money it costs"* (Depende de cuánto dinero cueste).

**Clase 52: Estar a cargo y Valer la pena (Expressions: *Be in charge of* & *Be worth it*)**
*   **Tema:** Responsabilidad laboral ("estar al mando de") y la expresión *be worth* seguida del pronombre *it* o de un gerundio.
*   **Ejemplos:** *"Are you in charge of the sales department? Yes, I'm in charge of the sales department"* (¿Estás a cargo del departamento de ventas?). *"Do you think it's worth it? Yes, I think it's worth it"* (¿Crees que vale la pena? Sí...). *"Is it worth taking a coat? Yes, it's worth taking a coat"* (¿Vale la pena llevar un abrigo? Sí...).

**Clase 53: Describir Temperaturas Extremas (Weather vocabulary: *Extremely hot, freezing, degrees*)**
*   **Tema:** Expresar los grados y el clima con adjetivos intensos.
*   **Ejemplos:** *"I was in Brazil last week. What was the weather like? It was extremely hot. It was about 45°"* (Estuve en Brasil la semana pasada. ¿Qué tiempo hacía? Hacía un calor extremo. Hacía unos 45°). *"In Sweden it was extremely cold. It was freezing. It was -3°"* (En Suecia hacía muchísimo frío. Estaba helado. Hacía -3 grados).

**Clase 54: Deseos Presentes Irreales (Present Regrets: *I wish / If only* + Past Simple)**
*   **Tema:** Usar el pasado simple después de "ojalá" para expresar el deseo de que las cosas en el presente fueran diferentes.
*   **Ejemplos:** *"Do you wish you knew Penelope Cruz? Yes, I wish I knew Penelope Cruz"* (¿Ojalá/Te gustaría conocer a Penélope Cruz? Sí, ojalá la conociera). *"I wish I had a good car. If only I had a good car. I wish it weren't so hot"* (Ojalá tuviera un buen coche. Si tan solo tuviera un buen coche. Ojalá no hiciera tanto calor).

**Clase 55: Preguntas sobre Deseos (Questions: *Do you wish you...*)**
*   **Tema:** Transitar de la instrucción *"Ask me if I would like to..."* a la pregunta nativa *"Do you wish you..."*.
*   **Ejemplos:** *"Ask me if I would like to earn more money. Do you wish you earned more money?"* (Pregúntame si me gustaría ganar más dinero. ¿Ojalá ganaras más dinero?). *"Do you wish you had more days off work?"* (¿Ojalá tuvieras más días libres en el trabajo?).

**Clase 56: 'Menos mal' y 'Tener ganas de' (Expression: *It's just as well* & Phrasal verb: *Look forward to* + -ing)**
*   **Tema:** La forma británica de decir "menos mal" o "es una suerte que", y el verbo compuesto para anhelar con entusiasmo un evento futuro.
*   **Ejemplos:** *"It's just as well it didn't rain. It's a good thing it didn't rain"* (Menos mal que no llovió / Es una suerte que no lloviera). *"Are you looking forward to your holidays? Yes, I'm looking forward to my holidays"* (¿Tienes ganas de que lleguen tus vacaciones? Sí, las espero con ansias).

**Clase 57: 'Pensar en' hacer algo (Verb pattern: *Think about* + -ing)**
*   **Tema:** Expresar la consideración de realizar una acción en el futuro usando *think about*.
*   **Ejemplos:** *"Are you thinking about moving house? No, I'm not thinking about moving house"* (¿Estás pensando en mudarte de casa? No, no estoy pensando en mudarme). *"Is she thinking about buying a car? Yes, she is thinking about buying a car"* (¿Está pensando en comprar un coche?).

**Clase 58: 'Planear' y Adjetivos Compuestos de Duración (Verb pattern: *Plan to do* & Compound adjectives: *A 2-hour meeting*)**
*   **Tema:** Planes firmes a futuro, y formar adjetivos usando un número y un sustantivo singular unidos por un guion.
*   **Ejemplos:** *"Are you planning to go away this summer? Yes, I'm planning to go away this summer"* (¿Planeas irte fuera este verano?). *"Were you in a 2-hour meeting yesterday? Yes, I was in a 2-hour meeting yesterday"* (¿Estuviste en una reunión de dos horas ayer?). *"Did you write a five-page letter yesterday?"* (¿Escribiste una carta de cinco páginas ayer?).

**Clase 59: Arrepentimientos del Pasado (Past Regrets: *I wish* + Past Perfect)**
*   **Tema:** Expresar pena por algo que ya ocurrió usando el Pasado Perfecto ("Ojalá hubiera...").
*   **Ejemplos:** *"You didn't win the tennis match. I wish I had won the tennis match"* (No ganaste el partido de tenis. Ojalá hubiera ganado el partido de tenis). *"You went to that party. I wish I hadn't gone to that party"* (Fuiste a esa fiesta. Ojalá no hubiera ido a esa fiesta).

**Clase 60: 'Si tan solo hubiera' y Estar en el séptimo cielo (Past Regrets: *If only* + Past Perfect & Idiom: *Be over the moon*)**
*   **Tema:** Alternativa emocional a *I wish* (*If only*) para el pasado, y el modismo clásico para la máxima alegría.
*   **Ejemplos:** *"You didn't do your tax return in time. If only I'd done my tax return in time"* (No hiciste tu declaración de impuestos a tiempo. Si tan solo hubiera hecho mi declaración a tiempo). *"Were you over the moon when Spain won the European Cup? Yes, I was over the moon..."* (¿Estabas contentísimo/en las nubes cuando España ganó la Eurocopa?).

**Clase 61: Deseos sobre la conducta de otros (Complaints: *I wish he would/wouldn't*)**
*   **Tema:** Quejarse de un comportamiento ajeno molesto y desear que cambie, usando *wish* seguido del modal *would*.
*   **Ejemplos:** *"He's making a lot of noise. Do you wish he would shut up? I wish he would shut up"* (Está haciendo mucho ruido. ¿Desearías que se callara? Deseo que se calle). *"Do you wish he wouldn't make so much noise? I wish he wouldn't make so much noise"* (Ojalá no hiciera tanto ruido).

**Clase 62: Modismos 'Tomar el pelo' y Verbo 'Parecerse a' (Idioms: *Have someone on / Pull someone's leg* & Verb: *Look like*)**
*   **Tema:** Expresiones nativas para referirse a estar bromeando o gastando una broma, y preguntar por semejanzas físicas.
*   **Ejemplos:** *"Are you having me on? No, I'm not having you on. Are you pulling my leg? No, I'm not pulling your leg"* (¿Me estás tomando el pelo? No...). *"Do you look like your mom? No, I don't look like my mom"* (¿Te pareces a tu madre? No...).

**Clase 63: Verbo 'Look' para Aspecto Físico (Perception Verb: *Look* + Adjective)**
*   **Tema:** Usar el verbo mirar (*look*) para describir la apariencia que algo o alguien tiene ("Tener aspecto de").
*   **Ejemplos:** *"Do I look tired? Yes, you look tired. Do I look angry? No, you don't look angry"* (¿Parezco cansado? Sí, pareces cansado). *"Does this book look interesting? No, that book doesn't look interesting"* (¿Este libro tiene aspecto de ser interesante/parece interesante?).

**Clase 64: Adjetivos Compuestos de Distancia y Verbo 'Esperar' (Distance Compound Adjectives & Verb: *Hope*)**
*   **Tema:** Expresar las millas o kilómetros de un paseo o viaje como un adjetivo singular. Verbo *hope* seguido de presente para expresar anhelo futuro.
*   **Ejemplos:** *"Did you go for a four mile walk yesterday? Yes, I went for a four mile walk yesterday"* (¿Fuiste a dar un paseo de cuatro millas ayer?). *"Do you hope you get there in time? Yes, I hope I get there in time"* (¿Esperas llegar a tiempo? Sí, espero llegar a tiempo).

**Clase 65: Esperar a que alguien haga algo (Verb pattern: *Wait for someone to do something*)**
*   **Tema:** La estructura gramatical en inglés para indicar que estás aguardando la acción de otra persona.
*   **Ejemplos:** *"Are you waiting for them to tell you something? Yes, I am waiting for them to tell me something"* (¿Estás esperando a que ellos te digan algo?). *"Are you waiting for him to make a decision? Yes, I'm waiting for him to make a decision"* (¿Estás esperando a que él tome una decisión?).

**Clase 66: 'Suponer/Esperar que pase' y 'Estar destinado a' (Verb: *Expect* & Expression: *Be bound to*)**
*   **Tema:** Diferenciar *wait* (esperar físicamente) de *expect* (esperar que ocurra algo racionalmente), y usar *bound to* para expresar certezas o cosas inminentes.
*   **Ejemplos:** *"Do you expect he'll be late? Yes, I expect he'll be late"* (¿Esperas/Crees que llegará tarde?). *"Are you expecting a baby?"* (¿Estás esperando un bebé?). *"Do you think she'll know the answer? She's bound to know the answer"* (¿Crees que sabrá la respuesta? Seguro que sabe la respuesta).

**Clase 67: Expresión 'Por casualidad / Dar la casualidad' (Expression: *Happen to*)**
*   **Tema:** Preguntar por accidentes afortunados o presentar un hecho coincidente.
*   **Ejemplos:** *"By chance, you know Tim. I happen to know Tim"* (Por casualidad, conoces a Tim. Da la casualidad de que conozco a Tim). *"You wouldn't happen to know where the hospital is, would you?"* (No sabrás, por casualidad, dónde está el hospital, ¿verdad?).

**Clase 68: 'Ya es hora de' y Frecuencia Histórica (Expressions: *It's about time / It's high time* & Frequency Adverbs)**
*   **Tema:** Demandar acción diciendo "ya era hora de que..." (seguido de pasado simple en inglés) y hablar de cuántas veces se estuvo en un lugar.
*   **Ejemplos:** *"It's time you started taking English seriously. It's about time you started taking English seriously"* (Ya es hora de que te empieces a tomar el inglés en serio). *"I've been to Manchester once and to lead twice... I went to the circus twice"* (He estado en Mánchester una vez y en Leeds dos veces).

**Clase 69: Voz Pasiva (Presente Simple y Continuo) (Passive Voice: *Is done / Is being done*)**
*   **Tema:** Introducción directa a la voz pasiva, enfatizando la acción sobre el sujeto, tanto en acciones regulares como en progreso.
*   **Ejemplos:** *"It's sold in France. It's not sold in Sweden"* (Se vende en Francia. No se vende en Suecia). *"The bridge is being built now. The bridge isn't being built yet"* (El puente se está construyendo ahora). *"It's done every day... It's being done right now"* (Se hace todos los días... Se está haciendo ahora mismo).

**Clase 70: Voz Pasiva Futura y 'Aprovechar al máximo' (Future Passive & Idiom: *Make the most of*)**
*   **Tema:** Uso de *will be* o *going to be* + participio. Además, la expresión idiomática vital para referirse a exprimir una experiencia.
*   **Ejemplos:** *"It will be done soon... It's going to be done tomorrow. It's about to be done"* (Se hará pronto... Se va a hacer mañana. Está a punto de hacerse). *"Are you making the most of this course? Yes, I'm making the most of this course"* (¿Estás aprovechando al máximo este curso?).

**Clase 71: Verbo 'Need' con sentido Pasivo (Verb pattern: *Need + -ing*)**
*   **Tema:** Cuando un objeto inanimado "necesita" una acción, en inglés se usa *need* + gerundio (equivalente a "needs to be done").
*   **Ejemplos:** *"Does your hair need cutting? Yes, my hair needs cutting"* (¿Necesita tu pelo un corte/ser cortado? Sí, mi pelo necesita cortarse). *"Do your plants need watering? Yes, my plants need watering, too"* (¿Tus plantas necesitan riego?).

**Clase 72: Prefijos Over/Under y Cantidades Aproximadas (Prefixes: *Over / Under* & Estimates: *Three to four*)**
*   **Tema:** Añadir *over-* (en exceso) o *under-* (insuficiente) a los verbos, y dar estimaciones numéricas ("de 3 a 4").
*   **Ejemplos:** *"Do you always overspend at Christmas? Yes, I always overspend in the holidays"* (¿Siempre gastas demasiado en Navidad?). *"Did you undercook the turkey, too?"* (¿También dejaste el pavo poco hecho?). *"How many eggs should I use for the omelette? I would use three to four eggs"* (Yo usaría de tres a cuatro huevos).

**Clase 73: Voz Pasiva (Pasado Simple con 'By') (Passive Voice: *Was cancelled by*)**
*   **Tema:** Uso de *was/were* + participio, e introducción de la partícula *by* para indicar quién realizó la acción.
*   **Ejemplos:** *"When was it cancelled? It was cancelled yesterday"* (¿Cuándo fue cancelado? Fue cancelado ayer). *"Was it canceled by them or by you? It was cancelled by them"* (¿Fue cancelado por ellos o por ti? Fue cancelado por ellos).

**Clase 74: Voz Pasiva (Presente Perfecto) y 'Apañárselas con' (Passive Voice: *Has been done* & Phrasal expression: *Make do with*)**
*   **Tema:** Acciones pasivas recientes (*has/have been* + participio) y expresión para conformarse con los medios disponibles.
*   **Ejemplos:** *"Has the house already been sold? Yes, the house has already been sold"* (¿Ya se ha vendido la casa?). *"Has it been postponed? Yes, it's been postponed"* (¿Ha sido pospuesto?). *"Did you make do with a sandwich? Yes, I made do with a sandwich"* (¿Te apañaste con un sándwich? Sí, me apañé con un sándwich).

**Clase 75: '¿Tiene algún sentido...?' (Expression: *Is there any point in + -ing?*)**
*   **Tema:** Preguntar por la utilidad o propósito de realizar una acción en un momento dado.
*   **Ejemplos:** *"Is there any point in telling her? No, there's no point in telling her now"* (¿Tiene algún sentido decírselo? No, no tiene sentido decírselo ahora). *"Is there any point in going to the meeting? No, there isn't any point in going to that meeting"* (¿Tiene algún sentido ir a la reunión?).
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
const placeholderStartStr = "{ range: '36 - 75', title: 'Conectores Complejos, Voz Pasiva y Tercer Condicional', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "36 - 75",\n';
        formattedSection += '                        title: "Conectores Complejos, Voz Pasiva y Tercer Condicional",\n';
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
        console.log("Successfully replaced the placeholder for classes 36-75 in advanced level.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
