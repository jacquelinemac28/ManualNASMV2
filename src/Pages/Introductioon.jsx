import React from 'react'
import '../Styles/Introducion.css'
import img1 from '../Assets/calcular.png'
import img2 from '../Assets/base-de-datos.png'
import img3 from '../Assets/ciclo-de-vida-del-producto.png'
import img4 from '../Assets/matematicas.png'
import img5 from '../Assets/codigo.png'
import img6 from '../Assets/ds.png'
import img7 from '../Assets/ss.png'
import img8 from '../Assets/es.png'
import img9 from '../Assets/fs.png'


const Introductioon = () => {
  return (
    <div className='div-body'>
      <div className='div-principal'>
        <div className='div-title'>¿Qué es ensamblador?</div>
        <p className='p-c'>
          El lenguaje ensamblador (Assembly o ASM) es un lenguaje de programación de bajo nivel que permite escribir instrucciones específicas para un procesador. Se encuentra más cerca del hardware que los lenguajes de alto nivel como Python o C, ya que trabaja directamente con las instrucciones que la CPU puede ejecutar.
        </p>
        <p className='p-c'>
          A diferencia de los lenguajes de alto nivel, que son independientes del hardware, el código ensamblador está diseñado específicamente para una arquitectura de procesador en particular, como x86, x86-64, ARM, MIPS, entre otras.
        </p>
        <div className='div-caracteristicas'>
          <div className='div-title'>Características del Lenguaje Ensamblador</div>
          <div className='div-info-carac'>
            <ul class="custom-list">
              <li><strong>Bajo nivel de abstracción:</strong> Se basa en la estructura y funcionamiento del procesador, por lo que cada instrucción en ensamblador equivale directamente a una instrucción de la CPU, permitiendo un control directo sobre el hardware.</li>
              <li><strong>Dependencia del hardware:</strong> Cada conjunto de instrucciones está diseñado para un tipo específico de procesador, como x86 o ARM.</li>
              <li><strong>Uso de mnemónicos:</strong> En lugar de trabajar con código de máquina en binario o hexadecimal, se utilizan instrucciones en forma de abreviaturas legibles.</li>
              <li><strong>Acceso a registros y memoria:</strong> Permite manipular registros internos de la CPU y direcciones de memoria de manera eficiente.</li>
              <li><strong>Eficiencia en velocidad y tamaño:</strong> Los programas escritos en ensamblador pueden ser más rápidos y ligeros que aquellos compilados desde lenguajes de alto nivel.</li>
            </ul>
          </div>
        </div>
        <div className='div-title'>¿Cómo funciona un lenguaje ensamblador?</div>
        <p className='p-c'>
          El lenguaje ensamblador es un lenguaje de programación de bajo nivel, y se traduce a código máquina mediante un programa ensamblador. Cada instrucción en ensamblador corresponde a una operación específica en el procesador, representando de forma simbólica las instrucciones binarias del código máquina.
        </p>
        <p className='p-c'>
          El ensamblador gestiona la organización de la memoria y las referencias a estas y genera un archivo objeto con el código máquina equivalente tras procesar el código fuente.
        </p>
        <div className='div-title'>¿Por qué aprender ensamblador</div>
        <p className='p-c'>
          Son muchas las razones que un programador debe considerar para aprender ensamblador, cabe resaltar:
        </p>
        <ul className='p-c'>
          <li className='p-c'>Permite comprender cómo trabaja el procesador de nuestra computadora al realizar tareas básicas como lectura/escritura de archivos, acceder a dispositivos, almacenar datos en memoria, etc. lo que se traduce en la posibilidad de optimizar código de otros lenguajes de alto nivel al comprender cómo estos trabajan internamente.</li>
          <li className='p-c'>El tiempo de ejecución es menor que otros lenguajes de programación.</li>
          <li className='p-c'>Permite controlar la forma en que se trabaja con hardware para algunos trabajos específicos como sistemas embebidos.</li>
          <li className='p-c'>Aunque no vayas a programar sistemas completos en ensamblador, algunas tareas críticas pueden ser programadas en él para permitir el control total sobre ellas.</li>
        </ul>
        <p></p>
        <div className='div-title'>Arquitectura x86</div>
        <p className='p-c'>
          La arquitectura x86 es un conjunto de instrucciones y diseño de hardware desarrollado originalmente por Intel con el procesador 8086 en 1978. Se convirtió en la base de los procesadores de 32 bits utilizados en computadoras personales y servidores durante décadas.
        </p>
        <div className='div-caracteristicas'>
          <div className='div-title'>Características de la Arquitectura x86</div>
          <div className='div-info-carac'>
            <ul class="custom-list">
              <li><strong>Registros de 32 bits:</strong> Utiliza registros con el prefijo "E" (EAX, EBX, etc.)</li>
              <li><strong>Segmentación de memoria:</strong> Divide la memoria en segmentos de código, datos y pila.</li>
              <li><strong>Compatibilidad con versiones anteriores:</strong> Puede ejecutar código de 16 bits.</li>
            </ul>
          </div>
        </div>
        <div className='div-title'>Registros en x86</div>
        <p className='p-c'>
          Los registros son pequeñas áreas de almacenamiento de datos dentro del procesador que permiten realizar operaciones rápidamente. Se dividen en varias categorías:
        </p>
        <p className='p-c-subtitle'>Registros de Propósito General (GPR)</p>
        <p className='p-c'>Estos registros son utilizados para almacenamiento temporal de datos y cálculos.</p>
        <div className='div-registros'>
          <div className='div-registro'>
            <img src={img1} alt='EAX' className="img-registros" />
            <p className='p-title-registro'>EAX</p>
            <p className='p-use-registo'>	Acumulador (operaciones aritméticas)</p>
          </div>
          <div className='div-registro'>
            <img src={img2} alt='EBX' className="img-registros" />
            <p className='p-title-registro'>EBX</p>
            <p className='p-use-registo'>Base (almacenamiento de datos)</p>
          </div>
          <div className='div-registro'>
            <img src={img3} alt='EAX' className="img-registros" />
            <p className='p-title-registro'>ECX</p>
            <p className='p-use-registo'>Contador (bucles y repeticiones)</p>
          </div>
          <div className='div-registro'>
            <img src={img4} alt='EDX' className="img-registros" />
            <p className='p-title-registro'>EDX</p>
            <p className='p-use-registo'>Datos (operaciones de multiplicación/división)</p>
          </div>
        </div>
        <p className='p-c-subtitle'>Registros de Segmento</p>
        <p className='p-c'>Son registros especiales utilizados en arquitecturas como x86 para direccionar diferentes segmentos de memoria. En los procesadores de 16 y 32 bits, se utilizan en el modelo de segmentación de memoria para dividir la memoria en partes lógicas.</p>
        <p className='p-c'>Estos registros contienen direcciones de segmento y se combinan con otros registros para acceder a la memoria:</p>
        <div className='div-registros-rs'>
          <div className='div-registro-rs'>
            <img src={img5} alt='CS' className="img-registros" />
            <p className='p-title-registro'>CS (Code Segment)</p>
            <p className='p-use-registo'>Contiene la dirección base del segmento de código, donde se almacenan las instrucciones del programa.</p>
          </div>
          <div className='div-registro-rs'>
            <img src={img6} alt='DS' className="img-registros" />
            <p className='p-title-registro'>DS (Data Segment)</p>
            <p className='p-use-registo'>Contiene la dirección base del segmento de datos, se usa para acceder a variables y estructuras en la memoria.</p>
          </div>
          <div className='div-registro-rs'>
            <img src={img7} alt='SS' className="img-registros" />
            <p className='p-title-registro'>SS (Stack Segment)</p>
            <p className='p-use-registo'>Apunta al segmento donde está la pila del programa. Se usa junto con ESP (Stack Pointer) y EBP (Base Pointer) para manejar llamadas a funciones y variables locales.</p>
          </div>
          <div className='div-registro-rs'>
            <img src={img8} alt='ES' className="img-registros" />
            <p className='p-title-registro'>ES (Extra Segment)</p>
            <p className='p-use-registo'>Se usa como un segmento de datos adicional para operaciones específicas, como cadenas de caracteres y copias de memoria.</p>
          </div>
          <div className='div-registro-rs'>
            <img src={img9} alt='FS' className="img-registros" />
            <p className='p-title-registro'>FS y GS (Segmentos Adicionales)</p>
            <p className='p-use-registo'>Introducidos en procesadores más modernos, se utilizan para optimizar el acceso a estructuras de datos del sistema operativo o programas multi-hilo.</p>
          </div>
        </div>
        <div className='div-title'>Modos de Direccionamiento en Ensamblador x86</div>
        <p className='p-c'>Los modos de direccionamiento en ensamblador definen cómo una instrucción accede a los datos en memoria o registros. Dependiendo de la arquitectura del procesador, existen diferentes formas de especificar la dirección del operando.</p>
        <p className='p-c-subtitle'> Direccionamiento Inmediato</p>
        <ul className='p-c'>
          <li className='p-c'>El operando es un valor constante dentro de la instrucción.</li>
          <li className='p-c'>No accede a memoria, solo usa registros internos.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mov eax, 10   ; Carga el valor 10 en el registro EAX</p>
        </div>
        <p className='p-c-subtitle'> Direccionamiento por Registro</p>
        <ul className='p-c'>
          <li className='p-c'>El operando es un registro del procesador.</li>
          <li className='p-c'>Es rápido porque no accede a memoria.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mov ebx, eax  ; Copia el valor de EAX en EBX</p>
        </div>
        <p className='p-c-subtitle'>Direccionamiento Directo (Absoluto)</p>
        <ul className='p-c'>
          <li className='p-c'>Se especifica directamente la dirección de memoria donde está el dato.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mov eax, [1234h]  ; Carga en EAX el valor almacenado en la dirección 0x1234</p>
        </div>
        <p className='p-c-subtitle'>Direccionamiento Indirecto por Registro</p>
        <ul className='p-c'>
          <li className='p-c'>Usa un registro que contiene una dirección de memoria.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mov eax, [ebx]  ; Carga en EAX el valor almacenado en la dirección contenida en EBX</p>
        </div>
        <p className='p-c-subtitle'>Direccionamiento Indexado</p>
        <ul className='p-c'>
          <li className='p-c'>Usa un registro base más un desplazamiento para acceder a una posición en memoria. Común en el acceso a arreglos.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mov eax, [esi + 4]  ; Obtiene el dato en la dirección contenida en ESI más 4 bytes</p>
        </div>
        <p className='p-c-subtitle'>Direccionamiento Relativo</p>
        <ul className='p-c'>
          <li className='p-c'>Se usa en instrucciones de salto.</li>
          <li className='p-c'>La dirección del operando es relativa a la posición actual de ejecución.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>jmp etiqueta   ; Salta a la dirección indicada por "etiqueta"</p>
        </div>
        <p className='p-c-subtitle'>Direccionamiento Implícito</p>
        <ul className='p-c'>
          <li className='p-c'>El operando está definido por la instrucción misma.</li>
          <li className='p-c'>No se necesita especificar operandos explícitos.</li>
        </ul>
        <div className='div-ejemplo-md'>
          <p className='p-c'>mul ebx  ; Multiplica el valor en EAX por EBX (EAX es implícito)</p>
        </div>
        <div className='div-title'>Instrucciones Básicas</div>
        <p className='p-c'>Las instrucciones en ensamblador permiten manipular datos, realizar operaciones aritméticas y controlar el flujo del programa.</p>
        <p className='p-c-subtitle'>Instrucciones de Transferencia de Datos</p>
        <p className='p-c'><strong>MOV</strong> – Copia datos de un lugar a otro.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>MOV EAX, EBX  ; Copia el contenido de EBX en EAX
          </p>
        </div>
        <p className='p-c'><strong>PUSH / POP</strong> – Manipula la pila.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>PUSH EAX  ; Guarda EAX en la pila</p>
          <p className='p-c'>POP EBX   ; Extrae un valor de la pila a EBX</p>
        </div>
        <p className='p-c-subtitle'>Instrucciones Aritméticas y Lógicas</p>
        <p className='p-c'><strong>ADD / SUB</strong> – Suma y resta valores.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>ADD EAX, 5  ; Suma 5 a EAX</p>
          <p className='p-c'>SUB EBX, 3  ; Resta 3 de EBX</p>
        </div>
        <p className='p-c'><strong>INC / DEC</strong> – Incrementa o decrementa en 1.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>INC ECX  ; ECX = ECX + 1</p>
          <p className='p-c'>DEC EDX  ; EDX = EDX - 1</p>
        </div>
        <p className='p-c'><strong>CMP</strong> – Compara dos valores.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>CMP EAX, EBX  ; Compara EAX con EBX</p>
        </div>
        <p className='p-c-subtitle'>Instrucciones de Control de Flujo</p>
        <p className='p-c'><strong>JMP</strong> – Salto incondicional.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>JMP etiqueta  ; Salta a la dirección especificada</p>
        </div>
        <p className='p-c'><strong>JE / JNE</strong> –  Saltos condicionales según CMP.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>CMP EAX, 10</p>
          <p className='p-c'>JE es_igual  ; Salta si EAX es 10</p>
        </div>
        <p className='p-c-subtitle'>Instrucciones de Llamadas y Retorno</p>
        <p className='p-c'><strong>CALL</strong> – Llama a una subrutina.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>CALL mi_funcion</p>
        </div>
        <p className='p-c'><strong>RET</strong> –   Retorna de una función.</p>
        <div className='div-ejemplo-md'>
          <p className='p-c'>RET</p>
        </div>
      </div>
    </div>
  )
}

export default Introductioon

