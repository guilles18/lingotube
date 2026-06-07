const fs = require('fs');

const rawText = `
**Clase 161: Phrasal verb 'Redactar / Elaborar' (Phrasal verb: *Draw up*)**
*   **Tema:** El uso del verbo compuesto para referirse a la redacción formal de contratos, informes o documentos.
*   **Ejemplos:** *"Did you draw up the report? Yes, I drew up the report"* (¿Redactaste/Elaboraste el informe? Sí, redacté el informe). *"When did you draw it up? I drew it up on Friday"* (¿Cuándo lo elaboraste? Lo elaboré el viernes).

**Clase 162: El Pronombre 'Uno' y Expresión 'Dar el paso / Lanzarse' (Pronoun: *One* vs *You* & Idiom: *Take the plunge*)**
*   **Tema:** Usar *one* para afirmaciones generales y formales, y el modismo clásico para decidirse a hacer algo importante.
*   **Ejemplos:** *"You can never be sure. One can never be too sure. How does one get to the station from here? How do you get to the station from here?"* (Nunca se puede estar seguro. Uno nunca puede estar demasiado seguro. ¿Cómo se llega a la estación desde aquí?). *"Did you take the plunge and signed the contract? Yes, I took the plunge..."* (¿Diste el paso/Te lanzaste y firmaste el contrato? Sí, di el paso...).

**Clase 163: Inversión del Tercer Condicional (Third Conditional Inversion: *Had I...*)**
*   **Tema:** Estructura super avanzada y literaria: omitir el *If* en el tercer condicional invirtiendo el sujeto y el auxiliar *Had*.
*   **Ejemplos:** *"If I'd won, I would have called you. Had I won, I would have called you"* (Si hubiera ganado, te habría llamado / De haber ganado, te habría llamado). *"Had they done it, they would have told you. Had I known, I would have told you"* (Si lo hubieran hecho, te lo habrían dicho. De haberlo sabido, te lo habría dicho).

**Clase 164: Phrasal verb 'Librarse de' y Verbo 'Organizar / Encargar' (Phrasal verb: *Get out of* + -ing & Verb pattern: *Arrange for someone to do*)**
*   **Tema:** Evitar o zafarse de una responsabilidad, y organizar algo para que otra persona lo haga.
*   **Ejemplos:** *"Did you try to get out of going to the wedding? Yes, I tried to get out of going to the wedding"* (¿Intentaste librarte de ir a la boda? Sí...). *"Have you arranged for anyone to look after the kids? Yes, I've arranged for someone to look after the kids"* (¿Has organizado/encargado a alguien que cuide a los niños? Sí...).

**Clase 165: Modismo 'Trabajar muy duro' y Conjunción 'Como / Ya que' (Idiom: *Work one's socks off* & Conjunction: *As*)**
*   **Tema:** Expresión coloquial nativa ("dejarse la piel"), y el uso de *As* al principio de la frase para dar la razón o causa.
*   **Ejemplos:** *"Did you have to work your socks off in your final year at university? Yes, I had to work my socks off..."* (¿Tuviste que dejarte la piel/trabajar muy duro en tu último año de universidad? Sí...). *"As you don't know what you're talking about, listen to the expert. As it's raining, I suggest we stay indoors"* (Como no sabes de lo que estás hablando, escucha al experto. Ya que está lloviendo, sugiero que nos quedemos dentro).

**Clase 166: Phrasal verb 'Entender / Descifrar' y Cuantificadores 'Suficiente / Bastante' (Phrasal verb: *Make out* & Quantifiers: *Enough / Quite a bit of*)**
*   **Tema:** El uso de *make out* para poder comprender palabras o actitudes, y repaso de cantidades.
*   **Ejemplos:** *"I can't make her out. Can you make her out? No, I can't make her out either... I can't make out what that actor's saying"* (No logro entenderla/descifrarla. ¿Tú la entiendes? No... No logro entender lo que dice ese actor). *"Do you have enough flour to make the cake? ... Yes, there's quite a bit of snow in the park"* (¿Tienes suficiente harina...? Sí, hay bastante nieve en el parque).

**Clase 167: Preguntas Indirectas con Preposición Final y Contraste de Tiempos (Prepositions at the end & Tense contrast: Past vs Present Perfect)**
*   **Tema:** Formular preguntas arrastrando la preposición al final (*What... as?*), y contrastar el pasado (el año pasado) con el presente perfecto (este año).
*   **Ejemplos:** *"He used to work as an accountant. What did he used to work as?"* (Solía trabajar como contable. ¿De qué solía trabajar?). *"Did you go to Pakistan last year? No... And this year? No, I haven't been to Pakistan this year either"* (¿Fuiste a Pakistán el año pasado? No... ¿Y este año? No, tampoco he estado en Pakistán este año).

**Clase 168: Phrasal verbs 'Cerrar definitivamente' y Repaso de Respuestas Cortas (Phrasal verbs: *Shut down / Close down* & Short Answers)**
*   **Tema:** Verbos para hablar del cese de un negocio o fábrica. Agilidad total contestando con el auxiliar correspondiente.
*   **Ejemplos:** *"Did the factory shut down last month? Yes, the factory shut down last month"* (¿Cerró definitivamente la fábrica el mes pasado? Sí...). *"Can you play tennis? Yes, I can. Are you happy? No, I'm not. Did he win? Yes, he did"* (¿Sabes jugar al tenis? Sí. ¿Eres feliz? No. ¿Ganó él? Sí).

**Clase 169: Preguntas Temporales 'Cuándo' y Contraste 'La semana pasada / Esta semana' (Questions with *When* & Past vs Present Perfect)**
*   **Tema:** Extraer la fecha o la hora formulando preguntas directas, y más contraste de tiempo verbal.
*   **Ejemplos:** *"I met my wife 4 years ago. When did you meet your wife?"* (Conocí a mi esposa hace 4 años. ¿Cuándo conociste a tu esposa?). *"How many apples did you eat last week? I ate four apples last week. And this week I've eaten two apples this week"* (¿Cuántas manzanas comiste la semana pasada?... ¿Y esta semana? Esta semana he comido dos).

**Clase 170: Phrasal verb 'Fundar / Montar' y Contraste de Futuros (Phrasal verb: *Set up* & Future forms contrast)**
*   **Tema:** Usar *set up* para referirse a la creación de una empresa. Mezclar todos los futuros vistos (Will, Going to, About to, Continuo).
*   **Ejemplos:** *"Are you setting up a company? No, I'm not setting up a company... Have they ever set up a company?"* (¿Estás montando una empresa? No... ¿Han fundado ellos alguna vez una empresa?). *"What am I going to do? You're going to scratch your nose. What will I do? You'll scratch your nose. What am am I about to do? You're about to scratch your nose"* (¿Qué voy a hacer? Vas a rascarte la nariz. ¿Qué haré?... ¿Qué estoy a punto de hacer?).

**Clase 171: Preguntas de Ubicación 'Dónde' y Pasado Continuo (Questions with *Where* & Present vs Past Continuous)**
*   **Tema:** Formular preguntas usando *Where*, y contrastar acciones en progreso del presente hacia el pasado.
*   **Ejemplos:** *"We're going to keep it in a safe. Where are you going to keep it?"* (Lo vamos a guardar en una caja fuerte. ¿Dónde lo vais a guardar?). *"Emily's playing with her dolls... Emily was playing with her dolls. Tom was cooking spaghetti"* (Emily está jugando con sus muñecas... Emily estaba jugando con sus muñecas. Tom estaba cocinando).

**Clase 172: Phrasal verb 'Dejar de / Rendirse' y Dictado de Miles (Phrasal verb: *Give up* & Large Dictation)**
*   **Tema:** El omnipresente verbo *give up* para malos hábitos, y agilidad de oído con números.
*   **Ejemplos:** *"Do you think he should give up smoking? Yes, I think he should give up smoking"* (¿Crees que él debería dejar de fumar? Sí...). *"470,963... 29,184... 388,566"*.

**Clase 173: Preguntas con 'Cuánto / Cuántos / Cómo de' y Repaso de Experiencias (Questions with *How much/many/long/old* & Present Perfect + *Ever*)**
*   **Tema:** Elegir el adverbio interrogativo correcto (*How* + adjetivo/cantidad) para cada caso, y preguntar sobre vivencias pasadas.
*   **Ejemplos:** *"He has three cars. How many cars does he have? It took them two weeks. How long did it take them? She's 50. How old is she?"* (Tiene tres coches. ¿Cuántos tiene? Les tomó dos semanas. ¿Cuánto les tomó? Tiene 50 años. ¿Qué edad tiene?). *"Yes, I've been to Vienna. Have you ever been to Vienna?"* (Sí, he estado en Viena. ¿Alguna vez has estado en Viena?).

**Clase 174: Phrasal verb 'Apuntarse a / Inscribirse' y Vocabulario de Opuestos (Phrasal verb: *Sign up for* & Opposites)**
*   **Tema:** El verbo para registrarse en listas o cursos, y agilidad recordando antónimos.
*   **Ejemplos:** *"Has he signed up for German lessons? Yes, he signed up for German lessons"* (¿Se ha apuntado a clases de alemán? Sí...). *"What's the opposite of hot? The opposite of hot is cold. What's the opposite of bad? The opposite of bad is good"* (¿Cuál es el opuesto de caliente? Frío... ¿El opuesto de malo? Bueno).

**Clase 175: Preguntas de Motivo 'Por qué' y Deducciones de Segundo Condicional (Questions with *Why* & Second Conditional deductions)**
*   **Tema:** Formular preguntas directas usando el auxiliar adecuado, y deducir lógicamente el condicional a partir de una frase presente ("Si no hiciera esto, no pasaría lo otro").
*   **Ejemplos:** *"I caught a taxi because there were no buses. Why did you catch a taxi?"* (Cogí un taxi porque no había autobuses. ¿Por qué cogiste un taxi?). *"I teach English because I need money. If you didn't need money, you wouldn't teach English"* (Enseño inglés porque necesito dinero. Si no necesitaras dinero, no enseñarías inglés).

**Clase 176: Phrasal verbs 'Acelerar / Frenar' y Pronombres Posesivos (Phrasal verbs: *Speed up / Slow down* & Possessive Pronouns)**
*   **Tema:** Verbos de velocidad, y encadenar posesivos ("El mío, el de ella, el suyo") para evitar repetir el objeto.
*   **Ejemplos:** *"Do people tell you to speed up or slow down when you speak? People tell me to slow down when I speak"* (¿La gente te dice que hables más rápido o más lento? Me dicen que vaya más lento). *"I want you to give me yours because she gave me hers and it's broken. I gave him hers because his was with theirs in the drawer"* (Quiero que me des el tuyo porque ella me dio el suyo y está roto...).

**Clase 177: Preguntas con 'Quién' y Deducciones del Tercer Condicional (Questions with *Who* & Third Conditional deductions)**
*   **Tema:** Extraer a la persona de la frase, arrastrando las preposiciones si es necesario. Deducir condiciones irreales sobre un pasado consumado.
*   **Ejemplos:** *"She was talking to her husband when her mother rang the doorbell. Who was she talking to when her mother rang the doorbell?"* (Estaba hablando con su marido... ¿Con quién estaba hablando...?). *"I didn't explain the lesson to him because he knew it perfectly well. If he hadn't known the lesson perfectly well, you would have explained it to him"* (Si él no hubiera sabido la lección, se la habrías explicado).

**Clase 178: Phrasal verb 'Ocurrirse / Idear' y Coletillas '¿Verdad?' (Phrasal verb: *Come up with* & Question Tags + *Actually*)**
*   **Tema:** Verbo para tener una idea brillante o inventar una excusa. Usar *Question Tags* para pedir confirmación y corregir amablemente con *Actually*.
*   **Ejemplos:** *"Do you always come up with good ideas when there's a meeting? Yes, I always come up with good ideas..."* (¿Siempre se te ocurren buenas ideas cuando hay una reunión? Sí...). *"You're French, aren't you? No, I'm actually English. You're a plumber, aren't you? No, I'm actually a teacher"* (Eres francés, ¿verdad? No, en realidad soy inglés).

**Clase 179: Preguntas 'Cuánto' Incontable y Cuantificadores 'Suficiente / Poco' (Questions: *How much* & Quantifiers: *Enough / Little / A little bit of*)**
*   **Tema:** Extraer cantidades no contables de una frase, y dominar las palabras de volumen.
*   **Ejemplos:** *"She spent €600 in the sales. How much money did she spend in the sales?"* (Gastó 600€ en las rebajas. ¿Cuánto dinero gastó?). *"There isn't enough water in the bottle. There's little water in the bottle. There's enough bread in the lard. There's a little bit of bread..."* (No hay suficiente agua... Hay poca agua... Hay un poco de pan).

**Clase 180: Phrasal verbs 'Aparecer / Rechazar' y Cuantificador 'Pocos' (Phrasal verbs: *Turn up / Turn down* & Quantifiers: *Few / A few*)**
*   **Tema:** *Turn up* como sinónimo de presentarse a un evento, y *turn down* para denegar algo. Contraste de *few* (insuficiente) vs *a few* (unos cuantos).
*   **Ejemplos:** *"Would you turn up to a party if you hadn't been invited? No... I've never been turned down for a loan"* (¿Te presentarías a una fiesta si no estuvieras invitado? No... Nunca me han denegado un préstamo). *"It's so hot that there are very few people in the park. There were a few people waiting for the artist. I only have a few friends"* (Hace tanto calor que hay muy poca gente... Solo tengo unos pocos amigos).

**Clase 181: Preguntas 'Cuántos' Contables y Repaso Interrogativo Rápido (Questions: *How many* & Mixed Short Answers)**
*   **Tema:** Interrogar sobre elementos plurales, y una lluvia intensiva para usar el auxiliar correcto en las respuestas cortas.
*   **Ejemplos:** *"There were eight people at the meeting. How many people were there at the meeting?"* (Había ocho personas. ¿Cuántas personas había?). *"Would the king of Spain call you personally if you were ill? No, he wouldn't. Have the Chinese ever declared war on the Portuguese? No, they haven't"* (¿Te llamaría el rey...? No. ¿Han declarado los chinos...? No).

**Clase 182: Phrasal verbs 'Alcanzar / Quedarse atrás' y Adverbio 'Justo' (Phrasal verbs: *Catch up / Fall behind* & Adverb: *Just*)**
*   **Tema:** Verbos asociados al ritmo de progreso en clases, trabajo o carreras. Uso de *just* para significar "exactamente".
*   **Ejemplos:** *"If you fall behind in your English class, it will be very difficult to catch up"* (Si te quedas atrás en tu clase de inglés, será muy difícil ponerte al día/alcanzar el ritmo). *"Is that what you were looking for? That's just what I was looking for. Is that what he was thinking? That's just what he was thinking"* (¿Es eso lo que buscabas? Eso es justo/exactamente lo que buscaba).

**Clase 183: Verbo 'Probar a hacer' vs 'Intentar' y Dictado de Números (Verb pattern: *Try to do* vs *Try* & Large Dictation)**
*   **Tema:** La diferencia sutil entre intentar un esfuerzo (*try to*) y probar una comida o experiencia (*try*). Agilidad final de dictado.
*   **Ejemplos:** *"Have you tried to talk to her about it? Yes, I've tried to talk to her about it. Have you tried pigs here? No, I've never tried pigs here"* (¿Has intentado hablar con ella? Sí... ¿Has probado el cerdo aquí? No...). *"2,798,78... 5,253,962... 45,922"*.

**Clase 184: Phrasal verb 'Respaldar / Apoyar' y Adverbios 'Al final' (Phrasal verb: *Back up* & Adverbs: *Eventually / Finally*)**
*   **Tema:** El verbo para dar apoyo moral a alguien en una discusión, y adverbios para hablar de resultados que tomaron tiempo.
*   **Ejemplos:** *"Why didn't you back me up? I didn't back you up because you didn't back me up"* (¿Por qué no me respaldaste/apoyaste? No te respaldé porque tú no me respaldaste). *"What time did you finally arrive? We eventually arrived at midnight. Will you eventually get it? Yes, I'll eventually get it"* (Al final, llegamos a medianoche. ¿Al final lo conseguirás? Sí, con el tiempo lo conseguiré).

**Clase 185: Expresión 'Llegar / Asistir' y Coletillas de Incredulidad (Expression: *Make it* & *I don't suppose...* + Question Tag)**
*   **Tema:** Usar *make it* para citas y fiestas, y una estructura súper avanzada para pedir algo de forma indirecta asumiendo una negativa ("Supongo que no podrás... ¿verdad?").
*   **Ejemplos:** *"Can you make it to the party tonight? No, I'm sorry. I can't make it to the party tonight"* (¿Puedes acudir a la fiesta esta noche? No, no puedo acudir). *"Could you do it for me? I don't suppose you could do it for me, could you? ... I don't suppose he left a letter for me, did he?"* (¿Podrías hacerlo por mí? Supongo que no podrías hacerlo por mí, ¿verdad? ... Supongo que él no dejó una carta para mí, ¿verdad?).

**Clase 186: Phrasal verb 'Desglosar' y Modismo 'Tal y como están las cosas' (Phrasal verb: *Break down* & Idiom: *The way things stand*)**
*   **Tema:** *Break down* aplicado a números o datos (no a averías), y la frase introductoria para dar opiniones en un contexto determinado.
*   **Ejemplos:** *"Did you break down the figures? Yes, I broke them down yesterday. Did you break them down by region or by city? I broke them down by city"* (¿Desglosaste las cifras? Sí, las desglosé ayer por ciudad). *"The way things stand, it's not a good idea. The way things stand, if I were you, I wouldn't go there"* (Tal y como están las cosas, no es buena idea. Tal y como están las cosas, si yo fuera tú, no iría).

**Clase 187: Preguntas Negativas 'Por qué no' y 'La última vez' (Negative *Why* questions & Expression: *When did you last...*)**
*   **Tema:** Agilidad con interrogativas negativas buscando la causa, y otra forma nativa de referirse a eventos que hace mucho no pasan.
*   **Ejemplos:** *"I'm not ready yet. Why aren't you ready yet? I wasn't told about it. Why weren't you told about it?"* (No estoy listo todavía. ¿Por qué no estás listo todavía? No se me informó. ¿Por qué no se te informó?). *"When did you last sleep next to a rhinoceros? I've never slept next to a rhino"* (¿Cuándo fue la última vez que dormiste junto a un rinoceronte?).

**Clase 188: Preguntas Temporales/Alternativas y Expresión 'Por ahora' (Questions with *How long / Which* & Expression: *For the time being*)**
*   **Tema:** Interrogar con precisión y usar la frase idiomática "Por el momento" o "Mientras tanto".
*   **Ejemplos:** *"I've been here for 3 hours. How long have you been here? I ate the chocolate biscuit. Which biscuit did you eat?"* (Llevo aquí 3 horas. ¿Cuánto tiempo llevas aquí? Comí la galleta de chocolate. ¿Qué galleta comiste?). *"For the time being, I'm living in Bilbo Bao. For the time being, I'm going to stay. For the time being, I'm watching TV"* (Por el momento, estoy viviendo en Bilbao. Por el momento, me voy a quedar).

**Clase 189: Expresiones 'Estar mejor así' y 'La mayor parte del tiempo' (Expressions: *Be better off* & *Most of the time / Spend time*)**
*   **Tema:** Modismo para indicar que la situación actual es ventajosa o dar un consejo ("Harías mejor en"), y cuantificar el tiempo invertido en rutinas.
*   **Ejemplos:** *"I'm much better off now I have my own flat... You'd be better off looking for another job"* (Estoy mucho mejor ahora que tengo mi propio piso... Sería mejor/Estarías mejor buscando otro trabajo). *"Most of the time she's in meetings. She spends most of her time speaking to customers"* (La mayor parte del tiempo está en reuniones. Ella pasa la mayor parte de su tiempo hablando con clientes).

**Clase 190: Phrasal verb 'Presumir / Lucirse' y Primer Condicional Invertido (Phrasal verb: *Show off* & Inversion: *Should + subject...*)**
*   **Tema:** El verbo compuesto para los "creídos", y una variante formal elegantísima del *If* en el primer condicional (reemplazándolo por *Should* al inicio).
*   **Ejemplos:** *"Do you like showing off your knowledge of English? Yes, I like showing off my knowledge of English"* (¿Te gusta presumir/lucir tus conocimientos de inglés? Sí...). *"Should he call, tell him I'm not here. Should I be out, leave a message with reception. Should he be sick, send him home"* (Si llamara/En caso de que llame, dile que no estoy. Si yo no estuviera, deja un mensaje en recepción).

**Clase 191: Deducciones Modales Pasadas y Presentes (Deductions: *May have been / Definitely wasn't / May be*)**
*   **Tema:** Afirmar con seguridad lo que no pasó, o dudar de lo que podría haber pasado usando la estructura *There* de existencia.
*   **Ejemplos:** *"Are you sure there wasn't a state election in Alaska last week? There may have been a state election in Alaska last week, but I don't know. Are you sure there wasn't a tornado in Madrid last week? Yes, there definitely wasn't a tornado..."* (Puede que hubiera una elección... pero no lo sé. Sí, definitivamente no hubo un tornado...). *"Are you sure there isn't a mouse in your house? There may be a mouse in my house, but I don't know"* (Puede que haya un ratón...).

**Clase 192: Voz Pasiva (Continuo y Futuro) y Coincidencias 'Yo también/Tampoco' (Passive Voice: Continuous/Future & Agreement: *So do I / Neither do I*)**
*   **Tema:** Darle la vuelta a la acción dándole protagonismo al objeto, y respuestas nativas reflejo usando auxiliares.
*   **Ejemplos:** *"Someone is showing her how to drive. She is being shown how to drive. ... Someone will show him the new project. The new project will be shown to him"* (Alguien le está enseñando... A ella se le está enseñando cómo conducir. Se le enseñará el nuevo proyecto a él). *"I love dogs. So do I. I can't play the violin. Neither can I. My sister works hard. So do I. She won't come here tomorrow. Neither will I"* (Amo los perros. Yo también. No sé tocar el violín. Yo tampoco. Mi hermana trabaja duro. Yo también. Ella no vendrá mañana. Yo tampoco).

**Clase 193: Coletillas Interrogativas y Patrón 'Pasar el tiempo haciendo' (Question Tags & Verb pattern: *Spend time doing*)**
*   **Tema:** Buscar la complicidad y afirmación del oyente añadiendo auxiliares al final, y usar el gerundio obligatoriamente tras *spend time*.
*   **Ejemplos:** *"You met my friend last year, didn't you? We haven't seen that film, have we? They could have called, couldn't they?"* (Conociste a mi amigo el año pasado, ¿verdad? No hemos visto esa película, ¿verdad?). *"What do you spend most of the time doing when you're at the office? I spend most of the time reading emails when I'm at the office"* (¿Qué pasas la mayor parte del tiempo haciendo...? Paso la mayor parte del tiempo leyendo correos).

**Clase 194: Adjetivos 'Hard vs Difficult' y Preguntas Indirectas Finales (Adjectives: *Hard / Difficult* & Indirect Questions)**
*   **Tema:** Última clase del curso: usar *hard* como sinónimo más cotidiano de *difficult*, e integrar las preguntas de *Wh-* dentro de una afirmación.
*   **Ejemplos:** *"It's difficult to know what they're thinking. It's hard to know what they're thinking. I thought the exam was far too difficult. I thought the exam was far too hard"* (Es difícil saber qué piensan... Pensé que el examen era demasiado difícil). *"Where did you put the report? I don't know where I put the report. Why have they sent us the invoice? I don't know why they've sent us the invoice"* (¿Dónde pusiste el informe? No sé dónde puse el informe. No sé por qué nos han enviado la factura).
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
const placeholderStartStr = "{ range: '161 - 194', title: 'Gramática de Alto Nivel y Perfeccionamiento', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] }"; // It ends with "] }" without a comma because it's the last section.
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "161 - 194",\n';
        formattedSection += '                        title: "Gramática de Alto Nivel y Perfeccionamiento",\n';
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
        formattedSection += '                    }'; // No trailing comma
        
        // Use placeholderEnd + 3 to cover "] }"
        const newHtml = htmlContent.substring(0, placeholderStart) + formattedSection + htmlContent.substring(placeholderEnd + 3);
        fs.writeFileSync('index.html', newHtml);
        console.log("Successfully replaced the placeholder for classes 161-194 in advanced level.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
