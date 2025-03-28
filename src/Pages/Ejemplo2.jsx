import React from 'react'
import '../Styles/Ejemplo.css'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import '../Styles/Fundamentos.css'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Ejemplo2 = () => {

  const codeE2 = `section .bss
    buffer resb 10  ; Buffer para almacenar el número ingresado

section .data
    msg db "Ingresa un número: ", 0
    msg_result db "Número ingresado: ", 0
    newline db 10, 0  ; Salto de línea

section .text
    global _start

_start:
    ; Mostrar mensaje
    mov eax, 4          ; syscall write
    mov ebx, 1          ; stdout
    mov ecx, msg        ; Dirección del mensaje
    mov edx, 18         ; Longitud del mensaje
    int 0x80            ; Llamado al sistema

    ; Leer número desde la entrada estándar
    mov eax, 3          ; syscall read
    mov ebx, 0          ; stdin
    mov ecx, buffer     ; Dirección donde guardar el número
    mov edx, 10         ; Longitud máxima
    int 0x80            ; Llamado al sistema

    ; Mostrar mensaje del resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 18
    int 0x80

    ; Mostrar el número ingresado
    mov eax, 4
    mov ebx, 1
    mov ecx, buffer
    mov edx, 10
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Salir del programa
    mov eax, 1          ; syscall exit
    xor ebx, ebx        ; Código de salida 0
    int 0x80`;

    const codeEE2 = `nasm -f elf32 leer.asm -o leer.o`;
    const codeEEN2 = `ld -m elf_i386 leer.o -o leer`;
    const codeEEJ2 = `./leer                    `;

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
      <div className='div-title'>Ejemplo 2 - Leer</div>
      <p className='p-c'><strong>Propósito:</strong> Solicitar al usuario que ingrese un número (o cadena de texto) desde la entrada
estándar (teclado). Mostrar el texto ingresado por el usuario en la salida estándar (pantalla).
Terminar la ejecución de manera ordenada.
 </p>
            <div className='div-code'>
              <div className='div-code-title'>
                <p className='p-title-example'>Ejemplo Leer numero</p>
                <button onClick={() => copyToClipBoard(codeE2, 'codeE2')} className='button-copy-code-install'>
                  {copiedStates['codeE2'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                  {copiedStates['codeE2'] ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                padding: '20px',
                border: '10px'
              }}
              >
                {codeE2}
              </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Ensambaje</p>
            <div className='div-code'>
              <div className='div-code-title'>
                <p className='p-title-example'>leer.asm</p>
                <button onClick={() => copyToClipBoard(codeEE2, 'codeEE2')} className='button-copy-code-install'>
                  {copiedStates['codeEE2'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                  {copiedStates['codeEE2'] ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                padding: '20px',
                border: '10px'
              }}
              >
                {codeEE2}
              </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enlazado</p>
            <div className='div-code'>
              <div className='div-code-title'>
                <p className='p-title-example'>leer.asm</p>
                <button onClick={() => copyToClipBoard(codeEEN2, 'codeEEN2')} className='button-copy-code-install'>
                  {copiedStates['codeEEN2'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                  {copiedStates['codeEEN2'] ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                padding: '20px',
                border: '10px'
              }}
              >
                {codeEEN2}
              </SyntaxHighlighter>
            </div>
            <p className='p-c-subtitle'>Enjecución</p>
            <div className='div-code'>
              <div className='div-code-title'>
                <p className='p-title-example'>leer.asm</p>
                <button onClick={() => copyToClipBoard(codeEEJ2, 'codeEEJ2')} className='button-copy-code-install'>
                  {copiedStates['codeEEJ2'] ? <FaClipboardCheck size={20} /> : <FaRegClipboard size={20} />}
                  {copiedStates['codeEEJ2'] ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <SyntaxHighlighter language='x86asm' style={atomOneDark} customStyle={{
                padding: '20px',
                border: '10px'
              }}
              >
                {codeEEJ2}
              </SyntaxHighlighter>
            </div>
    </div>
  )
}

export default Ejemplo2
