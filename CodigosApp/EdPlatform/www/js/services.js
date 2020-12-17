(function(){
    var app = angular.module('starter.services',[])



    app.factory('Labs', function(){
        var labs=[{
        id: 0,
        url: 'http://3.21.85.235:1880/ui/#!/0',
        name: 'Levitador neumático',
        h1: "CONTROL",
        h1p1:"El control es la acción de decidir el desarrollo de un proceso o sistema, de forma "+
        "que se puedan manipular algunas variables para conseguir que las mismas u otras variables actúen de"+
        " forma deseada. Esta acción de control se puede hacer incluso con perturbaciones externas. Los "+
        "sistemas que estudia el control están formados por señales de salida, o realimentación, los cuales"+
        " están en función de señales de entrada, o referencia. La realimentación puede ser negativa"+
        " o positiva.",
        h1p2:"En un sistema de control realimentado, se puede medir el resultado y compararlo con"+
        " el resultado deseado, para corregir el proceso y minimizar errores. La operación de control se"+
        " introduce en la entrada del sistema y depende a su vez del resultado de la salida. Los sistemas"+
        " de realimentación son sistemas de lazo cerrado. Para llevar a cabo estas operaciones, sólo se "+
        "necesita saber la relación entre la entrada y la salida, es decir, la forma en que actúa la "+
        "señal de salida frente a cualquier cambio de la señal de entrada.",
        h1p3:"El control forma parte importante de los procesos actuales en la industria. "+
        "Algunos ejemplos son el control de presión, temperatura, humedad, viscosidad y flujo en "+
        "las industrias de proceso. Su propósito es garantizar un desempeño óptimo de los sistemas, "+
        "mejorar la productividad, realizar operaciones repetitivas y rutinarias y mejorar la seguridad.",
        h2:"CONTROL PID",
        h2p1:"Un PID es un elemento de control sencillo que está compuesto por tres partes, Proporcional, "+
        "Integral, y Derivativo. Este tipo de control corrige muy bien los errores en las señales y es muy "+
        "estable. Los primeros modelos estaban compuestos por la acción proporcional. Luego se añadió la "+
        "acción integral y, por último, la derivativa para mejorar la estabilidad.",
        h2p2:"El primer método para realizar un controlador PID, era un sistema con una señal proporcional "+
        "a la realimentación del sistema, para corregir del error. Este modelo no solo tenía en cuenta "+
        "la última posición, sino las anteriores.",
        h2p3:"Descripción matemática de cada parte:",
        h2p4:"Proporcional (P): multiplica señal de error por un factor de ganancia KP de manera "+
        "proporcional. El objetivo es eliminar el error se haga nula. Con el solo control proporcional "+
        "se puede reducir el error, pero puede llegar a se inestable el sistema, por lo que el valor de "+
        "KP debe estar acotado.",
        h2p5:"Integral (I): Integra la diferencia entre la señal y el error. Y luego se multiplica por "+
        "una ganancia KI. Es proporcional al error acumulado y realiza un control lento, pero es preciso.",
        h2p6:"Derivativo (D): Se ajusta al cambio en el error y marca la velocidad con la que se produce "+
        "el control. Aumentar la estabilidad y se multiplica por la ganancia correspondiente KD.",
        h2p7:"PID: Es la unión de los tres elementos con sus ganancias y tiempos. Conserva los puntos "+
        "fuertes de cada uno y se mejoran las acciones entre ellas. Es sensible a los errores, estable "+
        "y de régimen permanente nulo.",
        h3:"CONTROL PID LEVITADOR NEUMÁTICO",
        h3p1:"Un levitador neumático es capaz de hacer que un objeto se eleve utilizando una corriente "+
        "de aire ascendente. Este levitador consta de un cilindro vertical por el que la carga se va a "+
        "desplazar, un ventilador en la base que proporcionará la corriente de aire neesaria para elevar "+
        "la carga y finalmente un sensor de proximidad (Ver la figura de abajo). Este laboratorio se "+
        "montará a modo de una simulación ante la dificultad de adquisición de materiales por la "+
        "situación de pandemia. Inicialmente se debe modelar el comportamiento del sistema neumático, "+
        "para el cual utilizaremos el modelo de García Jaimes, et. al. [1]",
        img1:'img/levitador.png',
        img1Param:'Content',
        h3p2:"Para realizar el módelo, se comienza con las ecuaciones de las fuerzas, aplicando la segunda "+
        "ley de Newton:",
        h3p3:"mb*y''=m*vb'",
        h3p4:"m*vb'=−Fg+FD",
        h3p5:"Fg es el peso de la esfera y FD es la fuerza de arrastre. Dichas fuerzas están dadas por:",
        h3p6:"Fg=mg",
        h3p7:"FD=0*5*CD*ρa*A(va−vb)^2",
        img2:"img/Levitador_neumatico.png",
        h3p8:"En donde, m es la masa de la esfera, CD es el coeficiente de arrastre, ρa es la densidad "+
        "del aire, A es el área frontal de la esfera, va la velocidad del aire en el tubo y vb la "+
        "velocidad de la esfera.",
        h3p9:"Igualando las anteriores 3 ecuaciones y tomando en cuanta el area de la esfera, resulta:",
        h3p10:"m*vb'=(3/8*CD*ρa*A(va−vb)/(ρb*R))-g",
        h3p11:"El cambio de velocidad del aire en el tubo, con la relación que contiene la frecuencia "+
        "f del voltaje y la altura Y, se puede modelar mediante la ecuación:",
        h3p12:"va'=(g(f,y)−va)/τa",
        h3p13:"Los sensores y actuadores tiene su propio modelameinto quen se introduce en las "+
        "ecuaciones. En este caso el actuador es el ventilador, el cual produce una corriente de "+
        "aire con una velocidad determinada por la siguiente ecuación:",
        h3p14:"v=g(f,y)=(C*vi*(A0)^0,5)/yb",
        h3p15:"En donde v es igual a la velocidad del aire en un punto dado, yb es la altura de la esfera y vi es la velocidad de salida del aire, A0 es el área libre del ventilador, C es una constante que se obtiene de tablas. Para este caso CC=5 y AA0=0.01538 m2.",
        h3p16:"La relación entre f,va e yb se obtiene experimentalmente y a partir de ella se evalúa g(f,y).",
        h3p17:"A partir de allí, se obtiene la relación entre el voltaje de control V, la frecuencia de la alimentación aplicada a la turbina f en Hz y la velocidad de salida del aire en la boca del tubo vi así:",
        h3p18:"f=11.874V−0.242 [Hz]",
        h3p19:"vi=3.029V+0.097",
        h3p20:"De las curvas de respuesta dadas para el sensor de distancia se obtiene la ecuación que relaciona el voltaje de salida del sensor con la distancia de la esfera:",
        h3p21:"yb=41,4/(Vs-0,764)",
        h3p22:"En donde Vs es la salida del sensor en voltios y yb la distancia de la esfera al sensor en cm.",
        h3p23:"De esta forma, combinando las últimas 3 ecuacones se obtiene la relación g(f,y):",
        h3p24:"g(f,y)=1.498(3.029V+0.097)(Vs−0.764)",
        h3p25:"Ya obteniendo valores reales, se pueden usar las ecuaciones para obtener un modelo en variables de estado, del cual se obtiene la función de transferencia que se expresa a continuación.",
        img3:"img/ec19.png"
      },
      {
        id: 1,
        url: 'http://3.21.85.235:1880/ui/#!/1',
        name: 'Planta de temperatura',
        h1: "CONTROL",
        h1p1:"El control es la acción de decidir el desarrollo de un proceso o sistema, de forma "+
        "que se puedan manipular algunas variables para conseguir que las mismas u otras variables actúen de"+
        " forma deseada. Esta acción de control se puede hacer incluso con perturbaciones externas. Los "+
        "sistemas que estudia el control están formados por señales de salida, o realimentación, los cuales"+
        " están en función de señales de entrada, o referencia. La realimentación puede ser negativa"+
        " o positiva.",
        h1p2:"En un sistema de control realimentado, se puede medir el resultado y compararlo con"+
        " el resultado deseado, para corregir el proceso y minimizar errores. La operación de control se"+
        " introduce en la entrada del sistema y depende a su vez del resultado de la salida. Los sistemas"+
        " de realimentación son sistemas de lazo cerrado. Para llevar a cabo estas operaciones, sólo se "+
        "necesita saber la relación entre la entrada y la salida, es decir, la forma en que actúa la "+
        "señal de salida frente a cualquier cambio de la señal de entrada.",
        h1p3:"El control forma parte importante de los procesos actuales en la industria. "+
        "Algunos ejemplos son el control de presión, temperatura, humedad, viscosidad y flujo en "+
        "las industrias de proceso. Su propósito es garantizar un desempeño óptimo de los sistemas, "+
        "mejorar la productividad, realizar operaciones repetitivas y rutinarias y mejorar la seguridad.",
        h2:"CONTROL PID",
        h2p1:"Un PID es un elemento de control sencillo que está compuesto por tres partes, Proporcional, "+
        "Integral, y Derivativo. Este tipo de control corrige muy bien los errores en las señales y es muy "+
        "estable. Los primeros modelos estaban compuestos por la acción proporcional. Luego se añadió la "+
        "acción integral y, por último, la derivativa para mejorar la estabilidad.",
        h2p2:"El primer método para realizar un controlador PID, era un sistema con una señal proporcional "+
        "a la realimentación del sistema, para corregir del error. Este modelo no solo tenía en cuenta "+
        "la última posición, sino las anteriores.",
        h2p3:"Descripción matemática de cada parte:",
        h2p4:"Proporcional (P): multiplica señal de error por un factor de ganancia KP de manera "+
        "proporcional. El objetivo es eliminar el error se haga nula. Con el solo control proporcional "+
        "se puede reducir el error, pero puede llegar a se inestable el sistema, por lo que el valor de "+
        "KP debe estar acotado.",
        h2p5:"Integral (I): Integra la diferencia entre la señal y el error. Y luego se multiplica por "+
        "una ganancia KI. Es proporcional al error acumulado y realiza un control lento, pero es preciso.",
        h2p6:"Derivativo (D): Se ajusta al cambio en el error y marca la velocidad con la que se produce "+
        "el control. Aumentar la estabilidad y se multiplica por la ganancia correspondiente KD.",
        h2p7:"PID: Es la unión de los tres elementos con sus ganancias y tiempos. Conserva los puntos "+
        "fuertes de cada uno y se mejoran las acciones entre ellas. Es sensible a los errores, estable "+
        "y de régimen permanente nulo.",
        h3:"PLANTA DE TEMPERATURA",
        h3p1:"La planta de temperatura propuesta consta de un montaje sencillo, que implica establecer un "+
        "valor de temperatura de referencia, sensar la temperatura de un transistor 2N222, calcular la "+
        "diferencia de temperatura actual con respecto al valor de referencia, ajustar un PWM que "+
        "alimenta al transistor, variar la corriente de base del transistor y cambiar finalmente la "+
        "temperatura, repitiendo el proceso hasta que se llegue a la temperatura de referencia. Lo anterior "+
        "se logra con el siguiente diseño electrónico:",
        img1Param:'Content',
        img1: 'img/Tsys.png',
        h3p2:"Adicional a lo anterior, se debe revisar el código diseñado para el control de la planta y "+
        "adecuarlo a los conocimientos previos. Se invita al lector a revisar el git adjunto a este wiki "+
        "que contiene los códigos de esp32 para estas plantas controladas.",
        h3p3:"[1] Bermeo C. L. 2020. \"Planta de Temperatura\". Material de clase Control. Universidad "+
        "Nacional de Colombia."
      },
      {
        id: 2,
        url: 'http://3.21.85.235:1880/ui/#!/2',
        name: 'Control de un motor mediante PWM',
        h1: "MOTOR DC",
        h1p1:"Un motor DC es un actuador que convierte la energía eléctrica en energía mecánica. "+
        "El motor DC se compone de dos partes:",
        h1p2:"Estator: Es la parte mecánica del motor donde están los polos del imán.",
        h1p3:"Rotor: El rotor es la parte móvil del motor con devanado y un núcleo al que llega la "+
        "corriente a través de las escobillas.",
        h1p4:"Cuando la corriente eléctrica circula por el devanado del rotor, se crea un campo "+
        "magnético que interactúa con el campo magnético del imán del estator. Esto genera un "+
        "rechazo entre los polos del imán del estator y del rotor creando un par de fuerza donde "+
        "el rotor gira en un sentido de forma permanente.",
        h2:"L293D",
        h2p1:"Este es un dispositivo integrado o controlador que usa el sistema de puente H para regular "+
        "el movimiento de un motor DC. El integrado L293D incluye cuatro circuitos para manejar cargas de "+
        "potencia media, en especial pequeños motores y cargas inductivas, con la capacidad de controlar "+
        "corriente hasta 600 mA en cada circuito y una tensión entre 4,5 V a 36 V.",
        h2p2:"Los circuitos individuales se pueden usar de manera independiente para controlar cargas de "+
        "todo tipo y, en el caso de ser motores, manejar un único sentido de giro. Pero además, "+
        "cualquiera de estos cuatro circuitos sirve para configurar la mitad de un puente H.",
        h2p3:"El integrado permite formar, entonces, dos puentes H completos, con los que se puede "+
        "realizar el manejo de dos motores. En este caso el manejo será bidireccional, con frenado "+
        "rápido y con posibilidad de implementar fácilmente el control de velocidad.",
        h3:"PWM",
        h3p1:"La modulación por ancho de pulsos (PWM, pulse-width modulation) de una señal o fuente "+
        "de energía es una técnica en la que se modifica el de una señal peciclo de trabajo riódica "+
        "(una senoidal o una cuadrada, por ejemplo), ya sea para transmitir información a través de "+
        "un canal de comunicaciones o para controlar la cantidad de energía que se envía a una carga. "+
        "La principal desventaja que presentan los circuitos PWM es la posibilidad de que haya "+
        "interferencias generadas por radiofrecuencia. Estas pueden minimizarse ubicando el controlador "+
        "cerca de la carga y realizando un filtrado de la fuente de alimentación.",
        img1Param:"Content",
        img1: 'img/PWM.png',
        h3p2:"En la actualidad existen muchos circuitos integrados en los que se implementa la modulación "+
        "PWM, además de otros muy particulares para lograr circuitos funcionales que puedan controlar "+
        "fuentes conmutadas, controles de motores, controles de elementos termoeléctricos, choppers para "+
        "sensores en ambientes ruidosos y algunas otras aplicaciones. Se distinguen por fabricar este tipo "+
        "de integrados compañías como Texas Instruments, National Semiconductor, Maxim, y algunas otras más."
      }];
      return {
        all: function(){
            return labs;
        },
        get: function(labId) {
          for (var i = 0; i < labs.length; i++) {
            if (labs[i].id === parseInt(labId)) {
              return labs[i];
            }
          }
          return null;
        }
      };
    });
    app.factory('NoteStore', function(){
        var notes = angular.fromJson(window.localStorage['notes'] || '{}');
        function persist(){
            window.localStorage['notes'] = angular.toJson(notes);
        };
        return{
            signInVerify:function(note, userList){
                var check=0;
                if (userList.length >0){
                    for (var i=0; i < userList.length; i++){
                        if (note.id===userList[i].username && note.pass===userList[i].password){
                            check=1;
                            return check;
                        }
                    }
                } else{
                    return 0;
                }
            },
            registerVerify:function(note, userList, passVal, userVal){
                var check=0;
                if (note.id==="" || note.pass==="" || passVal===0 || userVal===0){
                    return 2;
                } else{
                    if (userList.length >0){
                        for (var i=0; i < userList.length; i++){
                            if (note.id===userList[i].username){
                                check=1;
                            }
                        }
                        if (check===0){
                            return 1;
                        } else {
                            return 0;
                        }
                    } else if (userList.length===0){
                        return 1;
                    } else {
                        return 0;
                    }
                }
            },
            stringValid: function(text, securityLvl){
                var str = text;
                if (securityLvl==='low'){
                    if (str.match(/[a-z]/g) && str.length >= 5){
                        return 1;
                    } else{
                        return 0;
                    }
                } else if (securityLvl==='high'){
                    if (str.match(/[a-z]/g) && str.match(
                            /[A-Z]/g) && str.match(
                            /[0-9]/g) && str.length >= 8){
                        return 1;
                    } else{
                        return 0;
                    }
                }
            }
        };
    });
    app.factory('Toggle', function(){
        return{
            togglePass: function(elementId){
              var x = document.getElementById(elementId);
              if (x.type === "password") {
                x.type = "text";
              } else {
                x.type = "password";
              }
            }
        };
    });
    app.factory('ChangeHTML', function(){
        return{
            innerContent:function(elementId, newText){
                document.getElementById(elementId).innerHTML=newText;
            }
        };
    });

}());
