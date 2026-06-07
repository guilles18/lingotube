const fs = require('fs');

const rawText = `
**Clase 151: El adjetivo 'Equivocado' (The adjective: *Wrong*)**
*   **Tema:** Usar la palabra *wrong* para referirse a la persona, lugar o cosa equivocada, en lugar de usar una negación.
*   **Ejemplos:** *"I'm sorry, you've got the wrong person"* (Lo siento, te has equivocado de persona). *"He went to the wrong place. They took the wrong train"* (Él fue al lugar equivocado. Tomaron el tren equivocado).

**Clase 152: Expresiones de Edad (Age Expressions: *In his early/mid/late...* & Past Age)**
*   **Tema:** Expresar rangos de edad (a principios de, a mediados de, a finales de sus 20s, 40s, etc.) y repasar la edad en el pasado histórico.
*   **Ejemplos:** *"Dan is 22. Dan's in his early 20s. Sandra is 65. Sandra is in her mid-60s"* (Dan tiene 22. Dan está en sus veintipocos. Sandra tiene 65. Sandra está a mediados de sus sesentas). *"How old was he when he died? Cervantes was 68 when he died"* (¿Qué edad tenía cuando murió? Cervantes tenía 68 cuando murió).

**Clase 153: El verbo 'Permitir' (Verb: *Allow to*)**
*   **Tema:** Usar el verbo formal para dar permiso o dejar hacer algo, siempre seguido de *to*.
*   **Ejemplos:** *"Did he allow you to go? Yes, he allowed me to go"* (¿Te permitió ir? Sí, me permitió ir). *"Will you allow me to bring a friend? Yes, I will allow you to bring a friend"* (¿Me permitirás traer a un amigo? Sí...).

**Clase 154: El verbo 'Pagar' y 'Pasarlo bien' (Verb: *Pay for* & Expression: *Have a good time*)**
*   **Tema:** Diferenciar cuándo *pay* lleva la preposición *for* (para servicios/productos indirectos) y usar el verbo *have* para divertirse.
*   **Ejemplos:** *"Did you pay the electricity bill last month? Yes... Did you pay for the coffees this morning? Yes, I paid for the coffees..."* (¿Pagaste la factura de la luz?... ¿Pagaste los cafés esta mañana?). *"Did you have a good time at the party? Yes, I had a good time at the party"* (¿Te lo pasaste bien en la fiesta? Sí, me lo pasé bien...).

**Clase 155: Contraste 'Allow' vs. 'Let' (Causative verbs: *Allow to* vs *Let*)**
*   **Tema:** Comparar directamente el uso de *allow* (que requiere *to*) con *let* (que no requiere *to*) en la misma oración.
*   **Ejemplos:** *"They allowed me to go in without paying. They let me go in without paying"* (Me permitieron entrar sin pagar. Me dejaron entrar sin pagar). *"I allowed him to do it. I let him do it"* (Le permití hacerlo. Le dejé hacerlo).

**Clase 156: Phrasal verb 'Sacar un tema / Criar' y Deletreo (Phrasal verb: *Bring up* & Spelling)**
*   **Tema:** Un *phrasal verb* con doble significado: mencionar un tema de conversación o criar a un niño. Práctica de deletreo complejo.
*   **Ejemplos:** *"Did they bring up the subject of money? Yes, they brought up the subject of money"* (¿Sacaron el tema del dinero? Sí...). *"Was he brought up by his grandparents? Yes, he was brought up by his grandparents"* (¿Fue criado por sus abuelos? Sí...). *"Could you spell that for me, please? That's B O R O A I T H W A I T E"*.

**Clase 157: El Pronombre 'Algo' (Pronoun: *Something*)**
*   **Tema:** Afirmar la existencia de cosas no especificadas o problemas.
*   **Ejemplos:** *"I'm looking for something. There's something in the wardrobe"* (Estoy buscando algo. Hay algo en el armario). *"There's something wrong. He is hiding something"* (Hay algo mal/Pasa algo. Él está escondiendo algo).

**Clase 158: El Pronombre 'Cualquier cosa' y Adjetivos de Soledad (Pronoun: *Anything* & Adjectives: *Alone* vs *Lonely*)**
*   **Tema:** Usar *anything* en interrogativa, y diferenciar entre estar físicamente solo (*alone*) y sentirse solo/solitario (*lonely*).
*   **Ejemplos:** *"Is there anything I can do? Did you learn anything?"* (¿Hay algo/cualquier cosa que pueda hacer? ¿Aprendiste algo?). *"Were you alone in the house? Yes, I was alone in the house. Did you feel a bit lonely when I was away? Yes, I felt a bit lonely..."* (¿Estabas solo en casa?... ¿Te sentiste un poco solitario cuando estuve fuera?).

**Clase 159: Expresiones de Autonomía (Reflexive Expressions: *By yourself* vs *On your own*)**
*   **Tema:** Dos formas intercambiables de decir "por tu cuenta" o "por ti mismo".
*   **Ejemplos:** *"Can't you do it by yourself? Can't you do it on your own?"* (¿No puedes hacerlo por ti mismo? ¿No puedes hacerlo por tu cuenta?). *"He did his presentation on his own. He did the presentation by himself"* (Él hizo su presentación por su cuenta. Él hizo la presentación por sí mismo).

**Clase 160: Verbo 'Dejar de' y 'Nada' negativo (Verb: *Quit* + gerund & Negative Pronoun: *Not... anything*)**
*   **Tema:** Usar *quit* (pasado *quit*) para referirse a dejar un empleo o mal hábito, y usar *anything* en frases negativas para decir "nada".
*   **Ejemplos:** *"Did you quit smoking last year? Yes, I quit smoking last year. Did he quit his job last month?"* (¿Dejaste de fumar el año pasado? Sí... ¿Dejó su trabajo el month pasado?). *"Did they buy anything? No, they didn't buy anything"* (¿Compraron algo? No, no compraron nada).

**Clase 161: 'Cualquier cosa' en Afirmativo (Affirmative Pronoun: *Anything*)**
*   **Tema:** Usar *anything* en frases afirmativas para darle el significado de "cualquier cosa sin importar qué".
*   **Ejemplos:** *"What can go wrong? Anything can go wrong"* (¿Qué puede salir mal? Cualquier cosa puede salir mal). *"What will he eat? He'll eat anything. What will they do? They'll do anything"* (¿Qué comerá? Comerá cualquier cosa... Harán cualquier cosa).

**Clase 162: Pasados Regulares con sonido /d/ y Repaso (Regular Past /d/ sound & Mixed Past Verbs)**
*   **Tema:** Práctica de pronunciación de pasados regulares terminados en vibración (believed, cleaned) y contraste con verbos irregulares de viaje o pagos.
*   **Ejemplos:** *"Yesterday I believed it. Yesterday I cleaned it. Yesterday I enjoyed it"* (Ayer me lo creí. Ayer lo limpié. Ayer lo disfruté). *"Last Sunday we left the country. I paid him last Sunday. Last Sunday I quit smoking"* (El domingo pasado dejamos el país. Le pagué el domingo pasado. El domingo pasado dejé de fumar).

**Clase 163: Los verbos de Ganar (Verbs: *Earn / Make / Win*)**
*   **Tema:** Diferenciar cómo se dice ganar dinero por salario (*earn*), ganar dinero por negocios (*make*), o ganar en juegos/lotería (*win*).
*   **Ejemplos:** *"I earned more money last year. The company made a lot of money with that product. I've never won anything on the lottery"* (Gané más dinero el año pasado. La empresa ganó mucho dinero con ese producto. Nunca he ganado nada en la lotería).

**Clase 164: Pasados Regulares con sonido /t/ y Números grandes (Regular Past /t/ sound & Dictation)**
*   **Tema:** Pronunciación de verbos regulares donde la 'ed' suena como una /t/ sorda (finished, liked), y dictado de grandes cifras.
*   **Ejemplos:** *"Yesterday I finished it. Yesterday I liked it. Yesterday I washed it"* (Ayer lo terminé. Ayer me gustó. Ayer lo lavé). *"597... 4,752... 30,610... 341,562"*.

**Clase 165: Verbo 'Conocer' por primera vez y Deletreo (Past irregular: *Meet/Met* & Spelling)**
*   **Tema:** Usar *meet* para indicar cuándo y dónde se conoció a una persona, y práctica ortográfica de apellidos complejos.
*   **Ejemplos:** *"Have you met my boss? No, I haven't met your boss... When did you meet your husband? I met my husband last year"* (¿Has conocido a mi jefe? No... ¿Cuándo conociste a tu marido? Conocí a mi marido el año pasado). *"Could you spell that for me, please? That's L O U G H B O R O U G H"*.

**Clase 166: Pasados Regulares con sonido /id/ y Respuestas Cortas (Regular Past /id/ sound & Short Answers Review)**
*   **Tema:** Pronunciación de la sílaba extra /id/ en verbos que terminan en t o d (attended, accepted). Repaso ágil de auxiliares.
*   **Ejemplos:** *"Did the boss attend the meeting? Yes, the boss attended the meeting. Have you ever accepted a bribe? No, I've never accepted a bribe"* (¿Asistió el jefe a la reunión? Sí... ¿Alguna vez has aceptado un soborno? No...). *"Does the Queen of England speak English? Yes, she does. Was I your teacher last week? Yes, you were"*.

**Clase 167: 'Estar de buen/mal humor' y el artículo 'An' (Expression: *In a good/bad mood* & Indefinite Article: *An*)**
*   **Tema:** Expresar el estado de ánimo (que en inglés usa la preposición *in* y el verbo *to be*), y el uso obligatorio del artículo *an* antes de sonidos vocálicos.
*   **Ejemplos:** *"Are you in a good mood today? Yes, I'm in a good mood today. Are you ever in a bad mood? No, I'm never in a bad mood"* (¿Estás de buen humor hoy? Sí... ¿Estás alguna vez de mal humor? No...). *"That's an interesting idea. He's an important client of ours. That man's an FBI agent"* (Esa es una idea interesante. Es un cliente importante nuestro. Ese hombre es un agente del FBI).

**Clase 168: Repaso de Pasados Regulares y Posesivos (Mixed Regular Past Verbs & Possessive Pronouns)**
*   **Tema:** Mezcla de los tres sonidos de pasados regulares, y agilidad usando pronombres absolutos (mío, tuyo, suyo) combinados con pronombres objeto.
*   **Ejemplos:** *"Yesterday I prepared it. Yesterday I asked him. Yesterday he avoided them"* (Ayer lo preparé. Ayer le pregunté. Ayer él los evitó). *"Give me mine. Give him his. Give us ours. Show me mine. Bring him his"* (Dame el mío. Dale a él el suyo. Danos el nuestro. Enséñame el mío. Tráele el suyo).

**Clase 169: El adverbio 'También' (Adverb: *Also*)**
*   **Tema:** Uso de *also* colocado antes del verbo principal (o después de verbos auxiliares y modales) para añadir información.
*   **Ejemplos:** *"I can speak Spanish. I can also speak English"* (Puedo hablar español. También puedo hablar inglés). *"John works evenings. He also works weekends. I studied history. I also studied philosophy"* (John trabaja por las tardes. También trabaja los fines de semana. Estudié historia. También estudié filosofía).

**Clase 170: Pasado irregular 'Robar' y la Expresión 'A la larga' (Past irregular: *Steal/Stole/Stolen* & Expression: *In the long run*)**
*   **Tema:** Automatización del verbo *steal*, y la muletilla nativa para referirse a eventos a largo plazo.
*   **Ejemplos:** *"Have you ever stolen a car? No, I've never stolen a car"* (¿Alguna vez has robado un coche? No...). *"Are you sure everything will work out in the long run? Yes, I'm sure everything will work out in the long run"* (¿Estás seguro de que todo saldrá bien a la larga? Sí, estoy seguro...).

**Clase 171: Posesión y Preguntas al Sujeto ('Have' vs 'Have got' & Subject Questions: *Who/What*)**
*   **Tema:** Contraste de la posesión americana (*have/don't have*) frente a la británica (*have got/haven't got*). Formular preguntas donde se ignora quién realiza la acción, omitiendo el verbo auxiliar.
*   **Ejemplos:** *"I have a new job. I've got a new job. We don't have a car. We haven't got a car"* (Tengo un trabajo nuevo... No tenemos coche...). *"What happened? Who lives in that house? Who won the match? What makes you happy?"* (¿Qué pasó/Qué ocurrió? ¿Quién vive en esa casa? ¿Quién ganó el partido? ¿Qué te hace feliz?).

**Clase 172: Expresiones 'También' y Phrasal verb 'Crecer' (Adverbs: *Too / As well* & Phrasal verb: *Grow up*)**
*   **Tema:** Alternativas a *also* que se colocan al final de la oración (*too*, *as well*), y el verbo para referirse a madurar o pasar la infancia.
*   **Ejemplos:** *"I saw it, too. It rained where we were, too. I've read that book and I've read this one as well"* (Yo lo vi también. Llovió donde estábamos también. He leído ese libro y he leído este también). *"Jim grew up in the north of Scotland. My nephews are growing up so fast"* (Jim creció en el norte de Escocia. Mis sobrinos están creciendo muy rápido).

**Clase 173: Más 'Have/Have got' y Verbo 'Pedir' (Possession contrast & Verbs: *Ask for* vs *Ask to*)**
*   **Tema:** Preguntas interrogativas de posesión británica vs. americana, y diferenciar entre pedir un objeto (*ask for*) y pedirle a alguien que haga algo (*ask to*).
*   **Ejemplos:** *"Have they got a problem? Do they have a problem?"* (¿Tienen un problema?). *"Are you going to ask for the bill? Yes, I'm going to ask for the bill"* (¿Vas a pedir la cuenta? Sí, voy a pedir la cuenta). *"Will you ask him to call me? Yes, I'll ask him to call you"* (¿Le pedirás que me llame? Sí, le pediré que te llame).

**Clase 174: Pasado irregular 'Subir/Elevar' y Modal 'Ser capaz de' (Past irregular: *Rise/Rose/Risen* & Modals: *Can* vs *Able to*)**
*   **Tema:** El verbo *rise* usado comúnmente para precios o inflación, y expresar habilidad o capacidad física.
*   **Ejemplos:** *"Did inflation rise last year? Yes, inflation rose last year"* (¿Subió la inflación el año pasado? Sí, la inflación subió...). *"Can you swim 100 m? Yes, I can swim 100 m... Were they able to come in the end? Yes, they were able to come in the end"* (¿Puedes nadar 100 metros?... ¿Pudieron/Fueron capaces de venir al final? Sí...).

**Clase 175: Dictado numérico y Expresión 'La mejor manera de' (Dictation & Expression: *The... way to*)**
*   **Tema:** Perfeccionamiento de grandes cifras numéricas, y pedir consejos usando superlativos de rutas o formas de hacer algo.
*   **Ejemplos:** *"597,288... 63,243... 341,562"*. *"What's the easiest way to learn English? What's the cheapest way to get to London? What's the best way to get in touch with you?"* (¿Cuál es la forma más fácil de aprender inglés? ¿Cuál es la forma más barata de llegar a Londres? ¿Cuál es la mejor manera de ponerse en contacto contigo?).

**Clase 176: El Pasado Perfecto y Expresiones Temporales Nocturnas (Past Perfect: *Had done* & Time Expression: *Late yesterday evening*)**
*   **Tema:** Expresar el "pasado del pasado" (lo que "habías hecho" antes de que otra cosa pasara), e indicar precisión temporal.
*   **Ejemplos:** *"Before I went to Argentina, I'd never been in the Southern Hemisphere"* (Antes de ir a Argentina, nunca había estado en el hemisferio sur). *"The concert had already started when we arrived"* (El concierto ya había empezado cuando llegamos). *"When did you meet Terry? I met Terry late yesterday evening"* (¿Cuándo conociste a Terry? Conocí a Terry a última hora de la tarde de ayer).

**Clase 177: 'Ser capaz de' en Tiempos Perfectos/Futuros y Expresión 'En nombre de' (*Able to* in Perfect/Future & Expression: *On behalf of*)**
*   **Tema:** Suplir la falta de tiempos compuestos del verbo *Can* utilizando *Be able to*, y expresiones para representar a alguien.
*   **Ejemplos:** *"Have you been able to do much sport lately? No, I haven't been able to do much sport lately"* (¿Has podido/sido capaz de hacer mucho deporte últimamente? No, no he podido...). *"When will they be able to do it? They'll be able to do it tomorrow"* (¿Cuándo podrán hacerlo? Podrán hacerlo mañana). *"I'm calling on behalf of Vaughn Systems"* (Llamo en nombre de Vaughn Systems).

**Clase 178: Pasado irregular 'Significar/Querer decir' y Preguntas de Motivo (Past irregular: *Mean/Meant* & Question: *What... for?*)**
*   **Tema:** Uso de *mean* para explicar intenciones o significados de palabras, y estructurar el "¿Para qué?" en inglés separando las palabras.
*   **Ejemplos:** *"Are you going to explain what you meant? Yes, I'm going to explain what I meant"* (¿Vas a explicar lo que querías decir? Sí, voy a explicar lo que quería decir). *"What did he do that for? What's this for? What have they come here for?"* (¿Para qué hizo él eso? ¿Para qué es esto? ¿A qué/Para qué han venido aquí?).

**Clase 179: Dobles Comparativos Proporcionales (Double Comparatives: *The more... the more / The faster... the sooner*)**
*   **Tema:** Estructura avanzada para expresar una relación proporcional ("Cuanto más... más..."). Se utiliza el artículo "the" antes de los comparativos.
*   **Ejemplos:** *"The more you study, the more you learn. The less you study, the less you learn"* (Cuanto más estudias, más aprendes. Cuanto menos estudias, menos aprendes). *"The faster you drive, the sooner you'll get there"* (Cuanto más rápido conduzcas, más pronto llegarás).

**Clase 180: Intereses y Preguntar la temática (Expression: *Be into* & Question: *What is it about?*)**
*   **Tema:** Formas coloquiales nativas para decir que algo te gusta o interesa, y preguntar "de qué trata" un libro o película.
*   **Ejemplos:** *"Are you into sport? Yes, I'm into sport. Is your brother into sport, too? Yes..."* (¿Te gustan/interesan los deportes? Sí, me interesan los deportes. ¿A tu hermano también le interesan?). *"What was the meeting about? What was the movie about?"* (¿De qué trataba la reunión? ¿De qué trataba la película?).

**Clase 181: Origen de las cosas y Omisión Verbal (Questions: *Where... from?* & Verb Ellipsis: *Wanted to*)**
*   **Tema:** Preguntar de dónde se obtuvo algo (dejando la preposición *from* al final), y omitir el segundo verbo en una oración para no ser repetitivo.
*   **Ejemplos:** *"Where do you get your clothes from? Where did you get that pen from?"* (¿De dónde sacas/compras tu ropa? ¿De dónde sacaste ese bolígrafo?). *"We couldn't go to Croatia, but we wanted to... She doesn't own a house, but she would like to"* (No pudimos ir a Croacia, pero queríamos [ir]... Ella no es dueña de una casa, pero le gustaría [serlo]).

**Clase 182: Pasado irregular 'Liderar' y Pasado Perfecto con Inmediatez (Past irregular: *Lead/Led* & Past Perfect + *Just*)**
*   **Tema:** El pasado del verbo liderar, y expresar una acción que "acababa de" ocurrir en el pasado usando *had just*.
*   **Ejemplos:** *"Did you lead your troops into battle last week? Yes, I led my troops into battle last week"* (¿Lideraste a tus tropas a la batalla la semana pasada? Sí, las lideré...). *"I had just had breakfast when the telephone rang... They had just started their trip when their car broke down"* (Acababa de desayunar cuando sonó el teléfono... Acababan de empezar su viaje cuando su coche se averió).

**Clase 183: Peticiones de Instrucciones y Phrasal verb 'Soportar' (Indirect Questions: *How to* & Phrasal verb: *Put up with*)**
*   **Tema:** Preguntar educadamente cómo realizar tareas o llegar a sitios, y el *phrasal verb* avanzado para "aguantar" o "soportar" molestias.
*   **Ejemplos:** *"Can you tell me how to get to the nearest hospital? Can you tell me how to make a Spanish omelette?"* (¿Puedes decirme cómo llegar al hospital más cercano? ¿Puedes decirme cómo hacer una tortilla española?). *"Can you put up with the noise your neighbors make every day? No, I can't put up with the noise..."* (¿Puedes soportar el ruido que hacen tus vecinos todos los días? No, no puedo soportar el ruido...).

**Clase 184: Expresión '¿Cómo es que...?' y El Adverbio 'Solo/Justo' (Expression: *How come* & Adverb: *Just*)**
*   **Tema:** Pedir explicaciones de una forma más sorpresiva y coloquial que "Why", y usar *just* como sinónimo de "solo" (*only*).
*   **Ejemplos:** *"How come they didn't let you go to the party? How come you didn't call me to tell me?"* (¿Cómo es que no te dejaron ir a la fiesta? ¿Cómo es que no me llamaste para decírmelo?). *"You just went to Amsterdam at Easter. You just know one person whose name is Rubio"* (Tú solo fuiste a Ámsterdam en Semana Santa. Tú solo conoces a una persona llamada Rubio).

**Clase 185: Preguntas de Origen 'Desde cuándo' y Símiles Comunes (Questions: *Since when* & Idioms: *As... as a...*)**
*   **Tema:** Interrogar sobre el punto de inicio de un estado, y aprender dichos o refranes comparativos comunes en inglés.
*   **Ejemplos:** *"Since when have you known me? Since when have you been ill?"* (¿Desde cuándo me conoces? ¿Desde cuándo estás enfermo?). *"Have you ever been as busy as a bee? Yes, I've sometimes been as busy as a bee"* (¿Has estado alguna vez tan ocupado como una abeja? Sí...). *"Do you know anyone who is as deaf as a post?"* (¿Conoces a alguien que esté tan sordo como una tapia?).

**Clase 186: Expresión '¿Qué hay de...?' y Uso Enfático (Expression: *What about* & Emphatic: *Just*)**
*   **Tema:** Preguntar sobre el estado de un tema que falta por tratar, y el uso de *just* para dar énfasis emocional o justificar excusas.
*   **Ejemplos:** *"What about my child? What about the homework? What about the other questions?"* (¿Qué hay de mi hijo? ¿Y qué pasa con los deberes? ¿Qué hay de las otras preguntas?). *"I just called him to see how he was. I just don't understand why he did it"* (Solo le llamé para ver cómo estaba. Simplemente no entiendo por qué lo hizo).

**Clase 187: Pasado irregular 'Mantener/Guardar' y Preguntas de Escenario (Past irregular: *Keep/Kept* & Scenario Questions: *What if*)**
*   **Tema:** El pasado de mantener o guardar cosas, y plantear escenarios hipotéticos que preocupan ("Y si...")..
*   **Ejemplos:** *"Did you keep all the newspapers last week? Yes, I kept all the newspapers last week"* (¿Guardaste todos los periódicos la semana pasada? Sí, los guardé). *"What if he can't come? What if they tell me there are no tickets left? What if it's more difficult than we expected?"* (¿Y si él no puede venir? ¿Qué pasa si me dicen que no quedan entradas? ¿Y si es más difícil de lo que esperábamos?).

**Clase 188: Cuantificadores 'Cada' y Phrasal verb 'Enterarse' (Quantifiers: *Every* vs *Each* & Phrasal verb: *Find out*)**
*   **Tema:** La sutil diferencia entre referirse a todos en un grupo (*every*) o a cada individuo por separado (*each*). El verbo para descubrir información.
*   **Ejemplos:** *"Every money box was full of money. Each money box was full of money"* (Todas las huchas estaban llenas de dinero. Cada hucha estaba llena de dinero). *"Did you find out anything interesting yesterday? Yes, I found out something interesting yesterday... Did you find out from a friend? Yes, I found out from a friend"* (¿Te enteraste de algo interesante ayer? Sí... ¿Te enteraste por un amigo? Sí, me enteré por un amigo).

**Clase 189: Exclamaciones y Énfasis, Repaso Irregular (Exclamations: *How / So* & Irregular verb review)**
*   **Tema:** Expresar sorpresa o énfasis con adjetivos ("¡Qué aburrido!"). Lluvia final de revisión de pasados irregulares recientes.
*   **Ejemplos:** *"How boring. How rude. How difficult. The waiter was so rude. The shoes was so expensive"* (Qué aburrido. Qué grosero. Qué difícil. El camarero fue tan grosero. Los zapatos eran tan caros). *"Did you lead me yesterday? Yes, I led you yesterday... Did that word mean the same thing? Yes, that word meant the same thing"* (¿Me lideraste ayer? Sí... ¿Esa palabra significaba lo mismo? Sí...).

**Clase 190: Verbos 'Negarse' y 'Negar' y Posiciones de 'Each' (Verbs: *Refuse to* vs *Deny + -ing* & Position of *Each*)**
*   **Tema:** Diferencia gramatical: negarse a realizar una acción a futuro (*refuse* + infinitivo) frente a negar haber hecho algo en el pasado (*deny* + gerundio). Práctica con *each*.
*   **Ejemplos:** *"You refused to go to the meeting. He denied breaking it. She refused to call him. They denied eating all the sweets"* (Te negaste a ir a la reunión. Él negó haberlo roto. Ella se negó a llamarle. Ellos negaron haberse comido todos los dulces). *"They spent €10 each. They each spent €10. Each of them spent €10"* (Gastaron 10€ cada uno. Cada uno gastó 10€. Cada uno de ellos gastó 10€).

**Clase 191: Phrasal verb 'Resumir' y Pronombres Complejos (Phrasal verb: *Sum up* & Pronouns: *Whoever, Whatever, However*)**
*   **Tema:** Acción de concluir o resumir, y sufijos *-ever* para expresar opciones incondicionales ("quienquiera que", "lo que sea").
*   **Ejemplos:** *"We can sum up the situation in one word... To sum up, this report shows that we need to buy more shares"* (Podemos resumir la situación en una palabra... Para resumir, este informe muestra que necesitamos comprar más acciones). *"Whoever told you to come, whatever did you say? However you manage to convince him... Wherever did you find that?"* (Quienquiera que te haya dicho que vinieras, ¿qué fue lo que dijiste? Como sea que logres convencerle... ¿Dónde diablos encontraste eso?).

**Clase 192: Adjetivo 'Todo el' y Expresión 'En General' (Adjectives: *The whole* vs *All the* & Expression: *On the whole*)**
*   **Tema:** Formas intercambiables para referirse a la totalidad de algo en singular, y el conector discursivo final para dar balances generales.
*   **Ejemplos:** *"I read the whole book. I read all the book. All the company went to the party. The whole company went to the party"* (Leí el libro entero. Leí todo el libro. Toda la empresa fue a la fiesta. La empresa entera fue a la fiesta). *"On the whole, the city is very pretty. On the whole, they didn't behave too badly... On the whole, the meeting wasn't very productive"* (En general, la ciudad es muy bonita. En general, no se portaron muy mal... En general, la reunión no fue muy productiva).

**Clase 193: Conjunción 'Si... o no' y Órdenes de Exasperación (Conjunction: *Whether... or not* & Imperatives: *Will you*)**
*   **Tema:** Alternativa formal a *if* para expresar dualidad u opciones. Convertir imperativos en peticiones fuertes pero educadas usando *will you* al final.
*   **Ejemplos:** *"Do you know whether he will come? No, I don't know whether he will come or not. Have you decided whether to buy the blue one or the green one?"* (¿Sabes si él vendrá o no? No, no sé si vendrá o no. ¿Has decidido si comprar el azul o el verde?). *"Stop talking. Will you pick up your things? Will you sit down? Will you calm down?"* (Deja de hablar. ¿Quieres recoger tus cosas? ¿Te vas a sentar? ¿Te quieres calmar?).

**Clase 194: Verbo 'Tender a' y El Futuro Continuo (Verb: *Tend to* & Future Continuous: *Will be doing*)**
*   **Tema:** Última lección del nivel: usar *tend to* para describir tendencias o hábitos, y el tiempo verbal para proyectarse hacia una acción que estará sucediendo en el futuro.
*   **Ejemplos:** *"People say women tend to live longer than men... She doesn't tend to eat fast food. He tends not to buy canned food"* (La gente dice que las mujeres tienden a vivir más que los hombres... Ella no suele/tiende a comer comida rápida. Él tiende a no comprar comida enlatada). *"Will you be working tomorrow at 10 p.m.? No, I won't be working tomorrow at 10 p.m. Will you be waiting for me at 6 p.m.? Yes, I'll be waiting for you at 6 p.m."* (¿Estarás trabajando mañana a las 22:00? No, no estaré trabajando mañana... ¿Me estarás esperando a las 18:00? Sí, te estaré esperando a las 18:00).
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
const placeholderStartStr = "{ range: '151 - 194', title: 'Estructuras Causativas y Conectores', points: [";
const placeholderStart = htmlContent.indexOf(placeholderStartStr);

if (placeholderStart > -1) {
    const placeholderEndStr = "] }"; // wait, the last one might just end with "] }" instead of "] },"
    const placeholderEnd = htmlContent.indexOf(placeholderEndStr, placeholderStart);
    if (placeholderEnd > -1) {
        let formattedSection = "{\n";
        formattedSection += '                        range: "151 - 194",\n';
        formattedSection += '                        title: "Estructuras Causativas y Conectores",\n';
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
        formattedSection += '                    }';
        
        // Use placeholderEnd + 3 to replace the "] }"
        const newHtml = htmlContent.substring(0, placeholderStart) + formattedSection + htmlContent.substring(placeholderEnd + 3);
        fs.writeFileSync('index.html', newHtml);
        console.log("Successfully replaced the placeholder for classes 151-194.");
    } else {
        console.log("Could not find the end of the placeholder.");
    }
} else {
    console.log("Could not find the placeholder.");
}
