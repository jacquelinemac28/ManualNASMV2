import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Fundaments = () => {
  const codeSD = `section .data
    mensaje db "Hola, mundo!", 0   ; Define una cadena terminada en nulo
    longitud equ $ - mensaje       ; Calcula la longitud de la cadena`;

  const codeSB = `section .bss
    buffer resb 64    ; Reserva 64 bytes para un buffer
    numero resd 1     ; Reserva 4 bytes (un double word) para un número`;

  const codeST = `section .text
  global _start     ; Declara el punto de entrada
  _start:
  ; Código del programa aquí
  mov eax, 1        ; Syscall para salir
  xor ebx, ebx      ; Código de salida 0
  int 0x80          ; Llamada al sistema`;

  const codeES = `section .data
    mensaje db "Hola, mundo!", 10   ; Cadena con salto de línea
    longitud equ $ - mensaje        ; Longitud de la cadena

section .text
    global _start
_start:
    mov eax, 4         ; Syscall 'write'
    mov ebx, 1         ; Descriptor de archivo (1 = stdout)
    mov ecx, mensaje   ; Dirección del mensaje
    mov edx, longitud  ; Longitud del mensaje
    int 0x80           ; Llamada al sistema

    mov eax, 1         ; Syscall 'exit'
    xor ebx, ebx       ; Código de salida 0
    int 0x80           ; Llamada al sistema`;

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
        <div className='div-title'>Estructura de un programa en NASM</div>
        <p className='p-c'>Un programa escrito en NASM (Netwide Assembler) sigue una estructura organizada en diferentes secciones que definen datos, variables y código ejecutable.</p>
        <p className='p-c-subtitle'>Sección .data</p>
        <ul className='p-c'>
          <li className='p-c'>Se utiliza para declarar variables inicializadas (datos con valores predefinidos).</li>
          <li className='p-c'>Los datos aquí definidos se almacenan en la memoria y están disponibles desde el inicio del programa.</li>
        </ul>
        <div className='div-code'>
          <div className='div-code-title'>
            <p className='p-title-example'>nasm</p>
            <button onClick={() => copyToClipBoard(codeSD, 'codeSD')} className='button-copy-code-install'>
              {copiedStates['codeSD'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
              {copiedStates['codeSD'] ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
            padding: '20px',
            border: '10px'
          }}
          >
            {codeSD}
          </SyntaxHighlighter>
        </div>
        <p className='p-c-subtitle'>Sección .bss</p>
        <ul className='p-c'>
          <li className='p-c'>Se utiliza para declarar variables no inicializadas (reservar espacio en memoria).</li>
          <li className='p-c'>Los datos no tienen valores iniciales y se inicializan en cero por el sistema operativo.</li>
        </ul>
        <div className='div-code'>
          <div className='div-code-title'>
            <p className='p-title-example'>nasm</p>
            <button onClick={() => copyToClipBoard(codeSB, 'codeSB')} className='button-copy-code-install'>
            {copiedStates['codeSB'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeSB'] ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
            padding: '20px',
            border: '10px'
          }}
          >
            {codeSB}
          </SyntaxHighlighter>
        </div>
        <p className='p-c-subtitle'>Sección .text</p>
        <ul className='p-c'>
          <li className='p-c'>Contiene el código ejecutable del programa (instrucciones).</li>
          <li className='p-c'>Aquí se define el punto de entrada del programa (usualmente main o _start).</li>
        </ul>
        <div className='div-code'>
          <div className='div-code-title'>
            <p className='p-title-example'>nasm</p>
            <button onClick={() => copyToClipBoard(codeST, 'codeST')} className='button-copy-code-install'>
            {copiedStates['codeST'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeST'] ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
            padding: '20px',
            border: '10px'
          }}
          >
            {codeST}
          </SyntaxHighlighter>
        </div>
        <div className='div-caracteristicas'>
          <div className='div-title'>Directivas Comunes</div>
          <div className='div-info-carac'>
            <ul class="custom-list">
              <li><strong>section:</strong> Define el inicio de una sección (.data, .bss, .text). <br /><strong>Ejemplo:</strong> section .data</li>
              <li><strong>global:</strong> Declara un símbolo (como una función o etiqueta) como accesible desde fuera del archivo. <br /> <strong>Ejemplo:</strong> global _start (necesario para el punto de entrada en Linux).</li>
              <li><strong>extern:</strong> Indica que un símbolo (función o variable) está definido en otro archivo o biblioteca. <br /><strong>Ejemplo:</strong> extern printf (para usar funciones de la biblioteca C). </li>
            </ul>
          </div>
        </div>
        <div className='div-title'>Llamadas al Sistema y Uso de Syscalls</div>
        <p className='p-c'>En sistemas operativos como Linux, las llamadas al sistema (syscalls) permiten interactuar con el kernel para realizar operaciones como entrada/salida, salida del programa, etc. En NASM, las syscalls se invocan usando la instrucción int 0x80 (en sistemas de 32 bits) o syscall (en sistemas de 64 bits).</p>
        <p className='p-c-subtitle'>Componentes de una syscall:</p>
        <div className='div-info-carac'>
          <ul class="custom-list">
            <li><strong>Registro eax (32 bits) o rax (64 bits):</strong> Contiene el número de la syscall (por ejemplo, 1 para exit, 4 para write en 32 bits).</li>
            <li><strong>Registros de argumentos:</strong> Los parámetros se pasan en registros como ebx, ecx, edx (32 bits) o rdi, rsi, rdx (64 bits), dependiendo de la arquitectura.</li>
            <li><strong>Interrupción:</strong> int 0x80 (32 bits) o syscall (64 bits) ejecuta la llamada. </li>
          </ul>
        </div>
        <p className='p-c-subtitle'>Ejemplo de syscall para escribir en pantalla (32 bits):</p>
        <div className='div-code'>
          <div className='div-code-title'>
            <p className='p-title-example'>nasm</p>
            <button onClick={() => copyToClipBoard(codeES, 'codeES')} className='button-copy-code-install'>
            {copiedStates['codeES'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
            {copiedStates['codeES'] ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
            padding: '20px',
            border: '10px'
          }}
          >
            {codeES}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default Fundaments


