import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Ejemplo4 = () => { 

    const codeE4= `section .data
    hello db "Hello", 10  ; "Hello" seguido de un salto de línea
    hello_len equ $ - hello
    N equ 10  ; Número de repeticiones

section .text
    global _start

_start:
    mov ecx, N      ; Usamos ECX como contador

.loop:
    push ecx        ; Guardamos el valor del contador
    mov edx, hello_len  ; Longitud del mensaje
    mov ecx, hello  ; Dirección del mensaje
    mov ebx, 1      ; Descriptor de archivo (stdout)
    mov eax, 4      ; syscall: sys_write
    int 0x80        ; Llamada al sistema
    pop ecx         ; Restauramos el contador
    loop .loop      ; Decrementa ECX y salta si no es 0

    mov eax, 1      ; syscall: sys_exit
    xor ebx, ebx    ; Código de salida 0
    int 0x80        ; Llamada al sistema`;
    const codeEE4= `nasm -f elf32 ciclo.asm -o ciclo.o`;
    const codeEEN4= `ld -m elf_i386 -s -o ciclo ciclo.o`;
    const codeEEJ4= `./ciclo                     `;

      const [copiedStates, setCopiedStates] = useState({});
            const copyToClipBoard = (code, codeId) => {
              navigator.clipboard.writeText(code);
              setCopiedStates((prev) => ({ ...prev, [codeId]: true }));
              setTimeout(() => {
                setCopiedStates((prev) => ({ ...prev, [codeId]: false }));
              }, 1500);
            };
    

  return (
    <div className='div-principal'>
      <div className='div-title'>Ejemplo 4 - Ciclo</div>
      <p className='p-c'><strong>Propósito:</strong> Imprime en pantalla el mensaje “Hola” seguido de un salto de linea en una iteración de
10 veces terminando la ejecución de manera ordenada.
 </p>
                        <div className='div-code'>
                          <div className='div-code-title'>
                            <p className='p-title-example'>Ejemplo Ciclo</p>
                            <button onClick={() => copyToClipBoard(codeE4, 'codeE4')} className='button-copy-code-install'>
                              {copiedStates['codeE4'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeE4'] ? 'Copiado' : 'Copiar'}
                            </button>
                          </div>
                          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                            padding: '20px',
                            border: '10px'
                          }}
                          >
                            {codeE4}
                          </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Ensambaje</p>
                        <div className='div-code'>
                          <div className='div-code-title'>
                            <p className='p-title-example'>ciclo.asm</p>
                            <button onClick={() => copyToClipBoard(codeEE4, 'codeEE4')} className='button-copy-code-install'>
                              {copiedStates['codeEE4'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEE4'] ? 'Copiado' : 'Copiar'}
                            </button>
                          </div>
                          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                            padding: '20px',
                            border: '10px'
                          }}
                          >
                            {codeEE4}
                          </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Enlazado</p>
                        <div className='div-code'>
                          <div className='div-code-title'>
                            <p className='p-title-example'>ciclo.asm</p>
                            <button onClick={() => copyToClipBoard(codeEEN4, 'codeEEN4')} className='button-copy-code-install'>
                              {copiedStates['codeEEN4'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEN4'] ? 'Copiado' : 'Copiar'}
                            </button>
                          </div>
                          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                            padding: '20px',
                            border: '10px'
                          }}
                          >
                            {codeEEN4}
                          </SyntaxHighlighter>
                        </div>
                        <p className='p-c-subtitle'>Enjecución</p>
                        <div className='div-code'>
                          <div className='div-code-title'>
                            <p className='p-title-example'>ciclo.asm</p>
                            <button onClick={() => copyToClipBoard(codeEEJ4, 'codeEEJ4')} className='button-copy-code-install'>
                              {copiedStates['codeEEJ4'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                              {copiedStates['codeEEJ4'] ? 'Copiado' : 'Copiar'}
                            </button>
                          </div>
                          <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                            padding: '20px',
                            border: '10px'
                          }}
                          >
                            {codeEEJ4}
                          </SyntaxHighlighter>
                        </div>
    </div>
  )
}

export default Ejemplo4
