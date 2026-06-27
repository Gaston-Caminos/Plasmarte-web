const datosPlasmarte = {
    // 1. TEXTOS DEL ARTISTA
    bio: {
        parrafo1: "Soy <strong>Carlitox Alberto Caminos</strong>, el creador detrás de <strong>Plasmarte Aerografía</strong>. Con años de experiencia y un aerógrafo siempre listo, mi pasión es transformar cualquier superficie en un lienzo vivo. Desde tanques de motos y cascos, hasta cuadros y piezas artesanales.",
        parrafo2: "Cada obra es única, pensada y diseñada con paciencia, buscando que el resultado final tenga su propia alma."
    },

    // 2. GALERÍA DE OBRAS
    // *************************************************************** INSTRUCCIONES ********************************************************** //
    //          Instrucciones para agregar una obra: Copiar el bloque de una obra existente, pegarlo al principio o al final de la lista, y cambiar los valores entre comillas.
    //          Categorias válidas: "aerografia", "custom", "artesanias", "murales"
    //          Formato visual (opcional): "item-v" (vertical), "item-h" (horizontal), o dejar vacío "" para normal.
    // **************************************************************************************************************************************** //

    obras: [
        {
            titulo: "Gato Sonriente", // Titulo que se muestra en la galería
            categoria: "aerografia", // Categoría para poder filtrarlo
            imagen: "imgs/gato_alicia.png", // Nombre de la imagen para poder buscarla
            descripcion: "Realizado con aerógrafo doble acción sobre madera de roble, 40x40cm.", // Descripción que se muestra al ampliar
            formatoVisual: "item-v", // Como se ve la obra en la galería
            ano: "2025",
            dimensiones: "40x40 cm."
        },
        {
            titulo: "Respiro",
            categoria: "aerografia",
            imagen: "imgs/respiro.png",
            descripcion: "Cuadro de 110x80cm realizado con técnica mixta de aerografía y pincel tradicional. La temática de la obra sigue la linea de la botánica, donde se diferencian varios tipos de plantas y hojas, como también diferentes tipos de aves que intervienen en la obra.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Sálvame",
            categoria: "aerografia",
            imagen: "imgs/salvame.png",
            descripcion: "El reflejo de un niño atrapado en el recuerdo eterno del sufrimiento que desgarra hasta el alma.Ojos que han registrado las aberraciones que solamente puede existir en la especie humana. El dolor se hace carne, y el sufrimiento se eterniza hasta que esa niña o niño sean salvados. Se estima que una de cada 5 niñas y uno de cada 13 niños, son abusados sexualmente en Argentina. El daño que sufre un niño o una niña abusada a veces es tan intenso que, para sobrevivir a ese daño, necesitan disociarse. El abuso marca de por vida a una persona. El 74,2 de las víctimas fueron violentadas por alguien de su entorno cercano o ámbito de confianza.  Por esta razón debemos cuidar a los niños y niñas, ellos no mienten. Hablemos con ellos.  Si has sufrido de abuso, o si lo estas sufriendo… No te calles, grita mas fuerte que nunca. Busca a quien te pueda escuchar y asi pueda ayudarte." ,
            formatoVisual: "item-h"
        },
        {
            titulo: "Implosión",
            categoria: "aerografia",
            imagen: "imgs/guason.png",
            descripcion: "El silencio retenido, la opresión continua e inescrupulosa de una sociedad carente de empatía,puede fagocitar a cualquier persona que sea un tanto más débil emocionalmente que otra. La no escucha, la velocidad de una vida improvisada y cargada de hipocresía, olvida, margina, y lastima a muchos; aquellos que más de una vez, han pedido ayuda de la manera que pudieron. El proceso de la humillación, del pisoteo continuo del hombre contra su misma especie, es tan descarada como creciente. Si un hombre se encuentra en el piso seguramente antes de levantarlo, lo pisotearan. El enojo, se va interiorizando en el que no tiene voz o no es escuchado. El odio muy pronto puede arraigarse profundamente en su corazón y su alma, despertando en un persona  sumisa, cansada y agobiada, una Implosión que puede terminar en tragedia.",
            formatoVisual: "item-v"
        },
        {
            titulo: "La Eterna Espera del Olvido",
            categoria: "aerografia",
            imagen: "imgs/la_eterna_espera.png",
            descripcion: "A lo largo de mi experiencia como clown , he realizado visitas sociales a diversos establecimientos. Hogares de niños judicializados, centros de día y también geriátricos, entre otros. Debo destacar con mucho dolor en el alma que, en los geriátricos, y aclaro que no en todos los casos, he podido observar un denominador comun en ellos; el olvido. Las miradas perdidas, las ilusiones desgastadas y el sentimiento de abandono flotan en la triste pero real atmosfera de estas instituciones. La obra con el título \”La Eterna Espera Del Olvido\” , pretende entonces reflejar y llevarnos a la reflexión de lo que podemos generar en nuestros viejos con el abandono y el olvido. En la obra, un anciano espera frente a una puerta cerrada deseando que se abra pronto.Su deseo es que,al abrirla, sea el rostro de algun ser querido el primero en aparecer. En su mano derecha carga una valija. La ha preparado con el mismo entusiasmo que un niño de tres años tiene al preparar la suya cuando le anuncian que se ira de vacaciones. En la valija el anciano puede llevar tan sólo algunos objetos, pero que son para él en ese instante, todo el patrimonio que tiene.La indignidad del destierro lehace sentir que han perdido todo. Las promesas estan hechas para cumplirse ,pero lamentablemente en un gran porcentaje de las oportunidades , quienes las realizan faltan a su palabra quebrantandocon estos compromisos. Consecuencia de esto, un reloj antiguo en la esquina superior derecha de la puerta se ve viejo, oxidado y deteriorado por el tiempo que transcurre y transcurre. La espera se hace eterna, a tal punto que en el piso yace un fragmento delreloj. Para destacar y no siendo un dato menor, en el reloj el número cuatro está representado de la siguiente manera IIII, cuando el número 4 en números romanos se escribe IV. Esto tiene una interesante explicación que argumenta y aumenta el sentimiento del paso del tiempo, ligada a la mitología romana y al Rey de Francia Luis XIV. La numeración romana proviene de la etrusca, y antes de que los romanos transformaran este sistema, el número cuatro se escribía como: IIII. Los etruscos o tirrenos fueron un pueblo de la Antigüedad cuyo núcleo geográfico fue la Toscana (Italia).Los primeros indicios de una cultura identificable como etrusca datan de alrededor del año 900 a.C. Incluso mucho después de quelos romanos habíandefinido su nuevo sistema de numeración , fueron varioslos que siguieron utilizando el IIII. Sucede que en latín IV corresponde a las dos primeras letras del Dios Júpiter (IVPITER), consideraban entonces los romanos que era impropio su utilización para referirse a un número. Un dato de color histórico cuenta que el rey de Francia Luis XIV, mandó a construir un reloj para el Palacio de la Citéen París,lugar de residencia de los reyes de Francia . Cundo el relojero termino su trabajo y lo presentó al rey, éste lo recriminó por su mal trabajo argumentando que el numero 4 estaba mal escrito, que en ves de colocar IIII, había puesto en la versión romana IV. El relojero intento explicar que no lo había escrito de esa manera por respeto al dios Júpiter y que estaba equivocado, el rey automáticamente le respondió… \”El Rey Nunca se equivoca\”, y le ordenó cambiarlo. Los rumores de que el rey mandó ejecutarlo, hicieron que la mayoría de los colegas relojeros adaptasen esta modalidad de escribir el numero 4 como IIII hicieron que la mayoría de los colegas relojeros adaptasen esta modalidad de escribir el numero 4 como IIII",
            formatoVisual: "item-v"
        },
        {
            titulo: "Abstracto",
            categoria: "aerografia",
            imagen: "imgs/abstracto.png",
            descripcion: "Esta es una obra que nace de la pura inspiración del artista donde dejandose llevar solo por la pasió y la intuición, logra conectarse con los pinceles cargados de la pulsión que lleva impresa la obra. También se utilizó una espatula pequeña que ayudo a dejar las marcas del trazo espontaneo del artista.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Mural Carlitos Balá", 
            categoria: "murales",
            imagen: "imgs/carlitos.png",
            descripcion: "Carlitos estaba delicado y habiendo sido parte de mi infancia, me sentia afectado por la noticia. La noche anterior a su partida, mi hijo menciono lo delicado de su salud. Lamentablemente, la mañana siguiente, el gran genio del humor sano se iba de gira eterna. Esa misma mañana decidí comenzar con este humilde mural del único y grande del humor infantil.",
            formatoVisual: "item-h" 
        },        
        {
            titulo: "Casa en miniatura",
            categoria: "artesanias",
            imagen: "imgs/casa_miniatura.png",
            descripcion: "Casita realizada en base a cartón y la técnica de cartapesta. Se utilizaron diversos materiales para su recubierta, entre ellos, piedritas de las que se colocan en las peceras.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Che Guevara",
            categoria: "aerografia",
            imagen: "imgs/che.png",
            descripcion: "Cuadro de grandes dimensiones realizado a pedido para una ocasión especial de un cumpleaños.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Campera customizada UTN",
            categoria: "custom",
            imagen: "imgs/einstein_utn.png",
            descripcion: "Campera customizada para alumno de la UTN haciendo referencia a uno de los físicos mas importantes y trascendentales de la historia, Don Albert Einstein.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Cuaderno customizado Ferrari F-40",
            categoria: "custom",
            imagen: "imgs/ferrari_f40.png",
            descripcion: "Cuaderno customizado a pedido para alumno de la facultad UTN fana de los fierros.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Bandera River Plate",
            categoria: "custom",
            imagen: "imgs/gallardo.png",
            descripcion: "Bandera en homenaje al mejor director técnico mas ganador de la historia de River Plate. ",
            formatoVisual: "item-h"
        },
        {
            titulo: "Grito Silencioso",
            categoria: "aerografia",
            imagen: "imgs/grito_silencioso.png",
            descripcion: "La naturaleza tiene un grito silencioso que no estamos escuchando y lamentablemente no disponemos de otra oportunidad. El calentamiento global la desidia humana nos está dejando un mundo al cual no le queda mucho futuro si seguimos de esta manera maltratando a todo ser vivo.",
            formatoVisual: ""
        },
        {
            titulo: "La Bruja del Hórreo",
            categoria: "custom",
            imagen: "imgs/la_bruja.png",
            descripcion: "Un hórreo es una construcción agrícola tradicional del norte de la península ibérica destinada a guardar y conservar alimentos, especialmente grano, alejados de la humedad y de los animales, para mantenerlos en un estado óptimo para su consumo. Se caracteriza por mantenerse levantado sobre pilares o pegollos, para evitar la entrada de humedad y de animales (especialmente ratones y otros roedores) desde el suelo y por permitir la ventilación a través de ranuras en las paredes perimétricas. Originalmente fueron diseñados como almacenes de grano, carne o productos agrícolas, aunque su empleo se extendió a otros usos como taller artesanal, almacén de aperos, curado de embutidos, carnes o quesos, colmenar o palomar e incluso vivienda. El espacio de debajo también se aprovecha como cuadra o para guardar carros. Con el tiempo han quedado abnadonados y deshabitados dando aspecto de lugar o habitación de aquellas brujas que no tienen donde ir. ",
            formatoVisual: "item-v"
        },
        {
            titulo: "Mural Malvinas Argentinas",
            categoria: "murales",
            imagen: "imgs/malvinas.png",
            descripcion: "Mural realizado en el frente de mi casa. No siempre nuestros heroes fueron reconocidos. Por mucho tiempo se los hizo a un lado dejándolos en el olvido. Como cualquier artista Argentino, siempre tenia la necesidad de pintar sobre malvinas, y como para todo siempre hay un momento justo, decidi hacer este humilde mural que representa la participación de nuetros hermanos, el sufrimiento, la valentía y el honor de nuestros soldados.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Mural Minions",
            categoria: "murales", 
            imagen: "imgs/minions_culo.png",
            descripcion: "Mural para promoción de toque humorístico. Con la intención de difundir mi trabajo. Animo a que se saquen una fotografía y etiqueten a Plasmarte Aerografía.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Mural Bob Esponja y Patricio Estrella",
            categoria: "murales",
            imagen: "imgs/mural_bob.png",
            descripcion: "Este mural nació con la intención de entretener a los niños que pasaran por el lugrar y se detuvierean a verlo y reirse. también tiene la finalidad de promocionar mi trabajo.",
        },
        {
            titulo: "Nosferatu",
            categoria: "custom",
            imagen: "imgs/nosferatu.png",
            descripcion: "Remera customizada a pedido para cliente fanático de las peliculas de la linea del terror. En este caso el famoso Nosferatu de 1922.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Origen",
            categoria: "aerografia",
            imagen: "imgs/origen.png",
            descripcion: "",
            formatoVisual: ""
        },
        {
            titulo: "Estatua Jesus",
            categoria: "artesanias",
            imagen: "imgs/estatua_jesus.png",
            descripcion: "",
            formatoVisual: "item-v"
        },
        {
            titulo: "Arrogancia",
            categoria: "aerografia",
            imagen: "imgs/arrogancia.png",
            descripcion: "Un atardecer diferente en el continente africano en algun lugar de Madagascar. Los colores rojizos permiten ver las siluetas de los árboles emblemáticos del lugar, los Baobabs.El Baobab, uno de los árboles más hermosos de África, simboliza la esperanza del pueblo, la victoria de la fuerza y la determinación contra la escasez y la injusticia. Su grueso tronco, su dura corteza y sus hojas y frutos son agua y alimento tanto para humanos como para animales. Bajo su sombra se aman los enamorados y se entierra a los muertos. En los huecos del Baobab,descansan los cuerpos de los “Griot”, (los narradores de historias de África). Y se dice que si una persona bebe agua en la que se han mojado semillas de baobab, quedará protegido del ataque de los cocodrilos. Pero si osa arrancarle una sola flor al baobab, morirá devorado por los leones. Hace miles de años, los dioses llenaron el mundo de vida, plantas y animales por todos lados. Desde su paraíso en el cielo veían una de sus más bellas creaciones, era el baobab. El baobab era un árbol muy grande y fuerte con flores preciosas en sus copas y por ser el árbol más bello, los dioses decidieron darle el don de la inmortalidad. Gracias a esto, los baobabs podían crecer muchísimo más que el resto de los árboles. Eran plantas fuertes, sus troncos eran enormes y era imposible derribarlos. El baobab era tan grande que con su copa empezó a apropiarse de la luz y dejaba al resto de las plantas y animales bajo su sombra sin poder gozar de la luz solar. Gracias a esto, el baobab crecía más y más fuerte mientras que las otras plantas apenas crecían con los resquicios de luz que pasaban entre las copas del baobab. Un día, el baobab, dándose cuenta de su fuerza y su majestuosidad, pensó que era digno de estar junto a los dioses, así que crecería y crecería hasta llegar a su paraíso. El baobab pensó que era un dios como los que lo habían creado. Pero esto fue un error, la arrogancia y el egoísmo del baobab hizo que los dioses se enfadaran. La furia de los dioses le consiguió un castigo al baobab para que aprendiera la lección. A la mañana siguiente el baobab se dio cuenta de que sus flores ya no estaban y que sus copas no eran preciosas como antes. Los dioses habían castigado al grandioso árbol haciendo que creciera al revés, con las raíces hacia el cielo y las flores bajo tierra. Este es el motivo por el cual el baobab tiene esa forma tan peculiar. Y es uno de los árboles más hermosos.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Ulterior",
            categoria: "aerografia y pincel",
            imagen: "imgs/ulterior.png",
            descripcion: "Cuenta la leyenda que en las islas Fiyi del océano Pacífico, un gran escualo blanco llamado Dakuwaqa era considerado como un Dios de las grandes aguas. Conocía como nadie la distribución de los bancos de coral que rodeaban la isla Taveuni, y de este modo se transformaba en guía de las embarcaciones para llevar a los tripulantes sanos y salvos hasta tierra firme en las playas. Este escualo de grandes dimensiones era arrogante y con un carácter totalmente malhumorado. Valiéndose de esto, molestaba a los nativos y animales del lugar y en oportunidades se los devoraba sin contemplación. Conociendo estas actitudes y cansada de lo que sucedía en la isla, una diosa con forma de un enorme pulpo decidió retarlo a una pelea con la intención de darle una lección de humildad. Para poder hacerle frente al inmenso tiburón, usó cuatro de sus extremidades de fuertes tentáculos para aferrarse a las piedras y corales. Las cuatro restantes les sirvieron para abrazarlo tan fuerte hasta inmovilizar al escualo arrogante y testarudo. La lucha entre ambos fue tan potente que a su alrededor olas gigantescas golpeaban furiosas en el océano llegando hasta las islas causando inundaciones.  Finalmente, la diosa con forma de pulpo se impuso ante Dakuwaqa, y este se termino rindiendo. Aprovechando la situación la diosa le hizo prometer al escualo que sería el protector de los habitantes de las islas y además debería mejorar su temperamento.  Desde entonces, Dakuwaqa es quien vela por la integridad de los buzos, pescadores y de las criaturas marinas que surcan las aguas de la isla. De todos modos, antes de internarse en altamar, los lugareños le hacen una ofrenda al gran Dakuwaqa con una planta tranquilizante llamada Kava que se usa en los rituales de los nativos para asegurar los buenos augurios de un buen viaje y sano retorno a tierra firme.",
            formatoVisual: "item-h"
        },
        {
            titulo: "Ferrari",
            categoria: "custom",
            imagen: "imgs/campera_ferrari.png",
            descripcion: "Campera customizada a pedido de un cliente que es fanático de los autos y mucho mas de las Ferraris. Trabajada con la Técnica de Aerografía y algo de pinceles.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Lealtad",
            categoria: "aerografia",
            imagen: "imgs/lealtad.png",
            descripcion: "La lealtad entre los elefantes es uno de los lazos sociales mas fuertes del reino animal. Estos animales  estructuran sus vidas en manadas matriarcales muy unidas, donde el cuidado mutuo, la protección y la empatía son findamentales para la supervivencia del grupo.",
            formatoVisual: "item-v"
        },
        {
            titulo: "Big Bang",
            categoria: "aerografia",
            imagen: "imgs/big-bang.png",
            descripcion: "Obra que muestra la mágica conexión entre el artista y el aerógrafo. El aerógrafo es una continuidad de la mano, es una simbiosis, es una asociación íntima y prolongada entre estos organismos de diferentes especies.",
            formatoVisual: "item-h"
        },
        /***************************************** OBRAS NUEVAS *************************************************************/
    ]
};