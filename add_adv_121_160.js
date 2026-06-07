const fs = require('fs');

const rawText = `
**Clase 121: Phrasal verbs 'Tranquilizarse / Acomodarse' (Phrasal verbs: *Settle down / Calm down*)**
*   **Tema:** Usar verbos compuestos para referirse a calmarse o acomodarse antes de que suceda otra acción.
*   **Ejemplos:** *"Did you wait for the audience to settle down before you started your speech?"* (¿Esperaste a que el público se acomodara/tranquilizara antes de empezar tu discurso?). *"Had Juan calmed down by the time the police arrived?"* (¿Se había calmado Juan para cuando llegó la policía?).

**Clase 122: Adjetivos '-ed' vs '-ing' y Preposiciones al final (Adjectives ending in *-ed / -ing* & Prepositions at the end)**
*   **Tema:** Diferenciar entre cómo te sientes (worried/bored) y lo que causa el sentimiento (worrying/boring), y colocar la preposición al final en preguntas ("What page are you on?").
*   **Ejemplos:** *"Are you worried about your financial situation? ... Is her financial situation worrying?"* (¿Estás preocupado por tu situación financiera? ... ¿Es preocupante su situación financiera?). *"The article is on page 48. What page is the article on?"* (El artículo está en la página 48. ¿En qué página está el artículo?).

**Clase 123: Expresiones 'Al final' vs 'Al final de' (Expressions: *In the end* vs *At the end of*)**
*   **Tema:** Diferenciar el uso de *in the end* (para concluir un suceso o historia) frente a *at the end of* (para indicar la parte final de un evento físico o temporal).
*   **Ejemplos:** *"Did you have a good time in the end? Yes, in the end we had a good time"* (¿Te lo pasaste bien al final? Sí, al final nos lo pasamos bien). *"What did you do at the end of the concert? At the end of the concert, we went for a drink"* (¿Qué hicisteis al final del concierto? Al final del concierto, fuimos a tomar algo).

**Clase 124: Expresión 'Empezar con buen/mal pie' y 'Conseguir que alguien haga algo' (Expressions: *Get off to a good/bad start* & Causative: *Get someone to do*)**
*   **Tema:** Modismo nativo para referirse a los comienzos, y el uso del verbo *get* para convencer o lograr que otra persona haga una tarea.
*   **Ejemplos:** *"Did you get off to a good start with your English class?"* (¿Empezaste con buen pie tu clase de inglés?). *"Did you get him to do it? Yes, I got him and her to do it"* (¿Conseguiste que él lo hiciera? Sí, conseguí que él y ella lo hicieran).

**Clase 125: Phrasal verb 'Ocupar tiempo' (Phrasal verb: *Take up time*)**
*   **Tema:** Expresar que una actividad consume o requiere mucha cantidad de tiempo.
*   **Ejemplos:** *"Does replying to emails take up too much of your time? Yes, replying to emails takes up way too much of my time"* (¿Responder correos electrónicos te ocupa demasiado tiempo? Sí, me ocupa muchísimo tiempo).

**Clase 126: Preposiciones 'Al lado de' y 'Aparte de' (Prepositions: *Beside / Next to* & *Apart from / Besides*)**
*   **Tema:** Diferenciar sinónimos de proximidad física (*beside/next to*) y conectores para indicar excepciones o adiciones (*apart from/besides*).
*   **Ejemplos:** *"Is your house next to the metro? Yes, my house is beside the metro"* (¿Tu casa está al lado del metro? Sí, mi casa está al lado del metro). *"Apart from a few scratches, the climber was fine. Besides a few scratches, the climber was fine"* (Aparte de unos pocos rasguños, el escalador estaba bien).

**Clase 127: Expectativas y Obligaciones 'Se supone que' (Modal Expression: *Be supposed to*)**
*   **Tema:** Usar la estructura *supposed to* como sinónimo nativo de *have to* o *should* para expresar lo que se espera que hagas.
*   **Ejemplos:** *"I have to call my parents at least four times a week. You're supposed to call your parents at least four times a week"* (Tengo que llamar a mis padres al menos cuatro veces a la semana. Se supone que debes llamar a tus padres...). *"Am I supposed to answer your questions aloud?"* (¿Se supone que debo responder a tus preguntas en voz alta?).

**Clase 128: Expectativas en Pasado y Phrasal verb 'Ocupar espacio' (Past Expression: *Was/Were supposed to* & Phrasal verb: *Take up space*)**
*   **Tema:** Expresar lo que "se suponía que" debías hacer en el pasado, y aplicar el verbo *take up* al volumen físico.
*   **Ejemplos:** *"I had to buy eight apples for the fruit salad. You were supposed to buy eight apples..."* (Se suponía que debías comprar ocho manzanas...). *"Would a king-sized bed take up a lot of space in this room? Yes, a king-size bed would take up a lot of space..."* (¿Ocuparía mucho espacio una cama king-size en esta habitación? Sí, ocuparía mucho espacio...).

**Clase 129: Recomendaciones Formales y Subjuntivo (Subjunctive: *Recommend that someone do/not do*)**
*   **Tema:** Estructura super avanzada: cuando usamos verbos como recomendar, exigir o sugerir, el siguiente verbo no lleva la 's' de tercera persona ni el auxiliar *don't/doesn't*.
*   **Ejemplos:** *"My neighbor shouldn't shout so much. You recommend that he not shout so much"* (Tú recomiendas que él no grite tanto). *"Do you recommend that I study at least 2 hours a day?"* (¿Recomiendas que yo estudie al menos 2 horas al día?).

**Clase 130: Expresión 'Hacer un desastre' y Cláusulas Relativas (Expression: *Make a mess of* & Relative Clauses)**
*   **Tema:** Modismo para referirse a estropear o arruinar algo, y agilidad uniendo dos oraciones mediante *that*.
*   **Ejemplos:** *"Have you ever made a right mess of a recipe?"* (¿Alguna vez has hecho un verdadero desastre con una receta?). *"I saw a movie. The movie was in Chinese. The movie that I saw was in Chinese"* (Vi una película. La película era en chino. La película que vi era en chino).

**Clase 131: Phrasal verb 'Repasar / Refrescar conocimientos' (Phrasal verb: *Brush up on*)**
*   **Tema:** El verbo compuesto específico para desempolvar habilidades o repasar algo que ya sabías.
*   **Ejemplos:** *"Do you need to brush up on your English? Yes, I need to brush up on my English"* (¿Necesitas repasar/refrescar tu inglés? Sí...). *"Did you brush up on your highway code before you took your driving test?"* (¿Repasaste tu código de circulación antes de hacer el examen de conducir?).

**Clase 132: Verbos con preposición y Expresión 'Costar un ojo de la cara' (Prepositions: *Shout at/to* & Idiom: *Cost an arm and a leg*)**
*   **Tema:** Diferenciar entre gritar "a" alguien de lejos (*shout to*) y gritarle a alguien enfadado (*shout at*). Modismo clásico de precios excesivos.
*   **Ejemplos:** *"I saw my father in the street and I shouted to him because he couldn't hear me"* (Vi a mi padre en la calle y le grité porque no podía oírme). *"Did your car cost you an arm and a leg? Yes, my car cost me an arm and a leg"* (¿Tu coche te costó un ojo de la cara? Sí...).

**Clase 133: El Subjuntivo con Adjetivos Impersonales (Subjunctive after Impersonal Adjectives: *It's important/crucial/vital that he be/do*)**
*   **Tema:** Uso formal nativo donde, tras adjetivos de importancia, el verbo de la cláusula subordinada mantiene su forma base (infinitivo sin *to*).
*   **Ejemplos:** *"It's necessary that they win this game"* (Es necesario que ganen este juego). *"It's crucial that he be here on time"* (Es crucial que él esté aquí a tiempo). *"It's vital that you take care of your health"* (Es vital que cuides tu salud).

**Clase 134: Phrasal verb 'Hablar con superioridad' e Inversión 'Apenas / Nada más' (Phrasal verb: *Talk down to* & Inversion: *No sooner had... than*)**
*   **Tema:** Verbo para referirse a ser condescendiente, y estructura literaria avanzada (inversión sujeto-verbo) para referirse a dos acciones casi simultáneas en el pasado.
*   **Ejemplos:** *"Did your neighbor talk down to you last week? Yes, my neighbor talked down to me..."* (¿Te habló tu vecino con superioridad la semana pasada? Sí...). *"The game started and the football player sprained his ankle. No sooner had the game started that the football player sprained his ankle"* (Nada más empezar el partido, el jugador se esguinzó el tobillo).

**Clase 135: Expresión 'No me extraña' (Expression: *It's no wonder / No wonder*)**
*   **Tema:** Modismo frecuente para decir que algo "no es de extrañar" o "es lógico".
*   **Ejemplos:** *"He doesn't understand anything she says because she speaks very fast. It's no wonder he doesn't understand anything she says..."* (No me extraña que él no entienda nada de lo que dice...). *"No wonder he didn't buy the car. It cost an arm and a leg"* (No me extraña que no comprara el coche. Costaba un ojo de la cara).

**Clase 136: Expresión 'Ir al grano' y Phrasal verb 'Apagar fuego' (Expressions: *Get straight to the point* & Phrasal verb: *Put out*)**
*   **Tema:** Decir a alguien que sea directo, y el uso nativo de *put out* para extinguir incendios.
*   **Ejemplos:** *"Did she get straight to the point? Yes, she got straight to the point"* (¿Fue ella directa al grano? Sí, fue directamente al grano). *"If there were a fire, would the firemen put it out? Yes... the fireman would put it out"* (Si hubiera un incendio, ¿lo apagarían los bomberos? Sí, lo apagarían).

**Clase 137: Gustos Situacionales 'Me encanta cuando/la forma en que' (Expressions: *Love it when / Love the way*)**
*   **Tema:** Estructura nativa donde se debe incluir el pronombre *it* antes de *when* al expresar gustos sobre situaciones.
*   **Ejemplos:** *"Do you love it when she sings? Yes, I love it when she sings"* (¿Te encanta cuando ella canta? Sí, me encanta cuando canta). *"Do you love the way he tells jokes? I love the way he tells jokes"* (¿Te encanta la forma en que cuenta chistes?).

**Clase 138: Odios Situacionales e Idioma de Éxito Personal (Expressions: *Hate it when* & Idiom: *Do all right for oneself*)**
*   **Tema:** Igual que la clase anterior pero con el verbo odiar, y el modismo coloquial para decir que a alguien "le va muy bien" en la vida.
*   **Ejemplos:** *"Do you hate it when he's late? Yes, I hate it when he's late"* (¿Odias cuando él llega tarde? Sí...). *"How's your neighbor doing? My neighbor is doing all right for herself. She has a good job..."* (¿Cómo le va a tu vecina? A mi vecina le va bastante bien en la vida. Tiene un buen trabajo...).

**Clase 139: Expresar Propósito 'Para/Con el fin de' (Purpose Connectors: *In order to* + infinitive)**
*   **Tema:** Usar la variante formal de *to* para explicar la finalidad de una acción ("con el fin de").
*   **Ejemplos:** *"Why did she quit her job? She quit her job in order to look after her parents"* (¿Por qué dejó su trabajo? Dejó su trabajo para/con el fin de cuidar a sus padres). *"She moved to Spain in order to find a job"* (Se mudó a España con el fin de encontrar un trabajo).

**Clase 140: Propósito con 'Para que' y Phrasal verb 'Perseverar' (Purpose Connectors: *So that / In order that* & Phrasal verb: *Stick at it*)**
*   **Tema:** Expresar "para que" uniendo dos cláusulas (usualmente acompañadas de *could* o *can*), y el verbo compuesto para referirse a no rendirse o seguir intentándolo.
*   **Ejemplos:** *"She started earning money so that her children could go to school"* (Empezó a ganar dinero para que sus hijos pudieran ir al colegio). *"She found the course very tough, but stuck at it and learned a lot in the end"* (El curso le pareció muy duro, pero perseveró/siguió intentándolo y aprendió mucho al final).

**Clase 141: Expresión 'Tener razón sobre' (Expression: *Be right about*)**
*   **Tema:** Decirle a alguien que acertó o tenía razón sobre un tema específico, usando la preposición *about*.
*   **Ejemplos:** *"How was the concert? You were right about the concert. We couldn't hear or see anything"* (¿Qué tal el concierto? Tenías razón sobre el concierto. No pudimos oír ni ver nada). *"Did it rain? You were right about the rain"* (¿Llovió? Tenías razón sobre la lluvia).

**Clase 142: Modismo 'Sacar de quicio' y Verbos de Percepción Sonora (Idiom: *Get on someone's nerves* & Sensory Verbs: *Sound / Sound like / Ring a bell*)**
*   **Tema:** Expresar que alguien te pone los nervios de punta, y el uso del verbo sonar para impresiones u opiniones ("me suena", "suena a").
*   **Ejemplos:** *"Would your neighbors get on your nerves if they played their music very loud?"* (¿Te sacarían de quicio tus vecinos si pusieran la música muy alta?). *"That sounds like my neighbor. You sound tired. What he's saying rings a bell"* (Eso suena como mi vecino. Suenas cansado. Lo que él dice me resulta familiar / me suena).

**Clase 143: Phrasal verb 'Dar órdenes / Mangonear' (Phrasal verb: *Boss around*)**
*   **Tema:** Aprender el *phrasal verb* que significa mandar u ordenar constantemente a otras personas de forma autoritaria.
*   **Ejemplos:** *"Would you boss your boss around if you could? Yes, I would boss my boss around if I could"* (¿Mangonearías/Darías órdenes a tu jefe si pudieras? Sí, lo haría). *"Do you know anyone who bosses their boyfriend around when they go out?"* (¿Conoces a alguien que mangonee a su novio cuando salen?).

**Clase 144: Sugerencias Retóricas '¿Por qué no...?' y Superlativos de Cantidad (Suggestions: *Why not* + Infinitive & Superlatives: *The most / The least*)**
*   **Tema:** Dar consejos rápidos omitiendo el sujeto y auxiliar ("Why not do it?"), y comparar quién tiene "más" o "menos" de algo.
*   **Ejemplos:** *"Why don't you turn off the tap while brushing your teeth? Why not turn off the tap while brushing your teeth?"* (¿Por qué no cerrar el grifo mientras te cepillas los dientes?). *"Alberto reads 5 hours a week, Kyle 10, and Fitz 15. Alberto reads the least. Fitz reads the most"* (Alberto es el que menos lee. Fitz es el que más lee).

**Clase 145: Fracasos e Intentos Fallidos 'No conseguir' (Verb pattern: *Fail to do* vs *Not manage to*)**
*   **Tema:** Forma sofisticada y formal de decir que no se logró un objetivo (*fail to* + infinitivo).
*   **Ejemplos:** *"He didn't manage to convince her... He failed to convince her to go to Morocco on their honeymoon"* (Él no logró convencerla... Él fracasó en/no consiguió convencerla de ir a Marruecos en su luna de miel). *"I failed to write my 15 classes over the weekend"* (No conseguí escribir mis 15 clases durante el fin de semana).

**Clase 146: Phrasal verb 'Darle vueltas / Reflexionar' y Experimentos 'Probar a' (Phrasal verb: *Mull over* & Verb pattern: *Try* + -ing)**
*   **Tema:** Verbo para reflexionar detenidamente sobre una decisión o texto. Uso de *try* con gerundio para indicar un "experimento" para ver si soluciona un problema.
*   **Ejemplos:** *"Do you normally mull over the menu when you go out for dinner? Yes, I normally mull over the menu..."* (¿Normalmente le das vueltas/te piensas bien el menú cuando sales a cenar? Sí...). *"I tried to tidy up the house in 5 minutes, but in the end, it took me 45 minutes. Next time, try asking your housemate for help"* (Intenté ordenar la casa en 5 min... La próxima vez, prueba a pedirle ayuda a tu compañero de piso).

**Clase 147: Modismo 'A la hora de la verdad' (Idioms: *When it comes to the crunch / When it comes to* + -ing)**
*   **Tema:** Expresión clave para referirse al momento decisivo o crítico, y el uso nativo de *When it comes to* ("Cuando se trata de").
*   **Ejemplos:** *"When it came to the crunch, his nerves betrayed him"* (A la hora de la verdad, sus nervios lo traicionaron). *"When it came to the crunch, she wasn't capable of standing up to her husband"* (A la hora de la verdad, ella no fue capaz de plantarle cara a su marido). *"When it comes to parking, my wife is terrible"* (Cuando se trata de aparcar, mi esposa es terrible).

**Clase 148: Inversión Gramatical Negativa 'Nunca' y 'No solo' (Negative Inversion: *Never have I... / Not only was...*)**
*   **Tema:** Estructura extremadamente avanzada y literaria: al empezar una frase con un negativo como *Never* o *Not only*, se debe invertir el sujeto y el auxiliar (como si fuera una pregunta).
*   **Ejemplos:** *"Never have I been to such a filthy house"* (Nunca he estado en una casa tan asquerosa). *"Never will I believe what he says"* (Jamás creeré lo que él dice). *"Not only was he late, but he also left the present at home"* (No solo llegó tarde, sino que también dejó el regalo en casa).

**Clase 149: Inversión Gramatical 'Bajo ninguna circunstancia' (Negative Inversion: *Under no circumstances should you...*)**
*   **Tema:** Uso de la regla de inversión tras advertencias restrictivas y absolutas.
*   **Ejemplos:** *"Under no circumstances must you get on the lift when there is a fire"* (Bajo ninguna circunstancia debes subir al ascensor cuando hay un incendio). *"Under no circumstances should you shout during the funeral"* (Bajo ninguna circunstancia deberías gritar durante el funeral).

**Clase 150: Verbo 'Arrepentirse' o 'Lamentar' (Verb pattern: *Regret* + -ing / *Regret to* tell you)**
*   **Tema:** Diferenciar el uso de *regret* con gerundio para lamentar cosas pasadas, frente a *regret to* para dar malas noticias formales ("Lamento informarle").
*   **Ejemplos:** *"You regret buying that pair of shoes. He doesn't regret asking her out. She regrets not calling..."* (Te arrepientes de comprar ese par de zapatos. Él no se arrepiente de invitarla a salir. Ella se arrepiente de no haber llamado...). *"I regret to tell you that we have decided not to hire you"* (Lamento informarle/decirle que hemos decidido no contratarle).

**Clase 151: Phrasal verbs 'Sentirse con ánimos de' y 'Pasar página / Avanzar' (Phrasal verbs: *Feel up to* + -ing & *Move on to*)**
*   **Tema:** Expresar si se tiene o no la energía para hacer un plan, y el verbo compuesto para superar una situación o cambiar de tema.
*   **Ejemplos:** *"Do you feel up to going out tonight? No, I don't feel up to going out tonight"* (¿Te sientes con ánimos/fuerzas para salir esta noche? No...). *"Did she manage to move on after the breakup? Yes, she managed to move on after the breakup"* (¿Consiguió pasar página después de la ruptura? Sí...). *"Shall we move on to the next subject?"* (¿Pasamos al siguiente tema?).

**Clase 152: Expresión 'Más adelante / Luego' y Phrasal verb 'Abandonar' (Time Expression: *Later on* & Phrasal verb: *Walk out of / Walk out on*)**
*   **Tema:** Uso de *later on* para eludir establecer una hora concreta en el futuro. Uso de *walk out of* para irse repentinamente de un sitio, o *walk out on* para abandonar a personas.
*   **Ejemplos:** *"Were you going to call her? I was going to call her, but later on I changed my mind"* (¿Ibas a llamarla? Iba a llamarla, pero más tarde cambié de opinión). *"Have you ever walked out of an important meeting?"* (¿Alguna vez te has marchado/abandonado una reunión importante?). *"Do some men walk out on their families? Yes, some men walk out on their families"* (¿Algunos hombres abandonan a sus familias? Sí...).

**Clase 153: Adverbios Exclamativos Formales (Adverb combinations: *Surprisingly enough / Strangely enough*)**
*   **Tema:** Locuciones de inicio de frase para expresar asombro, suerte o rareza ("Curiosamente...", "Por increíble que parezca...").
*   **Ejemplos:** *"Surprisingly enough, nobody had ever heard of him"* (Sorprendentemente, nadie había oído hablar de él jamás). *"Strangely enough, they'd both gone to the same school when they were little"* (Por extraño que parezca, ambos habían ido al mismo colegio de pequeños). *"Luckily enough, he had a spare tire"* (Afortunadamente, él tenía una rueda de repuesto).

**Clase 154: Modismos de Ira Loca y Expresar Grupos de Personas (Idioms: *Hit the roof / Go crazy* & Expression: *There are X of us*)**
*   **Tema:** Expresiones de enfado y pérdida de control ("ponerse hecho una furia"). La forma correcta de indicar cuántos somos o cuántos hay de nosotros en inglés.
*   **Ejemplos:** *"Did your boss hit the roof when he saw the sales figures?"* (¿Puso el grito en el cielo / se puso hecho una fiera tu jefe cuando vio las cifras de ventas?). *"How many of you are there in the classroom? There are three of us in the classroom"* (¿Cuántos de ustedes hay en el aula? Somos tres en el aula).

**Clase 155: Phrasal verb 'Ponerse de moda / Captar la idea' (Phrasal verb: *Catch on*)**
*   **Tema:** Verbo compuesto extremadamente popular que significa que una tendencia se hace popular, o que una persona por fin entiende algo (pillar el chiste).
*   **Ejemplos:** *"Do you think the idea will catch on? No, I don't think the idea will catch on at all"* (¿Crees que la idea se pondrá de moda / cuajará? No...). *"How long did it take you to catch on? I still haven't caught on"* (¿Cuánto tiempo tardaste en captarlo/entenderlo? Todavía no lo he pillado).

**Clase 156: Phrasal verb 'Compensar' y Verbo 'Permitirse económicamente' (Phrasal verb: *Make up for* & Modal expression: *Afford to*)**
*   **Tema:** Expresar resarcimiento ("compensar el tiempo perdido"), y confirmar si uno tiene el dinero (o la libertad) para permitirse hacer algo.
*   **Ejemplos:** *"Do we have to make up for lost time? Yes, we have to make up for lost time"* (¿Tenemos que recuperar/compensar el tiempo perdido? Sí...). *"Can you really afford to buy that flat? No, I can't afford to buy that flat"* (¿De verdad te puedes permitir comprar ese piso? No, no me lo puedo permitir). *"Can you afford to call your boss an idiot?"* (¿Te puedes permitir el lujo de llamar idiota a tu jefe?).

**Clase 157: Phrasal verb 'Abordar una tarea' (Phrasal verb: *Go about* + -ing)**
*   **Tema:** El verbo utilizado para describir el "cómo" enfrentarse, abordar o plantear una situación.
*   **Ejemplos:** *"How did you go about telling him? I went about telling him over dinner"* (¿Cómo abordaste/planteaste el decírselo? Se lo planteé/dije durante la cena). *"Are there lots of ways to go about doing it? Yes, there are a lot of ways to go about doing it"* (¿Hay muchas maneras de abordar el hacerlo? Sí...).

**Clase 158: Preposiciones con Compromiso y Phrasal verb 'Criticar/Atacar' (Verbs + Prepositions: *Compromise on / Commit to* & Phrasal verb: *Have a go at*)**
*   **Tema:** Las preposiciones correctas tras transigir o comprometerse, y el modismo para "metérsele a alguien" o atacarle verbalmente.
*   **Ejemplos:** *"They refuse to compromise on anything"* (Se niegan a transigir en nada). *"I'm not committing myself to anything"* (No me estoy comprometiendo a nada). *"Why are you having a go at me? I'm having a go at you because I'm in a bad mood"* (¿Por qué te metes conmigo/me atacas? Me meto contigo porque estoy de mal humor).

**Clase 159: Respuestas conversacionales '¿De verdad?' y 'No me digas' (Conversational tags: *Is that so? / You don't say*)**
*   **Tema:** Expresiones de cortesía, sorpresa o incluso sarcasmo nativo para mantener el ritmo y el interés en la charla.
*   **Ejemplos:** *"Only female mosquitoes suck blood. Is that so? Yes"* (Solo los mosquitos hembra chupan sangre. ¿De verdad / Ah, sí? Sí). *"I've just won the lottery. You don't say"* (Acabo de ganar la lotería. No me digas).

**Clase 160: Expresión Multifunción 'Eso es / Se acabó' (Expression: *That's it / That's that*)**
*   **Tema:** Usar *That's it* para animar ("¡así se hace!"), para lanzar una amenaza final ("¡se acabó, llamo a la policía!"), o para cerrar un tema (*that's that*).
*   **Ejemplos:** *"That's it. You're doing it really well"* (Eso es / Así se hace. Lo estás haciendo muy bien). *"That's it. You have to stop that now. Otherwise, I'm going to call the police again"* (Se acabó. Tienes que parar ahora. De lo contrario, voy a llamar a la policía). *"I'm not going to do it. And that's that. That's it for now. See you on Monday"* (No lo voy a hacer. Y punto / Eso es todo. Eso es todo por ahora. Nos vemos el lunes).
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
const placeholderStartStr = "{ range: '121 - 160', title: 'Inversiones y Expresiones Nativas', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] },";
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "121 - 160",\n';
        formattedSection += '                        title: "Inversiones y Expresiones Nativas",\n';
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
        console.log("Successfully replaced the placeholder for classes 121-160 in advanced level.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
