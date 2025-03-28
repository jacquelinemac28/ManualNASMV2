import { useState } from 'react'
import '../Styles/Manual.css'
import logo from '../Assets/logo.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Manual = () => {
  const code = 'sudo apt update && sudo apt install nasm'; 
  const codeIMAC = 'brew install nasm';
  const codeEjemplo1 = `section .data
    mensaje db "Hola, mundo!", 0xA  ;msg db "Hola, mundo!", 10  ; Mensaje con salto de línea
    len equ $ - mensaje             ; Longitud del mensaje, $ representa la posición actual en la memoria. 

section .text
    global _start            

_start:
    ; Llamada al sistema write (syscall número 1 en Linux)
    mov eax, 4       ; syscall número 4 -> sys_write (Carga el número de syscall 4 (sys_write))
    mov ebx, 1       ; File descriptor 1 -> stdout (Elige la salida estándar (stdout), que tiene el descriptor de archivo 1.)
    mov ecx, mensaje ; Dirección del mensaje ( Carga la dirección del mensaje en ecx.)
    mov edx, len     ; Longitud del mensaje ( Carga la longitud del mensaje en edx.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)

    ; Llamada al sistema exit (syscall número 1 en Linux)
    mov eax, 1       ; syscall número 1 -> sys_exit ( Carga el número de syscall 1 (sys_exit).)
    xor ebx, ebx     ; Código de salida 0 (Coloca 0 en ebx, indicando que el programa terminó sin errores.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)
 `;

 const [copiedStates, setCopiedStates] = useState({});
  const copyToClipBoard = (code, codeId) => {
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [codeId]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [codeId]: false }));
    }, 1500);
  };



  return (
    <div className='div-body'>
      <div className='div-principal'>
        <div className='div-info'>
          <img src={logo} alt='NASM' width="300px" height="300px" />
          <div className='div-que-es'>
            <div className='div-title'>
              ¿Qué es NASM?
            </div>
            <p className='p'>
              NASM (Netwide Assembler) es un ensamblador de código abierto para la arquitectura x86 y x86-64.
              Es ampliamente utilizado para escribir programas en lenguaje ensamblador, permitiendo la conversión
              de código fuente en archivos binarios ejecutables o enlazables.
            </p>
          </div>
        </div>
        <div className='div-caracteristicas'>
          <div className='div-title'>Características principales</div>
          <div className='div-info-carac'>
            <ul class="custom-list">
              <li><strong>Soporte multiplataforma:</strong> NASM puede generar código para diversos formatos de salida, como ELF, COFF, Mach-O, Win32, Win64 y binarios planos, lo que lo hace útil tanto para desarrollo en Linux, Windows y macOS.</li>
              <li><strong>Compatibilidad:</strong> Permite escribir código ensamblador optimizado para procesadores de 16, 32 y 64 bits.</li>
              <li><strong>Código abierto:</strong> Disponible bajo la licencia BSD, lo que permite su uso en proyectos comerciales y educativos.</li>
              <li><strong>Amplia documentación:</strong> Posee manuales y guías detalladas para facilitar su aprendizaje.</li>
              <li><strong>Compatibilidad con macros:</strong> NASM permite la definición de macros, lo que facilita la reutilización de código y la optimización de tareas repetitivas.</li>
            </ul>
          </div>
        </div>
        <div className='div-descarga'>
          <div className='div-title'>Descarga e instalación de NASM</div>
          <p className='p-c'>NASM está disponible en la mayoría de los sistemas operativos. Puedes instalarlo con los siguientes comandos:</p><br />
          <p className='p-c-subtitle'>Instalar NASM en Debian/Ubuntu:</p>
          <p className='p-c'>1. Abre una ventana de Terminal</p>
          <p className='p-c'>2. Ejecuta el siguiente comando y espera a que termine de procesarse:</p>
          <div className='div-code-install'>
            <button onClick={() => copyToClipBoard(code, 'code')}  className='button-copy-code-install'>
            {copiedStates['code'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['code'] ? 'Copiado' : 'Copiar'}
                    </button>
           <pre>
            <code>{code}</code>
            </pre>
          </div>
          <p className='p-c-subtitle'>Instalar NASM en Mac:</p>
          <p className='p-c'>1. Abre una ventana de Terminal</p>
          <p className='p-c'>2. Ejecuta el siguiente comando y espera a que termine de procesarse:</p>
          <div className='div-code-install'>
          <button onClick={() => copyToClipBoard(codeIMAC, 'codeIMAC')}  className='button-copy-code-install'>
          {copiedStates['codeIMAC'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
          {copiedStates['codeIMAC'] ? 'Copiado' : 'Copiar'}
                  </button>
                  <pre>
            <code>{codeIMAC}</code>
            </pre>
          </div>
          <p className='p-c-subtitle'>Instalar NASM en Windows:</p>
          <p className='p-c'>Descarga el instalador desde <a className='a-windows' href="https://www.nasm.us/" target="_blank" rel="noopener noreferrer" >nasm.us</a> y sigue las instrucciones de instalación.</p>
        </div>
        <div className='div-ejemplo'>
          <div className='div-title'>Ejemplo de código en NASM</div>
          <p className='p-c'>Este código imprime "¡Hola, mundo!" en la terminal de un sistema Linux de 32 bits.</p>
          <div className='div-code'>       
            <div className='div-code-title'>
              <p className='p-title-example'>Ejemplo Hola Mundo</p>
              <button onClick={() => copyToClipBoard(codeEjemplo1, 'codeEjemplo1')} className='button-copy-code-install'>
              {copiedStates['codeEjemplo1'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
              {copiedStates['codeEjemplo1'] ? 'Copiado' : 'Copiar'}
                  </button>
            </div>   
            <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
              padding: '20px',
              border: '10px'
            }}
            >
              {codeEjemplo1}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manual